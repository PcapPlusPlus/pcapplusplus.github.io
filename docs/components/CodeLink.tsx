import React from 'react';
import {getGitHubTreeURL} from './GitHubURLs';

const CodeLink = ({relativePath, children}) => {
  return (
    <a href={getGitHubTreeURL() + relativePath}>{children}</a>
  );
} 

export default CodeLink