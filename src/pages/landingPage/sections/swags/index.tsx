import styles from './swags.module.css';
import swag from '../../../../assets/pictures/cc.png';
import { RegularButton } from '../../../../components/buttons';

const Swags = () => {
 
  
  return (
    <div className={styles.swag_container}>
      <div className={styles.swag_inner}>
        

        <div className={styles.flex_container}>
          <div className={styles.flex_item}>
      
            <div className={styles.flexx}>
              <p className={styles.dot}>
              Begin your Crypto Journey by trading with virtual currency.
              </p>
         
              <p className={styles.ios}>
              Gain Valuable Experience and Confidence in Cryptocurrency Trading Without the Financial Risk of Real Investments              </p>

              <div className={styles.btn_container}>
                <RegularButton
                  title="Trade Now" style={{textAlign: 'center'}}
                  className={styles.regularButton} 
                  url="#"
                />
             </div>
             </div>
             </div>
          <div className={styles.flex_items}>
            <img src={swag} alt="swag" style={{width: 400}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swags;
