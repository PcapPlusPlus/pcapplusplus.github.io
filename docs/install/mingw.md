---
layout: page
title: Build on Windows (MinGW)
parent: Installation
permalink: /docs/install/build-source/mingw
nav_order: 5
---

# Build From Source on Windows - MinGW32 / MinGW-w64
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Prerequisites for building with MinGW

In order to compile PcapPlusPlus on Windows using MinGW32 you need the following components:

1. The fastest way I found for installing mingw32 was through this link: <http://www.mingw.org/wiki/Getting_Started>
2. Download `mingw-get-setup.exe`, run it and follow the instructions
3. By default the pthreads library is not installed so you need to ask to install it. It can be done during the installation process or afterwards with `mingw-get.exe` (MinGW installation manager)
4. In the MinGW installation manager search for all packages containing `pthreads` and mark them for installation. Make sure the `pthreads-win32` version you install is __2.10__ or later
5. Choose `Installation->Update Catalogue`

{% include alert.html alert-type="important" title="Notice" content="There is a bug in MinGW32 that makes PcapPlusPlus build to fail. Here is how to fix it:<br/><br/>
1. Go to the file: <code>&lt;YOUR_MINGW_INSTALL_PATH&gt;\MinGW\include\ptw32_errno.h</code><br/>
2. Search for the line that has <code>#include &lt;winsock.h&gt;</code>. You'll see a comment above this line saying this line is incompatible with any application which uses <code>&lt;winsock2.h&gt;</code> (PcapPlusPlus is one of them)<br/>
3. Simply comment this line, like that: <code>//# include &lt;winsock.h&gt;</code><br/>" %}

There is a bug in MinGW32 that makes PcapPlusPlus build to fail. Here is how to fix it:

1. Go to the file `<YOUR_MINGW_INSTALL_PATH>\MinGW\include\ptw32_errno.h`
2. Search for the line that has `include <winsock.h>`. You'll see a comment above this line saying this line is incompatible with any application which uses `<winsock2.h>` (PcapPlusPlus is one of them)
3. Simply comment this line, like that: `//# include <winsock.h>`

### If you prefer to install pthreads manually please follow these steps:
{: .no_toc }

1. Download [pthreads for MinGW](http://ftp.ntua.gr/mirror/mingw/MinGW/Base/pthreads-w32/pthreads-w32-2.10-pre-20160821-1/pthreads-GC-w32-2.10-mingw32-pre-20160821-1-dev.tar.xz)
2. Extract it with 7-Zip

    ```shell
    7z.exe e pthreads-GC-w32-2.10-mingw32-pre-20160821-1-dev.tar.xz -oC:\pthreads
    7z.exe x C:\pthreads\pthreads-GC-w32-2.10-mingw32-pre-20160821-1-dev.tar -oC:\pthreads
    ```

3. Copy the include files to MinGW folder:

    ```shell
    xcopy /Y C:\pthreads\include\* C:\MinGW\include
    ```

4. Copy the lib files to MinGW folder:

    ```shell
    xcopy /Y C:\pthreads\lib\* C:\MinGW\lib
    ```

## Prerequisites for building with MinGW-w64

In order to compile PcapPlusPlus on Windows using MinGW-w64 you need the following components:

1. Download and run mingw-w64 installer from here: <https://sourceforge.net/projects/mingw-w64/>
2. Make sure the installation path doesn't contain spaces (otherwise PcapPlusPlus compilation may fail)
3. Make sure to choose the i686 (32-bit) and POSIX threads (and not win32 threads) options. for example: `i686-8.1.0-posix-dwarf-rt_v6-rev0`. PcapPlusPlus doesn't support MinGW-w64 64-bit (x86_64)
4. Follow the instruction in the installation wizard
5. Install `MSYS2`from here: <https://www.msys2.org/>
6. Add the following folders to your `PATH` environment variable:
   1. The MinGW-w64 folder that contains `g++.exe`, `mingw32-make`, etc. It should be under `[MinGW-w64_install_folder]\mingw32\bin`, for example: `C:\mingw-w64\i686-8.1.0-posix-dwarf-rt_v6-rev0\mingw32\bin`
   2. The MSYS2 `usr\bin` folder, for example: `C:\msys32\usr\bin`

## Additional prerequisites

1. WinPcap developer's pack - containing the `wpcap` library PcapPlusPlus is linking with plus relevant `h` files. You can download it from here: <https://www.winpcap.org/devel.htm>

{% include alert.html alert-type="danger" title="x64 is not supported" content="please notice that <b>x64</b> compilation is not supported (and will not work) on either MinGW32 nor MinGW-w64!" %}

## Configuration

Run the `configure-windows-mingw.bat` batch file from PcapPlusPlus main directory. The script creates a makefile `mk\PcapPlusPlus.mk` that contains paths for 3rd-party libraries being used to build PcapPlusPlus.

Ths script has two modes of operation:

* Wizard mode - the script will walk you through the paths and parameters you need to provide
* Params mode - all parameters are provided in the script command line

In wizard mode the script will ask you for MinGW location (for example: `C:\MinGW` for MinGW or `C:\i686-8.1.0-posix-dwarf-rt_v6-rev0` for MinGW-w64) and also for WinPcap developer's pack location (for example: `C:\WpdPack`).

Here is an example of running the script for MinGW32:

```shell
C:\PcapPlusPlus>configure-windows-mingw.bat

******************************************
PcapPlusPlus Windows configuration script
******************************************

MinGW32 or MinGW-w64 are required for compiling PcapPlusPlus. Please specify
the type you want to use (can be either "mingw32" or "mingw-w64")

Please specify mingw32 or mingw-w64: mingw32


If mingw32 is not installed, please download and install it
mingw32 can be downloaded from: www.mingw.org/

Please specify mingw32 installed path (the folder that includes "bin", "lib" and "include" directories): C:\MinGW


WinPcap developer's pack is required for compiling PcapPlusPlus.
If WinPcap developer's pack is not installed, please download and install it from https://www.winpcap.org/devel.htm

Please specify WinPcap developer's pack installed path: C:\WpdPack

PcapPlusPlus configuration is complete. Files created (or modified): mk\platform.mk, mk\PcapPlusPlus.mk
```

Here is another example of running the script for MinGW-w64:

```shell
C:\PcapPlusPlus>configure-windows-mingw.bat

******************************************
PcapPlusPlus Windows configuration script
******************************************

MinGW32 or MinGW-w64 are required for compiling PcapPlusPlus. Please specify
the type you want to use (can be either "mingw32" or "mingw-w64")

Please specify mingw32 or mingw-w64: mingw-w64


If mingw-w64 is not installed, please download and install it
mingw-w64 can be downloaded from: sourceforge.net/projects/mingw-w64/

Please specify mingw-w64 installed path (the folder that includes "bin", "lib" and "include" directories): C:\i686-8.1.0-posix-dwarf-rt_v6-rev0  


MSYS or MSYS2 are required for compiling PcapPlusPlus.
If MSYS/MSYS2 are not installed, please download and install it

Please specify MSYS/MSYS2 installed path: C:\msys64


WinPcap developer's pack is required for compiling PcapPlusPlus.
If WinPcap developer's pack is not installed, please download and install it from https://www.winpcap.org/devel.htm

Please specify WinPcap developer's pack installed path: C:\WpdPack

PcapPlusPlus configuration is complete. Files created (or modified): mk\platform.mk, mk\PcapPlusPlus.mk

```

In params mode you need to provide these paths as script params. You can use the `--help` switch to query these params:

```shell
C:\PcapPlusPlus>configure-windows-mingw.bat --help

******************************************
PcapPlusPlus Windows configuration script
******************************************


Help documentation for configure-windows-mingw.bat
This script has 2 modes of operation:
  1) Without any switches. In this case the script will guide you through using wizards
  2) With switches, as described below

Basic usage: configure-windows-mingw.bat [-h] MINGW_COMPILER -m MINGW_HOME_DIR -w WINPCAP_HOME_DIR [-s MSYS_HOME_DIR]

The following switches are recognized:
MINGW_COMPILER       --The MinGW compiler to use. Can be either "mingw32" or "mingw-w64"
-m|--mingw-home      --Sets MinGW home directory (the folder that includes "bin", "lib" and "include" directories)
-s|--msys-home       --Sets MSYS or MSYS2 home directory (must for mingw-w64, not must for mingw32)
-w|--winpcap-home    --Sets WinPcap home directory
-h|--help            --Displays this help message and exits. No further actions are performed
```

For example (MinGW32):

```shell
C:\PcapPlusPlus>configure-windows-mingw.bat mingw32 --mingw-home C:\MinGW --winpcap-home C:\WpdPack

******************************************
PcapPlusPlus Windows configuration script
******************************************


PcapPlusPlus configuration is complete. Files created (or modified): mk\platform.mk, mk\PcapPlusPlus.mk  

```

Or (MinGW-w64):

```shell
C:\PcapPlusPlus>configure-windows-mingw.bat mingw-w64 --mingw-home C:\i686-8.1.0-posix-dwarf-rt_v6-rev0 --msys-home C:\msys64 --winpcap-home C:\WpdPack  

******************************************
PcapPlusPlus Windows configuration script
******************************************


PcapPlusPlus configuration is complete. Files created (or modified): mk\platform.mk, mk\PcapPlusPlus.mk
```

Here are the available switches:

| __`MINGW_COMPILER`__             | MinGW compiler to use. Options are `mingw32` or `mingw-w64` |
| __`-m`__ , __`--mingw-home`__    | MinGW home directory (the folder that includes `bin`, `lib` and `include` directories) |
| __`-s`__ , __`--msys-home`__     | MSYS or MSYS2 home directory. Required only for MinGW-w64 |
| __`-w`__ , __`--winpcap-home`__  | WinPcap Developer Pack (WpdPack) directory |
| __`-h`__ , __`--help`__          | Display the help message and exit. No further actions are performed |


## Build the code

After running the config script, you're can safely build the code:

1. Run `mingw32-make.exe all` from PcapPlusPlus main directory
2. This should compile all libraries, unit-tests and examples
3. To build the libraries only (without the unit-tests and examples) run `mingw32-make.exe libs` instead of `mingw32-make.exe all`
4. After compilation you can find the libraries, examples, header files and helpful makefiles under the `Dist\` directory