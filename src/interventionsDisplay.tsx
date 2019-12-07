import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';


const InterventionsDisplay = (props: any) => {

    return (
        <div className="ag-theme-balham" style={{ height: '200px', width: '600px' }}>
            <AgGridReact
                columnDefs={[]}
                rowData={[]}>
            </AgGridReact>
        </div>
    );
}

export default InterventionsDisplay;