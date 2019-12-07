import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import SearchBar from "./searchBar";
import './styles.css';

const App = () => {

    const [searchText, setSearchText] = useState<string>('abc');
    const [searchStatus, setSearchStatus] = useState<SearchStatus>({});

    const onSearch = async () => {
        const searchTerm = searchText;
        const resp = await fetch(`http://localhost:3000/interventions?name=${encodeURIComponent(searchText)}`);
        const body = await resp.json();
        if (searchTerm === searchText) { // make sure user hasn't started new search
            setSearchStatus({ results: body.apiResults })
        }
    }

    return (
        <div>
            <SearchBar text={searchText} onChange={setSearchText} onSearch={onSearch} />
        </div>
    );
}

export default App;