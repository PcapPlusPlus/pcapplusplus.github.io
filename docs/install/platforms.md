---
layout: page
title: Supported platforms
parent: Installation
permalink: /docs/install/platforms
nav_order: 1
---

# Supported platforms

The following platforms and toolchains are supported and being continuously tested:

<img src="/resources/logo-windows.png" alt="drawing" width="24" title="Windows"/> Windows:

- [Microsoft Visual Studio 2015](https://visualstudio.microsoft.com/) (32-bit + 64-bit compilation)
- [MinGW32](http://www.mingw.org/) (32-bit compilation only)
- [MinGW-w64](https://mingw-w64.org) (32-bit compilation only)

<img src="/resources/logo-linux.png" alt="drawing" width="24" title="Linux"/> Linux:

Basically every x86 GCC toolchain should work, but PcapPlusPlus is being continuously tested on the following platforms:

- [Ubuntu](https://ubuntu.com/) (12.04 LTS, 14.04 LTS, 16.04 LTS, 18.04 LTS)
- [Fedora](https://getfedora.org/) 26 & 29
- [CentOS](https://www.centos.org/) 7

<img src="/resources/logo-apple.png" alt="drawing" width="24" title="MacOS"/> MacOS:

- Mojave (10.14)
- High Sierra (10.13)
- Sierra (10.12)
- El Capitan (10.11)

Other platforms and toolchains may work as well, but the support is not guaranteed. If you'd like us to add more please [contact us](/docs/community).

You can see the latest status of each platform in our CI reports:

__Travis-CI:__

[![Build Status](https://travis-ci.org/seladb/PcapPlusPlus.svg?branch=master)](https://travis-ci.org/seladb/PcapPlusPlus)

__AppVeyor:__

[![Build status](https://ci.appveyor.com/api/projects/status/4u5ui21ibbevkstc?svg=true)](https://ci.appveyor.com/project/seladb/pcapplusplus/branch/master)