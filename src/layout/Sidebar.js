// Created by Martin Marwad.

// React
import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// Material UI: Icons
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import DnsRoundedIcon from '@mui/icons-material/DnsOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import PublicIcon from '@mui/icons-material/PublicOutlined';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernetOutlined';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import ColorIcon from '@mui/icons-material/ColorLensOutlined';


// Navigation Drawer Sidebar Component
const NavDrawer = (props) => {
    const { ...others } = props;

    const categories = [
        {
            id: 'Build',
            children: [
                {
                    id: 'Authentication',
                    icon: <PeopleIcon />,
                    active: true,
                },
                { id: 'Database', icon: <DnsRoundedIcon /> },
                { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
                { id: 'Hosting', icon: <PublicIcon /> },
                { id: 'Functions', icon: <SettingsEthernetIcon /> },
                {
                    id: 'Machine learning',
                    icon: <SettingsInputComponentIcon />,
                },
            ],
        },
    ];

    const location = useLocation();
    const [selectedIndex, setSelectedIndex] = useState(
        location.pathname.replace('/', '')
    );

    useEffect(() => {
        setSelectedIndex(location.pathname.replace('/', ''));
    }, [location.pathname]);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <SwipeableDrawer variant="permanent" {...others}>
            {/* <AppBar color="default" elevation={0} position="sticky">
                <Toolbar></Toolbar>
            </AppBar> */}
            <List sx={{mt: 10,}}>
                <Box>
                    {/* <ListItem sx={{ py: 2, px: 3 }}>
                        <ListItemText sx={{ fontWeight: 'bold' }}>
                            <Typography
                                color="inherit"
                                sx={{ ml: 1, fontSize: 14, fontWeight: 500 }}
                            >
                                MATERIAL DESIGN 3
                            </Typography>
                        </ListItemText>
                    </ListItem> */}

                    {/* My Degree Pathway */}
                    <ListItem>
                        <ListItemButton
                            component={Link}
                            to="/my-degree-pathway"
                            selected={selectedIndex == 'my-degree-pathway'}
                            onClick={(event) => handleListItemClick(event, 'my-degree-pathway')}
                        >
                            <ListItemIcon>
                                <DnsRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>My Degree Pathway</ListItemText>
                        </ListItemButton>
                    </ListItem>

                    {/* My Classes */}
                    <ListItem>
                        <ListItemButton
                            component={Link}
                            to="/my-classes"
                            selected={selectedIndex == 'my-classes'}
                            onClick={(event) => handleListItemClick(event, 'my-classes')}
                        >
                            <ListItemIcon>
                                <DnsRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>My Classes</ListItemText>
                        </ListItemButton>
                    </ListItem>

                    {/* <ListItem>
                        <ListItemButton
                            component={Link}
                            to="/components"
                            selected={selectedIndex == 'components'}
                            onClick={(event) => handleListItemClick(event, 'components')}
                        >
                            <ListItemIcon>
                                <DnsRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>Components</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton
                            component={Link}
                            to="/theme"
                            selected={selectedIndex == 'theme'}
                            onClick={(event) => handleListItemClick(event, 'theme')}
                        >
                            <ListItemIcon>
                                <ColorIcon />
                            </ListItemIcon>
                            <ListItemText>Theme</ListItemText>
                        </ListItemButton>
                    </ListItem> */}
                </Box>

                {/* {categories.map(({ id, children }) => (
                    <Box key={id}>
                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ fontWeight: 'bold' }}>
                                <Typography
                                    color="inherit"
                                    sx={{ ml: 1, fontSize: 15, fontWeight: 500 }}
                                >
                                    {id}
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, active }) => (
                            <ListItem key={childId}>
                                <ListItemButton
                                    selected={selectedIndex == childId}
                                    onClick={(event) => handleListItemClick(event, childId)}
                                >
                                    <ListItemIcon>{icon}</ListItemIcon>
                                    <ListItemText>{childId}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Box>
                ))} */}

            </List>
        </SwipeableDrawer>
    );
};

export default NavDrawer;
