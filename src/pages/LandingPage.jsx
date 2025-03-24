import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <h2 className="heading">Welcome to PopX</h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <Link to="/login" className="btn blue">
        Create Account
      </Link>
      <Link to="/signup" className="btn gray">
        Already Registered? Login
      </Link>
    </div>
  );
};

export default LandingPage;
