// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'quickstart',
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'doc',
        id: 'install/index'
      },
      items: [
        'install/linux',
        'install/macos',
        'install/vs',
        'install/mingw',
        'install/android',
        'install/freebsd'
      ]
    },
    'features',
    'dpdk',
    {
      type: 'category',
      label: 'Tutorials',
      link: {
        type: 'generated-index',
        title: 'PcapPlusPlus Tutorials',
        description:
          'The following tutorials cover the basic and most important features and APIs of PcapPlusPlus and should give a good understanding of how to work with the library',
        slug: 'tutorials'
      },
      items: [
        'tutorials/intro',
        'tutorials/read-write-pcap',
        'tutorials/capture-packets',
        'tutorials/packet-parsing',
        'tutorials/packet-crafting',
        'tutorials/dpdk'
      ]
    },
    'platforms',
    'examples',
    'benchmark',
    'tests',
    'api'
  ]
};

module.exports = sidebars;
