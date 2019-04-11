+++
title = "Linux"
description = ""
weight = 2
+++

Build from source on Linux
<!--more-->

{{% panel theme="success" header="Prerequisites" %}}
In order to compile PcapPlusPlus on Linux you need the following components:

__libpcap developers pack__ - contains the libpcap library PcapPlusPlus is linking with and relevant header files. You can download it from <http://www.tcpdump.org/#latest-release> or through the standard Linux package managers such as apt-get/yum:

```bash
sudo apt-get install libpcap-dev
```

or:

```bash
sudo yum install libpcap-devel
```

Also make sure you have the `libstdc++-static` package. If not, you can install it via yum or apt-get

{{% /panel %}}

### Configuration

Run the configuration script from PcapPlusPlus main directory:

```bash
./configure-linux.sh
```

Ths script has several modes of operation:

* Wizard mode - the script will walk you through the paths and parameters you need to provide
* Params mode - all parameters are provided in the script command line

The script also enables several types of configuration:

* With libpcap only
* With DPDK
* With PF_RING

We'll cover the ....
