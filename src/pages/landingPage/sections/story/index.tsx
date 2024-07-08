import styles from './story.module.css';

import aboutImgLarge from '../../../../assets/pictures/Around the world-pana 1.png';
import Image from '../../../../components/images';
import { useEffect, useState } from 'react';

function Story() {
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 999);
    };

    // Initial call to set the initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
     
      <div id="about" className={styles.story_container}>
        <div className={styles.story_inner}>
          
          <div
            className={`${styles.story_item} ${styles.story_item_responsive}`}
          >
           
            <div className={styles.story_item_texts}>
            <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
          >
            Track Your Delivery via GPS
          </h1>
              <p data-aos="zoom-in-left" className={styles.p}>
              Track your delivery with ease using our GPS technology. Stay informed about your package's location in real-time, from departure to arrival. Enjoy peace of mind with our reliable tracking system.
              </p>

            </div>

            {isSmallViewport ? (
              <>
                <Image
                  src={aboutImgLarge}
                  className={styles.story_item_image}
                />
              </>
            ) : (
              <Image
                src={aboutImgLarge}
                className={`${styles.story_item_image}`}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
