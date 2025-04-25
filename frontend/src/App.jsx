import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage.jsx";
import NavBar from "./components/NavBar.jsx"; // Import NavBar
const App = () => {
  return (
    <div>
      <NavBar /> 
      <HomePage />
    </div>

  );
  
};

export default App;
