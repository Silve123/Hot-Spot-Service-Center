// components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./authentication/firebaseConfig";
import { db } from "./authentication/firebaseConfig";
import { getDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import "./styling/Login.scss";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import google from "./assets/google-icon.png";

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regSurname, setRegSurname] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
  
      const user = userCredential.user;
      const userDocRef = doc(db, "Users", "Role");
      const userSnap = await getDoc(userDocRef);
  
      if (userSnap.exists()) {
        const userRole = userSnap.data()[user.email]?.role || "No role found";
        console.log("User Role:", userRole);
      }
  
      navigate("/book");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Register user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPassword
      );
  
      const user = userCredential.user;
  
      // Update Firebase profile with name and phone
      await updateProfile(user, {
        displayName: `${regName} ${regSurname}`,
      });
  
      // Save user details in Firestore under Users collection
      await setDoc(doc(db, "Users", "Role"), {
        [regEmail]: { regName, regPhone, role: "customer" },
      }, { merge: true });
  
      navigate("/book");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userDocRef = doc(db, "Users", "Role");
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists() && userSnap.data()[user.email]) {
        console.log("Existing user:", user.email);
        navigate("/book");
      } else {
        console.log("New user detected");
        // Save basic role info, but redirect to update profile
        await setDoc(
          userDocRef,
          {
            [user.email]: { role: "customer" },
          },
          { merge: true }
        );

        navigate("/update-profile");
      }
    } catch (error) {
      console.error("Google auth failed:", error);
    }
  };
  

  return (
    <div className="login">
      <div className="auth-container">
        <div className="auth-section login-section">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <a onClick={handleGoogleAuth}>
              <img src={google} className='icon'/>
            </a>
          </form>
        </div>

        {/* Registration Section */}
        <div className="auth-section register-section">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              value={regName}
              onChange={(e) => setRegName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Surname"
              value={regSurname}
              onChange={(e) => setRegSurname(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={regPhone}
              onChange={(e) => setRegPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={regEmail}
              onChange={(e) => setRegEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={regPassword}
              onChange={(e) => setRegPassword(e.target.value)}
              required
            />
            <button type="submit">Register</button>
            <a onClick={handleGoogleAuth}>
              <img src={google} className='icon'/>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
