// Created by Martin Marwad.

// React
import React, { useState } from "react";
import packageInfo from '../../package.json';
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useLocalStorage } from 'react-use';

// Material UI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from "@mui/material/Typography";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { useTheme, } from '@mui/material';

// Material UI: Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageIcon from '@mui/icons-material/Image';

// Local Components
import { ThemeModeContext, ThemeSchemeContext } from '../theme';


// Settings Page
export default function SettingsPage() {

    // React Hooks
    const [userData, setUserData, removeUserData] = useLocalStorage('user-data');
    const [expanded, setExpanded] = React.useState(false);
    const { palette } = useTheme();
    const { toggleThemeMode, resetThemeMode } = React.useContext(ThemeModeContext);
    const { generateThemeScheme, resetThemeScheme } = React.useContext(ThemeSchemeContext);

    // Event Handlers
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Stack justifyContent="center" alignItems="center">
            <Box sx={{ width: { md: '70%', sm: '90%', xs: '95%' } }}>

                {/* General Settings */}
                <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
                    Settings
                </Typography>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                        <Typography variant="h6" sx={{ width: '50%', flexShrink: 0 }}>General</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>General Settings</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Coming Soon!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* Theme */}
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                        <Typography variant="h6" sx={{ width: '50%', flexShrink: 0 }}>Theme</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Customize the Color Theme and User Interface</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid item xs={12}>
                                <Card variant="elevation">
                                    <CardHeader
                                        title="Theme Mode"
                                        subheader="Change the theme mode"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Change the theme mode between light and dark.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained" onClick={toggleThemeMode}>Change Theme Mode</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card variant="elevation">
                                    <CardHeader
                                        title="Theme Scheme"
                                        subheader="Change the theme scheme"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            Change the theme scheme by dragging the sliders or by entering the hex color code.
                                        </Typography>
                                        <Box sx={{ mt: 2, width: '100%'}}>
                                            <HexColorPicker
                                                color={palette.primary.main}
                                                onChange={(value) => { generateThemeScheme(value); }}
                                                style={{ width: '100%' }}
                                            />
                                        </Box>
                                        <TextField
                                            label="Color"
                                            // type="color"
                                            value={palette.primary.main}
                                            onChange={(event) => { generateThemeScheme(event.target.value);}}
                                            InputLabelProps={{shrink: true,}}
                                            sx={{ mt: 2, width: '100%'}}
                                        />
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained" onClick={() => resetThemeScheme()}>Reset to Default</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                {/* User Data */}
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                        <Typography variant="h6" sx={{ width: '50%', flexShrink: 0 }}>User Data</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>User Data Settings</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2" color="text.secondary">
                            Coming Soon!
                        </Typography>
                        <Grid container spacing={2} sx={{ mb: 2 }}>
                            <Grid item xs={12}>
                                <Paper sx={{ flex: 1, margin: 2, boxShadow: 'none', backgroundColor: "background.paper" }}>
                                    <pre>
                                        {JSON.stringify(userData, null, 2)}
                                    </pre>
                                </Paper>
                            </Grid>
                            {/* Reset User Data Button */}
                            <Grid item xs={12}>
                                <Button variant="contained" color="error" onClick={() => removeUserData()}>Delete User Data</Button>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                {/* About */}
                <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                    About 
                </Typography>
                <Card>
                    <CardHeader
                        title={
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                My UML Planner
                            </Typography>
                        }
                        action={
                            <Typography variant="body2" sx={{ mt: 1, mr: 1 }}>
                                Version: {packageInfo.version}
                            </Typography>
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ mt: -2, mb: 2 }}>
                            My UML Planner is a web application that allows students at UMass Lowell to plan their courses and pathway for their academic career.
                        </Typography>

                        <Typography variant="body2" sx={{ mb: 2 }}>
                            Icon made by <a href="https://www.flaticon.com/authors/prosymbols">Prosymbols</a> from <a href="www.flaticon.com">www.flaticon.com</a>
                        </Typography>
                        
                        {/* Author */}
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ 
                                        bgcolor: "dodgerblue", 
                                        width: 45, 
                                        height: 45,
                                    }}>MM</Avatar>
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={<Typography variant="body2" component="a" href="https://www.cs.uml.edu/~mmarwad/">Martin Marwad</Typography>}
                                    secondary="Made by Martin Marwad. All rights reserved."
                                />
                            </ListItem>
                        </List>

                    </CardContent>
                    <CardActions>
                        <Button size="small" href="https://github.com/MartinMarwad/My-UML-Planner">View Source Code</Button>
                        <Button size="small" href="https://github.com/MartinMarwad/My-UML-Planner/issues">Report An Issue</Button>
                    </CardActions>
                </Card>
            </Box>
        </Stack>
    );
}