import React from 'react';
import styles from './Styles';

interface HeadingProps {
  text: string;
}

function Heading({ text }: HeadingProps): JSX.Element {
  return <h2 className={styles.Heading}>{text}</h2>;
}

export default Heading;
