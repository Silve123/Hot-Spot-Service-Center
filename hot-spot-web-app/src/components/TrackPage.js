import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./authentication/firebaseConfig";
import "./styling/UsersPage.scss";

const TrackPage = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/authenticate");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="main-container-top-container">
        <h1>Track</h1>
        <p>{user ? user.email : "No user logged in"}</p> {/* Display the user's email */}
        <a onClick={handleLogout}>Logout</a>
      </div>
      <p>Trackings</p>
    </div>
  );
};

export default TrackPage;
