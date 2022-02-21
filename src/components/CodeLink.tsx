import React from 'react';
import { getGitHubTreeURL } from './GitHubURLs';

interface CodeLinkProps {
  relativePath: string;
  children: React.ReactNode;
}

function CodeLink({ relativePath, children }: CodeLinkProps) {
  return (
    <a href={getGitHubTreeURL() + relativePath}>{children}</a>
  );
}

export default CodeLink;
