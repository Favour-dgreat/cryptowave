import { useState, useEffect } from "react";
import logo from "../../assets/header/lg.png";
import logo1 from "../../assets/header/image 1 (1).png"
import styles from "./navbar.module.css";
import { RegularButton } from "../buttons";
import hamburger from "../../assets/header/Group 1 (1).png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_inner}>
          <a href="/">
        
            <img src={isMobile ? logo1 : logo} style={{ cursor: "pointer" }} alt="devfest23" className={styles.mylogo} />
          </a>
          <div className={styles.navbar_ul}>
            <a href="/">How it works</a>
            <a href="/">Pricing</a>
            <a href="/">About Us</a>
            <a href="/">FAQs</a>
            <a href="/">Contact Us</a>
          </div>
          <RegularButton
                title="Sign Up"
                className={styles.navbar_buttons}
                href='/signup'
              />
          <div>
            
            <a href="/signup" className={styles.sidee}>SignUp</a>
            <a href="/login">
              <RegularButton
                title="Login"
                className={styles.navbar_button}
              />
            </a>
            <img
              src={hamburger}
              className={styles.navbar_hamburger}
              onClick={openNav}
              alt="menu"
            />
          </div>
        </div>
      </div>

      <div
        className={`${styles.sidenav} ${
          isNavOpen ? `${styles.sidenav_show}` : ''
        }`}
      >
        <div className={styles.sidenav_inner}>
          <a
            href="javascript:void(0)"
            className={styles.closebtn}
            onClick={closeNav}
          >
            &times;
          </a>

          <a href="/">How it works</a>
            <a href="/">Pricing</a>
            <a href="/">About Us</a>
            <a href="/">FAQs</a>
            <a href="/">Contact Us</a>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
