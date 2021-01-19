import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getOnatrioRecentCases } from '../../../middleware/cases';
import { numberWithCommas } from '../../../utils/index';

const ontarioCountsForDashboard = ({ onGetOntarioStats, ontarioRecentValue, error, loading }) => {

    useEffect(() => {
        onGetOntarioStats();
    }, [onGetOntarioStats]);

    return (   
            <div className="row">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box elevation-2">
                        <span className="info-box-icon bg-info p-2 m-1"><i className="fas fa-bell"></i></span>
                        <div className="info-box-content ">
                            <span className="info-box-text">Confirmed Cases</span>
                            <span className="info-box-number">
                                <h3>
                                    {(ontarioRecentValue['TotalCases'] && ontarioRecentValue['TotalCases'] !== null) ? numberWithCommas(ontarioRecentValue['TotalCases']) : '0'}
                                </h3>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box elevation-2">
                        <span className="info-box-icon bg-danger p-2 m-1"><i className="fas fa-frown"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Confirmed Deaths</span>
                            <span className="info-box-number">
                                <h3>
                                    {(ontarioRecentValue['TotalDeaths'] && ontarioRecentValue['TotalDeaths'] !== null) ? numberWithCommas(ontarioRecentValue['TotalDeaths']) : '0'}
                                </h3>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box elevation-2">
                        <span className="info-box-icon bg-info p-2 m-1"><i className="fas fa-bell"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Total Recovered</span>
                            <span className="info-box-number">
                                <h3>
                                    {(ontarioRecentValue['TotalRecovered'] && ontarioRecentValue['TotalRecovered'] !== null) ? numberWithCommas(ontarioRecentValue['TotalRecovered']) : '0'}
                                </h3>

                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-3">
                    <div className="info-box elevation-2">
                        <span className="info-box-icon bg-danger p-2 m-1"><i className="fas fa-frown"></i></span>
                        <div className="info-box-content">
                            <span className="info-box-text">Total Tested</span>
                            <span className="info-box-number">
                                <h3>
                                    {(ontarioRecentValue['TotalTested'] && ontarioRecentValue['TotalTested'] !== null) ? numberWithCommas(ontarioRecentValue['TotalTested']) : '0'}
                                </h3>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
           
    );
}


const mapStateToProps = (state) => {
    const { ontarioRecentValue, error, message, loading } = state.ontarioRecentCaseReducer;

    return {
        ontarioRecentValue,
        loading,
        message,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetOntarioStats: () => dispatch(getOnatrioRecentCases())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ontarioCountsForDashboard);