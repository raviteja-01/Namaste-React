import { LOGO_URL } from "../utilis/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const btnNameToggle = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button className="login" onClick={() => btnNameToggle()}>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
