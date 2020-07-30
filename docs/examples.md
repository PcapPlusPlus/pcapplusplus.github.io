---
layout: page
title: Example Apps
permalink: /docs/examples
nav_order: 7
---

# Example Applications
{: .no_toc }

PcapPlusPlus contains various example applications that make use of most PcapPlusPlus APIs and features. Although some of them may be useful on their own (like arping or arp-spoofing), their main objective is to show how to use PcapPlusPlus. All examples are well documented and contain code which is easy to understand. After compiling PcapPlusPlus all compiled applications are under Dist/examples. Here is the list of example applications:

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## [ArpSpoofing](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/ArpSpoofing)

an application that does ARP spoofing using Packet++ and Pcap++. You can read more about ARP spoofing [here](https://en.wikipedia.org/wiki/ARP_spoofing).

## [Arping](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/Arping)

an implementation of the [arping](https://en.wikipedia.org/wiki/Arping) utility using PcapPlusPlus.

## [DnsSpoofing](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/DnsSpoofing)

a command-line utility that does [DNS spoofing](https://en.wikipedia.org/wiki/DNS_spoofing) using Packet++ and Pcap++.

## [DNSResolver](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/DNSResolver)

a command-line utility that resolves IPv4 address for an hostname using ARP and DNS protocols.

## [IcmpFileTransfer](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/IcmpFileTransfer)

an application that demonstrates how to transfer files between two machines using only ICMP messages. The basic idea is to use the data part of ICMP messages to transfer chunks of the file between the machines. You can read more about it [here](http://www.unixist.com/security/data-transfer-over-icmp/index.html).

## [HttpAnalyzer](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/HttpAnalyzer)

an application that analyzes HTTP traffic and presents detailed and diverse information about it such as packet count and rate, bandwidth, flow count and rate, HTTP requests and responses count and rate, hostname histogram, content-type histogram, status code histogram and much more. Can operate on live traffic or read packets from a pcap file.

## [SSLAnalyzer](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/SSLAnalyzer)

an application that analyzes SSL/TLS traffic and presents detailed and diverse information about it such as packet count and rate, bandwidth, flow count and rate, SSL/TLS messages count, hostname histogram, SSL/TLS version count, cipher-suite count and much more. Can operate on live traffic or read packets from a pcap file.

## [DpdkExample-FilterTraffic](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/DpdkExample-FilterTraffic)

an application that demonstrates PcapPlusPlus DPDK APIs. This application listens to one or more DPDK ports (a.k.a DPDK devices), captures all traffic and matches packets by user-defined matching criteria such as source/dest IP, source/dest TCP/UDP port and more. Matched packets can be send to another DPDK port and/or be save to a pcap file. In addition the application collects statistics on received and matched packets.

## [DpdkBridge](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/DpdkBridge)

an application that demonstrates how to create a bridge between two network devices (similar to DPDK's L2 forwarding example) using PcapPlusPlus DPDK APIs.

## [KniPong](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/KniPong)

an application that demonstrates PcapPlusPlus wrapper for DPDK KNI. It emulates the Unix NETCAT utility run with -u key. It is basically a ping/pong client/server channel using user provided input from stdin.

## [PfRingExample-FilterTraffic](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/PfRingExample-FilterTraffic)

an application that demonstrates PcapPlusPlus PF_RING APIs. This application listens to a PF_RING interface, captures all traffic and matches packets by user-defined matching criteria such as source/dest IP, source/dest TCP/UDP port and more. Matched packets can be send to another PF_RING interface and/or be save to a pcap file. In addition the application collects statistics on received and matched packets.

## [PcapPrinter](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/PcapPrinter)

a simple application that outputs packets from a pcap file as a readable string.

## [PcapSplitter](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/PcapSplitter)

an application that splits pcap files into smaller pcap files by various criteria defined by the user like file size, packet count, split per connection, per client-ip, per server-ip, per server-port (protocol) or per IP src + IP dst (2-tuple). This application is very advanced compared to similar tools, for example: there is no limit on input file size or packet count, no technical limit on number of output files (unless the user sets a limit), support for both IPv4 and IPv6, and a lot more.

## [PcapSearch](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/PcapSearch)

an application that search inside pcap files in a directory/ies given by the user and counts how many packet match a user-defined pattern given in a BPF format.

## [TcpReassembly](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/TcpReassembly)

an application that captures data transmitted as part of TCP connections, organizes the data and stores it in a way that is convenient for protocol analysis and debugging. This application reconstructs the TCP data streams and stores each connection in a separate file(s). TcpReassembly understands TCP sequence numbers and will correctly reconstruct data streams regardless of retransmissions, out-of-order delivery or data loss.

## [IPFragUtil](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/IPFragUtil)

A utility for splitting IP packets into fragments. It works on pcap and pcapng files and allows the user to choose which packets to fragment and to which size. Works on IPv4 and IPv6 packets.

## [IPDefragUtil](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/IPDefragUtil)

A utility for reassembling IP fragments back to IP packets. It works on pcap and pcapng files and allows the user to choose which fragments to reassemble. Works on IPv4 and IPv6 packets.

## [PcapPlusPlus-benchmark](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/PcapPlusPlus-benchmark)

the benchmark application used for measuring PcapPlusPlus performance. See [benchmark page]({{ site.baseurl }}/docs/benchmark) for more details. This application currently compiles on Linux only (where benchmark was running on).
