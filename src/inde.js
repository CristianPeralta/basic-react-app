import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './inde.css';
import App from './App';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM(app, document.getElementById('root'));
