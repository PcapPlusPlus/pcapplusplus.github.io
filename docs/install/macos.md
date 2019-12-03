---
layout: page
title: Build on MacOS
parent: Installation
permalink: /docs/install/build-source/macos
nav_order: 3
---

# Build From Source on MacOS
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Prerequisites

In order to compile PcapPlusPlus on Linux please make sure you have the following components installed:

1. [Xcode](https://developer.apple.com/xcode/) which contains all prerequisites required for PcapPlusPlus including gcc/g++ compiler and libpcap with all relevant header files
2. Make sure you have Xcode Command Line Tools. You can install it by running the following command in Terminal:

    ```shell
    xcode-select --install
    ```

## Configuration

Run the configuration script from PcapPlusPlus main directory:

```bash
./configure-mac_os_x.sh
```

This script has the following command-line switches (you can also view then by running `./configure-mac_os_x.sh --help` or `./configure-mac_os_x.sh -h`):

| __no switches__               | use the default configuration |
| __`--use-immediate-mode`__    | use libpcap immediate mode which enables getting packets as fast as possible (supported on libpcap>=1.5) |
| __`--set-direction-enabled`__ | set direction for capturing incoming or outgoing packets (supported on libpcap>=0.9.1) |
| __`--install-dir`__           | set a custom installation directory. Default is `/usr/local` |
| __`--libpcap-include-dir`__   | libpcap header files directory. This parameter is optional and if omitted PcapPlusPlus will look for the header files in the default include paths |
| __`--libpcap-lib-dir`__       | libpcap pre compiled lib directory. This parameter is optional and if omitted PcapPlusPlus will look for the lib file in the default lib paths |
| __`-h`__, __`--help`__        | displays a help message and exits. No further actions are performed |

Here are a few examples:

Default configuration:

```shell
./configure-mac_os_x.sh
```

Configure PcapPlusPlus with libpcap's immediate mode:

```shell
./configure-mac_os_x.sh --use-immediate-mode
```

Configure PcapPlusPlus with libpcap's set direction:

```shell
./configure-mac_os_x.sh --set-direction-enabled
```

Provide non-standard paths for libpcap header and library files:

```shell
./configure-mac_os_x.sh --libpcap-include-dir /home/myuser/my-libpcap/include --libpcap-lib-dir /home/myuser/my-libpcap/lib
```

Provide a custom installation directory:

```shell
./configure-mac_os_x.sh --install-dir /home/myuser/my-install-dir
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
MyMAC:PcapPlusPlus seladb$ sudo make install
Installation complete!
MyMAC:PcapPlusPlus seladb$
```

The default installation directory is `/usr/local` which means the header files will be copied to `/usr/local/include/pcapplusplus` and the library files will be copied to `/usr/local/lib`.

You can change the installation directory by using the __`--install-dir`__ switch in the configuration script.

## Running tests

PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. [This guide]({{ site.baseurl }}/docs/install/build-source/tests) contains detailed instructions on how to run them.
