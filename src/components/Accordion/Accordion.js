
// React
import * as React from 'react';

// Material UI
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// Generic Accordion Component
export default function GenericAccordion({ children, title, subtitle}) {
    return (
        <Accordion defaultExpanded sx={{ p: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>{title}</Typography>
                {/* <Typography sx={ { color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails sx={{ m: -3}}>
                {children}
            </AccordionDetails>
        </Accordion>
    );
}