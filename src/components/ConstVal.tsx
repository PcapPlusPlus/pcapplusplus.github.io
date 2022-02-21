import React from 'react';

interface ConstValProps {
  value: Object;
}

function ConstVal({ value }: ConstValProps) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{value}</>
  );
}

export default ConstVal;
