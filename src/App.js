import React from 'react';
import Nav from './Components/Nav'
import Home from './Components/Home'
import HomeDetails from './Components/HomeDetails'
import About from './Components/About'
import AbouDetails from "./Components/AboutDetails"
import LatestDetails from './Components/LatestDetails'
import Latest from './Components/Latest'
import { HashRouter as Router , Switch, Route } from 'react-router-dom'
import Head from './Components/Head'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
        <div className="nv">
          <Nav/>
        </div>
        <Head/>
         <Switch>
            <Route path = '/' exact component = {Home}/>
            <Route path = '/About' component = {About}/>
            <Route path = '/HomeDetails/:id' component = {HomeDetails}/>
            <Route path = '/Latest' component = {Latest}/>
            <Route path = '/AboutDetails/:id' component = {AbouDetails}/>
            <Route path = '/LatestDetails/:id' component = {LatestDetails}/>
         </Switch>
     </div>
    {/* <End/> */}
    </Router>
  );
}

export default App;
