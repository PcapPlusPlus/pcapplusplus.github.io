import React from 'react';
import styles from './Styles';
import Button from './Button';

interface HeaderButtonProps {
  text: string;
  to: string;
}

function HeaderButton({ text, to }: HeaderButtonProps): JSX.Element {
  return <Button className={styles.landingBtnHeader} text={text} to={to} />;
}

export default HeaderButton;
