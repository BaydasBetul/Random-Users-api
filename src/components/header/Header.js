//import React from "react";
import "./Header.css";
import { FaPhoenixSquadron } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="big-title">
        <p>
          Created by{" "}
          <FaPhoenixSquadron style={{ color: "orange", fontSize: "20px" }} />
          BetyByd
        </p>
        <h1>Random Users</h1>
      </div>
    </header>
  );
};

export default Header;
