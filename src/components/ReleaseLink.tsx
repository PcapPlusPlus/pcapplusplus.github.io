import React from 'react';
import { getReleaseURL, getRelease } from './GitHubURLs';

interface ReleaseLinkProps {
  versionString: string;
}

function ReleaseLink({ versionString }: ReleaseLinkProps) {
  return (
    <a href={getReleaseURL()}>{versionString || `${getRelease()} release`}</a>
  );
}

export default ReleaseLink;
