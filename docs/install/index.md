---
layout: page
title: Installation
has_children: true
permalink: /docs/install
nav_order: 2
---

# Setting Up PcapPlusPlus
{: .no_toc }

PcapPlusPlus is available on <img src="{{ site.baseurl }}/resources/logo-windows.png" alt="drawing" width="24" title="Windows"/> Windows, <img src="{{ site.baseurl }}/resources/logo-linux.png" alt="drawing" width="24" title="Linux"/> Linux, <img src="{{ site.baseurl }}/resources/logo-apple.png" alt="drawing" width="24" title="MacOS"/> MacOS, <img src="{{ site.baseurl }}/resources/logo-android.png" alt="drawing" width="24" title="Android"/> Android and <img src="{{ site.baseurl }}/resources/logo-freebsd.png" alt="drawing" width="24" title="FreeBSD"/> FreeBSD (see more details [here]({{ site.baseurl }}/docs/platforms)).

[Latest Release: {{ site.pcapplusplus_ver }}](https://github.com/seladb/PcapPlusPlus/releases/latest){: .btn .btn-purple } {% include new-release.html %}

You can choose between downloading pre-built binaries or build it from source. The different options are described below:

1. TOC
{:toc}

## Homebrew

Available for: <img src="{{ site.baseurl }}/resources/logo-apple.png" alt="drawing" width="24" title="MacOS"/> <img src="{{ site.baseurl }}/resources/logo-linux.png" alt="drawing" width="24" title="Linux"/>

PcapPlusPlus pre-built binaries are available in Homebrew on MacOS and Linux. You can install it by running the following command from the command-line:

```bash
brew install pcapplusplus
```

You can also find the PcapPlusPlus formula here: <https://formulae.brew.sh/formula/pcapplusplus>

## Vcpkg

Available for: <img src="{{ site.baseurl }}/resources/logo-windows.png" alt="drawing" width="24" title="Windows"/> <img src="{{ site.baseurl }}/resources/logo-linux.png" alt="drawing" width="24" title="Linux"/> <img src="{{ site.baseurl }}/resources/logo-apple.png" alt="drawing" width="24" title="MacOS"/>

PcapPlusPlus port is available in Vcpkg on Windows, MacOS and Linux. You can install it by running the following command from the command-line:

Windows:

```text
.\vcpkg install pcapplusplus
```

MacOS/Linux:

```text
vcpkg install pcapplusplus
```

You can also find the PcapPlusPlus port details here: <https://github.com/microsoft/vcpkg/tree/master/ports/pcapplusplus>

## Conan - coming soon!

<img src="{{ site.baseurl }}/resources/coming-soon.png" alt="drawing" width="100" title="Coming soon..."/>

Conan support is still work-in-progress...

## Latest Release From GitHub

Available for: <img src="{{ site.baseurl }}/resources/logo-windows.png" alt="drawing" width="24" title="Windows"/> <img src="{{ site.baseurl }}/resources/logo-linux.png" alt="drawing" width="24" title="Linux"/> <img src="{{ site.baseurl }}/resources/logo-apple.png" alt="drawing" width="24" title="MacOS"/> <img src="{{ site.baseurl }}/resources/logo-freebsd.png" alt="drawing" width="24" title="FreeBSD"/> <img src="{{ site.baseurl }}/resources/logo-android.png" alt="drawing" width="24" title="Android"/>

[Download Latest Release: {{ site.pcapplusplus_ver }}](https://github.com/seladb/PcapPlusPlus/releases/latest){: .btn .btn-purple } {% include new-release.html %}

Each release of PcapPlusPlus ships with pre-compiled libraries for a variety of operating systems and GCC versions including:

- Windows (MinGW, MinGW-w64, Visual Studio)
- Linux (multiple versions of Ubuntu, Fedora, CentOS)
- MacOS (multiple versions combined with multiple Xcode versions)
- FreeBSD (multiple versions)

Each package includes the following content:

- Compiled __Common++__, __Packet++__, __Pcap++__ libraries
- PcapPlusPlus header files
- Examples binaries
- A makefile to include when building your app with PcapPlusPlus
- A simple code example showing how to build applications using PcapPlusPlus compiled binaries

There is an additional Linux package shipped with every release that contains the source code and installation scripts to automatically build and install PcapPlusPlus. Those scripts can be used on any Linux platform and include options to build PcapPlusPlus with DPDK or PF_RING.

## Build From Source

Download the source code for the latest version (__{{ site.pcapplusplus_ver }}__) from GitHub which includes:

- Source code for __Common++__, __Packet++__, __Pcap++__
- Examples
- Unit tests
- Configuration scripts for all platforms

[Download {{ site.pcapplusplus_ver }} zip format](https://github.com/seladb/PcapPlusPlus/archive/{{ site.pcapplusplus_ver }}.zip){: .btn .btn-blue }
[Download {{ site.pcapplusplus_ver }} tar.gz format](https://github.com/seladb/PcapPlusPlus/archive/{{ site.pcapplusplus_ver }}.tar.gz){: .btn .btn-blue }

You can also download the latest source code from `master`:

[Download master zip format](https://github.com/seladb/PcapPlusPlus/archive/master.zip){: .btn .btn-green }
[Download master tar.gz format](https://github.com/seladb/PcapPlusPlus/archive/master.tar.gz){: .btn .btn-green }

Please find detailed instructions below on how to build PcapPlusPlus on the various supported platforms:
