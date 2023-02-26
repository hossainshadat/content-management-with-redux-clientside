import React from "react";
import { NavLink } from "react-router-dom";
import "./DashHeader.css";

const DashHeader = () => {
  return (
    <div>
      <h1 className="text-center fw-bold topnav">
        <NavLink to="/" className="text-decoration-none text-black">
          {" "}
          Redux Store
        </NavLink>
      </h1>
    </div>
  );
};

export default DashHeader;
