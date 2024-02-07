
// React
import * as React from 'react';

// Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


//  Course Modal Component
export function CourseModal({ open, handleClose, handleSubmit }) {
    // const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [link, setLink] = React.useState('');
    const [credits, setCredits] = React.useState('');

    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     // add the course to the JSON object here

    //     setOpen(false);
    // };


    // const style = ;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
    );
}