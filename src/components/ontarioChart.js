import React, { useState, useEffect } from 'react'
import { getOnatrioRecentCases } from '../middleware/cases';
import Chart from "chart.js";
import { connect } from 'react-redux';
import moment from 'moment';

const $ = window.$;

const ontarioChart = ({ onGetOntarioStats, totalCases, totalDeath, loading }) => {

    const [lineChart, setLineChart] = useState(null);
    const [field, setfield] = useState('Cases & Deaths');

    useEffect(() => {
        onGetOntarioStats();

        console.log('Field : ', field);

        if (totalCases && !loading && totalDeath) {

            let label = totalCases.map(key => moment(key['date']).format('MMM Do YY')).slice(0, 20);
            let caseData = totalCases.map(key => key['count']).slice(0, 20);
            let deathData = totalDeath.map(key => key['count']).slice(0, 20);

            let areaChartData = {
                labels: label,
                datasets: [
                    {
                        label: 'Cases',
                        yAxisID: 'Cases',
                        hidden: field !== 'Cases & Deaths' && field !== 'Case',
                        backgroundColor: 'rgba(60,141,188,0.9)',
                        borderColor: 'rgba(60,141,188,0.8)',
                        pointColor: '#3b8bba',
                        pointStrokeColor: 'rgba(60,141,188,1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        fill: false,
                        pointRadius: 4,
                        pointHitRadius: 10,
                        data: caseData
                    },
                    {
                        label: 'Deaths',
                        yAxisID: 'Deaths',
                        hidden: field !== 'Cases & Deaths' && field !== 'Death',
                        backgroundColor: 'rgba(255, 0, 71,0.9)',
                        borderColor: 'rgba(255, 0, 71,0.8)',
                        pointColor: '#ff6347',
                        pointStrokeColor: 'rgba(255, 0, 71, 1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(255, 0, 71, 1)',
                        fill: false,
                        pointRadius: 4,
                        pointHitRadius: 10,
                        data: deathData
                    }
                ]
            };

            let areaChartOptions = {
                scales: {
                    yAxes: [
                        {
                            scaleLabel: {
                                display: !(field !== 'Cases & Deaths' && field !== 'Case'),
                                labelString: 'Cases'
                            },
                            position: 'left',
                            id: 'Cases',
                            type: 'linear',
                            ticks: {
                                min: 0,
                                beginAtZero: true
                            }
                        },
                        {
                            scaleLabel: {
                                display: !(field !== 'Cases & Deaths' && field !== 'Death'),
                                labelString: 'Deaths'
                            },
                            position: 'right',
                            id: 'Deaths',
                            type: 'linear',
                            ticks: {
                                min: 0,
                                beginAtZero: true
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false
                            },
                            ticks: {
                                display: false
                            }
                        }
                    ]
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
        }
    }, [onGetOntarioStats, loading, field]);

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Newly Reported <select onChange={(e) => { setfield(e.target.value); }} style={{ marginLeft: 10, display: 'inline', width: 180 }} className='form-control'>
                    <option value='Cases & Deaths'>Cases & Deaths</option>
                    <option value='Case'>Case only</option>
                    <option value='Death'>Death only</option>
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
                        <canvas id="ontarioChart" style={{ minHeight: 300, height: 300, width: '100%' }} />
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
    const { totalCases, totalDeath, loading } = state.ontarioRecentCaseReducer;
    return {
        totalCases,
        loading,
        totalDeath
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetOntarioStats: () => dispatch(getOnatrioRecentCases())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ontarioChart);