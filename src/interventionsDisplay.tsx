import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import React from 'react';


export default function InterventionsDisplay(props: InterventionsDisplayProps) {

    const columns = [
        { headerName: "Name", field: "name", width: 400 },
        { headerName: "Category", field: "category" },
        { headerName: "Count", field: "count" },
        { headerName: "Synonyms", field: "synonyms", width: 400 },
    ]
    const visibleCategories = new Set(props.visibleCategories);
    const rows = props.interventions.terms
        .map(intervention => {
            return { ...intervention, synonyms: intervention.synonyms.join(', ') }
        })
        .filter(x => visibleCategories.has(x.category))
    const defaultColDef = {
        resizable: true
    }
    
    return (
        <div className="ag-theme-balham" style={{ height: '800px', width: '1200px' }}>
            <AgGridReact
                columnDefs={columns}
                rowData={rows}
                defaultColDef={defaultColDef}
            >
            </AgGridReact>
        </div>
    );
}
