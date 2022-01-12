import React from 'react';
import clsx from 'clsx';
import styles from './Styles';

const TwoColumns = ({columnOne, columnTwo}): JSX.Element => {
    
    return (
        <div className={styles.TwoColumns}>
        <div className={clsx(styles.column, styles.last, styles.right)}>
            {columnOne}
        </div>
        <div className={clsx(styles.column, styles.first, styles.left)}>
            {columnTwo}
        </div>
        </div>
    );
};

export default TwoColumns;