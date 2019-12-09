type SearchBarProps = {
    text: string
    onChange: React.Dispatch<React.SetStateAction<string>>
    onSearch: any
}

type InterventionsDisplayProps = {
    interventions: ApiResults
    visibleCategories: string[]
}

type ApiResults = {
    terms: Intervention[]
}

type SearchResults = {
    allCategories?: string[]
    visibleCategories?: string[]
    results?: ApiResults
}

type Intervention = {
    name: string,
    codes: string[],
    synonyms: string[],
    category: string,
    count: number
}