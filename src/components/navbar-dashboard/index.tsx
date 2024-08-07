import { useState, useContext, useEffect } from "react";
import logo from "../../assets/header/lg.png";
import styles from "./navbar.module.css";
import { RegularButton } from "../buttons";
import hamburger from "../../assets/header/hamburger.svg";
import { Link } from 'react-scroll';
import { AuthContext } from '../../context/AuthProvider'; // Import your AuthContext
import { BellFill, PersonCircle,  CaretDownFill } from 'react-bootstrap-icons';

function NavbarDashboard() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userName, setUserName] = useState("Cara Liana Fuqua");
  const [userEmail, setUserEmail] = useState("caraliana.fuqua@gmail.com");

  const authContext = useContext(AuthContext); // Assuming AuthContext provides user information

  useEffect(() => {
    if (authContext?.user) {
      setUserName(authContext.user.displayName || "Cara Liana Fuqua");
      setUserEmail(authContext.user.email || "caraliana.fuqua@gmail.com");
    }
    console.log(authContext);
  }, [authContext]);

  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);

  return (
    <>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_inner}>
          <a href="/">
            <img src={logo} style={{ cursor: "pointer" }} alt="Cryptowave" />
          </a>
          <div className={styles.search_container}>
            <input type="text" placeholder="Search.." className={styles.search_input} />
            <button className={styles.search_button}>Q</button>
          </div>

          <div className={styles.user_info}>
          <BellFill style={{color:'black', lineHeight: '120px', fontSize: '20px', cursor: 'pointer'}}></BellFill> 
          <div className={styles.user_info1}>

            <span className={styles.user_name}>{userName}</span>
            <span className={styles.user_email}>{userEmail}</span>


            </div>
            <PersonCircle style={{color:'#4294ff', fontSize: '40px', cursor: 'pointer'}}></PersonCircle> 
            <CaretDownFill style={{color:'#000000', fontSize: '20px', cursor: 'pointer'}}></CaretDownFill> 

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
          <Link to="ourprocess" smooth={true} duration={500}>Our Process</Link>
          <Link to="aboutus" smooth={true} duration={500}>About</Link>
          <Link to="track" smooth={true} duration={500}>Track Your Delivery</Link>
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

export default NavbarDashboard;
