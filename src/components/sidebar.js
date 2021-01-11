import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserIcon from '../assets/blue-covid-banner.jpg';

const sidebar = (props) => {

    const [selectedTab, setSelectedTab] = useState(props.location.pathname);

    useEffect(() => {
        setSelectedTab(props.location.pathname);
    }, [props.location.pathname])

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="/" className="brand-link">
                <img src={UserIcon} alt="AdminLTE Logo" className="brand-image img-circle elevation-2" />
                <span className="brand-text font-weight-light ml-3">Coronavirus</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to={`/`}>
                                <div style={{ color: '#c2c7d0' }} className={`nav-link ${ selectedTab === '/' ? 'active' : '' }`}>
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p> Dashboard </p>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/cases`}>
                                <div style={{ color: '#c2c7d0' }} className={`nav-link ${ selectedTab === '/cases' ? 'active' : '' }`}>
                                    <i className="nav-icon fas fa-table" />
                                    <p> Cases </p>
                                </div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/login`}>
                                <div style={{ color: '#c2c7d0' }} className={`nav-link ${ selectedTab === '/login' ? 'active' : '' }`}>
                                    <i className="nav-icon fas fa-table" />
                                    <p> Login </p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default withRouter(sidebar);