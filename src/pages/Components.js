import { FC } from "react";
import { Box, Divider } from "@mui/material";
import Buttons from "../components-old/samples/Buttons";
import FloatingActionButtons from "../components-old/samples/FABS";
import Cards from "../components-old/samples/Cards";
import Accordions from "../components-old/samples/Accordions";
import Snackbars from "../components-old/samples/Snackbars";
import Switchs from "../components-old/samples/Switchs";


const ComponentPage = () => {
    const boxSX = { mb: 8 };
    return (
        <Box sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

            <Buttons />
            <Box sx={boxSX} />
            <Switchs />
            <Box sx={boxSX} />
            <FloatingActionButtons />
            <Box sx={boxSX} />
            <Cards />
            <Box sx={boxSX} />
            <Accordions />
            <Box sx={boxSX} />
            <Snackbars />

        </Box>
    );
}

export default ComponentPage;