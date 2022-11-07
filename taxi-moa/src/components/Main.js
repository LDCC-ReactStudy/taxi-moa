import React from 'react';
import TaxiCard from './TaxiCard';
import Status from './Status';
import Guide from './Guide'
import styles from './Main.module.css';

function Main() {
  return <div>
    <div className={styles.GuideStatusDiv}>
      <tr>
        <td><Guide/></td>
        <td><Status/></td>
      </tr>
    </div>
    <div className={styles.Background}> 
    <TaxiCard/>
    </div>
  </div>
}

export default Main;