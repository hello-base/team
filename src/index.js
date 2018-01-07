import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './containers/App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const target = document.getElementById('root');

ReactDOM.render(<App />, target);
registerServiceWorker();
