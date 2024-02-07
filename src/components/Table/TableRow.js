
// React
import React from 'react';
import { Draggable } from "react-beautiful-dnd";

// Material UI
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Material UI: Icons
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';


// Table Row Component
export default function DraggableTableRow({ course, courseIndex, semester, semesterIndex, userData, setUserData, profile, ...props }) {

    // React Hooks
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

    // React: Handle Changes
    // const handleGradeChange = (event) => {setGrade(event.target.value);};

    
    // Table Row Style
    const tableRowStyle = (isDragging, draggableStyle) => ({
            
        // Change background color if dragging
        backgroundColor: checked ? '' : isDragging ? 'text.disabled' : '',

        // Change the background color if mouse hovers
        '&:hover': {
            backgroundColor: 'action.hover',
            // opacity: [0.9, 0.8, 0.7],
        },

        // Apply a border and style if dragging
        border: isDragging ? "1px solid #000" : "",
        borderRadius: isDragging ? "4px" : "",
    
        // Styles we need to apply on draggables
        ...draggableStyle,
    });
    
    return (
        <Draggable key={course.id} draggableId={course.id} index={courseIndex} >
            {(provided, snapshot) => (
                <>
                    <TableRow 
                        key={course.id} 
                        ref={provided.innerRef} 
                        sx={tableRowStyle(snapshot.isDragging, provided.draggableProps.style)}
                        {...provided.draggableProps} {...provided.dragHandleProps}
                    >

                        {/* Checkbox */}
                        <TableCell padding="checkbox" align='center'>
                            <Checkbox
                                color="primary"
                                // indeterminate={numSelected > 0 && numSelected < rowCount}
                                // checked={rowCount > 0 && numSelected === rowCount}
                                onChange={() => {setChecked(!checked)}}
                                inputProps={{
                                    'aria-label': 'select all classes',
                                }}
                            />
                        </TableCell>

                        {/* Expand Panel Button */}
                        <TableCell align='center' >
                            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                        </TableCell>

                        {/* Course Number */}
                        <TableCell component="th" scope="row" >
                            {course.number}
                        </TableCell>

                        {/* Course Name */}
                        <TableCell component="th" scope="row" sx={{width: "50%"}}>
                            {course.name}
                        </TableCell>

                        {/* Course Credits */}
                        <TableCell component="th" scope="row" align="center" >
                            {course.credits}
                        </TableCell>

                        {/* Course Grade */}
                        <TableCell align="center">
                            <FormControl sx={{width: "100%"}}>
                                <Select
                                    variant="standard"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={course.grade}
                                    onChange={(event) => {
                                        // Update the grade
                                        userData.profiles[profile].semesters[semesterIndex].classes[courseIndex].grade = event.target.value;
                                        setUserData({...userData});
                                    }}
                                    sx={{textAlign: 'center'}}
                                    MenuProps={{
                                        anchorOrigin: {
                                            vertical: "top",
                                            horizontal: "left"
                                        },
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "left"
                                        },
                                    }}
                                >
                                    <MenuItem value="A">A</MenuItem>
                                    <MenuItem value="A-">A-</MenuItem>
                                    <MenuItem value="B+">B+</MenuItem>
                                    <MenuItem value="B">B</MenuItem>
                                    <MenuItem value="B-">B-</MenuItem>
                                    <MenuItem value="C+">C+</MenuItem>
                                    <MenuItem value="C">C</MenuItem>
                                    <MenuItem value="C-">C-</MenuItem>
                                    <MenuItem value="D+">D+</MenuItem>
                                    <MenuItem value="D">D</MenuItem>
                                    <MenuItem value="D-">D-</MenuItem>
                                    <MenuItem value="F">F</MenuItem>
                                    <MenuItem value="W">W</MenuItem>
                                    <MenuItem value="T">T</MenuItem>
                                </Select>
                            </FormControl>
                        </TableCell>

                        {/* More Options Button */}
                        <TableCell align="center">
                            <IconButton aria-label="more-options" >
                                <MoreVertRoundedIcon />
                            </IconButton>
                        </TableCell>

                        {/* Delete Button */}
                        <TableCell align="center" >
                            <IconButton color="error" aria-label="delete" onClick={() => {
                                // Remove the course from the semester
                                userData.profiles[profile].semesters[semesterIndex].classes.splice(courseIndex, 1);

                                // Update the user data
                                setUserData({...userData});
                            }}>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <Box sx={{ margin: 1 }}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        {course['Course Name']}
                                    </Typography>
                                </Box>
                            </Collapse>
                        </TableCell>
                    </TableRow>
                </>
                
            )}
        </Draggable>
    );
}