import React from "react";
import logo from "../logo.png";
import { Link, redirect } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import "../Styles/Header.scss";

const Header = () => {
  let logoClickHandel = () => {
    // <Link to="/"></Link>;
  };
  return (
    <nav className="header">
      <img onClick={logoClickHandel} src={logo} alt="logo" />
      <div className="">
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyadded">Recently Added</Link>
        <Link to="/mylist">My List</Link>
      </div>
      <ImSearch />
    </nav>
  );
};

export default Header;
