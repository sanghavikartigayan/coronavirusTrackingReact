import React, { useEffect } from 'react';
import Notification from 'react-notify-toast';
import { getAllCovidCase } from '../middleware/cases';
import { connect } from 'react-redux';
import DataTable from './dataTable';
import ExpandableRow from './expandableRow';

const cases = ({ onGetAllCovidCase, cases, loading, error }) => {

    useEffect(() => {
        onGetAllCovidCase()
    }, [onGetAllCovidCase]);

    const columns = [
        { name: 'Name', selector: 'Name', sortable: true, wrap: true, cell: row => row.Name !== null ? row.Name : '' },
        { name: 'Cases - cumulative total', selector: 'Cases - cumulative total', sortable: true, wrap: true, cell: row => row['Cases - cumulative total'] !== null ? row['Cases - cumulative total'] : '' },
        { name: 'Cases - newly reported in last 24 hours', selector: 'Cases - newly reported in last 24 hours', sortable: true, wrap: true, cell: row => row['Cases - newly reported in last 24 hours'] !== null ? row['Cases - newly reported in last 24 hours'] : '' },
        { name: 'Deaths - cumulative total', selector: 'Deaths - cumulative total', sortable: true, wrap: true, cell: row => row['Deaths - cumulative total'] !== null ? row['Deaths - cumulative total'] : '' },
        { name: 'Deaths - newly reported in last 24 hours', selector: 'Deaths - newly reported in last 24 hours', sortable: true, wrap: true, cell: row => row['Deaths - newly reported in last 24 hours'] !== null ? row['Deaths - newly reported in last 24 hours'] : '' },
        { name: 'Transmission Classification', selector: 'Transmission Classification', sortable: true, wrap: true, cell: row => row['Transmission Classification'] !== null ? row['Transmission Classification'] : '' },
    ];

    return (
        <div className="content-header">
            <Notification options={{ zIndex: 200, top: '50px' }} />
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-2 text-dark">COVID Situation by Country, Territory & Area</h1>
                    </div>{/* /.col */}
                </div>{/* /.row */}
            </div>
            {
                !error && !loading ?
                    <DataTable
                        cases={cases}
                        columns={columns}
                        pending={loading}
                        totalElements={cases.length}
                        expandableRow={<ExpandableRow data={cases} />}
                    />
                    : null
            }
        </div>
    )
}

function mapStateToProps(state) {
    const { cases, error, loading } = state.caseReducer;
    return {
        cases,
        error,
        loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetAllCovidCase: () => dispatch(getAllCovidCase())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(cases);