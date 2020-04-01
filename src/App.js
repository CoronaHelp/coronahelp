import React from 'react';
import Map from "./components/mapbox/Map.js";
import Requests from "./components/neededSupplies/RequestsDisplay.js";
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Route exact path="/" render={props =><Requests />}/>
      <Route exact path="/map" component ={ Map }/>
    </div>
  );
}

export default App;
