---
layout: page
title: DPDK Support
permalink: /docs/dpdk
nav_order: 4
---

# DPDK Support
{: .no_toc }

[<img src="{{ site.baseurl }}/resources/logo-dpdk.png" alt="drawing" width="400"/>](https://www.dpdk.org/)

The Data Plane Development Kit (DPDK) is a set of data plane libraries and network interface controller drivers for fast packet processing, currently managed as an open-source project under the Linux Foundation. The DPDK provides a programming framework for x86, ARM, and PowerPC processors and enables faster development of high speed data packet networking applications (taken from [Wikipedia](https://en.wikipedia.org/wiki/Data_Plane_Development_Kit)).

DPDK provides packet processing in line rate using kernel bypass for a large range of network interface cards. Notice that not every NIC supports DPDK as the NIC needs to support the kernel bypass feature. You can read more about DPDK in [DPDK's web-site](https://www.dpdk.org/) and get a list of supported NICs [here](http://core.dpdk.org/supported/).

As DPDK API is written in C, PcapPlusPlus wraps its main functionality in easy-to-use C++ wrappers which have minimum impact on performance and packet processing rate. In addition it brings DPDK to the PcapPlusPlus framework and APIs so you can use DPDK together with other PcapPlusPlus features such as packet analysis, etc.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## What does PcapPlusPlus offer for DPDK?

PcapPlusPlus tries to cover the main functionality of DPDK and its most important and popular features. Here is what PcapPlusPlus offers for DPDK:

- Encapsulation of DPDK's initialization process - both outside and inside of the application - using simple scripts and methods
- A C++ class wrapper for DPDK's packet structure (mbuf) which offers the most commonly used functionality
- A C++ class wrapper that encapsulates a DPDK-controlled NIC (A.K.A DPDK port) for receiving, processing and sending packets using DPDK as well as an interface to retrieve NIC info, status, etc.
- Offload packet capture to multiple worker threads running on different cores + control the load balancing configuration between these workers
- Multi RX/TX queue support
- Detailed statistics about packets being captured and processed
- Seamless integration to other PcapPlusPlus capabilities including: parsing of packets received with DPDK using the various protocol parsers offered in PcapPlusPlus, saving packets to a pcap file, sending crafted/edited packets through a DPDK-controlled interface, packet reassembly, and more.
- An easy-to-use C++ wrapper for [DPDK KNI (Kernel NIC Interface)](https://doc.dpdk.org/guides/prog_guide/kernel_nic_interface.html)

## Set up PcapPlusPlus with DPDK

### Supported DPDK versions

The following DPDK versions are currently supported:

- DPDK 19.08
- DPDK 19.02
- DPDK 18.11 (LTS)
- DPDK 18.08
- DPDK 18.05
- DPDK 18.02
- DPDK 17.11 (LTS)
- DPDK 17.08
- DPDK 17.05
- DPDK 17.02
- DPDK 16.11 (LTS)

Older and newer versions may not work.

In addition, not all poll-mode drivers (PMDs) were tested, but the majority of them should work. Please report an issue if the PMD you're using isn't working.

The following operating systems and configurations were tested:

- Ubuntu 18.04, 16.04, 14.04 LTS 64bit with kernel version > 3 and gcc version >= 4.8
- CentOS 7.1 64bit with kernel 3.x and gcc 4.8.x

### Download and install DPDK

You can find DPDK installation instructions in [DPDK web-site](http://dpdk.org/download).

Building and installing DPDK is pretty straight-forward and in a nutshell goes like this:

```shell
$ cd /dpdk/source/location
$ make config T=[platform_type_string] && make
```

### PcapPlusPlus configuration for DPDK

Once DPDK builds successfully run PcapPlusPlus configuration script (`configure-linux.sh`) and configure PcapPlusPlus to link with DPDK, please refer to the [configuration instructions]({{ site.baseurl }}/docs/install/build-source/linux#configuration) to understand how.

### DPDK initialization with PcapPlusPlus

DPDK has two steps of initialization: one that configures Linux to support DPDK applications and the other at the application startup which initializes DPDK structures and memory. PcapPlusPlus wraps both of them with easy-to-use interfaces. Please see the following two sections to understand more.

### Initialization before application is run

DPDK requires several Linux configurations to run:

- DPDK uses the Linux huge-pages mechanism for faster virtual to physical page conversion resulting in better performance. So huge-pages must be set before a DPDK application is run
- DPDK uses a designated kernel module for the kernel-bypass mechanism (igb_uio.ko). This module should be loaded into the kernel
- The user needs to state which NICs will move to DPDK control and which will stay under Linux control
- For using DPDK KNI there is another kernel module to load (rte_kni.ko)

PcapPlusPlus offers a simple script that automatically configures all of these. The script is under PcapPlusPlus root directory and is called `setup-dpdk.sh`. The script takes the following parameters as input:

| `-p` | the amount of huge pages to allocate. By default each huge-page size is 2048KB |
| `-n` | a comma-separated list of all NICs that will be unbinded from Linux and move to DPDK control. Only these NICs will be used by DPDK, the others will stay under Linux control. For example: `eth0,eth1` will move these 2 interfaces under DPDK control - assuming this NIC is supported by DPDK |
| `-k` | when this flag is specified the KNI kernel module is loaded |
| `-h` | show a help message and exit |

If everything went well the system is ready to run a DPDK application and the script output should look like this:

```shell
*******************************
PcapPlusPlus setup DPDK script
*******************************

1. Reserve huge-pages - DONE!
2. Install kernel module - DONE!
3. Bind network adapters - DONE!

Network devices using DPDK-compatible driver
============================================
0000:00:03.0 '82540EM Gigabit Ethernet Controller' drv=igb_uio unused=e1000
0000:00:08.0 '82545EM Gigabit Ethernet Controller (Copper)' drv=igb_uio unused=e1000

Network devices using kernel driver
===================================
0000:00:09.0 '82545EM Gigabit Ethernet Controller (Copper)' if=eth2 drv=e1000 unused=igb_uio *Active*
0000:00:0a.0 '82545EM Gigabit Ethernet Controller (Copper)' if=eth3 drv=e1000 unused=igb_uio 

Other network devices
=====================

Setup DPDK completed
```

### Initialization at application startup

When using DPDK in your application it should be initialized on application startup. This configuration includes:

- Verify that huge-pages, kernel module(s) and NICs are set
- Initialize DPDK internal structures and memory, poll-mode drivers etc.
- Prepare CPU cores that will be used by the application
- Initialize packet memory pool
- Configure each NIC controlled by DPDK

These steps are wrapped in one static method that should be called once in application startup:

```cpp
DpdkDeviceList::initDpdk();
```

If this methods succeeds DPDK is ready to use in your application.

## Next steps

If you're curious to learn more, please refer to the following resources:

- [DPDK tutorial]({{ site.baseurl }}/docs/tutorials/dpdk)
- DPDK example applications: [DpdkExample-FilterTraffic]({{ site.baseurl }}/docs/examples#dpdkexample-filtertraffic), [DpdkBridge]({{ site.baseurl }}/docs/examples#dpdkbridge), [KniPong]({{ site.baseurl }}/docs/examples#knipong)
- DPDK API reference. A good starting points would be [`DpdkDevice.h` file description]({{ site.baseurl }}/api-docs/_dpdk_device_8h.html#details) and [`DpdkDevice` class description]({{ site.baseurl }}/api-docs/classpcpp_1_1_dpdk_device.html#details)
- You can also find all the unit-tests in the [`Pcap++Test`](https://github.com/seladb/PcapPlusPlus/blob/master/Tests/Pcap%2B%2BTest/main.cpp) project (search for tests that contain "dpdk" or "kni")
