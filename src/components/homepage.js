import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Router from './router';
import ConditionalRedirect from './utils/conditionalRedirect';
import jwt from 'jsonwebtoken';

import { connect } from 'react-redux';
import { logout, setCurrentUser } from '../actionCreators/auth';
import { changeTab } from '../actionCreators/utils';
import { getDemoUser } from '../utils/index';

const homePage = ({
    handleLogout,
    setCurrentUser,
    name,
    imageUrl,
    email,
}) => {

    const [shouldRedirect, setShouldRedirect] = useState(localStorage.getItem('token') === null);
    const [selectedTab, setSelectedTab] = useState('dashboard');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null && token !== '') {
            setCurrentUser(getDemoUser(localStorage.getItem('token')));

        } else {
            setShouldRedirect(true);
        }
    }, []);

    const handleTabChange = (tabName) => {
        window.location.pathname = `/${ tabName }`;
    }

    const signOut = () => {
        localStorage.removeItem('token');
        handleLogout();
        window.location.reload();
    }

    if (shouldRedirect) {
        return <ConditionalRedirect condition={shouldRedirect} to={'/login'} />;
    } else {
        return (
            <div>

                <div className="sidebar-mini layout-fixed">
                    <div className="wrapper">
                        <Navbar name={name} imageUrl={imageUrl} onSignOut={signOut} />
                        <Sidebar selectedTab={selectedTab} onTabClick={handleTabChange} email={email} />
                        <div className="content-wrapper">
                            <Router />
                        </div>

                    </div>
                    {/* ./wrapper */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { currentUser } = state.authReducer;
    const { currentTab } = state.utilReducer;

    let name = '';
    let imageUrl = '';
    let email = '';

    if (currentUser) {
        name = `${ currentUser.employee.firstName } ${ currentUser.employee.lastName }`;
        imageUrl = currentUser.user_avatar;
        email = currentUser.employee.email;
    }

    return {
        currentTab,
        name,
        imageUrl,
        email,
    };
}

const mapDispatchToProps = {
    handleLogout: logout,
    changeTab,
    setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage);