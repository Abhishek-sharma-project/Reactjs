import React from "react";
const ProfilePage = () => {
  return (
    <div className="container-input">
      <div className="profile-container">
        <h2 className="profile">Account Settings</h2>
      </div>
      <img src="/Group 1585.svg" alt="Icon" className="profile-icon" />
      <div className="profile-info">
        <img src="Ellipse 114@2x.png" alt="Profile" />
        <p className="profilename">Marry Doe</p>
        <p className="profileemail">Marry@Gmail.Com</p>
      </div>
      <p className="profileparagraph">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      <div class="content"></div>
    </div>
  );
};

export default ProfilePage;
