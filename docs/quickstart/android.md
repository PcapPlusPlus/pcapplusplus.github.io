---
layout: page
title: Quick Start - Android
nav_exclude: true
permalink: /docs/quickstart/android
---

# Quick Start - Android
{: .no_toc }

This guide will help you set up an Android app that uses PcapPlusPlus.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## ToyVpn

[ToyVpn](https://android.googlesource.com/platform/development/+/master/samples/ToyVpn) is an Android example app provided by Google that demonstrates Android APIs to create VPN solutions. You can read more about it in the [Android documentation](https://developer.android.com/guide/topics/connectivity/vpn).

ToyVpn uses [`VpnService`](https://developer.android.com/reference/android/net/VpnService) to handle incoming and outgoing network traffic, which means is has access to the network packets going through the VPN (which is otherwise not possible on non-rooted devices). This makes it a great example of how PcapPlusPlus can be used in Android apps and run on any device without special requirements such as a rooted device.

## ToyVpn-PcapPlusPlus

[ToyVpn-PcapPlusPlus](https://github.com/seladb/ToyVpn-PcapPlusPlus) is a version of ToyVpn that uses PcapPlusplus to gather data and metrics on the network traffic that goes through the VPN. It collects data such as packet count of different protocols (IPv4, IPv6, DNS, TLS, etc.), TCP connections, DNS requests and responses, TLS versions, TLS Server Name Indication (SNI), and more. These metrics are collected and written to the app's log. In addition to data collection, all of the network traffic is captured and saved to a pcap file that can be used for further investigation.

[ToyVpn-PcapPlusPlus's `README.md`](https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/README.md) file contains detailed information on how to [build and install the app](https://github.com/seladb/ToyVpn-PcapPlusPlus#build-and-run-instructions).

PcapPlusPlus pre-compiled libraries are available in the release page: [pcapplusplus-21.05-android.tar.gz](https://github.com/seladb/PcapPlusPlus/releases/download/v21.05/pcapplusplus-21.05-android.tar.gz)

Here is a screenshot of the app:

![ToyVpn Screenshot]({{ 'resources/toyvpn.png' | relative_url }})

And here is an example of the metrics collected by the app (as written to the app's log):

```shell
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: Packet stats:
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: Packets=2639
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: IPv4=2620
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: IPv6=11
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: TCP=2583
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: UDP=37
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: Connections=48
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: DNS_req=18
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: DNS_res=19
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: Top_TLS_Version=[(TLS 1.3, 27)]
03-19 00:57:33.076  6085  6130 I PcapPlusPlusInterface: TOP_SNI=[(i.ytimg.com, 4), (cdn.ampproject.org, 4), (lh5.googleusercontent.com, 2), (google.com, 2), (googleads.g.doubleclick.net, 2)]
```

## Do I need a rooted device in order to use PcapPlusPlus in my Android app?

The quick answer is no. A lot of PcapPlusPlus functionality will work on any device and any app. However, on non-rooted devices some of the features may not work. The main reason is that non-rooted devices do not allow access to the device's network interfaces and configuration. That means that capturing live network traffic using [`PcapLiveDevice`](http://localhost:4000/api-docs/classpcpp_1_1_pcap_live_device.html) may not work, as well as opening raw sockets with [`RawSocketDevice`](http://localhost:4000/api-docs/classpcpp_1_1_raw_socket_device.html). You may also need your app to request [additional permissions to read and write files](https://developer.android.com/training/data-storage) in order to read and write pcap/pcapng files.

But other than that, most of the features should work including parsing and analyzing of network packets and the [various protocols]({{ site.baseurl }}/docs/features#supported-network-protocols) supported by PcapPlusPlus, which is what [ToyVpn-PcapPlusPlus](https://github.com/seladb/ToyVpn-PcapPlusPlus) demonstrates.

If you do have a rooted device most of PcapPlusPlus features should work. Please feel free to [open an issue](https://github.com/seladb/PcapPlusPlus/issues) if something is not working as expected.

## Using PcapPlusPlus in my app

PcapPlusPlus is a native C++ library so in order to use it in an Android app you need to get familiar with [Android NDK](https://developer.android.com/ndk) which is the toolset for using native code in Android apps.

[ToyVpn-PcapPlusPlus](https://github.com/seladb/ToyVpn-PcapPlusPlus) is a good way to get started because it provides a very simple yet end-to-end example of writing PcapPlusPlus code and integrating it with the app. Here are a few links to parts in the code you might find interesting:
- [`pcapplusplus_interface.cpp`](https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/cpp/pcapplusplus_interface.cpp) - the C++ code that uses PcapPlusPlus. It exposes 2 [JNI](https://developer.android.com/training/articles/perf-jni) methods that are used within the app
- [`CMakeLists.txt`](https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/cpp/CMakeLists.txt) - a CMake file to build the native code
- [`PcapPlusPlusInterface.kt`](https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/java/com/example/android/pcapplusplus/PcapPlusPlusInterface.kt) - a Kotlin file that uses the native JNI methods

If you want to learn more we strongly recommend going over [ToyVpn-PcapPlusPlus's `README.md`](https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/README.md) file as it contains very detail information of how PcapPlusPlus can be used in a real Android app.
