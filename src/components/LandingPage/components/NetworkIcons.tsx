import React from 'react';
import styles from './Styles';

const NetworkIcons = () => {

    return (
      <>
        <ul className={styles.DisplayNetwork}>
          <li><span>DPDK</span></li>
          <li><span>PF_RING</span></li>
          <li><span>LIBPCAP</span></li>
          <li><span>WINPCAP</span></li>
          <li><span>NPCAP</span></li>
        </ul>
      </>
    )
  }
export default NetworkIcons; 