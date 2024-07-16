import React, { useState } from 'react';
import styles from './dashboard.module.css';
import Image from '../../../../components/images';
import charts from '../../../../assets/pictures/Frame 146.png';
import eth from '../../../../assets/pictures/image 4.png';
import btc from '../../../../assets/pictures/image 3.png';
import lite from '../../../../assets/pictures/image 5.png';
import xpr from '../../../../assets/pictures/image 6.png';
import sol from '../../../../assets/pictures/image 7.png';
import rec from '../../../../assets/pictures/Ellipse 11.png';
import recc from '../../../../assets/pictures/Ellipse 11 (1).png';
import reccc from '../../../../assets/pictures/Ellipse 11 (2).png';
import icon from "../../../../assets/pictures/image 9.png";
import icon1 from "../../../../assets/pictures/image 10.png";
import icon2 from "../../../../assets/pictures/image 11.png";
import icon3 from "../../../../assets/pictures/image 12.png";
import icon4 from "../../../../assets/pictures/image 13.png";
import icon5 from "../../../../assets/pictures/coin-removebg-preview.png";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';
import { CaretDownFill } from 'react-bootstrap-icons';

const Dashboard: React.FC = () => {
  
  const dummyName = "Cara Liana Fuqua";
  // const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  const [amount, setAmount] = useState(0.3584);
  const [amount1, setAmount1] = useState(0.3586);
  const [action, setAction] = useState<'Buy' | 'Sell'>('Buy');

  const handleActionClick = (newAction: 'Buy' | 'Sell') => {
    setAction(newAction);
  };
  
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
          <h1>Welcome Back, {dummyName}!</h1>
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
            <p>. . .</p>
            <label>Sort by:</label>
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
            <Image className={styles.cards} src={rec} />
            <div className={styles.contents}>
                <p>Received BTC</p>
                <small>You have received 0.05 BTC from wallet address 1A2b3C4d5E6F</small>
              </div>
            </li>
            <li>
            <Image className={styles.cards} src={recc} />
            <div className={styles.contents}>
                <p>Trade Executed</p>
                <small>Your trade to buy 50 ADA at $1.45 each has been executed</small>
              </div>
            </li>
            <li>
            <Image className={styles.cards} src={reccc} />
            <div className={styles.contents}>
                <p>Deposit Successful</p>
                <small>Your deposit of $1,000 to your USD wallet has been successful</small>
              </div>
            </li>
          </ul>
          <a href="/" className={styles.all} style={{textAlign: 'center', color: 'black', paddingTop: 30}}> See all</a>
        </div>
        </div>
        <div className={styles.stats}>
          <div className={styles.statt}>
          <div className={styles.stattt}>

            <h2>Total Amount of Profit</h2>
            <p>$28,000  <CaretDownFill style={{color:'#006400', fontSize: '18px'}}></CaretDownFill>
            <small style={{color:'#006400', fontSize: '18px'}}>4.26%</small></p>
            <br/>
            <a href="" style={{textDecoration: 'underline', color:'#006400',}}> View Analytics</a>
            </div>
          </div>
          <div className={styles.statt}>
            <h2>Investment</h2>
            <p>$500</p>
            <h6 style={{textAlign: 'left', color: '#a8a8a8', fontWeight: '300'}}>$500-$5000 initial deposit</h6>
            <br/>

            <a href="" style={{textDecoration: 'underline', color:'#007BFF', marginTop: '120px'}}> Make Payment</a>

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
                <th>Symbol</th>
                <th>Status (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <Image className={styles.cards} src={btc} />
                </td>
                <td>Bitcoin</td>
                <td>BTC</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>
                <Image className={styles.cards} src={eth} />
                </td>
                <td>Ethereum</td>
                <td>ETH</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>
                <Image className={styles.cards} src={lite} />
                </td>
                <td>Litecoin</td>
                <td>LTC</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>
                <Image className={styles.cards} src={xpr} />
                </td>
                <td>XPR</td>
                <td>XPR</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>
                <Image className={styles.cards} src={sol} />
                </td>
                <td>Solana</td>
                <td>SOL</td>
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
