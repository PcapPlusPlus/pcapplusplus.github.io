import React from 'react';
import styles from './Styles';

const Heading = ({text}): JSX.Element => {
    return <h2 className={styles.Heading}>{text}</h2>;
};

export default Heading;