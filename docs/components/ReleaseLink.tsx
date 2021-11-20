import React from 'react';
import {releaseTag, latestVersion} from '../VersionInfo';

const ReleaseLink = ({versionString}) => (
  <a href={releaseTag}>{versionString || (latestVersion + " release")}</a>
);

export default ReleaseLink