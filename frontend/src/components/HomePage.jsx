import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Ngo from "../assets/Ngo.jsx"; // Adjust the path as necessary



const HomePage = () => {
  const ngos = [
    { id: 1, name: "Animal Aid Unlimited", location: "Udaipur, India" },
    { id: 2, name: "Blue Cross of India", location: "Chennai, India" },
    { id: 3, name: "Wildlife SOS", location: "Agra, India" }
  ];
  return (
    <div className="maincontainer">
      <div>
        {/* Hero Section */}
        <div className="container-fluid text-center text-center py-5 bg-light full-height">
          <h1 className="fw-bold">Help Injured Animals in Your Area</h1>
          <p className="text-muted">
            Connecting animals in need with people who care and local NGOs
          </p>
          <button className="btn btn-danger">Report an Animal in Need</button>
          <div>
            <img src="../mainpic10.jpg" alt="" />
          </div>
        </div>

        {/* How It Works */}
        <div className="container text-center py-5 bg-light">
          <h3 className="fw-bold mb-4">How It Works</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="fs-1 mb-2">📱</div>
              <h5>Report an Animal</h5>
              <p>Submit details and location of the injured animal</p>
            </div>
            <div className="col-md-4">
              <div className="fs-1 mb-2">🏠</div>
              <h5>Connect with NGOs</h5>
              <p>We notify nearby animal welfare organizations</p>
            </div>
            <div className="col-md-4">
              <div className="fs-1 mb-2">💚</div>
              <h5>Help Animals</h5>
              <p>Provide support and care for injured animals</p>
            </div>
          </div>
        </div>
        {/* Featured NGOs */}
        <div className="container text-center py-5">
        <div className="container text-center py-5">
          <h3 className="fw-bold mb-4">Featured NGOs</h3>
          <div className="row">
            {ngos.map((ngo) => (
              <div className="col-md-4" key={ngo.id}>
                <Ngo name={ngo.name} location={ngo.location} />
              </div>
            ))}
          </div>
        </div>

        
        <div className="container text-center py-5 bg-light">
        {/* Support Section */}
          <p>
            Your donations help provide medical care, food, and shelter for
            animals in distress.</p>
          </div>
        </div>
        <div className="container text-center py-5 bg-light">
          {/* Support Section */}
          <p>
            Your donations help provide medical care, food, and shelter for
            animals in distress.
          </p>
          <button className="btn btn-warning">Donate Now</button>
        </div>
      </div>
    </div>
  );
};


export default HomePage;
