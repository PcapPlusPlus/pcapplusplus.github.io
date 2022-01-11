import React from 'react';
import styles from './Styles';
import Button from './Button';

const HeaderButton = ({text, to}): JSX.Element => {
    
    return (
        <Button 
            className={styles.landingBtnHeader}
            text={text} 
            to={to} 
        />
    );
};

export default HeaderButton;