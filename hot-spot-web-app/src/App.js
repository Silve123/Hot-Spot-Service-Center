// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/authentication/AuthContext";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import PricingPage from "./components/PricingPage";
import GeneralPage from "./components/GeneralPage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import BookPage from "./components/BookPage";
import TrackPage from "./components/TrackPage";
import "./App.scss";
import UpdateProfilePage from "./components/UpdateProfilePage";

const ProtectedRoute = ({ element }) => {
  const { user } = useAuth();
  return user ? element : <Navigate to="/authenticate" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar />
          <div className="routes"></div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/terms/general" element={<GeneralPage />} />
            <Route path="/authenticate" element={<Login />} />

            <Route path="/update-profile" element={<ProtectedRoute element={<UpdateProfilePage/>} />} />
            <Route path="/book" element={<ProtectedRoute element={<BookPage />} />} />
            <Route path="/track" element={<ProtectedRoute element={<TrackPage />} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
