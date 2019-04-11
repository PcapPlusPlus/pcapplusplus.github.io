+++
title = "Build from source"
description = ""
weight = 2
+++

Steps to get PcapPlusPlus source code and build it on the various supported platforms.
<!--more-->


## Source code

Download the source code for the latest version (__{{< param currentPcapPlusPlusVersion >}}__) from GitHub which includes:

* Source code for __Common++__, __Packet++__, __Pcap++__
* Examples
* Unit tests
* Configuration scripts for all platforms

{{< button href="https://github.com/seladb/PcapPlusPlus/archive/v19.04.zip" >}} Download {{% param currentPcapPlusPlusVersion %}} zip format {{< /button >}}
{{< button href="https://github.com/seladb/PcapPlusPlus/archive/v19.04.tar.gz" >}} Download {{% param currentPcapPlusPlusVersion %}} tar.gz format {{< /button >}}

You can also download the latest source code from `master`:

{{< button href="https://github.com/seladb/PcapPlusPlus/archive/master.zip" theme="warning" >}} Download master zip format {{< /button >}}
{{< button href="https://github.com/seladb/PcapPlusPlus/archive/master.tar.gz" theme="warning" >}} Download master tar.gz format {{< /button >}}

## Build on Windows (Visual Studio 2015)

{{% panel theme="success" header="Prerequisites" %}}
In order to build PcapPlusPlus on Windows with Visual Studio 2015 you need the following components:

1. Microsoft Visual Studio 2015 (can be downloaded from here: https://www.visualstudio.com/downloads/)
2. Winpcap developer's pack - containing the wpcap library PcapPlusPlus is linking with plus relevant h files. You can download it from https://www.winpcap.org/devel.htm
3. pthread-win32 - can be downloaded from here: ftp://sourceware.org/pub/pthreads-win32/pthreads-w32-2-9-1-release.zip
{{% /panel %}}

#### Configuration and compilation

1. run the `configure-windows-visual-studio.bat` batch file from PcapPlusPlus main directory. The script will ask you for the locations of WinPcap developer's pack and pthreads-win32. The script will modify `mk\vs2015\PcapPlusPlusPropertySheet.props` file with these locations
2. PcapPlusPlus contains 3 Visual Studio solutions:
  * `mk\vs2015\PcapPlusPlus.sln` - contains PcapPlusPlus libraries (__Common++__, __Packet++__ and __Pcap++__) and unit-tests projects
  * `mk\vs2015\PcapPlusPlus-Examples.sln` - contains all PcapPlusPlus examples. Requires `PcapPlusPlus.sln` to be built first
  * `mk\vs2015\Tutorials.sln` - contains all PcapPlusPlus tutorial examples. Requires `PcapPlusPlus.sln` to be built first
3. All solutions support both 32-bit (x86) and 64-bit (x64) configurations as well as Debug and Release modes. So actually 4 modes are supported: 
  * x86|Debug
  * x86|Release
  * x64|Debug
  * x64|Release

## Build on Windows (MinGW32 + MinGW-w64)

{{% panel theme="success" header="Prerequisites for building with MinGW" %}}
In order to compile PcapPlusPlus on Windows using MinGW32 you need the following components:

* The fastest way I found for installing mingw32 was through this link: http://www.mingw.org/wiki/Getting_Started
* Download `mingw-get-setup.exe`, run it and follow the instructions
* By default the pthreads library is not installed so you need to ask to install it. It can be done during the installation process or afterwards with `mingw-get.exe` (MinGW installation manager)
* In the MinGW installation manager search for all packages containing `pthreads` and mark them for installation. Make sure the `pthreads-win32` version you install is __2.10__ or later
* Choose Installation->Update Catalogue

{{%expand "If you prefer to install pthreads manually please follow these steps:"%}}
* Download [pthreads for MinGW](http://ftp.ntua.gr/mirror/mingw/MinGW/Base/pthreads-w32/pthreads-w32-2.10-pre-20160821-1/pthreads-GC-w32-2.10-mingw32-pre-20160821-1-dev.tar.xz)
* Extract it with 7-Zip:

```
7z.exe e pthreads-GC-w32-2.10-mingw32-pre-20160821-1-dev.tar.xz -oC:\pthreads 
7z.exe x C:\pthreads\pthreads-GC-w32-2.10-mingw32-pre-20160821-1-dev.tar -oC:\pthreads
```
* Copy the include files to MinGW folder:

```
xcopy /Y C:\pthreads\include\* C:\MinGW\include
```
* Copy the lib files to MinGW folder: 

```
xcopy /Y C:\pthreads\lib\* C:\MinGW\lib
```
{{% /expand%}}
{{% /panel %}}

{{% panel theme="success" header="Prerequisites for building with MinGW-w64" %}}
In order to compile PcapPlusPlus on Windows using MinGW-w64 you need the following components:

* Download and run mingw-w64 installer from here: https://sourceforge.net/projects/mingw-w64/
* Make sure the installation path doesn't contain spaces (otherwise PcapPlusPlus compilation may fail)
* Make sure to choose the i686 option (which is 32-bit). PcapPlusPlus doesn't support MinGW-w64 64-bit (x86_64)
* Make sure to choose POSIX threads and not win32 threads
* Follow the instruction in the installation wizard
* Install `MSYS` or `MSYS2`. `MSYS2` installer can be downloaded from here: http://msys2.github.io/
* Make sure to download and install the `msys2-i686` installer and not the `msys2-x86_64` installer
* Add the following folders to your `PATH` environment variable:
  * The MinGW-w64 folder that cotains `g++.exe`, `mingw32-make`, etc. It should be under `[MinGW-w64_install_folder]\mingw32\bin`, for example: `C:\mingw-w64\i686-8.1.0-posix-dwarf-rt_v6-rev0\mingw32\bin`
  * The MSYS2 `usr\bin` folder, for example: `C:\msys32\usr\bin`
{{% /panel %}}

{{% panel theme="success" header="Additional prerequisites" %}}
Winpcap developer's pack - containing the `wpcap` library PcapPlusPlus is linking with plus relevant `h` files. You can download it from here: https://www.winpcap.org/devel.htm
{{% /panel %}}

{{% panel theme="warning" header="x64 is not supported!" %}}
Please notice that __x64__ compilation is not supported (and will not work) on either MinGW32 nor MinGW-w64!
{{% /panel %}}

#### Configuration and compilation

1. Run the `configure-windows-mingw.bat` batch file from PcapPlusPlus main directory. The script will ask you for WinPcap developer's pack location and MinGW location. For MinGW-w64 please make sure to set the `mingw32\i686-w64-mingw32` folder, for example: `C:\mingw-w64\i686-8.1.0-posix-dwarf-rt_v6-rev0\mingw32\i686-w64-mingw32`
2. Run `mingw32-make.exe all` from PcapPlusPlus main directory
3. This should compile all libraries, unit-tests and examples
4. After compilation you can find the libraries, examples, header files and helpful makefiles under the `Dist\` directory