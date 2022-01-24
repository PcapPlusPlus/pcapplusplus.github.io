import React from 'react';
import clsx from 'clsx';
import styles from './Styles';

const TwoColumns = ({columnOne, columnTwo, reverse = false}): JSX.Element => {
    const classNameColumnOne = (reverse ? clsx(styles.column, styles.last, styles.right) : clsx(styles.column, styles.first, styles.left));
    const classNameColumnTwo = (reverse ? clsx(styles.column, styles.first, styles.left) : clsx(styles.column, styles.last, styles.right));
    return (
        <div className={styles.TwoColumns}>
        <div className={classNameColumnOne}>
            {columnOne}
        </div>
        <div className={classNameColumnTwo}>
            {columnTwo}
        </div>
        </div>
    );
};

export default TwoColumns;