---
layout: page
title: API Reference
permalink: /docs/api
nav_order: 99
---

# API Reference

[Go to Doxygen API reference]({{ site.baseurl }}/api-docs){: .btn .btn-blue }

PcapPlusPlus consists of 3 libraries:

- __Packet++__ - a library for parsing, creating and editing network packets
- __Pcap++__ - a library for intercepting and sending packets, providing network and NIC info, stats, etc. It is actually a C++ wrapper for packet capturing engines such as libpcap, WinPcap, Npcap, DPDK and PF_RING
- __Common++__ - a library with some common code utilities used by both Packet++ and Pcap++

The dependency model between the libraries is as follows:

```
+----------+     +----------+     +----------+
| Common++ | ==> | Packet++ | ==> |  Pcap++  |
+----------+     +----------+     +----------+
```

That means, you can use __Common++__ separately from the other libraries, and you can also use __Packet++__ without __Pcap++__.

All of PcapPlusPlus APIs including classes for all of these libraries, files, data structures, etc. are documented in details using [Doxygen](http://www.doxygen.nl/).
