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

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!phone) newErrors.phone = "Phone number is required";
    else if (!/^\d+$/.test(phone)) newErrors.phone = "Phone number is invalid";
    if (!textarea) newErrors.textarea = "Please share something";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNavigate = () => {
    if (validate()) {
      navigate("/final");
      console.log("Form submitted");
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
          {errors.name && <span className="error">{errors.name}</span>}

          <div className="Navbar-Second">
            <div className="margin">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <label>Phone Nuumber</label>

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          <label>Anything else you’d like to share?</label>
          <textarea
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            rows={6}
          ></textarea>
          {errors.textarea && <span className="error">{errors.textarea}</span>}

          <button onClick={handleNavigate}>Send Request</button>

          <p>We promise never to share your information or spam your inbox</p>
        </div>
      </div>
    </>
  );
};

export default Second;
