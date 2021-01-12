import React from 'react';
import Notification from 'react-notify-toast';
import CountsForDashboard from './globalValuesForDashboard';
import DeathCountLineChart from './deathCountLineChart';
import CaseCountLineChart from './caseCountLineChart';
import OntarioChart from './ontarioChart';
import OntarioCountsForDashboard from './ontarioCountsForDashboard';

const dashboard = () => {

    return (
        <div className="content-header">
            <Notification options={{ zIndex: 200, top: '50px' }} />
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-2 text-dark">Dashboard</h1>
                    </div>
                    <div className="col-sm-6">
                        <ul className="nav nav-pills float-sm-right p-2">
                            <li className="nav-item"><a className="nav-link active" href="#ontario" data-toggle="tab">Ontario</a></li>
                            <li className="nav-item"><a className="nav-link" href="#global" data-toggle="tab">Global</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="row">
                    <div className="col-12">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="ontario">
                                <div className="row m-4">
                                    <div className="col-sm-6">
                                        <h3 className="card-title font-weight-bold">Ontario Situation</h3>
                                    </div>
                                </div>
                                <div className="row m-4">
                                    <div className="col-lg-12 col-md-12">
                                        <OntarioCountsForDashboard />
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
                            </div>
                            <div className="tab-pane fade" id="global">
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
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default dashboard;