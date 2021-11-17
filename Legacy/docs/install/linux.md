---
layout: page
title: Build on Linux
parent: Installation
permalink: /docs/install/build-source/linux
nav_order: 2
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

3. __OPTIONAL__ - download and install [Zstd](https://github.com/facebook/zstd/releases/latest) if you wish to enable [PCAPNG streaming compression support]({{ site.baseurl }}/docs/features#readingwriting-pcapng-files-with-compression)

## Configuration

Run the configuration script from PcapPlusPlus main directory:

```bash
./configure-linux.sh
```

Ths script has two modes of operation:

- Wizard mode - the script will walk you through the configuration parameters to provide
- Params mode - provide the different parameters using command-line switches

In general there are several types of configuration:

- With libpcap only
- With DPDK
- With PF_RING

Let's cover the different options. We'll begin with the wizard mode and later cover the params mode.

### Wizard mode

This mode is pretty much self explanatory and the wizard will guide you through the parameters you need to provide:

```shell
seladb@seladb:~/PcapPlusPlus$ ./configure-linux.sh 

****************************************
PcapPlusPlus Linux configuration script 
****************************************

Number of arguments: 0

Compile PcapPlusPlus with PF_RING? y
Enter PF_RING source path: /home/seladb/PF_RING
Compile PcapPlusPlus with DPDK? y
Enter DPDK source path: /home/seladb/dpdk-18.11
PcapPlusPlus configuration is complete. Files created (or modified): mk/platform.mk, mk/PcapPlusPlus.mk, mk/install.sh, mk/uninstall.sh

seladb@seladb:~/PcapPlusPlus$
```

### Command-line switches mode

You an view all available switches by running `./configure-linux.sh --help` or `./configure-linux.sh -h`:

| __`--default`__               | use the default configuration. This assumes `libpcap-dev` is installed |
| __`--dpdk`__                  | setup PcapPlusPlus with DPDK. When using this switch you must also set __`--dpdk-home`__ |
| __`--dpdk-home`__             | set DPDK home directory. Use only when __`--dpdk`__ is set |
| __`--pf-ring`__               | setup PcapPlusPlus with PF_RING. When using this switch you must also set __`--pf-ring-home`__ |
| __`--pf-ring-home`__          | sets PF_RING home directory. Use only when __`--pf-ring`__ is set  |
| __`--use-immediate-mode`__    | use libpcap immediate mode which enables getting packets as fast as possible (supported on libpcap>=1.5) |
| __`--set-direction-enabled`__ | set direction for capturing incoming or outgoing packets (supported on libpcap>=0.9.1) |
| __`--install-dir`__           | set a custom installation directory. Default is `/usr/local` |
| __`--libpcap-include-dir`__   | libpcap header files directory. This parameter is optional and if omitted PcapPlusPlus will look for the header files in the default include paths |
| __`--use-zstd`__              | use [Zstd for PCAPNG streaming compression]({{ site.baseurl }}/docs/features#readingwriting-pcapng-files-with-compression). This parameter is optional |
| __`--libpcap-lib-dir`__       | libpcap pre compiled lib directory. This parameter is optional and if omitted PcapPlusPlus will look for the lib file in the default lib paths |
| __`-h`__, __`--help`__        | displays a help message and exits. No further actions are performed |

Here are a few examples:

Default configuration:

```shell
./configure-linux.sh --default
```

Configure PcapPlusPlus with DPDK:

```shell
./configure-linux.sh --dpdk --dpdk-home /home/myuser/dpdk-18.11
```

Configure PcapPlusPlus with PF_RING:

```shell
./configure-linux.sh --pf-ring --pf-ring-home /home/myuser/PF_RING
```

Configure PcapPlusPlus with libpcap's immediate mode:

```shell
./configure-linux.sh --use-immediate-mode
```

Configure PcapPlusPlus with libpcap's set direction:

```shell
./configure-linux.sh --set-direction-enabled
```

Provide non-standard paths for libpcap header and library files:

```shell
./configure-linux.sh --libpcap-include-dir /home/myuser/my-libpcap/include --libpcap-lib-dir /home/myuser/my-libpcap/lib
```

Provide a custom installation directory:

```shell
./configure-linux.sh --install-dir /home/myuser/my-install-dir
```

Use Zstd for pcapng compression:

```shell
./configure-linux.sh --use-zstd
```

## Build the code

After running the config script, you're can safely build the code:

1. Run `make` or `make all` from PcapPlusPlus main directory
2. This should compile all libraries, unit-tests and examples
3. To build the libraries only (without the unit-tests and examples) run `make libs` instead of `make all`
4. After compilation you can find the libraries, examples, header files and helpful makefiles under the `Dist` directory

## Installation

After build is complete you can run the installation script which will copy the library and header files to the installation directory:

```shell
seladb@seladb:~/PcapPlusPlus$ sudo make install
Installation complete!
seladb@seladb:~/PcapPlusPlus$
```

The default installation directory is `/usr/local` which means the header files will be copied to `/usr/local/include/pcapplusplus` and the library files will be copied to `/usr/local/lib`.

You can change the installation directory by using the __`--install-dir`__ switch in the configuration script.

## Running tests

PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. [This guide]({{ site.baseurl }}/docs/tests) contains detailed instructions on how to run them.
