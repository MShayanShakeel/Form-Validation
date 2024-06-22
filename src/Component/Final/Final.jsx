import React, { useState } from "react";
import "../First/First.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar2 from "../Navbar/Navber2";

const Final = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar2 />
      <div className="First-main">
        <div className="First-second">
          <h2>Your Request for a Proposal Has Been Submitted!</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis
            gravida parturient urna tristique congue. Curabitur volutpat nulla
            convallis eget pellentesque. Luctus tellus eu ultrices egestas.
          </p>

          <button onClick={handleNavigate}> Return Home</button>
        </div>
      </div>
    </>
  );
};

export default Final;
