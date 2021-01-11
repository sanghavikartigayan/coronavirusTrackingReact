import React from 'react';
import { Route, Redirect } from "react-router-dom";

const protectedRoute = ({ children, ...routeParams }) => {
    return (
        <Route exact
            {...routeParams}
            render={({ location }) =>
                localStorage.getItem('token') !== null ? (
                    children
                ) : (
                        <Redirect to={{
                            pathname: '/login',
                            state: { from: location }
                        }} />
                    )
            }
        />
    )
}

export default protectedRoute;