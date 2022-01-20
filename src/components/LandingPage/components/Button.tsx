import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './Styles';

const Button = ({
    text, 
    to, 
    className = undefined}): JSX.Element => {

    return (
      <Link
        className={clsx("button button--lg", styles.landingBtn, className)}
        to={to}
      >
        {text}
      </Link>
    )
};

export default Button;