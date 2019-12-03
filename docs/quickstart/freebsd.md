---
layout: page
title: Quick Start - FreeBSD
nav_exclude: true
permalink: /docs/quickstart/freebsd
---

# Quick Start - FreeBSD
{: .no_toc }

This guide will help you install and build your first PcapPlusPlus application on FreeBSD in a few simple steps.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Step 1 - install PcapPlusPlus

Before installing PcapPlusPlus make sure you have the prerequisites installed for [FreeBSD]({{ site.baseurl }}/docs/install/build-source/freebsd#prerequisites).

Pre-compiled packages are available for recent versions of FreeBSD. You can find them under the [latest release page](https://github.com/seladb/PcapPlusPlus/releases/latest). After downloading and extracting the archive file go to: `/path/to/your/package/` and run the installation script:

```shell
sudo ./install.sh
```

If you have other versions of FreeBSD you'll need to [build PcapPlusPlus from source]({{ site.baseurl }}/docs/install/build-source/freebsd). Make sure not to skip the [installation]({{ site.baseurl }}/docs/install/build-source/freebsd#installation) part.

## Step 2 - create your first app

If you downloaded a pre-compiled package go to: `/path/to/your/package/example-app`.

If you built it from source go to: `/path/to/pcapplusplus/source/Tutorials/Tutorial-HelloWorld`.

Make sure you see the following files:

```shell
 |-- main.cpp
 |-- 1_packet.pcap
```

`main.cpp` is the example application we'll use.

`1_packet.pcap` is a pcap file the app reads from.

## Step 3 - create a Makefile

If you downloaded a pre-compiled package you can find a Makefile in `/path/to/your/package/example-app`. This Makefile is already configured.

If you built it from source:

- go to `/path/to/pcapplusplus/source/Tutorials/Tutorial-HelloWorld`
- rename `Makefile.non_windows` to `Makefile`

## Step 4 - build and run your app

Run `gmake` to build the app:

```shell
$ gmake
```

An executable file will be created which contains the compiled app. You can now run it and should be able to see the following output:

```shell
Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'
```