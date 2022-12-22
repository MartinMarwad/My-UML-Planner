
// React 
import React from 'react';
import { createRoot } from 'react-dom/client';

// Material UI
import CssBaseline from '@mui/material/CssBaseline';

// Local Components
import App from './App';

// Theme
import ThemeModeProvider from './theme/context/ThemeModeContext';
import ThemeSchemeProvider from './theme/context/ThemeSchemeContext';
import M3ThemeProvider from './theme/m3/M3ThemeProvider';


// Root Component
const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeModeProvider>
        <ThemeSchemeProvider>
            <M3ThemeProvider>
                <CssBaseline enableColorScheme />
                <App />
            </M3ThemeProvider>
        </ThemeSchemeProvider>
    </ThemeModeProvider>
);
