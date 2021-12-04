import React from 'react';
import {useLatestVersion, useActiveVersion} from '@theme/hooks/useDocs';
import {getReleaseURL} from './GitHubURLs';

const ReleaseLink = ({versionString}) => {
  const latestVersion = useLatestVersion();
  const activeVersion = useActiveVersion();
  const release = (activeVersion.label === "Next" ? latestVersion.label : activeVersion.label)
  return (
    <a href={getReleaseURL(release)}>{versionString || (release + " release")}</a>
  );
}

export default ReleaseLink