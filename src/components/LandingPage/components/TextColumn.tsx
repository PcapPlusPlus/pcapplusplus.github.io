import React from 'react';
import Heading from './Heading';

interface TextColumnProps {
  title: string;
  content: React.ReactNode;
}

function TextColumn({ title, content }: TextColumnProps): JSX.Element {
  return (
    <>
      <Heading text={title} />
      {content}
    </>
  );
}

export default TextColumn;
