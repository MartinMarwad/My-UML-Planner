
// React
import React from 'react';
import { Droppable } from "react-beautiful-dnd";

// Material UI
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

// Local
import { Semester } from '../../data';


// Droppable Table Component
export default function DroppableTable({ children, semester, semesterIndex, userData, setUserData, ...props }) {

    const getListStyle = isDraggingOver => ({
        // background: isDraggingOver ? "lightblue" : "lightgrey",
        // padding: 8,
        // minHeight: 10,
        // width: 250
    });

    const displayGPA = (GPA) => {
        const accuracy = 10000;
        if (GPA === null) {
            return "N/A";
        } else {
            return Math.round(GPA * accuracy) / accuracy;
        }        
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell/>
                        <TableCell />
                        <TableCell>
                            <Button variant="outlined" size="small" color="primary" sx={{ ml: -1, }}>
                                Number
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" size="small" color="primary" sx={{ ml: -1, }}>
                                Name
                            </Button>
                        </TableCell>
                        <TableCell align="center">
                            <Button variant="outlined" size="small" color="primary">
                                Credits
                            </Button>
                        </TableCell>
                        <TableCell align="center">
                            <Button variant="outlined" size="small" color="primary">
                                Grade
                            </Button>
                        </TableCell>
                        <TableCell/>
                        <TableCell/>

                    </TableRow>
                </TableHead>
                <Droppable key={semesterIndex} droppableId={`${semesterIndex}`}>
                    {(provided, snapshot) => (
                        <TableBody ref={provided.innerRef} sx={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                            { children }
                            {provided.placeholder}
                        </TableBody>
                    )}
                </Droppable>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h6" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20, textDecoration: 'none', }}>
                                Total
                            </Typography>
                        </TableCell>
                        <TableCell/>
                        <TableCell/>
                        <TableCell/>
                        <TableCell align="center">
                            <Tooltip title="Total Credits" placement="top">
                                <Typography variant="h6" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20, textDecoration: 'none', }}>
                                    {semester.getCredits()}
                                </Typography>
                            </Tooltip>
                        </TableCell>
                        <TableCell align="center">
                            <Tooltip title="Term GPA" placement="top">
                                <Typography variant="h6" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20, textDecoration: 'none', }}>
                                    {displayGPA(semester.getGPA())}
                                </Typography>
                            </Tooltip>
                        </TableCell>
                        <TableCell/>
                        <TableCell/>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    );
}