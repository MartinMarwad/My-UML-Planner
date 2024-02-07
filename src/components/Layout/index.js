// Created by Martin Marwad.

// React
import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

// Material UI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import Slide from '@mui/material/Slide';
import { useMediaQuery, useTheme, styled } from '@mui/material';

// Local Components
import Sidebar from './Sidebar';
import Header from './Appbar';


const drawerWidth = 256;


// Root Layout
const RootLayout = () => {

    // Variables
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [open, setOpen] = useState(true);

    // Functions
    const handleDrawerToggle = () => {
        if (isSmUp) setOpen(!open);
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box>

            {/* Appbar */}
            <Header onDrawerToggle={handleDrawerToggle} />

            {/* Sidebar */}
            <Box component="nav" sx={{ width: { md: drawerWidth }, }}>
                {isSmUp
                    ? (
                        // 
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Sidebar
                                PaperProps={{ style: { width: drawerWidth } }}
                                sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}
                                open={open}
                                onClose={() => setOpen(!open)}
                                onOpen={() => setOpen(!open)}
                            />
                        </Collapse>
                    )
                    : (
                        <Sidebar
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            onOpen={handleDrawerToggle}
                        />
                    )
                }
            </Box>

            {/* Main Content */}
            <Box sx={{ pl: isSmUp ? ( open ? `${drawerWidth}px` : 0 ) : 0, py: 4, flex: 1 }}>
                <Outlet />
            </Box>
            
        </Box>
    );
};

export default RootLayout;
