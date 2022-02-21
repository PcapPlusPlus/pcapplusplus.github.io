import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './Styles';

interface ButtonRequiredProps {
  text: string;
  to: string;
}

interface ButtonOptionalProps {
  className?: string;
}

interface ButtonProps
  extends ButtonRequiredProps, ButtonOptionalProps {}

const defaultProps: ButtonOptionalProps = {
  className: undefined,
};

function Button({
  text,
  to,
  className = undefined,
}: ButtonProps): JSX.Element {
  return (
    <Link
      className={clsx('button button--lg', styles.landingBtn, className)}
      to={to}
    >
      {text}
    </Link>
  );
}

Button.defaultProps = defaultProps;

export default Button;
