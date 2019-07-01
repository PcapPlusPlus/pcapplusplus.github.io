---
layout: page
title: Feature Overview
has_children: true
permalink: /docs/features
nav_order: 3
---

# Feature Overview
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Packet capture

PcapPlusPlus currently works with the following packet capture engines:

- [libpcap](https://www.tcpdump.org/) live capture (on Linux and MacOS)
- [WinPcap](https://www.winpcap.org/) live capture (on Windows)
- [Intel DPDK](https://www.dpdk.org/) engine (on Linux)
- ntop's Vanilla [PF_RING](https://www.ntop.org/products/packet-capture/pf_ring/) engine (on Linux)
- [WinPcap](https://www.winpcap.org/) Remote live capture (on Windows)
- PCAP and PCAPNG file devices (reading and writing)

## Packet decoding and forging

PcapPlusPlus provide decoding and forging capabilities for a large variety of network protocols (see the full list [here](#supported-network-protocols))

## Read and write packets from/to files

sfsdf

## DPDK support

The Data Plane Development Kit (DPDK) is a set of data plane libraries and network interface controller drivers for fast packet processing, currently managed as an open-source project under the Linux Foundation. The DPDK provides a programming framework for x86, ARM, and PowerPC processors and enables faster development of high speed data packet networking applications (taken from [Wikipedia](https://en.wikipedia.org/wiki/Data_Plane_Development_Kit)).

DPDK provides packet processing in line rate using kernel bypass for a large range of network interface cards. Notice that not every NIC supports DPDK as the NIC needs to support the kernel bypass feature. You can read more about DPDK in [DPDK's web-site](https://www.dpdk.org/) and get a list of supported NICs [here](http://core.dpdk.org/supported/).

As DPDK API is written in C, PcapPlusPlus wraps the main functionality in a C++ easy-to-use classes which should have minimum affect on performance and packet processing rate. In addition it brings DPDK to the PcapPlusPlus framework and API so you can use DPDK together with other PcapPlusPlus features such as packet parsing and editing, etc.

You can find more information about setting up DPDK and the API in [DPDK support page](/docs/dpdk) and also in [DPDK tutorial](/docs/tutorials/dpdk).

## PF_RING support

PF_RING™ is a new type of network socket that dramatically improves the packet capture speed. It's providing high-speed packet capture, filtering and analysis (taken from [ntop's website](https://www.ntop.org/products/packet-capture/pf_ring/)).

PcapPlusPlus provides a clean and simple C++ wrapper API for [Vanilla PF_RING](https://www.ntop.org/products/packet-capture/pf_ring/). Currently only Vanilla PF_RING is supported which provides significant performance improvement in comparison to libpcap or Linux kernel, but [PF_RING Zero Copy](https://www.ntop.org/products/packet-capture/pf_ring/pf_ring-zc-zero-copy/) (which allows kernel bypass and zero-copy of packets from NIC to user-space) is not supported.

In order to compile PcapPlusPlus with PF_RING you need to:

- Download PF_RING from [ntop's web-site](https://www.ntop.org/get-started/download/#PF_RING)
- Note that PcapPlusPlus was tested with PF_RING versions 6.2.0 - 6.4.1. Later versions aren't guaranteed to work. Please report if you're seeing issues with later versions
- Once PF_RING is compiled successfully, you need to run PcapPlusPlus's `configure-linux.sh` script and type "y" in "Compile PcapPlusPlus with PF_RING?"
- Then you can compile PcapPlusPlus as usual
- Before you activate any PcapPlusPlus application that uses PF_RING, don't forget to enable PF_RING kernel module. If you forget to do that, PcapPlusPlus will output an - appropriate error on startup which will remind you:

```shell
sudo insmod <PF_RING_LOCATION>/kernel/pf_ring.ko
```

## Packet reassembly

sdfsd

## Packet filtering

Most packet capture engines contain packet filtering capabilities. In order to set the filters there should be a known syntax user can use. The most popular syntax is [Berkeley Packet Filter (BPF)](http://en.wikipedia.org/wiki/Berkeley_Packet_Filter). Detailed explanation of the syntax can be found here: http://www.tcpdump.org/manpages/pcap-filter.7.html.

The problem with BPF is that, for my opinion, the syntax is too complicated and too poorly documented. In addition the BPF filter compilers may output syntax errors that are hard to understand. My experience with BPF was not good, so I decided to include in PcapPlusPlus a filter mechanism which is more structured, easier to understand and less error-prone by creating classes that represent filters. Each possible filter phrase is represented by a class. The filter, in the end, is that class.

Consider the following code snippet for creating the filter `src ip 1.1.1.1 and dst port 80` and setting it up on a packet capture device:

```cpp
// create a filter instance to capture only traffic on port 80
pcpp::PortFilter portFilter(80, pcpp::DST);

// create a filter instance to capture only TCP traffic
pcpp::IPFilter ipFilter("1.1.1.1", pcpp::SRC);

// create an AND filter to combine both filters - capture only TCP traffic on port 80
pcpp::AndFilter andFilter;
andFilter.addFilter(&portFilter);
andFilter.addFilter(&ipFilter);

// set the filter on the device
dev->setFilter(andFilter);
```

## Supported network protocols

PcapPlusPlus currently supports parsing, editing and creation of packets of the following protocols:

1. Ethernet
2. SLL (Linux cooked capture)
3. Null/Loopback
4. Raw IP (IPv4 & IPv6)
5. IPv4
6. IPv6
7. ARP
8. VLAN
9. VXLAN
10. MPLS
11. PPPoE
12. GRE
13. TCP
14. UDP
15. ICMP
16. IGMP (IGMPv1, IGMPv2 and IGMPv3 are supported)
17. SIP
18. SDP
19. Radius
20. DNS
21. DHCP
22. HTTP headers (request & response)
23. SSL/TLS - parsing only (no editing capabilities)
24. Packet trailer (a.k.a footer or padding)
25. Generic payload
