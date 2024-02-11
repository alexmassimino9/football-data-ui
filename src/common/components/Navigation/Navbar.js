import React from "react";
import { useGlobalContext } from "../../../context/AppContext";

const Navbar = () => {
  const { setIsLoading } = useGlobalContext();

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

      <button
        type="text"
        className="btn-test"
        onClick={() => setIsLoading(false)}
      >
        Stop loading
      </button>
    </nav>
  );
};

export default Navbar;
