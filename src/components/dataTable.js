import React, { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";
import moment from 'moment';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const dataTable = ({
    cases,
    columns,
    pending,
    totalElements,
    expandableRow,
    defaultSortField,
    fileNameForCsvDownload
}) => {

    const [filteredcases, setFilteredCases] = useState(cases);
    const [tableColumns, setTableColumns] = useState(columns);

    useEffect(() => {
        setFilteredCases(cases);
        setTableColumns(columns);
    }, [cases, columns]);

    var today = moment().format("DD-MM-YY");
    var fileName = `${ today }-${fileNameForCsvDownload}.csv`;
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    const conditionalRowStyles = [
        {
            when: row => row.Name === 'Global',
            style: {
                backgroundColor: '#ebfaeb',
                color: 'black',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
        }
    ];

    const customStyles = {
        title: {
            style: {
                fontColor: 'red',
                fontWeight: '900',
            }
        },
        rows: {
            style: {
                minHeight: '50px', // override the row height
            }
        },
        headCells: {
            style: {
                fontSize: '18px',
                fontWeight: '500',
                padding: '8px',
                backgroundColor: ''
            },
        },
        cells: {
            style: {
                padding: '8px',
            },
        },
    };

    return (
        <div className="card-body">
            <button
                data-toggle="modal"
                data-target="#modal-xl"
                onClick={(e) => exportToCSV(filteredcases, fileName)}
                disabled={filteredcases.length === 0}
                style={{ marginBottom: "10px" }}
                className="btn btn-primary btn-sm">
                Export Data
            </button>
            <DataTable
                noHeader
                responsive
                flex
                highlightOnHover
                columns={tableColumns}
                data={filteredcases}
                paginationTotalRows={totalElements}
                progressPending={pending}
                pagination={true}
                persistTableHead
                expandableRows
                defaultSortAsc={defaultSortField !== null || defaultSortField !== undefined? true : false}
                conditionalRowStyles={conditionalRowStyles}
                expandableRowsComponent={expandableRow}
                customStyles={customStyles}
                defaultSortField={defaultSortField}
            />
        </div >
    );
}

export default dataTable;