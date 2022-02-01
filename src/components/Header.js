import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SortIcon from "@material-ui/icons/Sort";
import { AppBar, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "../css/Header.css";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { Link as Scroll } from "react-scroll";
import useWindowPosition from "../hooks/useWindowPosition";
import Grow from "@material-ui/core/Grow";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 0,
    // margin: 10,
    color: "white",
  },
  icon: {
    color: "#fff",
    fontSize: "1rem",
  },
  expand: {
    color: "rgba(256,256,256, 0.9)",
    fontSize: "3rem",
  },
});

const Header = ({ activeSection, view }) => {
  const classes = useStyles();
  const nav_dark = useWindowPosition("header");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header" id="header">
      {/* <div className={click ? "nav-menu active" : "nav-menu"}>
            </div> */}

      <Grow in={true} timein={1000} timeout={2000}>
        <ul
          className={
            click
              ? `header__nav active`
              : `header__nav ${nav_dark ? "dark_bg" : ""}`
          }
          id="header__nav"
        >
          <div className="filler"></div>
          <Scroll to="header" smooth={true}>
            <li
              className={`${activeSection === "header" ? "selected" : ""}`}
              href="home"
              onClick={handleClick}
            >
              HOME
            </li>
          </Scroll>
          <Scroll to="about" smooth={true}>
            <li
              className={`${activeSection === "about" ? "selected" : ""}`}
              href="about"
              onClick={handleClick}
            >
              ABOUT
            </li>
          </Scroll>
          <Scroll to="skills" smooth={true}>
            <li
              className={`${activeSection === "skills" ? "selected" : ""}`}
              href="skills"
              onClick={handleClick}
            >
              SKILLS
            </li>
          </Scroll>
          <Scroll to="portfolio" smooth={true}>
            <li
              className={`${activeSection === "portfolio" ? "selected" : ""}`}
              href="projects"
              onClick={handleClick}
            >
              PROJECTS
            </li>
          </Scroll>
          <Scroll to="contact" smooth={true}>
            <li
              className={`${activeSection === "contact" ? "selected" : ""}`}
              href="contact"
              onClick={handleClick}
            >
              CONTACT
            </li>
          </Scroll>
        </ul>
      </Grow>

      {view ? (
        <div
          className={`menu-bar ${
            activeSection === "header" ? "disappear" : ""
          }`}
          onClick={handleClick}
        >
          <Scroll to="header" smooth={true}>
            <HomeIcon className="homeIcon" />
          </Scroll>
          {click ? (
            <CloseIcon className="closeIcon" />
          ) : (
            <MenuIcon className="menuIcon" />
          )}
        </div>
      ) : (
        ""
      )}

      <Grow in={true} timeout={1800}>
        <div className="header__bannerText">
          <h1 className="name">I'm Akshat Wagadre.</h1>
          <h2>
            I'm a ReactJS Developer && an ML Enthusiast with a passion for
            designing elegant and efficient user experiences.
          </h2>
          {/* <h2>I'm a ReactJS Developer && an ML Enthusiast. Full Stack React Developer by Day, Freelancer by Night.</h2> */}
        </div>
      </Grow>

      <Scroll className="header__icon" to="about" smooth={true}>
        <IconButton>
          <ArrowDropDownCircleIcon className={classes.expand} />
        </IconButton>
      </Scroll>
    </div>
  );
};

export default React.memo(Header);

{
  /* <Button 
    className={classes.button}
    size="large"
    variant="contained"
    color="primary">
    Crazy shit
</Button> */
}
{
  /* <AppBar className={classes.appBar}>
    <h1>My Portfolio</h1>
    <IconButton>
        <SortIcon className={classes.icon}/>
    </IconButton>
</AppBar> */
}
