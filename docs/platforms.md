---
layout: page
title: Supported platforms
permalink: /docs/platforms
nav_order: 6
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

## <img src="{{ site.baseurl }}/resources/logo-android.png" alt="drawing" width="24" title="Android"/> Android

- The 4 major [Android ABIs](https://developer.android.com/ndk/guides/abis) are supported: `armeabi-v7a`, `arm64-v8a`, `x86`, `x86_64`
- API versions 21-30

## <img src="{{ site.baseurl }}/resources/logo-freebsd.png" alt="drawing" width="24" title="FreeBSD"/> FreeBSD

Versions 11.3 and above are supported

## Other platforms

Other platforms and toolchains may work as well, but the support is not guaranteed. If you'd like us to add additional platforms please [contact us]({{ site.baseurl }}/docs/community).

## CI reports

You can view the status of each supported platform in our CI reports:

| __GitHub Actions__ (Linux, MacOS, Windows): | [![GitHub Actions](https://github.com/seladb/PcapPlusPlus/workflows/Build%20and%20test/badge.svg)](https://github.com/seladb/PcapPlusPlus/actions?query=workflow%3A%22Build+and+test%22) |
| __Cirrus CI__ (FreeBSD): | [![Build Status](https://api.cirrus-ci.com/github/seladb/PcapPlusPlus.svg)](https://cirrus-ci.com/github/seladb/PcapPlusPlus) |
| __Travis CI__ (MacOS): | [![Build Status](https://travis-ci.org/seladb/PcapPlusPlus.svg?branch=master)](https://travis-ci.org/seladb/PcapPlusPlus) |
|__AppVeyor__ (Windows MinGW and VS 2015): | [![Build status](https://ci.appveyor.com/api/projects/status/4u5ui21ibbevkstc/branch/master?svg=true)](https://ci.appveyor.com/project/seladb/pcapplusplus/branch/master) |
