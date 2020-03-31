import React from 'react';
import Requests from "./components/neededSupplies/Requests.js"
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Route exact path="/" render={props =><Requests />}/>
    </div>
  );
}

export default App;
