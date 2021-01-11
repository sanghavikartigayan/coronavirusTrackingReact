import React from 'react';
import Notification from 'react-notify-toast';
import CountsForDashboard from './countsForDashboard';
import DeathCountLineChart from './deathCountLineChart';
import CaseCountLineChart from './caseCountLineChart';
import OntarioChart from './ontarioChart';

const dashboard = () => {
    return (
        <div className="content-header">
            <Notification options={{ zIndex: 200, top: '50px' }} />
            <div className="row m-4">
                <div className="col-sm-6">
                    <h3 className="card-title font-weight-bold">Global Situation</h3>
                </div>
            </div>
            <div className="row m-4">
                <div className="col-lg-12 col-md-12">
                    <CountsForDashboard />
                </div>
            </div>
            <div className="row m-4">
                <div className="col-sm-6">
                    <h3 className="card-title font-weight-bold">Onatrio Statistics</h3>
                </div>
            </div>
            <div className="row m-4">
                <div className="col-sm-12 col-md-12">
                    <OntarioChart />
                </div>
            </div>
            <div className="row m-4">
                <div className="col-sm-6">
                    <h3 className="card-title font-weight-bold">Global Statistics</h3>
                </div>
            </div>
            <div className="row m-4">
                <div className="col-sm-6 col-md-6">
                    <CaseCountLineChart />
                </div>
                <div className="col-sm-6 col-md-6">
                    <DeathCountLineChart />
                </div>
            </div>
            
        </div>
    )
}

export default dashboard;