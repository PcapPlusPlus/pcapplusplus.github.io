import React from 'react';
import {useLatestVersion, useActiveVersion} from '@theme/hooks/useDocs';
import {getReleaseURL} from './GitHubURLs';
import {ButtonLink} from '@site/src/components/ButtonLink';

const ReleaseButtonLink = () => {
  const latestVersion = useLatestVersion();
  const activeVersion = useActiveVersion();
  const text = (["Next", latestVersion.label].includes(activeVersion.label) ? "Latest version: " + latestVersion.label : activeVersion.label + " Release")
  return (
    <ButtonLink text={text} link={getReleaseURL()}/>
  );
}

export default ReleaseButtonLink