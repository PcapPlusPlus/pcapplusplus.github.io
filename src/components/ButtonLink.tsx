import React from 'react';
import Link from '@docusaurus/Link';

export enum Color {
  purple = "#5e41d0",
  blue = "#2c84fa",
  green = "#11b584",
}

interface ButtonLinkProps {
  text: string;
  link: string;
  btnColor: Color;
}

export const ButtonLink = ({ text, link, btnColor = Color.blue}: ButtonLinkProps) => {
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
