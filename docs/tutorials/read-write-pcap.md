---
layout: page
title: 2. Read/Write Pcap Files
parent: Tutorials
permalink: /docs/tutorials/read-write-pcap
nav_order: 2
---

# Part 2: Reading And Writing Pcap Files
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Introduction

PcapPlusPlus supports 2 packet capture file formats: pcap and pcap-ng. Using an easy-to-use interface you can easily read and write packets from/to those file types

Essentially there are 4 classes and 2 interfaces for that:

* `PcapFileReaderDevice` - read packets from pcap files
* `PcapNgFileReaderDevice` - read packets from pcap-ng files
* `PcapFileWriterDevice` - write packets to a pcap file
* `PcapNgFileWriterDevice` - write packets to a pcap-ng file
* `IFileReaderDevice` - a reader interface, implemented by both PcapFileReaderDevice and PcapNgFileReaderDevice
* `IFileWriterDevice` - a writer interface, implemented by both PcapFileWriterDevice and PcapNgFileWriterDevice

In this tutorial we'll write a simple application that reads and writes packets from/to pcap and pcap-ng file.

## Reading and writing packets

So let's start our application with a "main" method and a single include to "PcapFileDevice.h" which contains all the API for reading and writing packets from/to files

```cpp
#include "stdlib.h"
#include "PcapFileDevice.h"

/**
* main method of the application
*/
int main(int argc, char* argv[])
{
    // write your code here
}
```

Next thing would be to open a pcap file for reading. We'll assume we have a pcap file named "input.pcap" and we want to open it for reading. If we know it's a pcap file we can use the pcap reader class `PcapFileReaderDevice`, and same for pcap-ng files we can use `PcapNgFileReaderDevice` class.

But PcapPlusPlus also contains an interface class that automatically identifies the file type by its extension and creates an interface instance which both classes implement, so you can use it without really knowing which class hides behind it. This interface is called `IFileReaderDevice`. Let's use it in our application:

```cpp
// use the IFileReaderDevice interface to automatically identify file type (pcap/pcap-ng)
// and create an interface instance that both readers implement
pcpp::IFileReaderDevice* reader = pcpp::IFileReaderDevice::getReader("input.pcap");

// verify that a reader interface was indeed created
if (reader == NULL)
{
    printf("Cannot determine reader for file type\n");
    exit(1);
}
```

As you can see we used the static method `pcpp::IFileReaderDevice::getReader()` to create the interface.

Now let's open the reader for reading:

```cpp
// open the reader for reading
if (!reader->open())
{
    printf("Cannot open input.pcap for reading\n");
    exit(1);
}
```

Now we are ready to start reading packets from the file. But before we do that let's demonstrate using file writers as well. We'll open 2 file writers: one pcap writer and one pcap-ng writer. We'll write the packets we read from the reader to both writers.

Let's start by creating the pcap writer and open it for writing:

```cpp
// create a pcap file writer. Specify file name and link type of all packets that
// will be written to it
pcpp::PcapFileWriterDevice pcapWriter("output.pcap", pcpp::LINKTYPE_ETHERNET);

// try to open the file for writing
if (!pcapWriter.open())
{
    printf("Cannot open output.pcap for writing\n");
    exit(1);
}
```

As you can see we need to specify in the constructor the file name ("output.pcap") and the link type of all packets that will be written to it. That's because the pcap file format can contain single link type per file.

Now let's open the second writer that writes pcap-ng files:

```cpp
// create a pcap-ng file writer. Specify file name. Link type is not necessary because
// pcap-ng files can store multiple link types in the same file
pcpp::PcapNgFileWriterDevice pcapNgWriter("output.pcapng");

// try to open the file for writing
if (!pcapNgWriter.open())
{
    printf("Cannot open output.pcapng for writing\n");
    exit(1);
}
```

You can notice that in this constructor there's no need to specify the link type. That's because pcap-ng files can store multiple link types in the same file.

Another cool feature in file readers is setting a BPF filter so only packets that match the filter will be read and the others will be ignored. Let's set a filter that will catch only packets with source or dest IP of "98.138.19.88":

```cpp
// set a BPF filter for the reader - only packets that match the filter will be read
if (!reader->setFilter("net 98.138.19.88"))
{
    printf("Cannot set filter for file reader\n");
    exit(1);
}
```

Now let's start a while loop where we'll read all the packets (that match the BPF filter) and write them to both writers:

```cpp
// the packet container
pcpp::RawPacket rawPacket;

// a while loop that will continue as long as there are packets in the input file
// matching the BPF filter
while (reader->getNextPacket(rawPacket))
{
    // write each packet to both writers
    pcapWriter.writePacket(rawPacket);
    pcapNgWriter.writePacket(rawPacket);
}
```

We're done reading all packets that match the BPF filter and writing them to both writers.

Another feature I'd like to demonstrate is getting reader/writer statistics. These are basic stats that only count packets that were read/written successfully and those who weren't. Let's get stats from reader and both writers and print them:

```cpp
// create the stats object
pcap_stat stats;

// read stats from reader and print them
reader->getStatistics(stats);
printf("Read %d packets successfully and %d packets could not be read\n", stats.ps_recv, stats.ps_drop);

// read stats from pcap writer and print them
pcapWriter.getStatistics(stats);
printf("Written %d packets successfully to pcap writer and %d packets could not be written\n", stats.ps_recv, stats.ps_drop);

// read stats from pcap-ng writer and print them
pcapNgWriter.getStatistics(stats);
printf("Written %d packets successfully to pcap-ng writer and %d packets could not be written\n", stats.ps_recv, stats.ps_drop);
```

We're done reading and writing packets. The only thing left is closing the reader and writers. We also need to free the reader because it was created by the `pcpp::IFileReaderDevice::getReader()` static method.

```cpp
// close reader
reader->close();

// close writers
pcapWriter.close();
pcapNgWriter.close();

// free reader memory because it was created by pcpp::IFileReaderDevice::getReader()
delete reader;
```

When running the application with the input.pcap file attached below, here is the output (on Windows):

```shell
C:\PcapPlusPlus\Examples\Tutorials\Part2-PcapFiles>Part2-PcapFiles.exe
Read 10 packets successfully and 0 packets could not be read
Written 10 packets successfully to pcap writer and 0 packets could not be written
Written 10 packets successfully to pcap-ng writer and 0 packets could not be written
```

As you can see 10 packets were read successfully from the reader and written to both writers. Notice the original "input.pcap" file contains 28 packets, the reason not all of them were read is the BPF filter we set: only 10 out of the 28 packets matched the filter.

## Appending packets to existing files

PcapPlusPlus enables appending packets to existing pcap/pcap-ng files. This means that packets that you write won't overwrite the file but will be apppended to the existing packets in the file. This is a unique feature for PcapPlusPlus that is not supported in libpcap/WinPcap and required specific implementation outside of libpcap/WinPcap APIs. If you want to open a file writer in append mode all you need to do it to use the `open(bool)` method overload and set it to "true", let's see an example:

```cpp
// try to open the file for writing in append mode
if (!pcapWriter.open(true))
{
    printf("Cannot open output.pcap for writing in append mode\n");
    exit(1);
}
```

That's it! file is now opened in append mode and will not be overridden.

## Running the example

All code that was covered in this tutorial can be found [here](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/Tutorials/Tutorial-PcapFiles). In order to compile and run the code please first download and compile PcapPlusPlus code or downloaded a pre-compiled version from [the latest PcapPlusPlus release](https://github.com/seladb/PcapPlusPlus/releases/latest). Then follow these instruction, according to your platform:

* Linux, MacOS, FreeBSD - make sure PcapPlusPlus is installed (by running **sudo make install** in PcapPlusPlus main directory). Then either change the `Makefile.non_windows` file name to `Makefile` and run `make all`, or run `make -f Makefile.non_windows all`
* Windows using MinGW or MinGW-w64 - either change the `Makefile.windows` file name to `Makefile` and run `make all`, or run `make -f Makefile.windows all`
* Windows using Visual Studio - there is a Visual Studio solution containing all tutorials: `mk\[vs_version]\Tutorials.sln`. Just open it and compile all tutorials

In all options the compiled executable will be inside the tutorial directory (`[PcapPlusPlus Folder]/Examples/Tutorials/Tutorial-PcapFiles`)
