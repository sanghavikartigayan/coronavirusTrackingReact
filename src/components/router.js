import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';
import Cases from './RoutedComponents/Global/cases';
import OntarioStats from './RoutedComponents/Ontario/ontarioStats';

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
