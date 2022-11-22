import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
    EuiLink,
    EuiCode,
} from '@elastic/eui';

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <EuiCode transparentBackground>src/App.tsx</EuiCode> and save to reload.
            </p>
            <EuiLink href="https://reactjs.org" target="_blank">
            Learn React
            </EuiLink>
        </header>
    </div>
);

export default App;
