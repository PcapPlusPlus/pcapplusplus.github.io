---
layout: page
title: Build on FreeBSD
parent: Installation
permalink: /docs/install/build-source/freebsd
nav_order: 6
---

# Build From Source on FreeBSD
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Prerequisites

In order to compile PcapPlusPlus on FreeBSD please make sure you have the following components installed:

- git (if not installed please run: `pkg install git`)
- gsed (if not installed please run: `pkg install gsed`)
- gmake (if not installed please run: `pkg install gmake`)
- libpcap (if not installed please run: `pkg install libpcap`)

## Configuration

Run the configuration script from PcapPlusPlus main directory:

```bash
./configure-freebsd.sh
```

This script has the following command-line switches (you can also view then by running `./configure-freebsd.sh --help` or `./configure-freebsd.sh -h`):

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
./configure-freebsd.sh
```

Configure PcapPlusPlus with libpcap's immediate mode:

```shell
./configure-freebsd.sh --use-immediate-mode
```

Configure PcapPlusPlus with libpcap's set direction:

```shell
./configure-freebsd.sh --set-direction-enabled
```

Provide non-standard paths for libpcap header and library files:

```shell
./configure-freebsd.sh --libpcap-include-dir /my-folder/my-libpcap/include --libpcap-lib-dir /my-folder/my-libpcap/lib
```

Provide a custom installation directory:

```shell
./configure-freebsd.sh --install-dir /my-folder/my-install-dir
```

## Build the code

After running the config script, you're can safely build the code:

1. Run `gmake` or `gmake all` from PcapPlusPlus main directory
2. This should compile all libraries, unit-tests and examples
3. To build the libraries only (without the unit-tests and examples) run `gmake libs` instead of `gmake all`
4. After compilation you can find the libraries, examples, header files and helpful makefiles under the `Dist` directory

## Installation

After build is complete you can run the installation script which will copy the library and header files to the installation directory:

```shell
$ sudo gmake install
Installation complete!
$
```

The default installation directory is `/usr/local` which means the header files will be copied to `/usr/local/include/pcapplusplus` and the library files will be copied to `/usr/local/lib`.

You can change the installation directory by using the __`--install-dir`__ switch in the configuration script.

## Running tests

PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. [This guide]({{ site.baseurl }}/docs/install/build-source/tests) contains detailed instructions on how to run them.
