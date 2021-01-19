import React, { useState, useEffect } from 'react'
import { getAllCovidCase } from '../../../middleware/cases';
import Chart from "chart.js";
import { connect } from 'react-redux';

const $ = window.$;

const caseCountLineChart = ({ onGetAllCovidCase, casesForLastWeek, casesForToday, loading }) => {

    const [lineChart, setLineChart] = useState(null);
    const [numDays, setNumDays] = useState('1');

    useEffect(() => {
        onGetAllCovidCase();
        if (casesForLastWeek && !loading && casesForToday) {
            let data;
            let labels = casesForToday.map(key => key['name']).slice(0, 20);

            if (numDays === '1') {
                data = casesForToday.map(key => key['count']).slice(0, 20);
            } else {
                data = casesForLastWeek.map(key => key['count']).slice(0, 20);
            }

            let areaChartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Newly Reported Cases',
                        backgroundColor: 'rgba(60,141,188,0.9)',
                        borderColor: 'rgba(60,141,188,0.8)',
                        pointColor: '#3b8bba',
                        pointStrokeColor: 'rgba(60,141,188,1)',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(60,141,188,1)',
                        pointRadius: 4,
                        pointHitRadius: 10,
                        data: data
                    }
                ]
            };

            let areaChartOptions = {
                maintainAspectRatio: true,
                responsive: true,
                legend: {
                    display: true
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
            var lineChartCanvas = $('#lineChart1').get(0).getContext('2d')
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
    }, [numDays, onGetAllCovidCase, loading]);

    return (
        <div className="card">
            <div className="card-header">
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
                        <canvas id="lineChart1" style={{ minHeight: 400, height: 400, width: '100%' }} />
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
    const { casesForLastWeek, casesForToday, loading } = state.caseReducer;
    return {
        casesForLastWeek,
        casesForToday,
        loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetAllCovidCase: () => dispatch(getAllCovidCase())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(caseCountLineChart);