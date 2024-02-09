import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <img src={""} alt={""} /> */}
          <h1>Soccer Stats</h1>
        </li>
      </ul>
      <form className="navForm">
        <input placeholder="Search player or team..." type="text" />
      </form>
    </nav>
  );
};

export default Navbar;
