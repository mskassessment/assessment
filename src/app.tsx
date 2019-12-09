import React, { useState, useEffect } from 'react';
import SearchBar from "./searchBar";
import InterventionsDisplay from "./interventionsDisplay";
import CategoryFilter from "./categoryFilter";
import './styles.css';

export default function App() {

    const [searchText, setSearchText] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchResults>({});

    function onCategoryClick(category: string) {
        let visibleCategories = [...searchResults.visibleCategories];
        if (visibleCategories.includes(category)) {
            visibleCategories = visibleCategories.filter(x => x !== category)
        }
        else {
            visibleCategories = visibleCategories.concat(category)
        }
        setSearchResults({ ...searchResults, visibleCategories })
    }

    const onSearch = async () => {
        const resp = await fetch(`http://localhost:3000/interventions?name=${encodeURIComponent(searchText)}`);
        const body = await resp.json();
        const allCategories = new Set<string>();
        for (const term of body.apiResults.terms) {
            allCategories.add(term.category);
        }
        setSearchResults({
            results: body.apiResults,
            allCategories: Array.from(allCategories),
            visibleCategories: Array.from(allCategories),
        })
    }

    return (
        <div id="search-container">
            <SearchBar text={searchText} onChange={setSearchText} onSearch={onSearch} />
            {searchResults.results && (
                <>
                    <CategoryFilter
                        onCategoryClick={onCategoryClick}
                        allCategories={searchResults.allCategories}
                        visibleCategories={searchResults.visibleCategories}
                    />
                    <InterventionsDisplay 
                    interventions={searchResults.results} 
                    visibleCategories={searchResults.visibleCategories}
                    />
                </>
            )}
        </div>
    );
}