// Created by Martin Marwad.

// React
import * as React from 'react';
import { FC, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
import { ThemeModeContext, ThemeSchemeContext } from '../theme';


// Header AppBar Component
const Header = ({ onDrawerToggle, window }) => {
    const { palette } = useTheme();
    const location = useLocation();

    const { toggleThemeMode, resetThemeMode } = useContext(ThemeModeContext);
    const { generateThemeScheme, resetThemeScheme } =
        useContext(ThemeSchemeContext);

    const changeThemeMode = () => toggleThemeMode();

    const changeThemeScheme = async () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        generateThemeScheme(randomColor);
    };

    const reset = () => {
        resetThemeMode();
        resetThemeScheme();

        //generateThemeScheme("#6750A4");
        //generateThemeScheme("#293064");
        //generateThemeScheme("#3a691e");
    };

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
                // background: 'rgba(255,255,255,0.5)',
                // backdropFilter: 'blur(50px)',
             }}
        >
            <Toolbar>
                <Grid container spacing={1} alignItems="center">
                    <Grid item sx={{ display: { md: 'block', sm: 'block' } }}>
                        <IconButton color="inherit" edge="start" onClick={onDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item sx={{ display: 'flex', alignItems: 'baseline' }}>
                        <Button variant="text" color="inherit" href="/#/home">
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20, textDecoration: 'none', }}
                            >
                                My UML Planner
                            </Typography>
                        </Button>
                        {/* <Fade in={trigger} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
                            <Typography color="inherit" sx={{ ml: 1, fontSize: 16, fontWeight: 500 }}>
                                <ArrowIcon sx={{ fontSize: 12 }} color="inherit" />{' '}{location.pathname.replace('/', '')}
                            </Typography>
                        </Fade> */}
                    </Grid>
                    <Grid item xs></Grid>
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
                        <Tooltip title="Change Color">
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={changeThemeScheme}
                            >
                                <ColorIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Switch Theme">
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={changeThemeMode}
                            >
                                {palette.mode == 'light' ? <DarkIcon /> : <LightIcon />}
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
                        <Tooltip title="Reset">
                            <IconButton size="large" color="inherit" onClick={reset}>
                                <RestartIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Account">
                            {/* <IconButton color="inherit" sx={{ p: 0.5 }}>
                                <Avatar
                                    alt="My Avatar"
                                    sx={{
                                        background: palette.secondaryContainer.contrastText,
                                        width: 28,
                                        height: 28,
                                        fontSize: 16,
                                    }}
                                >
                                    zk
                                </Avatar>
                            </IconButton> */}

                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
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
