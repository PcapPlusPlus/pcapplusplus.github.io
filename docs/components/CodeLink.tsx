import React from 'react';
import {getGitHubTreeURL} from './GitHubURLs';

const CodeLink = ({relativePath, text}) => {
  return (
    <a href={getGitHubTreeURL() + relativePath}>{text}</a>
  );
} 

export default CodeLink