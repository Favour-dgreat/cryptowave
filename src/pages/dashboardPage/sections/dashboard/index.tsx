import React, { useState } from 'react';
import styles from './dashboard.module.css';
import Image from '../../../../components/images';
import wave from '../../../../assets/pictures/wavy.png';
import charts from '../../../../assets/pictures/Frame 146.png';
import eth from '../../../../assets/pictures/image 4.png';
import btc from '../../../../assets/pictures/image 3.png';
import lite from '../../../../assets/pictures/image 5.png';
import xpr from '../../../../assets/pictures/image 6.png';
import sol from '../../../../assets/pictures/image 7.png';
import rec from '../../../../assets/pictures/Ellipse 11.png';
import recc from '../../../../assets/pictures/Ellipse 11 (1).png';
import reccc from '../../../../assets/pictures/Ellipse 11 (2).png';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';


const Dashboard: React.FC = () => {
  
  const dummyName = "David Patrick Rosu";
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
          <li className={styles.active}>Dashboard</li>
          </a>

          <a href="">
          <li>Portfolio</li>
          </a>

          <a href="">
          <li>Transactions</li>
          </a>

          <a href="">
          <li>Market</li>
          </a>
          
          <a href="">
          <li>Settings</li>
          </a>
        </ul>
      </div>
      <div className={styles.main_content}>
        <header className={styles.header}>
          <h1>Welcome {dummyName}!</h1>
        </header>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h2>Total Amount of Profit</h2>
            <p>$28,000</p>
            <small>For last 4 days</small>
            <Image src={wave} />

          </div>
          <div className={styles.stat}>
            <h2>Investment</h2>
            <p>$28,000</p>
            <small style={{color: "green"}}>▲4.26%</small>
            <Image  src={wave} />

          </div>
          <div className={styles.container}>
    <h3>Portfolio Distribution (%)</h3>
    <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <ul className={styles.legend}>
      {data.map((entry, index) => (
        <li key={`legend-${index}`}>
          <span style={{ backgroundColor: entry.color }}></span>
          {`${entry.name}: ${entry.value}%`}
        </li>
      ))}
    </ul>
    <a href="/" className={styles.viewDetails}>View Details</a>
  </div>
        </div>
        <div className={styles.market_trends}>
        <div className={styles.trends}>

          <h2>Market Trends</h2>
          <select>
              <option>Last 12 hours</option>
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
            </select>

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
