// Created by Martin Marwad.

// React
import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

// Material UI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useMediaQuery, useTheme, styled } from '@mui/material';

// Local Components
import Sidebar from './Sidebar';
import Header from './Appbar';


const drawerWidth = 256;


// Root Layout
const RootLayout = () => {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ flex: 1, display: 'flex', minHeight: 'cal(100vh-3px)', flexDirection: 'column'  }}>

                <Header onDrawerToggle={handleDrawerToggle} />
                <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
                    {isSmUp ? null : (
                        <Sidebar
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            onOpen={handleDrawerToggle}
                        />
                    )}
                    <Sidebar
                        PaperProps={{ style: { width: drawerWidth } }}
                        sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        onOpen={handleDrawerToggle}
                    />
                </Box>
                <Box sx={{ pl: isSmUp ? `${drawerWidth}px` : 0, py: 4, flex: 1 }}>
                    <Outlet />
                </Box>
                {/* maxWidth="xl" sx={{ ml: isSmUp ? `${drawerWidth}px` : 0, py: 4, flex: 1 }} */}
                {/* <Container sx={{ ml: isSmUp ? `${drawerWidth}px` : 0, }}>
                    <Outlet />
                </Container> */}
        </Box>
    );


    return (
        <Box sx={{ display: 'flex', minHeight: 'cal(100vh-3px)' }}>

            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header onDrawerToggle={handleDrawerToggle} />
                {/* <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
                    {isSmUp ? null : (
                        <Sidebar
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        />
                    )}
                    <Sidebar
                        PaperProps={{ style: { width: drawerWidth } }}
                        sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}
                    />
                </Box> */}
                <Container maxWidth="xl" sx={{ ml: isSmUp ? `${drawerWidth}px` : 0, py: 4, flex: 1 }}>
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
};

export default RootLayout;
