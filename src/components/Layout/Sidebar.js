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
import CollectionsBookmarkRoundedIcon from '@mui/icons-material/CollectionsBookmarkRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';


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

                    {/* Logo Text (sm screens) */}
                    <ListItem sx={{ display: { md: 'none', sm: 'block', xs: 'block' } }}>
                        <ListItemText sx={{ fontWeight: 'bold' }}>
                            <Typography color="secondary" >
                                MY UML PLANNER
                            </Typography>
                        </ListItemText>
                    </ListItem>

                    {/* Degree Pathway */}
                    <ListItem>
                        <ListItemButton
                            component={Link}
                            to="/"
                            selected={selectedIndex == ''}
                            onClick={(event) => handleListItemClick(event, '')}
                            color="secondary"
                        >
                            <ListItemIcon>
                                <CollectionsBookmarkRoundedIcon color="secondary"/>
                            </ListItemIcon>
                            <ListItemText color="secondary">Degree Pathway</ListItemText>
                        </ListItemButton>
                    </ListItem>

                    {/* Settings */}
                    <ListItem>
                        <ListItemButton
                            component={Link}
                            to="/settings"
                            selected={selectedIndex == 'settings'}
                            onClick={(event) => handleListItemClick(event, 'settings')}
                        >
                            <ListItemIcon>
                                <SettingsRoundedIcon color="secondary"/>
                            </ListItemIcon>
                            <ListItemText color="secondary">Settings</ListItemText>
                        </ListItemButton>
                    </ListItem>

                </Box>
            </List>
        </SwipeableDrawer>
    );
};

export default NavDrawer;
