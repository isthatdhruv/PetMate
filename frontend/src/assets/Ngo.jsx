import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Ngo = ({ name, location }) => {
  return (
    <div className="card p-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{location}</p>
        <button className="btn btn-success">View Details</button>
      </div>
    </div>
  );
};

export default Ngo;