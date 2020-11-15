import React from 'react';
import {Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Resume from './Resume'
import AboutMePage from './AboutMePage'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/aboutme" component={AboutMePage}/>
    </Switch>
)

export default Main;