import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '../pages/docs.module.css';

interface ButtonLinkProps {
  text: string;
  link: string;
}

function ButtonLink({ text, link }: ButtonLinkProps) {
  return (
    <Link className={clsx('button button--lg', styles.DocsButton)} to={link}>
      {text}
    </Link>
  );
}

export default ButtonLink;
