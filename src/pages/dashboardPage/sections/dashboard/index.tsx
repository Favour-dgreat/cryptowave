import React, { useState, useContext, useEffect } from 'react';

import styles from './dashboard.module.css';
import Image from '../../../../components/images';
import charts from '../../../../assets/pictures/graph.png';
import eth from '../../../../assets/pictures/image 4.png';
import btc from '../../../../assets/pictures/image 3.png';
import lite from '../../../../assets/pictures/image 5.png';
import xpr from '../../../../assets/pictures/image 6.png';
import sol from '../../../../assets/pictures/image 7.png';
import rec from '../../../../assets/pictures/Vector 7.png';
import reccc from '../../../../assets/pictures/Ellipse 11 (2).png';
import icon from "../../../../assets/pictures/image 9.png";
import icon1 from "../../../../assets/pictures/image 10.png";
import icon2 from "../../../../assets/pictures/image 11.png";
import icon3 from "../../../../assets/pictures/image 12.png";
import icon4 from "../../../../assets/pictures/image 13.png";
import icon5 from "../../../../assets/pictures/Group 5.png";
import { AuthContext } from '../../../../context/AuthProvider'; // Import your AuthContext

import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';
import { CaretDownFill } from 'react-bootstrap-icons';

const Dashboard: React.FC = () => {
  const [userName, setUserName] = useState("Cara Liana Fuqua");
  const authContext = useContext(AuthContext); // Assuming AuthContext provides user information

  // const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  const [amount, setAmount] = useState(0.3584);
  const [amount1, setAmount1] = useState(0.3586);
  const [action, setAction] = useState<'Buy' | 'Sell'>('Buy');

  const handleActionClick = (newAction: 'Buy' | 'Sell') => {
    setAction(newAction);
  };
  useEffect(() => {
    if (authContext?.user) {
      setUserName(authContext.user.displayName || "Cara Liana Fuqua");
    }
    console.log(authContext);
  }, [authContext]);
   
  const data = [
    { name: 'BTC', value: 40, color: '#007bff' },
    { name: 'ETH', value: 25, color: '#c5f014' },
    { name: 'SOL', value: 35, color: '#325f5f' },
    { name: 'XRP', value: 15, color: '#004d00' },
    { name: 'LTC', value: 10, color: '#001f3f' }
  ];
  

  return (
    <div className={styles.dashboard_container}>
      <div className={styles.sidebar}>
        <ul>
          <a href="">
          
          <li className={styles.actives} style={{color: 'black'}}> <span style={{marginRight:'3px' }}> <Image src={icon} className={styles.icons}  />
          </span> Dashboard</li>
          </a>

          <a href="">
          <li> <span style={{marginRight:'3px'}}> <Image src={icon1} className={styles.icons}  />
          </span> Portfolio</li>
          </a>

          <a href="">
          <li> <span style={{marginRight:'3px'}}> <Image src={icon2} className={styles.icons}  />
          </span> Transactions</li>
          </a>

          <a href="">
          <li> <span > <Image src={icon3} className={styles.icons} style={{paddingRight:'10px'}}  />
          </span> Market</li>
          </a>
          
          <a href="">
          <li><span style={{marginRight:'3px'}}> <Image src={icon4} className={styles.icons}  />
          </span> Settings</li>
          </a>
        </ul>
      </div>
      <div className={styles.main_content}>
        <header className={styles.header}>
          <h1>Welcome Back, {userName}!</h1>
        </header>
        <div className={styles.stats}>
          <div className={styles.stat}>
           
            <div className={styles.a1}>
            <Image src={icon5} />

            </div>
            <div className={styles.a2}>
              <h3>Begin your investment journey now and watch your wealth grow</h3>
              <p>Unlock your financial potential and start investing today. Take advantage of market opportunities with just a few clicks</p>
            </div>
            

          </div>
         
        </div>
        <div className={styles.market_trends}>
        <div className={styles.trends}>
        <div className={styles.contentss}>
          <h2>Market Performance</h2> 
          <div className={styles.right}>
            <p style={{fontSize: '23px'}}>. . . </p>
           
            <select> 
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 7 days</option>
              </select>
          </div>
        </div>
            <div className={styles.trends_chart}>
          <Image src={charts} />
          
          </div>
        </div>
          
         
          <div className={styles.recent_activities}>
          <h2>Recent Activities</h2>
          <ul>
           
            <li>
            <Image className={styles.cards} src={reccc} />
            <div className={styles.contents}>
                <p>Deposit Successful</p>
                <small>Your deposit of $500 to your USD wallet has been successful</small>
              </div>
            </li>
          </ul>
          <a href="/" className={styles.all} style={{textAlign: 'center', color: 'black', paddingTop: 50}}> No other notifications...</a>
        </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.statt}>
          <div className={styles.stattt}>

            <h2>Total Amount of Profit</h2>
            <p>$28,000 </p> 
            <p style={{textAlign: 'left'}}><CaretDownFill style={{color:'#006400', fontSize: '18px'}}></CaretDownFill><small style={{color:'#006400', fontSize: '18px'}}>4.26%</small></p>
            <br/>
            <a href="" style={{textDecoration: 'underline', color:'#007BFF',}}><p style={{fontSize:'14px'}}>View Analytics</p> </a>
          </div>
          <br/>
          <div className={styles.chrt}>
            <Image src={rec} className={styles.rec}/>
          </div>
          </div>
          <div className={styles.statt1}>
            <h2>Investment</h2>
            <p>$500</p>
            <h6 style={{textAlign: 'left', color: '#a8a8a8', fontWeight: '300'}}>$500-$5000 initial deposit</h6>
            <br/>
            <br/>
            <a href="" style={{textDecoration: 'underline', color:'#007BFF', marginTop: '120px', fontSize:'14px'}}> Make Payment</a>

          </div>
    <div className={styles.container}>
      <h2 style={{ fontWeight: '100'}}>My investment Records (%)</h2>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={100}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={40}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
            <ul className={styles.legend}>
            {data.map((entry, index) => (
              <li key={`legend-${index}`}>
                <span style={{ backgroundColor: entry.color }}></span>
                {`${entry.name}: ${entry.value}%`}
              </li>
            ))}
          </ul>
    </div>
    
    <a href="/" className={styles.viewDetails}>View Details</a>
  </div>
        </div>
        <div className={styles.sect}>
        <div className={styles.portfolio}>
          <h2>My Portfolio</h2>
          <table>
            <thead>
              <tr>
                <th>Cryptocurrency</th>
                <th>Name</th>
                <th>Value</th>
                <th>Amount Held</th>
                <th>Status (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <Image className={styles.cards} src={btc} />
                </td>
                <td>Bitcoin</td>
                <td style={{color:'#850101'}}>-0.25</td>
                <td>1.00</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>
                <Image className={styles.cards} src={eth} />
                </td>
                <td>Ethereum</td>
                <td style={{color:'#850101'}}>-2.48</td>
                <td>0.45</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>
                <Image className={styles.cards} src={lite} />
                </td>
                <td>Litecoin</td>
                <td style={{color:'#C0392B'}}>+0.48</td>
                <td>0.05</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>
                <Image className={styles.cards} src={xpr} />
                </td>
                <td>XPR</td>
                <td style={{color:'#850101'}}>-4.98</td>
                <td>1.75</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>
                <Image className={styles.cards} src={sol} />
                </td>
                <td>Solana</td>
                <td style={{color:'#C0392B'}}>+0.30</td>
                <td>0.05</td>
                <td>35%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.tradeContainer}>
         

          <div className={styles.tradeForm}>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.actionButton} ${action === 'Buy' ? styles.active : ''}`}
          onClick={() => handleActionClick('Buy')}
        >
          Buy
        </button>
        <button
          className={`${styles.actionButton} ${action === 'Sell' ? styles.active : ''}`}
          onClick={() => handleActionClick('Sell')}
        >
          Sell
        </button>
      </div>
      
      <div className={styles.tradeField}>
        <img src={eth} alt="ETH Logo" className={styles.cryptoLogo} />
        <span className={styles.cryptoName}>ETH</span>
        <input
          type="number"
          className={styles.cryptoAmount}
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>

      <div className={styles.tradeField}>
        <img src={lite} alt="LTC Logo" className={styles.cryptoLogo} />
        <span className={styles.cryptoName}>LTC</span>
        <input
          type="number"
          className={styles.cryptoAmount}
          value={amount1}
          onChange={(e) => setAmount1(parseFloat(e.target.value))}
        />
      </div>

      <button className={styles.tradeButton}>{action} Coin</button>
    </div>
        </div>
        </div>

     
        
      </div>
    </div>
  );
}

export default Dashboard;
