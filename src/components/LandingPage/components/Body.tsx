import React from 'react';
import clsx from 'clsx';
import styles from './Styles';

const Body = ({
    children,
    className,
    background = 'light',
  }): JSX.Element => {
    return <section className={clsx(styles.Section, className, background)}>{children}</section>;
};

export default Body;