import React, { useEffect } from 'react';
import Notification from 'react-notify-toast';
import { getOnatrioRecentCases } from '../../../middleware/cases';
import { connect } from 'react-redux';
import DataTable from '../dataTable';
import ExpandableRow from './ontarioExpandableRow';
import moment from 'moment';

const ontarioStats = ({ onGetOnatrioRecentCase, ontarioCases, loading, error }) => {

    useEffect(() => {
        onGetOnatrioRecentCase()
    }, [onGetOnatrioRecentCase]);

    console.log(ontarioCases);

    const columns = [
        { name: 'Date', selector: 'SummaryDate', sortable: true, wrap: true, cell: row => row['SummaryDate'] !== null ? moment(row['SummaryDate']).format('LL, hh:mmA') : '' },
        { name: 'TotalActive', selector: 'TotalActive', sortable: true, wrap: true, cell: row => row['TotalActive'] !== null ? row['TotalActive'] : '' },
        { name: 'TotalCases', selector: 'TotalCases', sortable: true, wrap: true, cell: row => row['TotalCases'] !== null ? row['TotalCases'] : '' },
        { name: 'TotalDeaths', selector: 'TotalDeaths', sortable: true, wrap: true, cell: row => row['TotalDeaths'] !== null ? row['TotalDeaths'] : '' },
        { name: 'TotalRecovered', selector: 'TotalRecovered', sortable: true, wrap: true, cell: row => row['TotalRecovered'] !== null ? row['TotalRecovered'] : '' },
        { name: 'DailyActive', selector: 'DailyActive', sortable: true, wrap: true, cell: row => row['DailyActive'] !== null ? row['DailyActive'] : '' },
        { name: 'DailyDeaths', selector: 'DailyDeaths', sortable: true, wrap: true, cell: row => row['DailyDeaths'] !== null ? row['DailyDeaths'] : '' },
        { name: 'DailyRecovered', selector: 'DailyRecovered', sortable: true, wrap: true, cell: row => row['DailyRecovered'] !== null ? row['DailyRecovered'] : '' },
    ];

    return (
        <div className="content-header">
            <Notification options={{ zIndex: 200, top: '50px' }} />
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-2 text-dark">Recent COVID Stats for Ontario</h1>
                    </div>{/* /.col */}
                </div>{/* /.row */}
            </div>
            {
                !error && !loading ?
                    <DataTable
                        cases={ontarioCases}
                        columns={columns}
                        pending={loading}
                        totalElements={ontarioCases.length}
                        fileNameForCsvDownload="ontarioRecentStatsData"
                        expandableRow={<ExpandableRow data={ontarioCases}
                        defaultSortField={'SummaryDate'} />}
                    />
                    : null
            }
        </div>
    )
}

function mapStateToProps(state) {
    const { ontarioCases, error, loading } = state.ontarioRecentCaseReducer;
    return {
        ontarioCases,
        error,
        loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetOnatrioRecentCase: () => dispatch(getOnatrioRecentCases())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ontarioStats);