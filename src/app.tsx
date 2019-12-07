import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import './styles.css';

const App = () => {

    const [searchText, setSearchText] = useState<string>('abc');

    return (
        <div>
            <TextField value={searchText} onChange={evt => setSearchText(evt.target.value)} />
            <h1>Hello, World!!</h1>
        </div>
    );
}

export default App;