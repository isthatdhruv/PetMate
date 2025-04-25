import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Ngo from "../assets/Ngo.jsx"; // Adjust the path as necessary
// import Button from "../assets/Comps/button.jsx"; // Adjust the path as necessary
import { Carousel } from 'react-bootstrap'; // Import Carousel
import NavBar from "./NavBar.jsx"; // Import NavBar

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const ngos = [
    { id: 1, name: "Animal Aid Unlimited", location: "Udaipur, India" },
    { id: 2, name: "Blue Cross of India", location: "Chennai, India" },
    { id: 3, name: "Wildlife SOS", location: "Agra, India" }
  ];

  const animalImages = [
    {
      src: "https://image.petmd.com/files/styles/978x550/public/2024-06/how-to-tell-if-a-dog-is-in-pain.jpg?w=2048&q=75",
      alt: "Dog in need of care"
    },
    {
      src: "https://imgs.search.brave.com/CvuYKUZIbovfQViZ4A9WB1cm16QWl4sF3FZNDIffGac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2RjLmdvdi9tYWQt/Y293L21lZGlhL2lt/YWdlcy8yMDI0LzA1/L0Nvd3NfR2V0dHlJ/bWFnZXMtMTQ3MDY3/NzU2Ni5qcGc",
      alt: "Cow in need of help"
    },
    {
      src: "https://imgs.search.brave.com/zpMQ8Zh352iUGIl01R83_0ajdgwl8eF6XFajwHtjKXk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU1/Yzk0NWUwZTRiMDQz/ODZmYjlmODE2Mi8x/NTk0NzUyNzAxODkw/LTFMU0xOS01DM1Uz/ODhXUzNZRTJXL2Nh/dC1pbmp1cmVkLmpw/Zw",
      alt: "Injured cat needing care"
    }
  ];

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="maincontainer" role="main">
      <Carousel interval={3000} pause={false}>
        {animalImages.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              style={{ maxHeight: '50vh', objectFit: 'cover', objectPosition: 'center' }}
              src={img.src}
              alt={img.alt}
              onLoad={handleImageLoad}
              loading="lazy"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="container-fluid text-center py-5 bg-light">
        <h1 className="fw-bold" aria-label="Help Injured Animals">Help Injured Animals in Your Area</h1>
        <p className="text-muted">
          Connecting animals in need with people who care and local NGOs
        </p>
        <button 
          className="btn btn-danger px-4 py-2"
          onClick={() => navigate('/report')}
          aria-label="Report an animal in need"
        >
          Report an Animal in Need
        </button>
      </div>

      <div className="container text-center py-5 bg-light">
        <h2 className="fw-bold mb-4">How It Works</h2>
        <div className="row g-4">
          {[
            {
              icon: "📱",
              title: "Report an Animal",
              description: "Submit details and location of the injured animal",
              action: () => navigate('/report'),
              buttonText: "Report Now"
            },
            {
              icon: "🏠",
              title: "Connect with NGOs",
              description: "We notify nearby animal welfare organizations",
              action: () => navigate('/ngos'),
              buttonText: "Find NGOs"
            },
            {
              icon: "💚",
              title: "Help Animals",
              description: "Provide support and care for injured animals",
              action: () => navigate('/get-involved'),
              buttonText: "Get Involved"
            }
          ].map((step, index) => (
            <div className="col-md-4" key={index}>
              <div className="fs-1 mb-2">{step.icon}</div>
              <h3 className="h5">{step.title}</h3>
              <p>{step.description}</p>
              <button 
                className="btn btn-danger"
                onClick={step.action}
                aria-label={step.buttonText}
              >
                {step.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center py-5">
        <h2 className="fw-bold mb-4">Featured NGOs</h2>
        <div className="row g-4">
          {ngos.map((ngo) => (
            <div className="col-md-4" key={ngo.id}>
              <Ngo name={ngo.name} location={ngo.location} />
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center py-5 bg-light">
        <h2 className="fw-bold mb-4">Join Us in Making a Difference</h2>
        <p className="text-muted mb-4">
          Together, we can create a world where every animal is cared for and loved.
        </p>
        <button 
          className="btn btn-danger px-4 py-2"
          onClick={() => navigate('/donate')}
          aria-label="Donate to support our cause"
        >
          Donate Now
        </button>
      </div>

      <footer className="bg-warning py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} PetMate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
