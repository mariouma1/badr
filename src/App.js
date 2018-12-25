import React, { Component } from 'react';

import { render } from 'react-dom';

import logo from './logo.svg';
import './App.css';
import Administrateur from './admin/admin';
import ProjetList from './Liste'
import Home from './home'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Detail from "./detail"
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './Components/accueil';
import FaireUnDon from './FaireUnDon'


class App extends Component {
  
  render() {
  
    return (
      <Router>
      <div>
        

        

        <Route exact path="/" component={FaireUnDon} />
        <Route exact path="/admin" component={Administrateur} />
        <Route exact path="/projet_detail/:id" component={Detail} />
       
      </div>
    </Router>
      
    )
  }
}

export default App;
