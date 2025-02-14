import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./styling/ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_kw2s9ep";
    const templateID = "template_95c225e";
    const publicKey = "vIPQvImOBX2swxbs_";

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>CONTACT US</h2>
        <h1 className="title">Send Us a Message</h1>
        <p className="description">
          Contact us today concerning our services, customer queries, or
          anything on your mind! We will get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
