import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.svg";

function Header() {
  return (
    <div className="header">
      <Link to="./">
        <img className="headerLogo" src={Logo}></img>
      </Link>

      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        <Link to="./search">
          <SearchIcon className="headerSearchIcon" />
        </Link>
      </div>

      <div className="headerNav">
        <Link to="./login">
          <div className="headerOption">
            <div className="headerOptionLine1">
              <PersonRoundedIcon />
            </div>
            <span className="headerOptionLine2"> Sign In</span>
          </div>
        </Link>
        <Link to="./products">
          <div className="headerOption">
            <div className="headerOptionLine1">
              <RemoveRedEyeIcon />
            </div>
            <span className="headerOptionLine2"> Product</span>
          </div>
        </Link>
        <Link to="./contact">
          <div className="headerOption">
            <div className="headerOptionLine1">
              <AlternateEmailRoundedIcon />
            </div>
            <span className="headerOptionLine2"> Contact</span>
          </div>
        </Link>
        <Link to="./about">
          <div className="headerOption">
            <div className="headerOptionLine1">
              <InfoOutlinedIcon />
            </div>

            <span className="headerOptionLine2"> About Us</span>
          </div>
        </Link>
        <Link to="./cart">
          <div className="headerOption">
            <div className="headerOptionLine1">
              <ShoppingBagRoundedIcon />
            </div>
            <span className="headerOptionLine2"> Shopping cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
