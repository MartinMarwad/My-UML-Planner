
// React
import * as React from 'react';

// Material UI
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Tooltip from '@mui/material/Tooltip';

// Material UI: Icons
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];

export default function SpeedDialTooltipOpen({ handleAddCourse, handleAddSemester }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Backdrop Z-Index: 1000
    const backdropZIndex = 2000;

    return (
        <>
            <Backdrop open={open} sx={{ zIndex: backdropZIndex, }} onClick={() => setOpen(!open)} />
            <SpeedDial
                ariaLabel="Add a semester or course"
                icon={<SpeedDialIcon />}
                // onClose={handleClose}
                // onOpen={handleOpen}
                onClick={() => setOpen(!open)}
                open={open}
                sx={{
                    position: 'fixed',
                    bottom: { md: 50, sm: 20, xs: 20 },
                    right: { md: 50, sm: 20, xs: 20 },
                    zIndex: 10 + backdropZIndex,
                }}
            >

                {/* Add a Course */}
                <SpeedDialAction
                    key="Add a Class"
                    icon={<AddRoundedIcon />}
                    tooltipTitle="Class"
                    tooltipOpen
                    onClick={handleAddCourse}
                />

                {/* Add a Semester */}
                <SpeedDialAction
                    key="Add a Semester"
                    icon={<AddRoundedIcon />}
                    tooltipTitle="Semester"
                    tooltipOpen
                    onClick={handleAddSemester}
                />

            </SpeedDial>
        </>
    );
}