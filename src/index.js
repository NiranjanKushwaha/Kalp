import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import MapPage from './Components/MapPage';


ReactDOM.render(
  <Router>
    <Switch>
     <Route exact path="/" component={App}  />
     <Route path="/map" component={MapPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

