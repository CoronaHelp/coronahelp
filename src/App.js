import React from "react";

import Header from "./components/Header";
import Profile from "./pages/ProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <Profile />
      </div>
    </div>
  );
}

export default App;
