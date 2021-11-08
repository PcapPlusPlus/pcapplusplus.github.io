---
layout: page
title: Quick Start - MinGW
nav_exclude: true
permalink: /docs/quickstart/mingw
---

# Quick Start - Windows and MinGW
{: .no_toc }

This guide will help you install and build your first PcapPlusPlus application on Windows using MinGW32 / MinGW-w64 in a few simple steps.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Step 1 - install PcapPlusPlus

Before installing PcapPlusPlus make sure you have the prerequisites installed for [MinGW32](/docs/install/build-source/mingw#prerequisites-for-building-with-mingw) or [MinGW-w64](/docs/install/build-source/mingw#prerequisites-for-building-with-mingw-w64).

If you have MinGW with GCC version 5.3.0 or MinGW-w64 with GCC version 6.3.0 you can download a pre-compiled package from the [{{ site.pcapplusplus_ver }} release page](https://github.com/seladb/PcapPlusPlus/releases/tag/{{site.pcapplusplus_ver}}).

Otherwise you need to [build PcapPlusPlus from source](/docs/install/build-source/mingw).

## Step 2 - create your first app

If you downloaded a pre-compiled package go to: `Drive:\path\to\your\package\example-app`.

If you built it from source go to: `Drive:\path\to\pcapplusplus\source\Tutorials\Tutorial-HelloWorld`.

Make sure you see the following files:

```shell
 |-- main.cpp
 |-- 1_packet.pcap
```

`main.cpp` is the example application we'll use.

`1_packet.pcap` is a pcap file the app reads from.

## Step 3 - create a Makefile

If you downloaded a pre-compiled package you can find a Makefile in `Drive:\path\to\your\package\example-app`. This Makefile is already configured.

If you built it from source:

- go to `Drive:\path\to\pcapplusplus\source\Tutorials\Tutorial-HelloWorld`
- rename `Makefile.windows` to `Makefile`

## Step 4 - build and run your app

Run `make` to build the app:

```shell
C:\path\to\example\app>mingw32-make.exe
```

An `.exe` file will be created which contains the compiled app. You can now run it and should be able to see the following output:

```shell
Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'
```
