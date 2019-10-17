---
layout: page
title: Build on Windows (VS)
parent: Installation
permalink: /docs/install/build-source/vs
nav_order: 4
---

# Build From Source on Windows - Visual Studio
{: .no_toc }

Please visit the [supported platforms page](/docs/install/platforms) to see the Visual Studio versions currently supported in PcapPlusPlus.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Prerequisites

In order to build PcapPlusPlus on Windows with Visual Studio you need the following components:

1. A [supported version](/docs/install/platforms) of Microsoft Visual Studio 
2. WinPcap developer's pack - containing the wpcap library PcapPlusPlus is linking with plus relevant h files. You can download it from <https://www.winpcap.org/devel.htm>
3. pthread-win32 - can be downloaded from here: <ftp://sourceware.org/pub/pthreads-win32/pthreads-w32-2-9-1-release.zip>

## Visual Studio project structure

After configuration is complete there are 3 Visual Studio solutions:

* `mk\[vs_version]\PcapPlusPlus.sln` - contains PcapPlusPlus libraries (__Common++__, __Packet++__ and __Pcap++__) and unit-tests projects
* `mk\[vs_version]\PcapPlusPlus-Examples.sln` - contains all PcapPlusPlus examples. Requires `PcapPlusPlus.sln` to be built first
* `mk\[vs_version]\Tutorials.sln` - contains all PcapPlusPlus tutorial examples. Requires `PcapPlusPlus.sln` to be built first


*** `[vs_version]` can be either `vs2015`, `vs2017` or `vs2019` and is determined during the configuration process.

![PcapPlusPlus Visual Studio solution]({{ 'resources/vs2015pcpp.png' | relative_url }})

![PcapPlusPlus Visual Studio example solution]({{ 'resources/vs2015examples.png' | relative_url }})

All solutions support both 32-bit (x86) and 64-bit (x64) configurations as well as Debug and Release modes. So there are 4 supported modes:

* `x86|Debug`
* `x86|Release`
* `x64|Debug`
* `x64|Release`

## Configuration

Before opening the solution (`.sln`) files please run the `configure-windows-visual-studio.bat` batch file from PcapPlusPlus main directory. This script configures the solution and project files according to the selected version of Visual Studio. It also creates a Visual Studio properties file called `PcapPlusPlusPropertySheet.props` that contains paths for 3rd-party libraries being used to build PcapPlusPlus.

{% include alert.html alert-type="important" title="Notice" content="Visual Studio 2017 and 2019 are only supported in the latest code in <code>master</code>. The current official release (v19.04) only supports Visual Studio 2015. So if you're building an official release from source you won't see the option to choose a Visual Studio version" %}

Ths script has two modes of operation:

* Wizard mode - the script will walk you through the paths and parameters you need to provide
* Command line switches mode - all parameters are provided in the script command line

### Wizard mode

In wizard mode the script will ask you for the requested version of Visual Studio and the locations of WinPcap developer's pack and pthreads-win32. Here is an example:

```shell
C:\PcapPlusPlus>configure-windows-visual-studio.bat

***********************************************
PcapPlusPlus Visual Studio configuration script
***********************************************

Choose Visual Studio version.

Currently supported options are: vs2015, vs2017 or vs2019: vs2019


WinPcap developer's pack is required for compiling PcapPlusPlus.
If WinPcap developer's pack is not installed, please download and install it from https://www.winpcap.org/devel.htm

Please specify WinPcap developer's pack installed path: C:\WpdPack


pthreads-win32 is required for compiling PcapPlusPlus.
If you didn't download it already, please download it from here: ftp://sourceware.org/pub/pthreads-win32/pthreads-w32-2-9-1-release.zip

Please specify pthreads-win32 path: C:\pthread-win32

PcapPlusPlus Visual Studio configuration is complete. Files created (or modified): PcapPlusPlusPropertySheet.props, Arping.vcxproj,
ArpSpoofing.vcxproj, Common++.vcxproj, DNSResolver.vcxproj, DnsSpoofing.vcxproj, HttpAnalyzer.vcxproj, IcmpFileTransfer-catcher.vcxproj,
IcmpFileTransfer-pitcher.vcxproj, IPDefragUtil.vcxproj, IPFragUtil.vcxproj, LightPcapNg.vcxproj, Packet++.vcxproj, Packet++Test.vcxproj,
Pcap++.vcxproj, Pcap++Test.vcxproj, PcapPrinter.vcxproj, PcapSearch.vcxproj, PcapSplitter.vcxproj, SSLAnalyzer.vcxproj, TcpReassembly.vcxproj,
Tutorial-HelloWorld.vcxproj, Tutorial-LiveTraffic.vcxproj, Tutorial-PacketCraftAndEdit.vcxproj, Tutorial-PacketParsing.vcxproj,
Tutorial-PcapFiles.vcxproj
```

### Command line switches mode

In this mode you need to provide the requested Visual Studio version as well as the paths as script params. You can use the `--help` switch to query these switches:

```shell
C:\PcapPlusPlus>configure-windows-visual-studio.bat --help

***********************************************
PcapPlusPlus Visual Studio configuration script
***********************************************


Help documentation for configure-windows-visual-studio.bat
This script has 2 modes of operation:
  1) Without any switches. In this case the script will guide you through using wizards
  2) With switches, as described below

Basic usage: configure-windows-visual-studio.bat [-h] -v VS_VERSION -p PTHREADS_WIN32_DIR -w WINPCAP_HOME_DIR

The following switches are recognized:
-v|--vs-version      --Set Visual Studio version to configure. Must be one of: vs2015, vs2017, vs2019
-p|--pthreads-home   --Set pthreads-win32 home directory
-w|--winpcap-home    --Set WinPcap home directory
-h|--help            --Display this help message and exits. No further actions are performed
```

Here is an example:

```shell
C:\PcapPlusPlus>configure-windows-visual-studio.bat --vs-version 2019 --winpcap-home C:\WpdPack --pthreads-home C:\pthread-win32

***********************************************
PcapPlusPlus Visual Studio configuration script
***********************************************


PcapPlusPlus Visual Studio configuration is complete. Files created (or modified): PcapPlusPlusPropertySheet.props, Arping.vcxproj,
ArpSpoofing.vcxproj, Common++.vcxproj, DNSResolver.vcxproj, DnsSpoofing.vcxproj, HttpAnalyzer.vcxproj, IcmpFileTransfer-catcher.vcxproj,
IcmpFileTransfer-pitcher.vcxproj, IPDefragUtil.vcxproj, IPFragUtil.vcxproj, LightPcapNg.vcxproj, Packet++.vcxproj, Packet++Test.vcxproj,
Pcap++.vcxproj, Pcap++Test.vcxproj, PcapPrinter.vcxproj, PcapSearch.vcxproj, PcapSplitter.vcxproj, SSLAnalyzer.vcxproj, TcpReassembly.vcxproj,
Tutorial-HelloWorld.vcxproj, Tutorial-LiveTraffic.vcxproj, Tutorial-PacketCraftAndEdit.vcxproj, Tutorial-PacketParsing.vcxproj,
Tutorial-PcapFiles.vcxproj
```

Here are the available switches:

| __`-v`__ , __`--vs-version`__    | Visual Studio version to configure.<br>Currently supported versions are: `vs2015`, `vs2017`, `vs2019` |
| __`-p`__ , __`--pthreads-home`__ | pthreads-win32 home directory |
| __`-w`__ , __`--winpcap-home`__  | WinPcap Developer Pack (WpdPack) directory |
| __`-h`__ , __`--help`__          | Display the help message and exit. No further actions are performed |

## Build the code

* Build `mk\[vs_version]\PcapPlusPlus.sln` first to get PcapPlusPlus libraries and unit-tests
* Then you can choose to build `mk\[vs_version]\PcapPlusPlus-Examples.sln` to get PcapPlusPlus examples
* You can also choose to build `mk\[vs_version]\Tutorials.sln` to see the tutorial examples

You can build these 3 solutions using either Visual Studio IDE or `MSBuild`.

