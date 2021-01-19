import React from 'react';

const ontarioExpandableRow = ({ data }) => {
    return (
        <div style={{ backgroundColor: '#f8f9fa', paddingLeft: 70 }} className="container-fluid py-3">
            <div className="row mb-3">
                <div className="col-4">
                    <h6 style={{ color: 'grey' }}>TotalVaccinated: </h6>
                    <p>{data['TotalVaccinated'] !== null ? data['TotalVaccinated'] : '-'}</p>
                </div>

                <div className="col-6">
                    <h6 style={{ color: 'grey' }}>TotalTested: </h6>
                    <p>{data['TotalTested'] !== null ? data['TotalTested'] : '-'}</p>
                </div>
            </div>
        </div >
    )
}

export default ontarioExpandableRow;