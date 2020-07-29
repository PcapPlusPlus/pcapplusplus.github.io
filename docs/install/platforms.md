---
layout: page
title: Supported platforms
parent: Installation
permalink: /docs/install/platforms
nav_order: 1
---

# Supported platforms
{: .no_toc }

The platforms and toolchains described below are supported and being continuously tested.

1. TOC
{:toc}

## <img src="{{ site.baseurl }}/resources/logo-windows.png" alt="drawing" width="24" title="Windows"/> Windows

- [Microsoft Visual Studio](https://visualstudio.microsoft.com/) (32-bit + 64-bit compilation):
  - Visual Studio 2019
  - Visual Studio 2017
  - Visual Studio 2015 
  - [MinGW32](http://www.mingw.org/) (32-bit compilation only)
- [MinGW-w64](https://mingw-w64.org) (32-bit compilation only)

## <img src="{{ site.baseurl }}/resources/logo-linux.png" alt="drawing" width="24" title="Linux"/> Linux

Basically every x86 GCC toolchain should work, but PcapPlusPlus is being continuously tested on the following platforms:

- [Ubuntu](https://ubuntu.com/) (20.04 LTS, 18.04 LTS, 16.04 LTS, 14.04 LTS)
- [Fedora](https://getfedora.org/) 26 & 29
- [CentOS](https://www.centos.org/) 7

## <img src="{{ site.baseurl }}/resources/logo-apple.png" alt="drawing" width="24" title="MacOS"/> MacOS

- Catalina (10.15)
- Mojave (10.14)
- High Sierra (10.13)
- Sierra (10.12)
- El Capitan (10.11)

## <img src="{{ site.baseurl }}/resources/logo-freebsd.png" alt="drawing" width="24" title="FreeBSD"/> FreeBSD

Versions 11.3 and above are supported

## Other platforms

Other platforms and toolchains may work as well, but the support is not guaranteed. If you'd like us to add additional platforms please [contact us]({{ site.baseurl }}/docs/community).

## CI reports

You can view the status of each supported platform in our CI reports:

| __Travis CI__ (Linux and MacOS): | [![Build Status](https://travis-ci.org/seladb/PcapPlusPlus.svg?branch=master)](https://travis-ci.org/seladb/PcapPlusPlus) |
|__AppVeyor__ (Windows): | [![Build status](https://ci.appveyor.com/api/projects/status/4u5ui21ibbevkstc?svg=true)](https://ci.appveyor.com/project/seladb/pcapplusplus/branch/master) |
| __Cirrus CI__ (FreeBSD): | [![Build Status](https://api.cirrus-ci.com/github/seladb/PcapPlusPlus.svg)](https://cirrus-ci.com/github/seladb/PcapPlusPlus) |
