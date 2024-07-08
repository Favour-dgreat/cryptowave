import { RegularButton } from "../../../../components/buttons";

import styles from "./showcase.module.css";
import sideImg from "../../../../assets/pictures/side.png";

function Showcase() {
  return (
    <div className={styles.showcase_container}>
     

      <div className={styles.showcase_inner}>
      <div className={styles.showcase_inner1}>

        <h1 data-aos="zoom-out" data-aos-delay="500">
        Ride the wave of Digital Currency Innovation
        </h1>
        <p data-aos="fade-down" data-aos-duration="400" className={styles.delivering}>
        Experience secure and seamless cryptocurrency trading with our intuitive platform. Empower yourself to manage and grow your digital assets effortlessly, all while enjoying low fees and top-notch support.
        </p>

        <div
          // data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
        >
          <RegularButton
            title="Get Started Now"
            className={styles.showcase_button}
            url="#"
          />
        </div>
        </div>
        <div className={styles.showcase_inner2}>
        <img className={styles.sideImage} src={sideImg} alt="img" />
        </div>

      </div>
    </div>
  );
}

export default Showcase;
