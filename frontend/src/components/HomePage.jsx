import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Ngo from "../assets/Ngo.jsx"; // Adjust the path as necessary
import Button from "../assets/Comps/button.jsx"; // Adjust the path as necessary

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
        <div id = ""className="container-fluid text-center text-center py-5 bg-light full-height">
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
              <button className="btn btn-danger">Report Now</button>
            </div>
            <div className="col-md-4">
              <div className="fs-1 mb-2">🏠</div>
              <h5>Connect with NGOs</h5>
              <p>We notify nearby animal welfare organizations</p>
              <button className="btn btn-danger">Find NGOs</button>
            </div>
            <div className="col-md-4">
              <div className="fs-1 mb-2">💚</div>
              <h5>Help Animals</h5>
              <p>Provide support and care for injured animals</p>
              <button className="btn btn-danger">Get Involved</button>
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
          <h3 className="fw-bold mb-4">Join Us in Making a Difference</h3>
          <p className="text-muted">
            Together, we can create a world where every animal is cared for and loved.
          </p>
          <Button className="btn btn-danger">Get Involved</Button>
        </div>
        </div>
      </div>
      <footer className="bg-warning py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} PetMate. All rights reserved.
        </div>
      </footer>
    </div>
  );
};


export default HomePage;
