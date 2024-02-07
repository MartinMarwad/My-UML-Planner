// Created by Martin Marwad.

// React
import * as React from 'react';
import { FC, useContext, useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';

// Material UI
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Link from '@mui/material/Link';
import Slide from '@mui/material/Slide';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { lighten, darken, alpha } from '@mui/material';
import { useScrollTrigger, useTheme, } from '@mui/material';

// Material UI: Icons
import MenuIcon from '@mui/icons-material/MenuTwoTone';
import NotificationIcon from '@mui/icons-material/NotificationsOutlined';
import ColorIcon from '@mui/icons-material/ColorLensOutlined';
import DarkIcon from '@mui/icons-material/DarkModeOutlined';
import LightIcon from '@mui/icons-material/LightModeOutlined';
import MailIcon from '@mui/icons-material/MailOutline';
import RestartIcon from '@mui/icons-material/RefreshOutlined';
import ArrowIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';

// Local Theme
import { ThemeModeContext, ThemeSchemeContext } from '../../theme';


// Header AppBar Component
const Header = ({ onDrawerToggle, window }) => {
    const { palette } = useTheme();
    const { toggleThemeMode, resetThemeMode } = useContext(ThemeModeContext);
    const changeThemeMode = () => toggleThemeMode();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Coming Soon!</MenuItem>
            {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
        </Menu>
    );

    return (
        <AppBar
            color={trigger ? 'primary' : 'default'}
            position="sticky"
            elevation={trigger ? 2 : 0}
            sx={{ 
                zIndex: (theme) => theme.zIndex.drawer + 1,
                background: 
                    trigger ? (
                        palette.mode == 'light' ? 
                            alpha(lighten(palette.primary.main, 0.85), 0.7) : 
                            alpha(darken(palette.primary.main, 0.8), 0.7)
                    ) : 'default',
                backdropFilter: 'blur(12px)',
             }}
        >
            <Toolbar>
                <Grid container spacing={1} alignItems="center">
                    <Grid item sx={{ display: { md: 'block', sm: 'block' } }}>
                        <IconButton color="secondary" edge="start" onClick={onDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    {/* Logo using "./logo.png" */}
                    <Grid item sx={{ display: 'flex', alignItems: 'baseline' }}>
                        <IconButton sx={{ p: 1, borderRadius: 5, }}>
                            <Avatar src="./logo.png" alt="Logo" sx={{ ml: 1, mr: 1, }}/>
                            <Typography
                                variant="h6"
                                sx={{ 
                                    fontWeight: 500, 
                                    letterSpacing: 0.5, 
                                    fontSize: 20, 
                                    textDecoration: 'none',  
                                    display: { md: 'block', sm: 'none', xs: 'none' },
                                }}
                            >
                                My UML Planner
                            </Typography>
                        </IconButton>
                    </Grid>
                    {/* <Grid item sx={{ display: 'flex', alignItems: 'baseline' }}>
                        <Button variant="text" color="secondary" component={RouterLink} to="/">
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20, textDecoration: 'none', }}
                            >
                                My UML Planner
                            </Typography>
                        </Button>
                    </Grid> */}
                    <Grid item xs></Grid>
                    <Grid item>
                        <Tooltip title="Switch Theme Mode">
                            <IconButton
                                size="large"
                                color="secondary"
                                onClick={changeThemeMode}
                            >
                                {palette.mode == 'light' ? <DarkIcon /> : <LightIcon />}
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Account">
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="secondary"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Toolbar>
            {renderMenu}
        </AppBar>
    );
};

export default Header;
