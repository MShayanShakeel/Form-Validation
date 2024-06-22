import React from "react";
import "./Navbar.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="Navbar-main">
        <div className="Navbar-Second">
          <span className="navbar-span">
            <IoMdArrowRoundBack /> <h5>Go Back</h5>
          </span>

          <span className="navbar-span">
            <h5>Exit</h5>
            <MdCancel />
          </span>
        </div>
      </div>
      <hr className="navbar-hr navbar-hr2" />
    </>
  );
};

export default Navbar;
