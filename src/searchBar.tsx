import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './styles.css';


const SearchBar = (props: SearchBarProps) => {

    return (
        <div>
            <TextField value={props.text} onChange={evt => props.onChange(evt.target.value)} />
            <Button onClick={props.onSearch}>Search</Button>
        </div>
    );
}

export default SearchBar;