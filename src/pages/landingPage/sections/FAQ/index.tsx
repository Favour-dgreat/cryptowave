import styles from "./pitch.module.css";
// import pitchImg from "../../../../assets/pictures/Frame 35.png";
import { useState } from 'react';
// import Image from '../../../../components/images';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
    
  return (
    <div id="pitch_container" className={styles.pitch_container}>
    
      <div className={styles.pitch_inner}>
        <h1 className={styles.pitch_header}>
         Frequently Asked Questions
        </h1>

        <div className={styles.faq_item}>
        <div 
          className={styles.faq_question} 
          onClick={() => toggleFAQ(0)}
        >
          What are the risks associated with investing in cryptocurrencies
          <span>{openIndex === 0 ? '-' : '+'}</span>
        </div>
        {openIndex === 0 && (
          <div className={styles.faq_answer}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse atque excepturi quae quas aliquam ullam eligendi officia perspiciatis dignissimos nemo!</p>
          </div>
        )}
      </div>
      
      <div className={styles.faq_item}>
        <div 
          className={styles.faq_question} 
          onClick={() => toggleFAQ(1)}
        >
          How do I securely store my cryptocurrencies?
          <span>{openIndex === 1 ? '-' : '+'}</span>
        </div>
        {openIndex === 1 && (
          <div className={styles.faq_answer}>
            {/* Insert the answer content here */}
          </div>
        )}
      </div>

      <div className={styles.faq_item}>
        <div 
          className={styles.faq_question} 
          onClick={() => toggleFAQ(2)}
        >
          What factors should I consider before investing in a specific cryptocurrency?
          <span>{openIndex === 2 ? '-' : '+'}</span>
        </div>
        {openIndex === 2 && (
          <div className={styles.faq_answer}>
            {/* Insert the answer content here */}
          </div>
        )}
      </div>

      <div className={styles.faq_item}>
        <div 
          className={styles.faq_question} 
          onClick={() => toggleFAQ(3)}
        >
          How do I deposit and withdraw funds from my trading account
          <span>{openIndex === 3 ? '-' : '+'}</span>
        </div>
        {openIndex === 3 && (
          <div className={styles.faq_answer}>
            {/* Insert the answer content here */}
          </div>
        )}
      </div>

      <div className={styles.faq_item}>
        <div 
          className={styles.faq_question} 
          onClick={() => toggleFAQ(4)}
        >
          How do I securely store my cryptocurrencies?
          <span>{openIndex === 4 ? '-' : '+'}</span>
        </div>
        {openIndex === 4 && (
          <div className={styles.faq_answer}>
            {/* Insert the answer content here */}
          </div>
        )}
      </div>
      
      </div>


      <div className={styles.pitch_inner1}>
       
        <div className={styles.content_div}>
        

          
        </div>
      </div>
    </div>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
