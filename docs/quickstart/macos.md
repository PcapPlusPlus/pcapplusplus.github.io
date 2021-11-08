---
layout: page
title: Quick Start - MacOS
nav_exclude: true
permalink: /docs/quickstart/macos
---

# Quick Start - MacOS
{: .no_toc }

This guide will help you install and build your first PcapPlusPlus application on MacOS in a few simple steps.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Step 1 - install PcapPlusPlus

Before installing PcapPlusPlus make sure you have the prerequisites installed for [MacOS]({{ site.baseurl }}/docs/install/build-source/macos#prerequisites).

The easiest way to get PcapPlusPlus is from Homebrew:

```shell
brew install pcapplusplus
```

If you prefer not to use Homebrew you can also found pre-compiled packages for various versions of MacOS and Xcode in the [latest release page](https://github.com/seladb/PcapPlusPlus/releases/latest). After downloading and extracting the archive file go to: `/path/to/your/package/` and run the installation script:

```shell
./install.sh
```

Another option is to build PcapPlusPlus [from source]({{ site.baseurl }}/docs/install/build-source/macos). Make sure not to skip the [installation]({{ site.baseurl }}/docs/install/build-source/macos#installation) part.

## Step 2 - create your first app

If you installed PcapPlusPlus using Homebrew go to the [Hello World tutorial on GitHub](https://github.com/seladb/PcapPlusPlus/tree/{{site.github_label}}/Examples/Tutorials/Tutorial-HelloWorld) and get the files in that directory.

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

If you built it from source or downloaded it from GitHub:

- go to the directory of the tutorial `/path/to/pcapplusplus/source/Tutorials/Tutorial-HelloWorld`
- rename `Makefile.non_windows` to `Makefile`

## Step 4 - build and run your app

Run `make` to build the app:

```shell
$ make
```

An executable file will be created which contains the compiled app. You can now run it and should be able to see the following output:

```shell
Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'
```
