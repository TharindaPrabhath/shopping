import "../components/Nav.css";

import * as FaIcon from "react-icons/fa";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <div className="left">
          <h2>
            S<span>hopping</span>
          </h2>
        </div>
        <div className="middle">
          <input placeholder={"search here..."} />
          <FaIcon.FaSearch className={"search-icon"} size={24} />
        </div>
        <div className="right">
          <a href="">
            <FaIcon.FaCartPlus size={24} />
            <label>2</label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
