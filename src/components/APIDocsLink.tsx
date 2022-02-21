import React from 'react';
import { useActiveVersion } from '@theme/hooks/useDocs';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface APIDocsLinkProps {
  relativePath: string;
  children: React.ReactNode;
}

function APIDocsLink({ relativePath, children }: APIDocsLinkProps) {
  return (
    <a href={useBaseUrl(`/api-docs/${useActiveVersion().label.toLowerCase()}${relativePath}`)}>{children}</a>
  );
}

export default APIDocsLink;
