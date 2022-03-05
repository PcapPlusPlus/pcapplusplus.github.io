import React from 'react';
import styles from './Styles';
import landingPageData from '../data/landingPageData';

const NetworkIcons = () => {

    const networkIconsData = landingPageData.components.networkIcons;
    return (
      <>
        <ul className={styles.DisplayNetwork}>
          {networkIconsData.items.map(item => (
            <li key={item}><span>{item}</span></li>
          ))}  
        </ul>
      </>
    )
  }
export default NetworkIcons; 