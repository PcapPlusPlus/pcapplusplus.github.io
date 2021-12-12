
import {useActiveVersion, useLatestVersion} from '@theme/hooks/useDocs';

const repo = "https://github.com/seladb/PcapPlusPlus"

export function getRepoURL(): string {
  return repo
}

export function getRelease(): string {
  const latestVersion = useLatestVersion();
  const activeVersion = useActiveVersion();
  return (activeVersion.label === "Next" ? latestVersion.label : activeVersion.label)
}

export function getSpecificReleaseURL(release: string): string {
  return repo + "/releases/tag/" + release
}

export function getReleaseURL(): string {
  return getSpecificReleaseURL(getRelease())
}

export function getReleaseZipURL(): string {
  return repo + "/archive/" + getRelease() + ".zip";
}

export function getReleaseTarURL(): string {
  return repo + "/archive/" + getRelease() + ".tar.gz";
}

export function getGitHubTreeURL(): string {
  const activeVersion = useActiveVersion();
  const gitHubTag = (activeVersion.label === "Next" ? "master" : activeVersion.label);
  return repo + "/tree/" + gitHubTag
}

export function getSourceCodeZipURL(): string {
  return repo + "/archive/master.zip";
}

export function getSourceCodeTarURL(): string {
  return repo + "/archive/master.tar.gz";
}
