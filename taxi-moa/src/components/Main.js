import React from 'react';
import TaxiCard from './TaxiCard';
import Status from './Status';
import Guide from './Guide'
import styles from './Main.module.css';

function Main() {
  return <div className={styles.MainDiv}>
    <div className={styles.GuideStatusDiv2}>
      <div className={styles.GuideDiv}>
        <div className={styles.leftAlign}><Guide/></div>
      </div>
      <div className={styles.StatusDiv}>
        <div className={styles.rightAlign}><Status/></div>
      </div>
    </div>
    <div className={styles.Background}> 
      <TaxiCard/>
    </div>
  </div>
}

export default Main;