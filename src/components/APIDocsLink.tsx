import React from 'react';
import {useActiveVersion} from '@theme/hooks/useDocs';
import useBaseUrl from '@docusaurus/useBaseUrl';

const APIDocsLink = ({relativePath, children}) => {
  return (
    <a href={useBaseUrl("/api-docs/" + useActiveVersion().label.toLowerCase() + relativePath)}>{children}</a>
  );
} 

export default APIDocsLink