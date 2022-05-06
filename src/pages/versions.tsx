import React from 'react';

import Layout from '@theme/Layout';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import {
  getRepoURL,
  getSpecificReleaseURL
} from '@site/src/components/GitHubURLs';
import versions from '../../versions.json';

function Version() {
  const latestVersion = versions[0];
  const pastDocusaurusVersions = versions.filter(
    (version) => version !== latestVersion
  );
  const pastJekyllVersions = ['v21.05', 'v20.08', 'v19.12'];
  const pastHtmlVersions = ['v19.04', 'v18.08'];
  const oldVersions = ['v17.11', 'v17.02', 'v16.09', 'v16.02'];
  return (
    <Layout
      title="Versions"
      permalink="/versions"
      description="PcapPlusPlus documentation page listing all documented site versions"
    >
      <div className="container margin-vert--xl">
        <h1>PcapPlusPlus Versions</h1>
        <div className="margin-bottom--lg">
          <h3 id="latest">Latest Version (Stable)</h3>
          <p>Here you can find the latest documentation.</p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <Link to={useBaseUrl('/docs/quickstart')}>Documentation</Link>
                </td>
                <td>
                  <a href={getSpecificReleaseURL(latestVersion)}>
                    Release Notes
                  </a>
                </td>
                <td>
                  <Link
                    to={useBaseUrl(`/api-docs/${latestVersion}/index.html`)}
                  >
                    API Documentation
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="margin-bottom--lg">
          <h3 id="next">Next Version (Unreleased)</h3>
          <p>
            Here you can find the documentation for the next version that is not
            released yet.
          </p>
          <table>
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  <Link to={useBaseUrl('/docs/next/quickstart')}>
                    Documentation
                  </Link>
                </td>
                <td>
                  <a href={getRepoURL()}>Source Code</a>
                </td>
                <td>
                  <Link to={useBaseUrl('/api-docs/next/')}>
                    API Documentation
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {[
          // eslint-disable-next-line max-len
          ...pastDocusaurusVersions,
          ...pastJekyllVersions,
          ...pastHtmlVersions,
          ...oldVersions
        ].length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="archive">Past Versions</h3>
            <p>
              Here you can find documentation for previous versions of
              PcapPlusPlus.
            </p>
            <table>
              <tbody>
                {pastDocusaurusVersions.map((version) => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link to={useBaseUrl(`/docs/${version}/quickstart`)}>
                        Documentation
                      </Link>
                    </td>
                    <td>
                      <a href={`${getRepoURL()}/releases/tag/${version}`}>
                        Release Notes
                      </a>
                    </td>
                    <td>
                      <Link to={useBaseUrl(`/api-docs/${version}/index.html`)}>
                        API Documentation
                      </Link>
                    </td>
                  </tr>
                ))}
                {pastJekyllVersions.map((version) => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link
                        to={`https://pcapplusplus.github.io/${version.replace(
                          '.',
                          ''
                        )}`}
                      >
                        Documentation
                      </Link>
                    </td>
                    <td>
                      <a href={`${getRepoURL()}/releases/tag/${version}`}>
                        Release Notes
                      </a>
                    </td>
                    <td>
                      <a
                        href={`https://pcapplusplus.github.io/${version.replace(
                          '.',
                          ''
                        )}/api-docs`}
                      >
                        API Documentation
                      </a>
                    </td>
                  </tr>
                ))}
                {pastHtmlVersions.map((version) => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link
                        to={`https://pcapplusplus.github.io/${version.replace(
                          '.',
                          ''
                        )}`}
                      >
                        Documentation
                      </Link>
                    </td>
                    <td>
                      <a href={`${getRepoURL()}/releases/tag/${version}`}>
                        Release Notes
                      </a>
                    </td>
                    <td>
                      <a
                        href={`https://pcapplusplus.github.io/${version.replace(
                          '.',
                          ''
                        )}/Documentation`}
                      >
                        API Documentation
                      </a>
                    </td>
                  </tr>
                ))}
                {oldVersions.map((version) => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>N/A</td>
                    <td>
                      <a href={`${getRepoURL()}/releases/tag/${version}`}>
                        Release Notes
                      </a>
                    </td>
                    <td>N/A</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Version;
