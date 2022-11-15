import React from 'react';
import TaxiCard from './TaxiCard';
import Status from './Status';
import Guide from './Guide'
import styles from './Main.module.css';
import { BrowserView, MobileView } from 'react-device-detect';

function Main() {
  return <div className={styles.MainDiv}>
    <BrowserView>
      <div className={styles.GuideStatusDiv2}>
        <div className={styles.GuideDiv}>
          <div className={styles.leftAlign}><Guide/></div>
        </div>
        <div className={styles.StatusDiv}>
          <div className={styles.rightAlign}><Status/></div>
        </div>
      </div>
    </BrowserView>
    <MobileView>
      <div className={styles.MobileDiv}>
        <div className={styles.MobileStatusDiv}>
          <div className={styles.centerAlign}>
            <Status/>
          </div>
        </div>
      </div>
    </MobileView>
    <div className={styles.Background}> 
      <TaxiCard/>
    </div>
  </div>
}

export default Main;