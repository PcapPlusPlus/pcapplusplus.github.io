import React from 'react';
import {useLatestVersion, useActiveVersion} from '@theme/hooks/useDocs';
import {getReleaseURL} from './GitHubURLs';
import ButtonLink from '@site/src/components/ButtonLink';

const ReleaseButtonLink = () => {
  const latestVersion = useLatestVersion();
  const activeVersion = useActiveVersion();
  const text = (["Next", latestVersion.label].includes(activeVersion.label) ? "Latest version: " + latestVersion.label : activeVersion.label + " Release")
  const release = (activeVersion.label === "Next" ? latestVersion.label : activeVersion.label)
  return (
    <ButtonLink text={text} link={getReleaseURL(release)} btnColor="#5e41d0"/>
  );
}

export default ReleaseButtonLink