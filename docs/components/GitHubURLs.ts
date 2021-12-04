
import {useActiveVersion, useLatestVersion} from '@theme/hooks/useDocs';

const repo = "https://github.com/seladb/PcapPlusPlus"

export function getReleaseURL(release: string): string {
  return repo + "/releases/tag/" + release
}

export function getGitHubTreeURL(): string {
  const activeVersion = useActiveVersion();
  const gitHubTag = (activeVersion.label === "Next" ? "master" : activeVersion.label);
  return repo + "/tree/" + gitHubTag
}
