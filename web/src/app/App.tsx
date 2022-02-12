import React from "react";
import ThemeProvider from '../ui-library/theme'
import { Switch, Route } from 'react-router-dom'
import Landing from '../features/Landing'
import { ROUTES } from '../ui-library/constants/routes'

function App() {
    return (
        <ThemeProvider>
            <Landing />
        </ThemeProvider>
    );
}

export default App;
