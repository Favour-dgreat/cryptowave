import styles from "./pitch.module.css";
// import pitchImg from "../../../../assets/pictures/Frame 35.png";
import { useState } from 'react';
// import Image from '../../../../components/images';
import { CaretDownFill } from 'react-bootstrap-icons';


export const Pitch = () => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setExpanded(!expanded);
    };
  
    const cryptoData = [
      {
        name: 'BITCOIN to USDT',
        value: '$57,436.96',
        change: '2.51%',
      },
      {
        name: 'ETHEREUM to USDT',
        value: '$3,122.77',
        change: '4.26%',
      },
      {
        name: 'SOLANA to BNB',
        value: '$136.45',
        change: '5.45%',
      },
      {
        name: 'LTC to USDT',
        value: '$100.98',
        change: '15.45%',

      },
    ];
  return (
    <div id="pitch_container" className={styles.pitch_container}>
    
      <div className={styles.pitch_inner}>

        <h1 className={styles.pitch_header}>
         About Us 
        </h1>
          

            <p className={styles.paragraph}>
            At CryptoWave, we are pioneering the future of digital finance by providing innovative cryptocurrency solutions. Founded by a team of blockchain enthusiasts and financial experts, our mission is to make cryptocurrency accessible, secure, and beneficial for everyone. We offer a comprehensive suite of services, including a user-friendly trading platform, secure wallet solutions, and extensive educational resources to empower our users with the knowledge they need to navigate the crypto space confidently. 
            </p>
            <p className={styles.paragraph2}>Our platform is designed with cutting-edge technology to ensure top-tier security and seamless transactions. Our platform is designed with cutting-edge technology to ensure top-tier security and seamless transactions. We are committed to transparency, user satisfaction, and continuous innovation, aiming to build a robust ecosystem where users can trade, invest, and manage their digital assets effortlessly. At CryptoWave, we believe in the transformative power of blockchain technology and strive to drive its adoption across the globe.</p>
            <p className={styles.paragraph3} style={{marginTop:'10px'}}>
                Join us in revolutionizing the world of finance, one transaction at a time, and be part of a community that values trust, innovation, and financial freedom.</p>
          <div>
            <div>
              {/* Additional content goes here */}
              {expanded && (
                <div>
                
                </div>
              )}
            </div>
            <br/>
            <p className={styles.see}onClick={toggleExpanded}>{expanded ? 'See less...' : 'Learn  more...'}</p>
          </div>
      </div>


      <div className={styles.pitch_inner1}>
       
        <div className={styles.content_div}>
        

          <div className={styles.text_div}>
          <h2 className={styles.pitch_header}>
          Today’s Cryptocurrency Current Market Price        
          </h2>
            <p className={styles.paragraph}>
            Stay on top of the latest cryptocurrency prices and trends with real-time updates and detailed insights. Our dynamic ticker keeps you informed about the market’s movements, helping you make smarter trading decisions
            </p>
            <div className={styles.cryptoInfo}>
            {cryptoData.map((crypto, index) => (
              <div className={styles.cryptoItem} key={index}>
                <div className={styles.cryptoName}>{crypto.name}</div>
                <div className={styles.cryptoValue}>{crypto.value}
                <div className={`${styles.cryptoChange} ${crypto.change.includes('-') ? styles.negative : styles.positive }`}>
                <CaretDownFill></CaretDownFill> {crypto.change} (24hr)
          </div>
          
          </div>
          
         
        </div>
        
      ))}
    </div>
    <button className={styles.showcase_button}>
              See More
            </button>
    
          </div>
        </div>
      </div>
    </div>
  );
}


export default Pitch;
