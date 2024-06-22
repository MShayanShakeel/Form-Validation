import React, { useEffect, useState } from "react";
import "../First/First.css";
import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar1 from "../Navbar/Navber1";

const Second = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textarea, setTextarea] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (phone.length < 8 || !/^\d+$/.test(phone)) {
      newErrors.phone =
        "Phone number must be at least 8 digits long and contain only numbers";
    }

    const wordCount = textarea.split(/\s+/).filter((word) => word).length;
    if (wordCount < 10) {
      newErrors.textarea = "Text area must contain at least 10 words";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully");
    } else {
      setErrors(newErrors);
    }
  };

  const handleNavigate = () => {
    try {
      validateForm();
    } catch (error) {
      navigate("/final");
      console.log("Form submitted successfully");
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="First-main">
        <div className="First-second">
          <h2>Step # 2</h2>

          <h3>Details</h3>
          <p>
            We’re thrilled at the opportunity to help you grow your business
            online. Please let us know the best way to reach you.
          </p>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <div className="Navbar-Second">
            <div className="margin">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
              <label>Phone Nuumber</label>

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
          </div>

          <label>Anything else you’d like to share?</label>
          <textarea
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            rows={6}
          ></textarea>
          {errors.textarea && <p className="error">{errors.textarea}</p>}
          <button onClick={handleNavigate}>Send Request</button>

          <p>We promise never to share your information or spam your inbox</p>
        </div>
      </div>
    </>
  );
};

export default Second;
