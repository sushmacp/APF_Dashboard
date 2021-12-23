import React from 'react';
import ReactDOM from 'react-dom';

import '@arithaconsulting/apf_component_library/src/styles/index.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './assets/css/index.css';

import Layout from './components/Layout';

document.title = 'Issue Tracker';

ReactDOM.render(<Layout />, document.getElementById('root'));
