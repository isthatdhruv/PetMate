import React from "react";
import { Heart, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import Footer from "../assets/Comps/Footer.jsx";
const DonationPage = () => {
  const rescueLeaders = [
    { name: "Rahav Santos", image: "/api/placeholder/200/200" },
    { name: "Rayet Penniman", image: "/api/placeholder/200/200" },
    { name: "Coreson Arenas", image: "/api/placeholder/200/200" },
    { name: "Mayce Estanislao", image: "/api/placeholder/200/200" },
    { name: "Anabella Lupin", image: "/api/placeholder/200/200" },
  ];

  const services = [
    {
      title: "Animal Rescue",
      description:
        "We go on quests to rescue and recover any dog or cat roaming our streets.",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Veterinary Services",
      description:
        "We provide free veterinary treatment to strays, rescues, and pets.",
      image: "/api/placeholder/300/200",
    },
    {
      title: "Fostering and Adoption",
      description:
        "We help our rescues find their temporary and forever homes.",
      image: "/api/placeholder/300/200",
    },
  ];

  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="position-relative text-center text-white">
        <img
          src="/api/placeholder/1200/800"
          alt="Dog high-fiving person"
          className="img-fluid w-100"
          style={{ height: "80vh", objectFit: "cover" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-center">
          <h1 className="display-4 fw-bold mb-3">
            Our four-legged friends need your help.
          </h1>
          <p className="lead mb-4">
            Quest for Paws Animal Rescue and Sanctuary
          </p>
          <button className="btn btn-light btn-lg px-5">
            Sponsor a rescue today
          </button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">
            Pets change our lives. We're on a quest to change theirs.
          </h2>
          <p className="text-muted">
            Quest for Paws Animal Rescue and Sanctuary is a nonprofit
            organization dedicated to rescuing, rehabilitating, and rehoming
            abandoned, sick, and injured animals around our city. With your
            help, we hope to make a difference in the lives of these wonderful
            animals.
          </p>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How We Help</h2>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{service.title}</h5>
                    <p className="card-text text-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section
        className="py-5 text-white position-relative"
        style={{ backgroundColor: "#343a40" }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4">How You Can Help</h2>
          <p className="mb-4">
            There are countless ways you can help us in our quest for paws. You
            can make a donation (one-time or monthly), join our fundraiser
            events, or volunteer your time and talents as a foster parent.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-outline-light px-4">Donate</button>
            <button className="btn btn-outline-light px-4">Join</button>
            <button className="btn btn-outline-light px-4">Volunteer</button>
          </div>
        </div>
      </section>

      {/* Meet Our Leaders */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Meet Our Intrepid Rescue Leaders
          </h2>
          <div className="row g-4">
            {rescueLeaders.map((leader, index) => (
              <div key={index} className="col-6 col-md-4 text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="rounded-circle mb-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="fw-bold">{leader.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <Footer/>
    </div>
  );
};

export default DonationPage;
