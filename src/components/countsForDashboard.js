import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getAllCovidCase } from '../middleware/cases';
import { numberWithCommas } from '../utils/index';

const globalValuesForDashboard = ({ onGetAllCovidCase, globalValue, error, loading }) => {

    useEffect(() => {
        onGetAllCovidCase()
    }, [onGetAllCovidCase]);

    return (

        <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box elevation-2">
                    <span className="info-box-icon bg-info p-2 m-1"><i className="fas fa-bell"></i></span>
                    <div className="info-box-content ">
                        <span className="info-box-text">Confirmed Cases</span>
                        <span className="info-box-number">
                            <h3>
                                {(globalValue['Cases - cumulative total'] && globalValue['Cases - cumulative total'] !== null) ? numberWithCommas(globalValue['Cases - cumulative total']) : '0'}
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
                                {(globalValue['Deaths - cumulative total'] && globalValue['Deaths - cumulative total'] !== null) ? numberWithCommas(globalValue['Deaths - cumulative total']) : '0'}
                            </h3>
                        </span>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box elevation-2">
                    <span className="info-box-icon bg-info p-2 m-1"><i className="fas fa-bell"></i></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Newly reported Case to today</span>
                        <span className="info-box-number">
                            <h3>
                                {(globalValue['Cases - newly reported in last 24 hours'] && globalValue['Cases - newly reported in last 24 hours'] !== null) ? numberWithCommas(globalValue['Cases - newly reported in last 24 hours']) : '0'}
                            </h3>

                        </span>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box elevation-2">
                    <span className="info-box-icon bg-danger p-2 m-1"><i className="fas fa-frown"></i></span>
                    <div className="info-box-content">
                        <span className="info-box-text">Newly reported Death to today</span>
                        <span className="info-box-number">
                            <h3>
                                {(globalValue['Deaths - newly reported in last 24 hours'] && globalValue['Deaths - newly reported in last 24 hours'] !== null) ? numberWithCommas(globalValue['Deaths - newly reported in last 24 hours']) : '0'}
                            </h3>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
}


const mapStateToProps = (state) => {
    const { globalValue, error, message, loading } = state.caseReducer;

    return {
        globalValue,
        loading,
        message,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetAllCovidCase: () => dispatch(getAllCovidCase())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(globalValuesForDashboard);