import React from 'react';
import {
  FaFreebsd, FaWindows, FaLinux, FaApple, FaAndroid,
} from 'react-icons/fa';
import styles from './Styles';

function OperatingSystems() {
  return (
    <div className={styles.OperatingSystemContainer}>
      <ul className={styles.OperatingSystem}>
        <li>
          <span>
            <FaWindows />
&nbsp;&nbsp;Windows
          </span>
        </li>
        <li>
          <span>
            <FaLinux />
&nbsp;&nbsp;Linux
          </span>
        </li>
        <li>
          <span>
            <FaApple />
&nbsp;&nbsp;Apple
          </span>
        </li>
        <li>
          <span>
            <FaFreebsd />
&nbsp;&nbsp;FreeBSD
          </span>
        </li>
        <li>
          <span>
            <FaAndroid />
&nbsp;&nbsp;Android
          </span>
        </li>
      </ul>
    </div>
  );
}
export default OperatingSystems;
