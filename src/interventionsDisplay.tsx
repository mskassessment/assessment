import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';


export default function InterventionsDisplay(props: InterventionsDisplayProps) {

    const columns = [
        { headerName: "Name", field: "name", width: 400 },
        { headerName: "Category", field: "category" },
        { headerName: "Count", field: "Count" },
        { headerName: "Synonyms", field: "synonyms", width: 400 },
    ]
    const rows = props.interventions.terms.map(intervention => {
        return { ...intervention, synonyms: intervention.synonyms.join(', ') }
    })

    return (
        <div className="ag-theme-balham" style={{ height: '800px', width: '1200px' }}>
            <AgGridReact
                columnDefs={columns}
                rowData={rows}>
            </AgGridReact>
        </div>
    );
}
