import Image from '../../../../components/images';
import styles from './thisyear.module.css';
import thisyear from '../../../../assets/pictures/Rectangle 7.png';

import thisyear1 from '../../../../assets/pictures/Frame 10.png';
import thisyear2 from '../../../../assets/pictures/Frame 11 (1).png';
import thisyear3 from '../../../../assets/pictures/Frame 12.png';


const ThisYear = () => {
  return (
    <div className={styles.thisyear_container} >
      <div className={styles.thisyear_inner}>
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
         Why CryptoWave
        </h1>
        <p className={styles.thisyear_p}>At CryptoWave, we're committed to transforming the way you interact with digital currencies. Founded by a team of passionate tech enthusiasts and financial experts, our mission is to make cryptocurrency trading accessible, secure, and straightforward for everyone. </p>
        <Image src={thisyear} className={styles.sideImage}/>

          <div className={styles.thisyear_flex_left}>
            <Image className={styles.cards} src={thisyear1} />
            <Image className={styles.cards} src={thisyear2} />
            <Image className={styles.cards} src={thisyear3} />
    
        </div>
      </div>
    </div>
  );
};

export default ThisYear;
