import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import NavBar from "./components/NavBar.jsx"; // Import NavBar
import ReportAnimalForm from "./components/ReportAnimalForm.jsx";
import NGOprofile from "./components/NGOprofile.jsx";
import DonationPage from "./components/Donationpage.jsx";
import LoginPreview from "./components/Signup.jsx";
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ngo" element={<NGOprofile />} />
          <Route path="/report" element={<ReportAnimalForm />} />
          <Route path="/donate" element={<DonationPage/>}/>
          
        </Routes>
        <LoginPreview/>
      </div>
    </Router>
  );
};

export default App;
