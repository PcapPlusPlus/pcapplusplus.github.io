import React from 'react';
import clsx from 'clsx';
import styles from './Styles';

interface BodyRequiredProps {
  children: React.ReactNode;
  className: string;
}

interface BodyOptionalProps {
  background?: string;
}

interface BodyProps
  extends BodyRequiredProps, BodyOptionalProps {}

const defaultProps: BodyOptionalProps = {
  background: 'light',
};

function Body({
  children,
  className,
  background,
}: BodyProps): JSX.Element {
  return <section className={clsx(styles.Section, className, background)}>{children}</section>;
}

Body.defaultProps = defaultProps;

export default Body;
