import React from 'react';
import styles from './Styles';

function NetworkIcons() {
  return (
    <ul className={styles.DisplayNetwork}>
      <li>
        <span>DPDK</span>
      </li>
      <li>
        <span>eBPF AF_XDP</span>
      </li>
      <li>
        <span>LIBPCAP</span>
      </li>
      <li>
        <span>WINPCAP</span>
      </li>
      <li>
        <span>NPCAP</span>
      </li>
      <li>
        <span>WinDivert</span>
      </li>
      <li>
        <span>PF_RING</span>
      </li>
    </ul>
  );
}
export default NetworkIcons;
