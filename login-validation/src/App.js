import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';

import MainNavigation from './components/MainNavigation';
import Foot from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Register1 from './components/Reg/Register1.js';
import Login1 from './components/Reg/Login1.js';
import Demo from './components/Reg/Demo.js';


//Edit here//

class App extends Component {
  render() {
    return (
      <div className="abc">
         <Router>
             <div>
             <MainNavigation />
                <div className="container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Register" component={Register1} />
                    <Route exact path="/Login" component={Login1} />
                    <Route exact path="/demo" component={Demo} />
                </div>

              <Foot />
             </div>
         </Router>


      </div>
    );
  }
}

export default App;
