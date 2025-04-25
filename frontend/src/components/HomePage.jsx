import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Ngo from "../assets/Ngo.jsx"; // Adjust the path as necessary
import Button from "../assets/Comps/button.jsx"; // Adjust the path as necessary
import { Carousel } from 'react-bootstrap'; // Import Carousel
import NavBar from "./NavBar.jsx"; // Import NavBar
const HomePage = () => {
  const ngos = [
    { id: 1, name: "Animal Aid Unlimited", location: "Udaipur, India" },
    { id: 2, name: "Blue Cross of India", location: "Chennai, India" },
    { id: 3, name: "Wildlife SOS", location: "Agra, India" }
  ];
  const animalImages = [
    "https://image.petmd.com/files/styles/978x550/public/2024-06/how-to-tell-if-a-dog-is-in-pain.jpg?w=2048&q=75", // Example Placeholder 1
    "https://imgs.search.brave.com/CvuYKUZIbovfQViZ4A9WB1cm16QWl4sF3FZNDIffGac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2RjLmdvdi9tYWQt/Y293L21lZGlhL2lt/YWdlcy8yMDI0LzA1/L0Nvd3NfR2V0dHlJ/bWFnZXMtMTQ3MDY3/NzU2Ni5qcGc",
    "https://imgs.search.brave.com/zpMQ8Zh352iUGIl01R83_0ajdgwl8eF6XFajwHtjKXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU1/Yzk0NWUwZTRiMDQz/ODZmYjlmODE2Mi8x/NTk0NzUyNzAxODkw/LTFMU0xOS01DM1Uz/ODhXUzNZRTJXL2Nh/dC1pbmp1cmVkLmpw/Zw" // Example Placeholder 3
  ];
  return (
    
    <div className="maincontainer">
      
       <Carousel interval={3000} pause={false}> {/* Adjust interval as needed (milliseconds) */}
        {animalImages.map((imgSrc, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              // Add height control for consistency, e.g., style={{ maxHeight: '500px', objectFit: 'cover' }}
              style={{ maxHeight: '50vh', objectFit: 'cover', objectPosition: 'center' }}
              src={imgSrc}
              alt={`Slide ${index + 1}`}
            />
          
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        {/* Hero Section */}
        <div id = ""className="container-fluid text-center text-center py-5 bg-light full-height">
          <h1 className="fw-bold">Help Injured Animals in Your Area</h1>
          <p className="text-muted">
            Connecting animals in need with people who care and local NGOs
          </p>
          <button className="btn btn-danger" onClick={() => navigate('/report')}>Report an Animal in Need</button>
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
              <button className="btn btn-danger" onClick={() => navigate('/report')} >Report Now</button>
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
          <button className="btn btn-danger">Donate Us</button>
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
