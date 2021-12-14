import React from 'react';
import Link from '@docusaurus/Link';

const ButtonLink = ({ text, link, btnColor = "#2c84fa"}) => {
  const commonStyles = {
    backgroundColor: btnColor,
    color          : "white"
  };
  return (
    <Link 
      style={{...commonStyles }}
      className="button button--secondary button--lg"
      to={link}
    >
        {text}
    </Link>
  );
};

export default ButtonLink;