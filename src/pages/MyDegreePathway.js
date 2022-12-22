// Created by Martin Marwad.

// React
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import pick from '@cahil/utils/accessors/pick';

// Material UI
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
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

import DATABASE from "../database.json";

console.log(DATABASE);

// 
const COMPUTER_SCIENCE = [

    // FRESHMAN YEAR: Fall
    [
        {"id": "ENGL.1010", "Course Number": "ENGL.1010", "Course Name": "College Writing I", "Credits": "3"},
        {"id": "COMP.1010", "Course Number": "COMP.1010", "Course Name": "Computing I", "Credits": "3"},
        {"id": "COMP.1030L", "Course Number": "COMP.1030L", "Course Name": "Computing I Lab", "Credits": "1"},
        {"id": "MATH.1310", "Course Number": "MATH.1310", "Course Name": "Calculus I", "Credits": "4"},
        {"id": "XXXX.XXXX", "Course Number": "XXXX.XXXX", "Course Name": "Social Sciences Perspective", "Credits": "3"},
    ],

    // FRESHMAN YEAR: Spring
    [
        {"id": "ENGL.1020", "Course Number": "ENGL.1020", "Course Name": "College Writing II", "Credits": "3"},
        {"id": "COMP.1020", "Course Number": "COMP.1020", "Course Name": "Computing II", "Credits": "3"},
        {"id": "COMP.1040L", "Course Number": "COMP.1040L", "Course Name": "Computing II Lab", "Credits": "1"},
        {"id": "MATH.1320", "Course Number": "MATH.1320", "Course Name": "Calculus II", "Credits": "4"},
        {"id": "XXXX.XXXgsegX", "Course Number": "XXXX.XXXX", "Course Name": "Humanities Perspective", "Credits": "3"},
    ],

    // SOPHOMORE YEAR: Fall
    [
        {"id": "COMP.2010", "Course Number": "COMP.2010", "Course Name": "Computing III", "Credits": "3"},
        {"id": "COMP.2010R", "Course Number": "COMP.2010R", "Course Name": "Computing III Lab", "Credits": "1"},
        {"id": "COMP.2030", "Course Number": "COMP.2030", "Course Name": "Assembly Language Programming", "Credits": "3"},
        {"id": "COMP.2030R", "Course Number": "COMP.2030R", "Course Name": "Assembly Language Programming Lab", "Credits": "1"},
        {"id": "MATH.2190", "Course Number": "MATH.2190", "Course Name": "Discrete Structures I", "Credits": "3"},
        {"id": "EECE.2650", "Course Number": "EECE.2650", "Course Name": "Logic Design", "Credits": "3"},
    ],

    // SOPHOMORE YEAR: Spring
    [
        {"id": "ENGL.2200", "Course Number": "ENGL.2200", "Course Name": "Oral & Written Communication for Computer Science", "Credits": "3"},
        {"id": "COMP.2040", "Course Number": "COMP.2040", "Course Name": "Computing IV ", "Credits": "3"},
        {"id": "MATH.3220", "Course Number": "MATH.3220", "Course Name": "Discrete Structures II", "Credits": "3"},
        {"id": "MATH.3860", "Course Number": "MATH.3860", "Course Name": "Probability & Statistics I", "Credits": "3"},
        {"id": "XXXX.sfs", "Course Number": "XXXX.XXXX", "Course Name": "Natural Science with Lab", "Credits": "4"},
    ],

    // JUNIOR YEAR: Fall
    [
        {"id": "COMP.3040", "Course Number": "COMP.3040", "Course Name": "Foundations of Computer Science", "Credits": "3"},
        {"id": "COMP.3050", "Course Number": "COMP.3050", "Course Name": "Computer Architecture", "Credits": "1"},
        {"id": "HHSEHDS", "Course Number": "XXXX.XXXX", "Course Name": "Natural Science with Lab", "Credits": "4"},
        {"id": "DSSDHASD", "Course Number": "XXXX.XXXX", "Course Name": "Arts and Humanities Perspective", "Credits": "3"},
        {"id": "ASDGASDD", "Course Number": "XXXX.XXXX", "Course Name": "Free Elective", "Credits": "3"},
    ],

    // JUNIOR YEAR: Spring
    [
        {"id": "COMP.3010", "Course Number": "COMP.3010", "Course Name": "Organization of Programming Languages", "Credits": "3"},
        {"id": "COMP.3080", "Course Number": "COMP.3080", "Course Name": "Operating Systems", "Credits": "3"},
        {"id": "gjajar", "Course Number": "XXXX.XXXX", "Course Name": "Natural Science with Lab", "Credits": "4"},
        {"id": "djaras", "Course Number": "XXXX.XXXX", "Course Name": "Social Sciences Perspective", "Credits": "3"},
        {"id": "hajaejs", "Course Number": "XXXX.XXXX", "Course Name": "Free Elective", "Credits": "3"},
    ],

    // SENIOR YEAR: Fall
    [
        {"id": "COMP.4040", "Course Number": "COMP.4040", "Course Name": "Analysis of Algorithms", "Credits": "3"},
        {"id": "wefrw", "Course Number": "COMP.xxxx", "Course Name": "Project Course I", "Credits": "3"},
        {"id": "hahsh", "Course Number": "COMP.xxxx", "Course Name": "Computer Science Elective", "Credits": "3"},
        {"id": "ahsah", "Course Number": "XXXX.XXXX", "Course Name": "Technical Elective", "Credits": "3"},
        {"id": "wewew", "Course Number": "XXXX.XXXX", "Course Name": "Social Sciences Perspective", "Credits": "3"},
    ],

    // SENIOR YEAR: Spring
    [
        {"id": "COMP.xxxx-1", "Course Number": "COMP.xxxx", "Course Name": "Project Course II", "Credits": "3"},
        {"id": "COMP.xxxx-2", "Course Number": "COMP.xxxx", "Course Name": "Computer Science Elective", "Credits": "3"},
        {"id": "XXXX.XXXXwevwe", "Course Number": "XXXX.XXXX", "Course Name": "Technical Elective", "Credits": "3"},
        {"id": "werwerwe", "Course Number": "XXXX.XXXX", "Course Name": "Free Elective", "Credits": "3"},
        {"id": "werwerw", "Course Number": "XXXX.XXXX", "Course Name": "Free Elective", "Credits": "3"},
    ],

]


// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k + offset}-${new Date().getTime()}`,
        content: `item ${k + offset}`
    }));

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    // userSelect: "none",
    // padding: grid * 2,
    // margin: `0 0 ${grid}px 0`,

    // // change background colour if dragging
    background: isDragging ? "lightgreen" : "",

    // styles we need to apply on draggables
    ...draggableStyle,
});
const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    minHeight: 10,
    // width: 250
});


// My Classes Page
export default function MyClasses() {
    // const [state, setState] = useState([getItems(10), getItems(5, 10)]);

    const [state, setState] = useState(COMPUTER_SCIENCE);

    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = +source.droppableId;
        const dInd = +destination.droppableId;

        if (sInd === dInd) {
            const items = reorder(state[sInd], source.index, destination.index);
            const newState = [...state];
            newState[sInd] = items;
            setState(newState);
        } else {
            const result = move(state[sInd], state[dInd], source, destination);
            const newState = [...state];
            newState[sInd] = result[sInd];
            newState[dInd] = result[dInd];

            setState(newState.filter(group => group.length));
        }
    }


    // Text Feild values
    const [CourseNumber, setCourseNumber] = React.useState('');
    const [CourseName, setCourseName] = React.useState('');
    const [CourseCredits, setCourseCredits] = React.useState('');

    return (
        <Grid
            container
            // spacing={5}
            rowSpacing={5}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={8}>
                <Box component="form" noValidate sx={{display:"flex", alignItems:"center"}}>
                    <TextField
                        id="course-number"
                        label="Course Number"
                        variant="outlined"
                        value={CourseNumber}
                        onChange={(event) => {setCourseNumber(event.target.value);}}
                    />
                    <TextField 
                        id="class-name" 
                        label="Class Name" 
                        variant="outlined"
                        value={CourseName}
                        onChange={(event) => {setCourseName(event.target.value);}}
                    />
                    <TextField
                        id="course-credits"
                        label="Course Credits"
                        variant="outlined"
                        value={CourseCredits}
                        onChange={(event) => {setCourseCredits(event.target.value);}}
                    />
                    <Button 
                        variant="outlined" 
                        sx={{maxWidth: "150px",}}
                        onClick={() => {
                            setState([...state, [{"id": "TESTING", "Course Number": CourseNumber, "Course Name": CourseName, "Credits": CourseCredits}] ]);
                        }}
                    >
                        Add Class
                    </Button>

                    {/* <button
                        type="button"
                        onClick={() => {
                            setState([...state, []]);
                        }}
                    >
                        Add new group
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setState([...state, getItems(1)]);
                        }}
                    >
                        Add new item
                    </button> */}
                </Box>
            </Grid>


            <DragDropContext onDragEnd={onDragEnd}>
                {state.map((el, ind) => (
                    <Grid item xs={11} sm={10} md={8}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Course Number</TableCell>
                                        <TableCell>Course Name</TableCell>
                                        <TableCell>Credits</TableCell>
                                    </TableRow>
                                </TableHead>
                                <Droppable key={ind} droppableId={`${ind}`}>
                                    {(provided, snapshot) => (
                                        <TableBody
                                            ref={provided.innerRef}
                                            style={getListStyle(snapshot.isDraggingOver)}
                                            {...provided.droppableProps}
                                        >
                                            {el.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <TableRow
                                                            key={item.id}
                                                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style
                                                            )}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {item['Course Number']}
                                                            </TableCell>
                                                            <TableCell component="th" scope="row">
                                                                {item['Course Name']}
                                                            </TableCell>
                                                            <TableCell component="th" scope="row">
                                                                {item['Credits']}
                                                            </TableCell>
                                                            <TableCell>
                                                                <IconButton aria-label="delete" onClick={() => {
                                                                    const newState = [...state];
                                                                    newState[ind].splice(index, 1);
                                                                    setState(newState.filter(group => group.length)
                                                                    );
                                                                }}>
                                                                    <DeleteIcon />
                                                                </IconButton>
                                                            </TableCell>
                                                        </TableRow>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </TableBody>
                                    )}
                                </Droppable>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Total</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>
                                            {el.reduce((acc, item) => acc + +item['Credits'], 0)}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </Grid>
                ))}
            </DragDropContext>

            {/* <Grid item xs={8}>
                <Paper sx={{flex: 1, margin: 2, minWidth: 350}}>
                    <pre>
                        {JSON.stringify(state, null, 2)}
                    </pre>
                </Paper>
            </Grid> */}
        </Grid>
    );
}
