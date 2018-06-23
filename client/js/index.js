import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './styles/app.css';

import App from './components/app/App';

render(
    <App />,
    document.getElementById('root')
);
