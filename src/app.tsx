import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import SearchBar from "./searchBar";
import InterventionsDisplay from "./interventionsDisplay";
import CategoryFilter from "./categoryFilter";
import './styles.css';

export default function App() {

    const [searchText, setSearchText] = useState<string>('abc');
    const [searchResults, setSearchResults] = useState<SearchResults>({});

    function hideCategory(category: string) {
        console.log(category)
        const visibleCategories = []
    }

    const onSearch = async () => {
        const resp = await fetch(`http://localhost:3000/interventions?name=${encodeURIComponent(searchText)}`);
        const body = await resp.json();
        setSearchResults({
            results: body.apiResults,
            allCategories: ['a', 'b', 'c'],
            visibleCategories: ['a', 'b'],
        })
    }

    return (
        <div id="search-container">
            <SearchBar text={searchText} onChange={setSearchText} onSearch={onSearch} />
            {searchResults.results && (
                <>
                    <CategoryFilter 
                        hideCategory={hideCategory}
                        allCategories={searchResults.allCategories}
                        visibleCategories={searchResults.visibleCategories}
                    />
                    <InterventionsDisplay interventions={searchResults.results} />
                </>
            )}
        </div>
    );
}