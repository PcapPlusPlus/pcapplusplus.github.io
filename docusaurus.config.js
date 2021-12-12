// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo/logo_icon_large.ico',
  organizationName: 'seladb',
  projectName: 'PcapPlusPlus',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'PcapPlusPlus',
          src: 'img/logo/logo_color.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'quickstart',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/community',
            label: 'Community',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                to: '/versions',
                label: 'All versions',
              },
            ],
          },
          {
            href: 'https://github.com/seladb/PcapPlusPlus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/install',
              },
              {
                label: 'Features',
                to: '/docs/features',
              },
              {
                label: 'Tutorials',
                to: '/docs/tutorials',
              },
              {
                label: 'DPDK',
                to: '/docs/dpdk',
              },
              {
                label: 'Example Apps',
                to: '/docs/examples',
              },
              {
                label: 'API Documentation',
                to: '/docs/api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/seladb/PcapPlusPlus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/seladb',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/pcapplusplus',
              },
              {
                label: 'Google Group',
                href: 'https://groups.google.com/d/forum/pcapplusplus-support',
              },
              {
                label: 'Email',
                href: 'mailto:pcapplusplus@gmail.com',
              },
              {
                label: 'Contribute',
                to: '/community#contribute',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Releases',
                to: '/versions',
              },
              {
                label: 'Benchmarks',
                to: '/docs/benchmark',
              },
              {
                label: 'License',
                to: '/docs/features/#license',
              },
              {
                label: 'Web-site GitHub Repo',
                href: 'https://github.com/PcapPlusPlus/pcapplusplus.github.io',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} seladb. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
