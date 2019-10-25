import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import 'https://use.fontawesome.com/4029b1d41b.js';

ReactDOM.render(
    <App
        reportList={document.getElementById('report-list')}
        yearList={document.getElementById('year-list')}
        generateBtn={document.getElementById('generate')}
    />,
    document.getElementById('root'),
);
