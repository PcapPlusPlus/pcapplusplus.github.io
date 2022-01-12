import React from 'react';
import Heading from './Heading';


const TextColumn = ({title, content}): JSX.Element => {
    return (
      <>
        <Heading text={title} />
        {content}
      </>
    );
  }

export default TextColumn;