import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 50)} 
        {currentUser.accessToken.substr(currentUser.accessToken.length - 50)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
        <strong>Email:</strong> {currentUser.email}
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
    </div>
  );
};

export default Profile;
