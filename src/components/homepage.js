import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Router from './router';

const homePage = () => {

    return (
        <div className="sidebar-mini layout-fixed">
            <div className="wrapper">
                <Navbar />
                <Sidebar/>
                <div className="content-wrapper">
                    <Router />
                </div>

            </div>
            {/* ./wrapper */}
        </div>
    )
}


export default homePage;