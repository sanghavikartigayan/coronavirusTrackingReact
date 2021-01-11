import React, { useState, useEffect } from 'react'
import { getAllCovidCase } from '../middleware/cases';
import Chart from "chart.js";
import { connect } from 'react-redux';

const $ = window.$;

const deathCountLineChart = ({ onGetAllCovidCase, deathForLastWeek, deathForToday, loading }) => {

    const [lineChart, setLineChart] = useState(null);
    const [numDays, setNumDays] = useState('1');

    useEffect(() => {
        onGetAllCovidCase();

        let data;
        let labels;

        if (numDays === '1') {
            labels = Object.keys(deathForToday);
            data = Object.keys(deathForToday).map(key => deathForToday[key]);
        } else {
            labels = Object.keys(deathForLastWeek);
            data = Object.keys(deathForLastWeek).map(key => deathForLastWeek[key]);
        }

        let areaChartData = {
            labels: labels,
            datasets: [
                {
                    label: 'Newly Reported Deaths',
                    backgroundColor: 'rgba(255, 0, 71,0.9)',
                    borderColor: 'rgba(255, 0, 71,0.8)',
                    pointRadius: true,
                    pointColor: '#ff6347',
                    pointStrokeColor: 'rgba(255, 0, 71, 1)',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(255, 0, 71, 1)',
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
        var lineChartCanvas = $('#lineChart2').get(0).getContext('2d')
        var lineChartOptions = Object.assign({}, areaChartOptions)
        var lineChartData = Object.assign({}, areaChartData)
        lineChartData.datasets[0].fill = false;
        lineChartOptions.datasetFill = false;

        setLineChart(new Chart(lineChartCanvas, {
            type: 'line',
            data: lineChartData,
            options: lineChartOptions
        }));
    }, [numDays, onGetAllCovidCase]);

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Newly Reported Deaths <select onChange={(e) => { lineChart.destroy(); setNumDays(e.target.value); }} style={{ marginLeft: 10, display: 'inline', width: 150 }} className='form-control'>
                    <option value='1'>24 hours</option>
                    <option value='7'>7 days</option>
                </select></h3>
                <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                    </button>
                </div>
            </div>
            { !loading
                ?
                <div id="lineChartContent" className="card-body">
                    <canvas id="lineChart2" style={{ minHeight: 400, height: 400, width: '100%' }} />
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
    const { deathForLastWeek, deathForToday, loading } = state.caseReducer;
    return {
        deathForLastWeek,
        deathForToday,
        loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetAllCovidCase: () => dispatch(getAllCovidCase())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(deathCountLineChart);