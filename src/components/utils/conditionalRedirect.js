import React from 'react';
import { Redirect } from 'react-router-dom';

const conditionalRedirect = ({ condition, to }) => {
    return condition ? <Redirect to={to} /> : null;
}

export default conditionalRedirect;