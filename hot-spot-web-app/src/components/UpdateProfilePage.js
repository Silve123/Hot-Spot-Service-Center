import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./authentication/firebaseConfig";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./authentication/firebaseConfig";
import "./styling/Login.scss";

const UpdateProfilePage = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name || !phone) return alert("Please fill in all fields");

    try {
      // Update Firebase user profile
      await updateProfile(user, { displayName: name });

      // Save updated info to Firestore
      const userDocRef = doc(db, "Users", "Role");
      await setDoc(
        userDocRef,
        {
          [user.email]: { name, phone, role: "customer" },
        },
        { merge: true }
      );

      console.log("Profile updated successfully");
      navigate("/book");
    } catch (error) {
      console.error("Profile update failed:", error);
    }
  };

  return (
    <div className="update">
      <div className="update-section">
        <h2>Update Your Profile</h2>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit">Save Profile</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
