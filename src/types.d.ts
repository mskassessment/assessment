type SearchBarProps = { 
    text: string
    onChange: React.Dispatch<React.SetStateAction<string>>
    onSearch: any
}

type SearchStatus = {
    activeSearchTerm?: string
    results?: SearchResults
}

type SearchResults = {
    term: string
}