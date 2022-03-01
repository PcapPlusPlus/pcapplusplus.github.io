import React from 'react';
import {
  useLatestVersion,
  useActiveVersion
} from '@docusaurus/plugin-content-docs/client';
import ButtonLink from './ButtonLink';
import { getReleaseURL } from './GitHubURLs';

function ReleaseButtonLink() {
  const latestVersion = useLatestVersion();
  const activeVersion = useActiveVersion();
  const text = ['Next', latestVersion.label].includes(activeVersion.label)
    ? `Latest version: ${latestVersion.label}`
    : `${activeVersion.label} Release`;
  return <ButtonLink text={text} link={getReleaseURL()} />;
}

export default ReleaseButtonLink;
