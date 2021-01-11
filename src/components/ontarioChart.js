import React, { useState, useEffect } from 'react'
import { getOnatrioRecentCases } from '../middleware/cases';
import Chart from "chart.js";
import { connect } from 'react-redux';
import moment from 'moment';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';

const $ = window.$;

const ontarioChart = ({ onGetOntarioStats, totalCases, loading }) => {

    const [lineChart, setLineChart] = useState(null);
    const [numDays, setNumDays] = useState('1');

    useEffect(() => {
        onGetOntarioStats();

        let labels = totalCases.map(key => moment(key['date']).format('LL'));
        let data = totalCases.map(key => key['count']);

        let areaChartData = {
            labels: labels,
            datasets: [
                {
                    label: labels,
                    backgroundColor: 'rgba(60,141,188,0.9)',
                    borderColor: 'rgba(60,141,188,0.8)',
                    pointRadius: true,
                    pointColor: '#3b8bba',
                    pointStrokeColor: 'rgba(60,141,188,1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(60,141,188,1)',
                    data: data
                }
            ]
        };

        let areaChartOptions = {
            maintainAspectRatio: true,
            responsive: true,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true,
                    }
                }]
            }
        }
        var lineChartCanvas = $('#ontarioChart').get(0).getContext('2d')
        var lineChartOptions = Object.assign({}, areaChartOptions)
        var lineChartData = Object.assign({}, areaChartData)
        lineChartData.datasets[0].fill = false;
        lineChartOptions.datasetFill = false;

        setLineChart(new Chart(lineChartCanvas, {
            type: 'line',
            data: lineChartData,
            options: lineChartOptions
        }));
    }, [numDays, onGetOntarioStats]);


    const handleSelect = (ranges) => {
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }

    // const selectionRange = {
    //     startDate: new Date(),
    //     endDate: new Date(),
    //     key: 'selection',
    // }

    return (
        <div className="card">
            <div className="card-header">
                {/* <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                /> */}
                <h3 className="card-title">Newly Reported Cases <select onChange={(e) => { lineChart.destroy(); setNumDays(e.target.value); }} style={{ marginLeft: 10, display: 'inline', width: 150 }} className='form-control'>
                    <option value='1'>24 hours</option>
                    <option value='7'>7 days</option>
                </select></h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                    </button>
                </div>
            </div>
            {
                !loading
                    ?
                    <div id="lineChartContent" className="card-body">
                        <canvas id="ontarioChart" style={{ minHeight: 400, height: 400, width: '100%' }} />
                    </div>
                    :
                    <div className="card-body">
                        <p> Loading</p>
                    </div>
            }
        </div>
    );
}

function mapStateToProps(state) {
    const { totalCases, loading } = state.ontarioRecentCaseReducer;
    return {
        totalCases,
        loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetOntarioStats: () => dispatch(getOnatrioRecentCases())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ontarioChart);