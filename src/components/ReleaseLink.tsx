import React from 'react';
import {getReleaseURL, getRelease} from '../../src/components/GitHubURLs';

const ReleaseLink = ({versionString}) => {
  return (
    <a href={getReleaseURL()}>{versionString || (getRelease() + " release")}</a>
  );
}

export default ReleaseLink