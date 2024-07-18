import styles from "./footer.module.css";
// import logo from "../../assets/footer/IMG_3152 2 (2).png";




const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column} >
        <h3>Subscribe to our newsletter</h3>
        <p>Stay upright in the crypto world and be the first to know</p>
        <div className={styles.subscribeContainer}>
          <input
            type="email"
            placeholder="Enter your email Address"
            className={styles.emailInput}
          />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
      <div className={styles.column} >
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Get in touch</h3>
        <a href="https://www.cryptochainwave.com/" className={styles.mail} >https://www.cryptochainwave.com/</a>
        <br></br>
        <p> &copy; 2024 Cryptowave Limited, All rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
