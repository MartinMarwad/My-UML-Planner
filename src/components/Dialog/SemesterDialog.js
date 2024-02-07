
// React
import React, { useState } from 'react';

// Material UI
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// Material UI: Icons
import CloseIcon from '@mui/icons-material/Close';


// SemesterDialog: This component is a dialog that allows the user to add or edit a semester to the degree pathway
export default function SemesterDialog({ action='add', handleOpen, handleClose, data, setData, ...props }) {
    const [open, setOpen] = useState(false);
    const [year, setYear] = useState('');
    const [term, setTerm] = useState('');

    // const handleOpen = () => { setOpen(true); };
    // const handleClose = () => { setOpen(false); };
    const handleSubmit = (event) => {
        event.preventDefault();
        // add the semester to the database here
        setOpen(false);
    };

    return (
        <Dialog 
            fullWidth={true}
            maxWidth='md'
            open={open} 
            onClose={handleClose}
            onBackdropClick={handleOpen}
            {...props}
        >
            <DialogTitle>
                {action === 'add' ? 'Add Semester' : 'Edit Semester'}
                <Tooltip title="Close" placement="top">
                    <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8, }}>
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            </DialogTitle>
            <DialogContent>
                <FormControl fullWidth onSubmit={handleSubmit}>
                    <TextField
                        label="Year"
                        type="number"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                    />
                    <Select
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    >
                        <MenuItem value="fall">Fall</MenuItem>
                        <MenuItem value="spring">Spring</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="error">Cancel</Button>
                <Button type="submit" onClick={handleSubmit} color="primary">Confirm</Button>
            </DialogActions>
        </Dialog>
    );
}
