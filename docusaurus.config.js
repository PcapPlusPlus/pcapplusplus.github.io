// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PcapPlusPlus',
  tagline:
    'A multi-platform C++ library for capturing, parsing and crafting of network packets. It is designed to be efficient, powerful and easy to use.',
  url: 'https://pcapplusplus.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo/logo_icon_large.ico',
  organizationName: 'seladb',
  projectName: 'pcapplusplus.github.io',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        googleAnalytics: {
          trackingID: 'UA-74037205-2',
          anonymizeIP: true
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '31QB400Q4J',
        apiKey: 'bbfc76b67598a3116274ce4a735c143b',
        indexName: 'pcapplusplus',
        contextualSearch: true,
        searchPagePath: 'search'
      },
      navbar: {
        logo: {
          alt: 'PcapPlusPlus',
          src: 'img/logo/logo_color.png'
        },
        items: [
          {
            type: 'doc',
            docId: 'quickstart',
            position: 'left',
            label: 'Docs'
          },
          {
            type: 'doc',
            docId: 'features',
            position: 'left',
            label: 'Features'
          },
          {
            type: 'doc',
            docId: 'api',
            position: 'left',
            label: 'API'
          },
          {
            to: '/community',
            label: 'Community',
            position: 'left'
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                to: '/versions',
                label: 'All versions'
              }
            ]
          },
          {
            href: 'https://groups.google.com/d/forum/pcapplusplus-support',
            position: 'right',
            label: 'Google Group',
            title: 'PcapPlusPlus Google Group'
          },
          {
            href: 'mailto:pcapplusplus@gmail.com',
            position: 'right',
            label: 'Email',
            title: 'Send us an email'
          },
          {
            href: 'https://stackoverflow.com/questions/tagged/pcapplusplus',
            position: 'right',
            label: 'StackOverflow',
            title: 'PcapPlusPlus tag on StackOverflow'
          },
          {
            href: 'https://twitter.com/seladb',
            position: 'right',
            label: 'Twitter',
            title: 'PcapPlusPlus on Twitter'
          },
          {
            href: 'https://github.com/seladb/PcapPlusPlus',
            position: 'right',
            label: 'GitHub',
            title: 'PcapPlusPlus on GitHub'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/install'
              },
              {
                label: 'Features',
                to: '/docs/features'
              },
              {
                label: 'Tutorials',
                to: '/docs/tutorials'
              },
              {
                label: 'DPDK',
                to: '/docs/dpdk'
              },
              {
                label: 'Example Apps',
                to: '/docs/examples'
              },
              {
                label: 'API Documentation',
                to: '/docs/api'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/seladb/PcapPlusPlus'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/seladb'
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/pcapplusplus'
              },
              {
                label: 'Google Group',
                href: 'https://groups.google.com/d/forum/pcapplusplus-support'
              },
              {
                label: 'Email',
                href: 'mailto:pcapplusplus@gmail.com'
              },
              {
                label: 'Contribute',
                to: '/community#contribute'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Releases',
                to: '/versions'
              },
              {
                label: 'Benchmarks',
                to: '/docs/benchmark'
              },
              {
                label: 'License',
                to: '/docs/features/#license'
              },
              {
                label: 'Web-site GitHub Repo',
                href: 'https://github.com/PcapPlusPlus/pcapplusplus.github.io'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} seladb. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash']
      }
    })
};

module.exports = config;
