import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
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
              <h5>Get Help & Support</h5>
              <p>NGOs provide rescue, medical care, and recovery</p>
            </div>
          </div>
        </div>

        {/* Featured NGOs */}
        <div className="container text-center py-5">
          <h3 className="fw-bold mb-4">Featured NGOs</h3>
          <div className="row">
            {["Hope for Paws", "Animal Aid Unlimited", "Paws Foundation"].map(
              (ngo, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card p-3">
                    <div className="card-body">
                      <h5 className="card-title">{ngo}</h5>
                      <p className="card-text">Location</p>
                      <button className="btn btn-success">View Details</button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Support Section */}
        <div className="container text-center py-5 bg-light">
          <h3 className="fw-bold">Support Our Mission</h3>
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
