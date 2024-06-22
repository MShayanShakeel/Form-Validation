import React, { useEffect, useState } from "react";
import "./First.css";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

const First = () => {
  const [selectedLabel, setSelectedLabel] = useState("");

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("second");
  };
  useEffect(() => {
    const label = localStorage.getItem("selectedLabel");
    if (label) {
      setSelectedLabel(label);
    }
  }, []);

  console.log(selectedLabel, "selectedLabel");
  return (
    <>
      <Navbar />
      <div className="First-main">
        <div className="First-second">
          <h2>Step # 1</h2>
          <h3>What is your monthly digital marketing budget?</h3>
          <label className="lable" onClick={() => handleNavigate("$1,000/mo")}>
            $1,000/mo
          </label>
          <label
            className="lable"
            onClick={() => handleNavigate("$1,000 - $2,000")}
          >
            $1,000 - $2,000
          </label>
          <label
            className="lable"
            onClick={() => handleNavigate("$2,000 - $3,000")}
          >
            $2,000 - $3,000
          </label>
          <label
            className="lable"
            onClick={() => handleNavigate("$3,000 - $4,000")}
          >
            $3,000 - $4,000
          </label>
          <label
            className="lable"
            onClick={() => handleNavigate("$4,000 - $5,000")}
          >
            $4,000 - $5,000
          </label>
          <label
            className="lable"
            onClick={() => handleNavigate("$5,000 - $6,000")}
          >
            $5,000 - $6,000
          </label>
        </div>
      </div>
    </>
  );
};

export default First;
