import React from "react";
import ThemeProvider from '../ui-library/theme'
import { Switch, Route } from 'react-router-dom'
import Login from '../features/Login'
import Landing from '../features/Landing'
import Details from '../features/Details'
import CreateCoworking from '../features/CreateCoworking'
import EditCoworking from '../features/EditCoworking'
import Profile from '../features/Profile'
import { ROUTES } from '../ui-library/constants/routes'

const App  = () => {
    return (
        <ThemeProvider theme="light">
            <Switch>
                <Route path={ROUTES.HOME} exact component={Login} />
                <Route path={ROUTES.LANDING} exact component={Landing} />
                <Route path={ROUTES.DETAILS} exact component={Details} />
                <Route path={ROUTES.CREATE_COWORKING} exact component={CreateCoworking} />
                <Route path={ROUTES.EDIT_COWORKING} exact component={EditCoworking} />
                <Route path={ROUTES.PROFILE} exact component={Profile} />
            </Switch>
        </ThemeProvider>
    );
}

export default App;
