---
layout: page
title: Linux
parent: Build From Source
grand_parent: Installation
permalink: /docs/install/build-source/linux
nav_order: 1
---

# Build From Source on Linux

## Prerequisites

In order to compile PcapPlusPlus on Linux you need the following components:

1. __libpcap developers pack__ - contains the libpcap library PcapPlusPlus is linking with and relevant header files. You can download it from <http://www.tcpdump.org/#latest-release> or through the standard Linux package managers such as apt-get/yum:

    ```bash
    sudo apt-get install libpcap-dev
    ```

    or:

    ```bash
    sudo yum install libpcap-devel
    ```

2. Make sure you have the `libstdc++-static` package. If not, you can install it via yum or apt-get

## Configuration

Run the configuration script from PcapPlusPlus main directory:

```bash
./configure-linux.sh
```

Ths script has two modes of operation:

* Wizard mode - the script will walk you through the paths and parameters you need to provide
* Params mode - all parameters are provided in the script command line

The script also enables several types of configuration:

* With libpcap only
* With DPDK
* With PF_RING

We'll cover the ....