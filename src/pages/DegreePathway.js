// Created by Martin Marwad.

// React
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useLocation } from 'react-router-dom';
import { useTitle, useLocalStorage } from 'react-use';

// Material UI
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// Material UI: Icons
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddBoxOutlined } from "@mui/icons-material";

// Local Components
import Accordion from "../components/Accordion/Accordion";
import DroppableTable from "../components/Table/Table";
import DraggableTableRow from '../components/Table/TableRow';
import SpeedDial from '../components/Button/FAB';
import SemesterDialog from '../components/Dialog/SemesterDialog';
import { CourseModal } from '../components/Dialog/Modals';
import { ThemeModeContext, ThemeSchemeContext } from '../theme';


// import DATABASE from "../../database.json";


// Degree Pathway Page
export default function DegreePathway({ data, ...props }) {
    
    // User Data: Stored in Local Storage
    // const [userData, setUserData, removeUserData] = useLocalStorage('user-data');
    const [userData, setUserData] = useState(data);
    const [profile, setProfile] = useState('default');

    // Get query params
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const query_theme = query.get('theme');

    // Theme Scheme and Mode
    const { toggleThemeMode, resetThemeMode } = React.useContext(ThemeModeContext);
    const { generateThemeScheme, resetThemeScheme } = React.useContext(ThemeSchemeContext);

    // Tab Values
    const [tabValue, setTabValue] = React.useState('1');
    const handleTabChange = (event, newValue) => { setTabValue(newValue); };

    // Semester Dialog
    const [openSemesterDialog, setOpenSemesterDialog] = React.useState(false);
    const handleOpenSemesterDialog = () => { setOpenSemesterDialog(true); };
    const handleCloseSemesterDialog = () => { setOpenSemesterDialog(false); };
    const handleSubmitSemesterDialog = () => {
        // Add a new semester to the state
        // setState([...state, []]);
        // Close the dialog
        setOpenSemesterDialog(false);
    };

    // Course Modal
    const [openCourseModal, setOpenCourseModal] = React.useState(false);
    const handleOpenCourseModal = () => { setOpenCourseModal(true); };
    const handleCloseCourseModal = () => { setOpenCourseModal(false); };


    // Handle Drag and Drop Table Rows
    const onDragEnd = ({ source, destination }) => {

        // Dropped outside the list
        if (!destination) { return;}

        // Get the starting and ending semester and course indexes
        const startingSemesterIndex = +source.droppableId;
        const startingCourseIndex = +source.index;
        const endingSemesterIndex = +destination.droppableId;
        const endingCourseIndex = +destination.index;
        
        // Get the course
        const course = userData.profiles[profile].semesters[startingSemesterIndex].classes[startingCourseIndex];

        // Check if the course being moved violates the prerequisites or corequisites
        console.log(userData.profiles[profile].semesters[endingSemesterIndex].checkRequirements(course));

        // Remove the course from the starting semester
        userData.profiles[profile].semesters[startingSemesterIndex].classes.splice(startingCourseIndex, 1);

        // Add the course to the ending semester
        userData.profiles[profile].semesters[endingSemesterIndex].classes.splice(endingCourseIndex, 0, course);

        // Update the state
        setUserData({...userData});
    }

    // After Component Render
    React.useEffect(() => {
        
        // If query_theme is not empty, then set the theme
        if (query_theme) {
            generateThemeScheme(query_theme);
        }

    });

    return (
        <Box sx={{ width: '100%' }}>
            <TabContext value={tabValue}>

                {/* Tab Header */}
                <Box>
                    <TabList onChange={handleTabChange} aria-label="lab API tabs example" centered>
                        <Tab label="TABLE" value="1" />
                        <Tab label="CHART" value="2" />
                        {/* <Tab label="" value="3" /> */}
                    </TabList>
                </Box>

                {/* TABLES */}
                <TabPanel value="1">
                    <Grid
                        container
                        // spacing={5}
                        rowSpacing={5}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
    
                        <DragDropContext onDragEnd={onDragEnd}>
                            {userData.profiles[profile].semesters.map((semester, semesterIndex) => (
                                <Grid item xs={11} sm={10} md={9} key={semesterIndex} >
                                    <Accordion title={`${semester.term} ${semester.year}`}>
                                        <DroppableTable 
                                            semester={semester} 
                                            semesterIndex={semesterIndex} 
                                            userData={userData} 
                                            setUserData={setUserData}
                                            profile={profile}
                                        >
                                            {semester.classes.map((course, courseIndex) => (
                                                <DraggableTableRow
                                                    key={courseIndex}
                                                    course={course}
                                                    courseIndex={courseIndex}
                                                    semester={semester}
                                                    semesterIndex={semesterIndex}
                                                    userData={userData}
                                                    setUserData={setUserData}
                                                    profile={profile}
                                                />
                                            ))}
                                        </DroppableTable>
                                    </Accordion>
                                </Grid>
                            ))}
                        </DragDropContext>

                    </Grid>
                    <SpeedDial 
                        handleAddCourse={handleOpenCourseModal} 
                        handleAddSemester={handleOpenSemesterDialog}
                    />
                </TabPanel>

                {/* Charts */}
                <TabPanel value="2">
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center", }}>
                        Chart Visualizations Coming Soon!
                    </Typography>
                </TabPanel>

                {/* Something else here */}
                {/* <TabPanel value="3">Item Three</TabPanel> */}

            </TabContext>

            {/* Modals */}
            <SemesterDialog
                action="add"
                open={openSemesterDialog} 
                handleClose={handleCloseSemesterDialog} 
                // handleSubmit={handleSubmitSemesterDialog} 
            />
            {/* <CourseModal open={openCourseModal} handleClose={handleCloseCourseModal} /> */}
        </Box>
    );
}
