import React from 'react';
import clsx from 'clsx';
import styles from './Styles';

interface TwoColumnsRequiredProps {
  columnOne: React.ReactNode;
  columnTwo: React.ReactNode;
}

interface TwoColumnsOptionalProps {
  reverse?: boolean;
}

interface TwoColumnsProps
  extends TwoColumnsRequiredProps,
    TwoColumnsOptionalProps {}

const defaultProps: TwoColumnsOptionalProps = {
  reverse: false
};

function TwoColumns({
  columnOne,
  columnTwo,
  reverse = false
}: TwoColumnsProps): JSX.Element {
  const classNameColumnOne = reverse
    ? clsx(styles.column, styles.last, styles.right)
    : clsx(styles.column, styles.first, styles.left);
  const classNameColumnTwo = reverse
    ? clsx(styles.column, styles.first, styles.left)
    : clsx(styles.column, styles.last, styles.right);
  return (
    <div className={styles.TwoColumns}>
      <div className={classNameColumnOne}>{columnOne}</div>
      <div className={classNameColumnTwo}>{columnTwo}</div>
    </div>
  );
}

TwoColumns.defaultProps = defaultProps;

export default TwoColumns;
