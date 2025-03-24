import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container-input">
      <h2 className="login">Signin to your PopX account</h2>
      <p className="logintwo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div class="coolinput">
        <label for="input" class="text">
          Email Address
        </label>
        <input
          type="text"
          placeholder="Enter email address"
          name="input"
          class="input"
        />
        <label for="input" class="text">
          Password
        </label>
        <input
          type="text"
          placeholder="Enter password"
          name="input"
          class="input"
        />
      </div>
      <Link to="/profile">
        <button className="btn-login">
          <p className="btn-logintwo">Login</p>
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;
