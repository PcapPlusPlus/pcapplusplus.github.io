import React from 'react';
import {useActiveVersion} from '@theme/hooks/useDocs';

const APIDocsLink = ({relativePath, children}) => {
  return (
    <a href={"/api-docs/" + useActiveVersion().label + relativePath}>{children}</a>
  );
} 

export default APIDocsLink