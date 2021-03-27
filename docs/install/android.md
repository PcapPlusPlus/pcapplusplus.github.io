---
layout: page
title: Build on Android
parent: Installation
permalink: /docs/install/build-source/android
nav_order: 6
---

# Build From Source for Android
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Prerequisites

In order to build PcapPlusPlus for Android please make sure you have the following prerequisites:

1. A Linux machine - building on other platforms is currently not supported
2. You should have [Android NDK](https://developer.android.com/ndk) installed
3. Pre-compiled `libpcap` library for Android + header files which can be downloaded from [the `libpcap-android` GitHub repo](https://github.com/seladb/libpcap-android) (for Android API versions 21-30)

## Configuration

Run the configuration script from PcapPlusPlus main directory:

```bash
./configure-android.sh
```

This script accepts the following arguments:

| Argument                | Is mandatory / default value    | Description                                                               |
| :---------------------- | :------------------------------ | :------------------------------------------------------------------------ |
| `--ndk-path`            | Mandatory                       | The path of Android NDK, for example: `/opt/Android/Sdk/ndk/22.0.7026061` |
| `--target`              | Mandatory                       | Target architecture which accepts the following values: `arm64-v8a`, `armeabi-v7a`, `x86`, `x86_64` |
| `--api`                 | Optional. Default value is `29` | Android API level. Must be between 21 and 30                              |
| `--libpcap-include-dir` | Mandatory                       | `libpcap` header files directory. Can be downloaded from [the `libpcap-android` GitHub repo](https://github.com/seladb/libpcap-android) |
| `--libpcap-lib-dir`     | Mandatory                       | `libpcap` pre-compiled libs directory. Can be downloaded from [the `libpcap-android` GitHub repo](https://github.com/seladb/libpcap-android) for all 4 targets and API versions 21-30 |

Here is an example output:

```shell
seladb@ubunu2004:~/PcapPlusPlus$ ./configure-android.sh --ndk-path /opt/Android/Sdk/ndk/22.0.7026061 --target arm64-v8a --api 29 --libpcap-include-dir ~/libpcap-android/include --libpcap-lib-dir ~/libpcap-android/arm64-v8a/29

******************************************
PcapPlusPlus Android configuration script 
******************************************

PcapPlusPlus configuration is complete. Files created (or modified): mk/platform.mk, mk/PcapPlusPlus.mk
```

## Build the code

After running the config script, you're can safely build the code:

1. Run `make libs` to build PcapPlusPlus libraries only (which is the common use-case for Android) or `make all` to build everything including the unit-tests and examples
2. After a successful build you can find the libraries, header files, example executables (if built) and helpful makefiles under the `Dist` directory
3. Please notice that in order to run [PcapPlusPlus examples]({{ site.baseurl }}/docs/examples) on an Android device you need shell access, and for some of them you also need a rooted device

## Do I need a rooted device in order to use PcapPlusPlus in my Android app?

Not at all! Please follow [this link]({{ site.baseurl }}/docs/quickstart/android#do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app)

## Using PcapPlusPlus in my app

Please follow [this link]({{ site.baseurl }}/docs/quickstart/android#using-pcapplusplus-in-my-app)
