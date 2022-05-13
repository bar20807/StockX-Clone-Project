import React, { useEffect, useState } from "react";
import "./style.css";
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <header className={`header ${show && "header__white"}`}>
      <div className="logo">
        <svg
          viewBox="0 0 201 40"
          focusable="false"
          class="chakra-icon css-rvq6il"
        >
          <g>
            <path d="M186.401 27.5001L201.001 40V30L189.328 20.0056L201.001 10V0L180.601 17.4859V12.4999L166.001 0V10L177.674 19.9944L166.001 30V40L186.401 22.5144V27.5001Z"></path>
            <path d="M20.3007 16.8L13.7506 15.55C10.1005 14.85 8.50062 14 8.50062 12C8.50062 9.19995 11.6506 7.74994 15.6006 7.74994C19.7506 7.74994 23.4506 9.34994 24.2506 12.75H31.2508C30.4508 6.25002 24.6007 2 15.6006 2C7.30062 2 0.750616 5.65011 0.750616 12.2501C0.750616 18.0001 5.65063 20.9001 12.2006 22.1501L18.7506 23.4001C22.4007 24.1001 24.2506 25.2501 24.2506 27.5001C24.2506 30.55 20.8506 32.2501 16.6506 32.2501C11.5006 32.2501 8.05063 29.7501 7.25063 26.0001H0.000610352C1.0506 33.5001 6.95062 38.0001 16.6506 38.0001C25.3006 38.0001 32.0006 34.5001 32.0006 27.25C32.0007 20.85 26.8506 18.05 20.3007 16.8Z"></path>
            <path d="M48.6507 6.25001V2.5H41.4007V5.25001C41.4007 8.49998 39.9007 10 36.6507 10H34.6007V15.5H40.3507V29.0001C40.3507 35.0001 43.3007 37.5001 50.3007 37.5001H56.2507V32H50.9507C48.4507 32 47.6007 31.25 47.6007 29V15.5H56.2507V10H45.5007L48.6507 6.25001Z"></path>
            <path d="M111.351 32.5C106.101 32.5 102.751 28.8 102.751 23.8C102.751 18.8 106.101 15.1 111.351 15.1C115.401 15.1 118.301 17.35 119.051 20.1H126.201C124.901 13.6 119.251 9.59998 111.351 9.59998C101.901 9.59998 95.3508 15.3 95.3508 23.8C95.3508 32.3 101.901 38 111.351 38C119.251 38 125.451 34 126.451 27.25H119.301C118.551 29.75 115.851 32.5 111.351 32.5Z"></path>
            <path d="M75.3507 9.59998C65.6008 9.59998 59.3507 15.3 59.3507 23.8C59.3507 32.3 65.6007 38 75.3507 38C85.1007 38 91.3508 32.3 91.3508 23.8C91.3508 15.3 85.1008 9.59998 75.3507 9.59998ZM75.3507 32.5C70.1007 32.5 66.7507 28.8 66.7507 23.8C66.7507 18.8 70.1007 15.1 75.3507 15.1C80.6007 15.1 83.9508 18.8 83.9508 23.8C83.9508 28.8 80.6008 32.5 75.3507 32.5Z"></path>
            <path d="M145.151 22.9001L160.201 10.0001H150.451L138.151 20.8001V2.5H130.901V37.5001H138.151V28.9001L142.498 25.1742L153.051 37.5001H162.251L149.751 22.9001H145.151Z"></path>
          </g>
        </svg>
      </div>
      <form>
      <SearchIcon/>
        <input
          placeholder="Search for brand, color, etc."
          type="text"
          name="search"
          id="search-bar"
        />
      </form>
      <ul>
        <li>Browse</li>
        <li>News</li>
        <li>App</li>
        <li>About</li>
        <li>Help</li>
        <li>Login</li>
        <li>
          <button className="Sign_Up" id="nav-signup" type="button">
            <a class="text">Sign Up</a>
          </button>
        </li>
        <li>
          <button className="Sell" type="button">
            Sell
          </button>
        </li>
      </ul>
    </header>
  );
};
export default Header;
