import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './styles.css';


const SearchBar = (props: SearchBarProps) => {

    const inputRef: any = React.useRef();
    React.useEffect(() => {
        if (inputRef !== undefined && inputRef.current !== undefined) {
            inputRef.current.focus();
        }
    }, [])

    return (
        <div>
            <TextField inputRef={inputRef} value={props.text} label="Search Interventions" onChange={evt => props.onChange(evt.target.value)} />
            <Button variant="contained" color="primary" onClick={props.onSearch}>Search</Button>
        </div>
    );
}

export default SearchBar;