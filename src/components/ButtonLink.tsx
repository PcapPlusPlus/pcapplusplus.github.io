import React from 'react';
import styles from './ButtonLink.module.css';

const ButtonLink = ({ text, link, btnColor = "#2c84fa"}) => {
  const commonStyles = {
    backgroundColor: btnColor,
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), transparent)",
    color          : "white"
  };
  return (
    <a 
      style={{...commonStyles }}
      className={styles.btn}
      href={link}
    >
        {text}
    </a>
  );
};

export default ButtonLink;