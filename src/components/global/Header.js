import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import { siteLogo } from "../../global";

const Header = ({ header }) => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    function setFixed() {
      if (window.scrollY >= 100) {
        setFix(true);
      } else {
        setFix(false);
      }
    }

    window.addEventListener("scroll", setFixed);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
    <header className={fix ? "header navbar_fixed" : "header"}>
      <div className="container">
        <div className="row">
          <Navbar bg="None" expand="lg">
            <a className="navbar-brand" href="/">
              <img src={siteLogo.logo} alt={siteLogo.alt} />
            </a>
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarSupportedContent">
              <ul className="navbar-nav menu ms-lg-auto">
                {header.menu?.map((data, i) => (
                  <li className="nav-item" key={i}>
                    <Link
                      activeClass="active"
                      className="benefits nav-link"
                      to={data.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-60}
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
