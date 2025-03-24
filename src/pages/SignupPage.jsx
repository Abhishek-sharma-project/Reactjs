import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="container-input">
      <h2 className="login">Create your PopX account</h2>
      <div class="coolinput">
        <label for="input" class="text">
          Full Name
        </label>
        <input type="text" placeholder="Marry Doe" name="input" class="input" />
        <label for="input" class="text">
          Phone number
        </label>
        <input type="text" placeholder="Marry Doe" name="input" class="input" />
        <label for="input" class="text">
          Email address
        </label>
        <input type="text" placeholder="Marry Doe" name="input" class="input" />
        <label for="input" class="text">
          Password
        </label>
        <input type="text" placeholder="Marry Doe" name="input" class="input" />
        <label for="input" class="text">
          Company Name
        </label>
        <input type="text" placeholder="Marry Doe" name="input" class="input" />
      </div>

      <div className="radio-group">
        <p className="btnclick">Are you an Agency?*</p>
        <div className="radio-btn">
          <input type="radio" name="agency" /> Yes
          <input type="radio" name="agency" /> No
        </div>
      </div>
      <Link to="/profile" className="btn blue margin">
        Create Account
      </Link>
    </div>
  );
};

export default SignupPage;
