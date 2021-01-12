import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Cases from './cases';
import OntarioStats from './ontarioStats';

const Router = () => {
    return (
        <Switch>
            <Route path={`/`} exact component={() => <Dashboard />} />
            <Route path={`/cases`} exact component={() => <Cases />} />
            <Route path={`/ontarioStats`} exact component={() => <OntarioStats />} />
        </Switch>
    );
}

export default Router;
