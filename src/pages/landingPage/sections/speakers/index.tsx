import styles from "./speakers.module.css";
// import paperless from "../../../../assets/sponsor/paperless.png";

//  Speaker Images

import speaker1 from "../../../../assets/pictures/Ellipse 1.png";

import speaker2 from "../../../../assets/pictures/Ellipse 2.png";



function Speakers() {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.paragraph}>What our Customers are saying? </h1>
        <div className={styles.flex_container}>
        <div className={styles.testimonial}>
        <img src={speaker2} alt="Grace Watson" className={styles.avatar} />
        <h3 className={styles.name}>Grace Watson</h3>
        <p className={styles.text}>
          The website's intuitive design and user-friendly interface make navigating the world of cryptocurrency a breeze, even for beginners.
        </p>
      </div>
      <div className={styles.testimonial}>
        <img src={speaker1} alt="George Carter" className={styles.avatar} />
        <h3 className={styles.name}>George Carter</h3>
        <p className={styles.text}>
          The dashboard's clean layout and insightful charts have made managing my investments more efficient and effective. Plus, their top-notch security measures give me peace of mind.
        </p>
      </div>
      </div>
      </section>

      {/* sponsors */}
     
    </>
  );
}

export default Speakers;
