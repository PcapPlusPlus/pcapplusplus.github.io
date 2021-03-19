---
layout: page
title: Quick Start - Android
nav_exclude: true
permalink: /docs/quickstart/android
---

# Quick Start - Android
{: .no_toc }

This guide will help you set up an Android app that uses PcapPlusPlus.

[ToyVpn](https://android.googlesource.com/platform/development/+/master/samples/ToyVpn) is one of Android's example apps that demonstrates Android APIs to create VPN solutions. You can read more about it in the [Android documentation](https://developer.android.com/guide/topics/connectivity/vpn).

ToyVpn uses [`VpnService`](https://developer.android.com/reference/android/net/VpnService) to handle incoming and outgoing network traffic, which means is has access to all of the network packets going through the VPN. This makes it a great example of how PcapPlusPlus can be used in Android apps and run on any device without any special requirements such as a rooted device.

[ToyVpn-PcapPlusPlus](https://github.com/seladb/ToyVpn-PcapPlusPlus) is a version of ToyVpn that uses PcapPlusplus to gather data and metrics on the network traffic that goes through the VPN. It collects data such as: packet count of different protocols (IPv4, IPv6, DNS, TLS, etc.), TCP connections, DNS requests and responses, TLS versions, TLS Server Name Indication (SNI), and more. These metrics are collected and written to log. In addition all of the network traffic is captured and saved to a pcap file that can be used to further investigation.

The [`README.md`](https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/README.md) file contains detailed information on how to build and install the app.

{% include alert.html alert-type="notice" content="in the next release of PcapPlusPlus Android will be officially supported and the pre-compiled PcapPlusPlus libraries will be available in release page. In the meantime building PcapPlusPlus libraries for Android is a necessary step" %}

Here is a screenshot of the app:

![ToyVpn Screenshot]({{ 'resources/toyvpn.png' | relative_url }})

Here is an example of the stats collected by the app (as written to the app log):

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
