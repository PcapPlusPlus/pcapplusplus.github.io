---
layout: page
title: Linux
parent: Build From Source
grand_parent: Installation
permalink: /docs/install/build-source/linux
nav_order: 1
---

# Build From Source on Linux
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Prerequisites

In order to compile PcapPlusPlus on Linux please make sure you have the following components installed:

1. __libpcap developers pack__ - contains the libpcap library PcapPlusPlus is linking with and relevant the header files. You can download it from <http://www.tcpdump.org/#latest-release> or through the standard Linux package managers such as `apt-get` or `yum`:

    ```bash
    sudo apt-get install libpcap-dev
    ```

    or:

    ```bash
    sudo yum install libpcap-devel
    ```

2. `libstdc++-static` package. If it's not already installed you can install it using `apt-get` or `yum`

## Configuration

Run the configuration script from PcapPlusPlus main directory:

```bash
./configure-linux.sh
```

Ths script has two modes of operation:

* Wizard mode - the script will walk you through the paths and parameters you need to provide
* Params mode - you provide the different parameters in the script's command line

It also enables several types of configuration:

* With libpcap only
* With DPDK
* With PF_RING

Let's cover the different options. We'll begin with the wizard mode and later cover the params mode.

### Wizard mode

This mode is pretty much self explanatory and the wizard will guide you through the paths you need to provide.