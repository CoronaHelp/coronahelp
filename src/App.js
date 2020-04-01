import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <Route path="/profile/:id" component={ProfilePage} />
      </div>
    </div>
  );
}

export default App;
