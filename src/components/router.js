import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Cases from './cases';
import Login from './login';

const Router = () => {
    return (
        <Switch>
            <Route path={`/`} exact component={() => <Dashboard />} />
            <Route path={`/cases`} exact component={() => <Cases />} />
            <Route path={`/login`} exact component={() => <Login />} />
        </Switch>
    );
}

export default Router;