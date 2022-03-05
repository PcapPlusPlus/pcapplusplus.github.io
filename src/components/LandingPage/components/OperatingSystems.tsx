import React from 'react';
import styles from './Styles';
import { FaFreebsd, FaWindows, FaLinux, FaApple, FaAndroid } from 'react-icons/fa';
import landingPageData from '../data/landingPageData';

const OperatingSystems = () => {
  const operatingSystemsData = landingPageData.components.operatingSystems;

    return (
      <div className={styles.OperatingSystemContainer}>
        <ul className={styles.OperatingSystem}>
          <li><span><FaWindows />&nbsp;&nbsp;{operatingSystemsData.win}</span></li>
          <li><span><FaLinux />&nbsp;&nbsp;{operatingSystemsData.linux}</span></li>
          <li><span><FaApple />&nbsp;&nbsp;{operatingSystemsData.apple}</span></li>
          <li><span><FaFreebsd />&nbsp;&nbsp;{operatingSystemsData.freeBSD}</span></li>
          <li><span><FaAndroid />&nbsp;&nbsp;{operatingSystemsData.android}</span></li>
        </ul>
      </div>
    )
  }
export default OperatingSystems; 