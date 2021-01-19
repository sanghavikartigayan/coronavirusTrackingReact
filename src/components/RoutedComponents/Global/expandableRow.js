import React from 'react';

const expandableRow = ({ data }) => {
    return (
        <div style={{ backgroundColor: '#f8f9fa', paddingLeft: 70 }} className="container-fluid py-3">
            <div className="row mb-3">
                <div className="col-4">
                    <h6 style={{ color: 'grey' }}>Cases - cumulative total per 1 million population: </h6>
                    <p>{data['Cases - cumulative total per 1 million population'] !== null ? data['Cases - cumulative total per 1 million population'] : '-'}</p>
                </div>

                <div className="col-6">
                    <h6 style={{ color: 'grey' }}>WHO Region: </h6>
                    <p>{data['WHO Region'] !== null ? data['WHO Region'] : '-'}</p>
                </div>
            </div>
        </div >
    )
}

export default expandableRow;