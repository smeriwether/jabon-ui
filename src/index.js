import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import dotenv from 'dotenv';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

dotenv.config();

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3000',
  timeout: 1000,
  headers: { 'X-Token': process.env.REACT_APP_API_TOKEN || 'some-auth-token' }
});

ReactDOM.render(<App axiosClient={ axiosClient } />, document.getElementById('root'));
registerServiceWorker();
