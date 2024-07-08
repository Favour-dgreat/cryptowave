import logo from "../../assets/header/lg.png";
import styles from "./navbar.module.css";
import { RegularButton } from "../buttons";
import hamburger from "../../assets/header/hamburger.svg";
import { Link } from 'react-scroll';

import { useState } from "react";
import LoginPage from "../../pages/LoginPage";
function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    
    <>
    
      <div className={styles.navbar_container}>
        <div className={styles.navbar_inner}>
          <a href="/">
          <img src={logo} style={{cursor:"pointer"}}alt="devfest23" />
          </a>
          <div className={styles.navbar_ul}>
            <a href="/">
         
              How it works
            </a>

            <a href="/">
         
              Pricing 
            </a>

            <a href="/">
         
              About Us 
            </a>
            <a href="/">
         
            FAQs 
            </a>
            <a href="/">
         
              Contact Us
            </a>
           
          </div>
          <div>

            <a href="/signup" className={styles.sidee} >SignUp</a>
          {/* <Link
              to="/signup" 
            >
             Sign Up
            </Link> */}
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
          <Link
              to="ourprocess" smooth = {true} duration={500}
            >
              Our Process
            </Link>  

            <Link
              to="aboutus" smooth = {true} duration={500}
            >
              About 
            </Link>
            <Link
              to="track" smooth = {true} duration={500}
            >
             Track Your Delivery
            </Link>
           
          <RegularButton
            title="Get the app"
            className={styles.sidebar_button}
            url="#"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
