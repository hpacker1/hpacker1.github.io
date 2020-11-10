import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Resume from './Resume'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/resume" component={Resume}/>
    </Switch>
)

export default Main;