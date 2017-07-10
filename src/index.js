import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Boards from './Boards';
import Auth from './Auth';

import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
        <Route path="/" component={Boards} exact />
        <Route path="/login" component={Auth} />
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
