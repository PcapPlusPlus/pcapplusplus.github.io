import React from 'react';
import {gitHubTree} from '../VersionInfo';

const CodeLink = ({relativePath, text}) => (
  <a href={gitHubTree + relativePath}>{text}</a>
);

export default CodeLink