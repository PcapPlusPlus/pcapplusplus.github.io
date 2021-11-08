---
layout: page
title: 3. Capture/Send Packets
parent: Tutorials
permalink: /docs/tutorials/capture-packets
nav_order: 3
---

# Part 3: Capturing And Sending Packets
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Introduction

PcapPlusPlus provides simple and easy-to-use wrappers for libpcap/WinPcap APIs for capturing and sending packets over network interfaces. These wrappers pretty much sum up in the following classes:

* `PcapLiveDevice` - wraps libpcap functionality of capturing and sending packets and also provide information and statistics on the network interface
* `WinPcapLiveDevice` - wraps WinPcap/Npcap functionality which is basically similar to libpcap but provides adjustments for Windows OS. This class inherits PcapLiveDevice and provides the necessary changes for Windows vs. Linux/MacOS/FreeBSD/Android
* `PcapLiveDeviceList` - A singleton class that creates, stores and provides access to all PcapLiveDevice or WinPcapLiveDevice instances. These instances are initialized on startup and wrap all the network interfaces installed on the machine
* `PcapRemoteDevice` - wraps WinPcap functionality for [remote packet capture](https://www.winpcap.org/docs/docs_412/html/group__remote.html). As this functionality is less common and less used, it won't be covered in this tutorial. You can take a look at PcapPlusPlus documentation for a comprehensive overview and API description

In this tutorial we'll write a simple application that demonstrates how to capture and send packet over the network.

## PcapLiveDevice and WinPcapLiveDevice instances

Let's start out application with a "main" method and a single include to "PcapLiveDeviceList.h". This header file contains another include to "PcapLiveDevice.h" and those 2 files contain all the APIs for capturing and sending packets:

```cpp
#include <iostream>
#include "stdlib.h"
#include "PcapLiveDeviceList.h"
#include "SystemUtils.h"

/**
* main method of the application
*/
int main(int argc, char* argv[])
{
    // write your code here
}
```

The next step would be to find the `PcapLiveDevice` or `WinPcapLiveDevice` instance which represents the network interface we'd like to use. We can use the `PcapLiveDeviceList` singleton for retrieving an interface by IPv4 address or by name. We'll use the retrieve-by-IP method (here I use IP address of "10.0.0.1". Of course you should change that to the IP address of your network interface):

```cpp
// IPv4 address of the interface we want to sniff
std::string interfaceIPAddr = "10.0.0.1";

// find the interface by IP address
pcpp::PcapLiveDevice* dev = pcpp::PcapLiveDeviceList::getInstance().getPcapLiveDeviceByIp(interfaceIPAddr);
if (dev == NULL)
{
    std::cerr << "Cannot find interface with IPv4 address of '" << interfaceIPAddr << "'" << std::endl;
    return 1;
}
```

Now we have an instance of `PcapLiveDevice` or `WinPcapLiveDevice` we can use. You may wonder who decides whether to return this type or the other and where does `WinPcapLiveDevice` fits in. Well, `WinPcapLiveDevice` actually inherits `PcapLiveDevice` and the `PcapLiveDeviceList` singleton creates the relevant type of instances according to the operating system the application is running on. So `pcpp::PcapLiveDevice* dev` can be either of type `PcapLiveDevice` or `WinPcapLiveDevice`, but the API of the two is the same so we shouldn't really care.

Before actually capturing packets let's demonstrate some more cool features this instance enables like presenting information about the network interface. There's a bunch of information PcapPlusPlus exposes on the interface. Some of it already exists in libpcap/WinPcap and is only wrapped by the `PcapLiveDevice` class, but some of it doesn't exist in libpcap/WinPcap and is collected by querying the various OS's APIs.

The next lines of code demonstrate how to get the following information:

* Interface name (e.g "eth0" in Linux)
* Interface description (where exposed by the OS)
* Interface MAC address
* Interface default gateway
* Interface maximum transmission unit (MTU)
* The DNS server associated with this interface

```cpp
// before capturing packets let's print some info about this interface
std::cout
    << "Interface info:" << std::endl
    << "   Interface name:        " << dev->getName() << std::endl // get interface name
    << "   Interface description: " << dev->getDesc() << std::endl // get interface description
    << "   MAC address:           " << dev->getMacAddress() << std::endl // get interface MAC address
    << "   Default gateway:       " << dev->getDefaultGateway() << std::endl // get default gateway
    << "   Interface MTU:         " << dev->getMtu() << std::endl; // get interface MTU

if (dev->getDnsServers().size() > 0)
    std::cout << "   DNS server:            " << dev->getDnsServers().at(0) << std::endl;
```

## Capturing packets

Now let's move on to capturing packets. Before start capturing we must first open the device:

```cpp
// open the device before start capturing/sending packets
if (!dev->open())
{
    std::cerr << "Cannot open device" << std::endl;
    return 1;
}
```

For the sake of this demo we'll create a struct that collects statistics on captured packets. It examines every packet and counts number of Ethernet, IPv4, IPv6, TCP, UDP, DNS, HTTP and SSL packets we have seen during the capture.

```cpp
/**
* A struct for collecting packet statistics
*/
struct PacketStats
{
    int ethPacketCount;
    int ipv4PacketCount;
    int ipv6PacketCount;
    int tcpPacketCount;
    int udpPacketCount;
    int dnsPacketCount;
    int httpPacketCount;
    int sslPacketCount;

    /**
    * Clear all stats
    */
    void clear() { ethPacketCount = 0; ipv4PacketCount = 0; ipv6PacketCount = 0; tcpPacketCount = 0; udpPacketCount = 0; tcpPacketCount = 0; dnsPacketCount = 0; httpPacketCount = 0; sslPacketCount = 0; }

    /**
    * C'tor
    */
    PacketStats() { clear(); }

    /**
    * Collect stats from a packet
    */
    void consumePacket(pcpp::Packet& packet)
    {
        if (packet.isPacketOfType(pcpp::Ethernet))
            ethPacketCount++;
        if (packet.isPacketOfType(pcpp::IPv4))
            ipv4PacketCount++;
        if (packet.isPacketOfType(pcpp::IPv6))
            ipv6PacketCount++;
        if (packet.isPacketOfType(pcpp::TCP))
            tcpPacketCount++;
        if (packet.isPacketOfType(pcpp::UDP))
            udpPacketCount++;
        if (packet.isPacketOfType(pcpp::DNS))
            dnsPacketCount++;
        if (packet.isPacketOfType(pcpp::HTTP))
            httpPacketCount++;
        if (packet.isPacketOfType(pcpp::SSL))
            sslPacketCount++;
    }

    /**
    * Print stats to console
    */
    void printToConsole()
    {
        std::cout
            << "Ethernet packet count: " << ethPacketCount << std::endl
            << "IPv4 packet count:     " << ipv4PacketCount << std::endl
            << "IPv6 packet count:     " << ipv6PacketCount << std::endl
            << "TCP packet count:      " << tcpPacketCount << std::endl
            << "UDP packet count:      " << udpPacketCount << std::endl
            << "DNS packet count:      " << dnsPacketCount << std::endl
            << "HTTP packet count:     " << httpPacketCount << std::endl
            << "SSL packet count:      " << sslPacketCount << std::endl;
    }
};
```

Let's create an instance of this struct:

```cpp
// create the stats object
PacketStats stats;
```

We'll demonstrate the 3 types of packet capturing options currently available in PcapPlusPlus:

* Asynchronous packet capture using a callback function
* Asynchronous packet capture using a packet list (vector)
* Synchronous (blocking) packet capture using a callback function

### Asynchronous packet capture using a callback function

The first way we'll demonstrate is capturing packets asynchronously, meaning the packet capture is happening on a different thread created by PcapPlusPlus. Whenever a packet is captured a callback function provided by the user is invoked, and the context where this callback is running is the packet capture thread (not the main thread). For showing that let's first create our callback function. The callback function header complies to the `OnPacketArrivesCallback` typedef defined in "PcapLiveDevice.h". Its parameters will be a pointer to the packet currently captured, a pointer to the interface instance doing this capture and a pointer to an object supplied by the user at the beginning of the packet capture (a cookie). Why do we need this cookie? in order to pass objects (or data) between our main code and the callback running in a static context-less environment. The cookie is a way of providing a context to our callback function. In our case this context will be an instance of the statistics collector we just defined: `PacketStats`

```cpp
/**
* A callback function for the async capture which is called each time a packet is captured
*/
static void onPacketArrives(pcpp::RawPacket* packet, pcpp::PcapLiveDevice* dev, void* cookie)
{
    // extract the stats object form the cookie
    PacketStats* stats = (PacketStats*)cookie;

    // parsed the raw packet
    pcpp::Packet parsedPacket(packet);

    // collect stats from packet
    stats->consumePacket(parsedPacket);
}
```

As you can see this callback is doing something pretty simple: cast the cookie as `PacketStats*`, parse the raw packet as parsed packet, and feed it to the `PacketStats` instance to collect information about the protocols used in this packet

Now let's activate the packet capture and pass it a pointer to the callback and a pointer to the `PacketStats` instance we created:

```cpp
std::cout << std::endl << "Starting async capture..." << std::endl;

// start capture in async mode. Give a callback function to call to whenever a packet is captured and the stats object as the cookie
dev->startCapture(onPacketArrives, &stats);
```

Please remember the packet capture is happening in a different thread so code written from now on in our main thread will work in parallel. For the sake of this demo let's choose not to do anything and wait (sleep) for 10 seconds and then stop the capture. Since there is no one "sleep" method compatible for all operating systems PcapPlusPlus provides a method called `pcpp::multiPlatformSleep()` which runs the right "sleep" method according to the operating system the application is currently running on. For using this macro we need to add an include phrase to `SystemUtils.h` in Common++:

```cpp
#include "SystemUtils.h"
```

Now let's write the code that sleeps for 10 seconds and then stops the packet capture:

```cpp
// sleep for 10 seconds in main thread, in the meantime packets are captured in the async thread
pcpp::multiPlatformSleep(10);

// stop capturing packets
dev->stopCapture();
```

In the meantime, while the main thread was sleeping, packets were (hopefully) captured by the packet capture thread and information was collected in the `PacketStats` instance. So let's print the results:

```cpp
// print results
std::cout << "Results:" << std::endl;
stats.printToConsole();
```

Here is an output example I got in a specific run of this code:

```shell
Starting async capture...
Results:
Ethernet packet count: 2346
IPv4 packet count:     2346
IPv6 packet count:     0
TCP packet count:      2203
UDP packet count:      143
DNS packet count:      0
HTTP packet count:     87
SSL packet count:      342
```

### Asynchronous packet capture using a packet list (vector)

Now let's see a different way to capture packet in PcapPlusPlus. Here instead of using a callback function, we'll supply PcapPlusPlus an instance of raw packet pointer list and the capture thread will fill it with pointers to captured packets. In this capturing method the capture is still asynchronous, meaning it happens on a different thread created by PcapPlusPlus, but there is no callback function involved. The advantage here is that you can use the packets that were captured in the main thread.

PcapPlusPlus provides a class for representing a list of raw packet pointers. It's called `RawPacketVector`. This class actually wraps `std::vector` and add some more functionality such as freeing the raw packet instances inside the list when the list memory is freed.

So let's create an instance of `RawPacketVector` and start the packet capture:

```cpp
std::cout << std::endl << "Starting capture with packet vector..." << std::endl;

// create an empty packet vector object
pcpp::RawPacketVector packetVec;

// start capturing packets. All packets will be added to the packet vector
dev->startCapture(packetVec);
```

As we said the packet capture happens in another thread so like in the previous example let's sleep for 10 seconds in the main thread and then stop the capture:

```cpp
// sleep for 10 seconds in main thread, in the meantime packets are captured in the async thread
pcpp::multiPlatformSleep(10);

// stop capturing packets
dev->stopCapture();
```

Now the raw packet list is (hopefully) filled with packets that were captured. Let's go over all packets and feed them to our stats collector (let's first clear the stats collector from its previous run). Note this code is running on the main thread and it's an example of how to access the packets in the main thread after they were captured. For going over the packets we'll use an iterator provided in the `RawPacketVector` class:

```cpp
// go over the packet vector and feed all packets to the stats object
for (pcpp::RawPacketVector::ConstVectorIterator iter = packetVec.begin(); iter != packetVec.end(); iter++)
{
    // parse raw packet
    pcpp::Packet parsedPacket(*iter);

    // feed packet to the stats object
    stats.consumePacket(parsedPacket);
}
```

Now let's print the results:

```cpp
// print results
std::cout << "Results:" << std::endl;
stats.printToConsole();
```

Here is an output example I got in a specific run of this code:

```shell
Starting capture with packet vector...
Results:
Ethernet packet count: 4064
IPv4 packet count:     4058
IPv6 packet count:     6
TCP packet count:      3939
UDP packet count:      121
DNS packet count:      0
HTTP packet count:     127
SSL packet count:      188
```

### Synchronous (blocking) packet capture using a callback function

The last way we'll demonstrate to capture packets is a synchronous way where the main thread is blocked during the packet capture and released only when the user instructs or after a timeout pre-defined by the user. In this case there is no separate thread created for the packet capture and everything is happening on the main thread. This method requires a callback of type `OnPacketArrivesStopBlocking` to be defined by the user. Let's first define this callback:

```cpp
/**
* a callback function for the blocking mode capture which is called each time a packet is captured
*/
static bool onPacketArrivesBlockingMode(pcpp::RawPacket* packet, pcpp::PcapLiveDevice* dev, void* cookie)
{
    // extract the stats object form the cookie
    PacketStats* stats = (PacketStats*)cookie;

    // parsed the raw packet
    pcpp::Packet parsedPacket(packet);

    // collect stats from packet
    stats->consumePacket(parsedPacket);

    // return false means we don't want to stop capturing after this callback
    return false;
}
```

As you can see the callback accepts several parameters: a pointer to the packet currently captured, a pointer to the interface instance doing this capture and a pointer to an object supplied by the user at the beginning of the packet capture (a cookie). Until now everything seems similar to the `OnPacketArrivesCallback` callback we demonstrated previously. But there is one important difference: the returning value. In `OnPacketArrivesCallback` there is no return value but in `OnPacketArrivesStopBlocking` the return value is boolean. This boolean return value allows the user who writes the callback to stop the synchronous packet capture any time, by returning a "true" value. As long as the return value is "false" the packet capture will continue until the timeout expires (we'll get to that soon), but if "true" is returned the capture will stop immediately. In our example we choose to always return "false" but you're welcome to try returning "true" and see that it's working. Besides returning "false" the callback is doing the same as the previous callback: cast the cookie as `PacketStats*`, parse the raw packet as parsed packet, and feed it to the `PacketStats` instance to collect information about the protocols used in this packet

Now let's start the packet capture. Here, of course, we don't need to sleep as everything is happening on the main thread. But we do want to stop the capture at some point (please remember we always return "false" in the callback so that won't stop the capturing). Here is where the timeout feature comes in hand: when starting the packet capture you can provide a timeout of when to stop the packet capture (if not previously stopped by returning "true" from the callback function). If you provide a timeout of 0 or less it's like saying there is no timeout and the capture will continue until a "true" value is returned from the callback. The timeout unit is in seconds

```cpp
std::cout << std::endl << "Starting capture in blocking mode..." << std::endl;

// clear stats
stats.clear();

// start capturing in blocking mode. Give a callback function to call to whenever a packet is captured, the stats object as the cookie and a 10 seconds timeout
dev->startCaptureBlockingMode(onPacketArrivesBlockingMode, &stats, 10);

// thread is blocked until capture is finished

// capture is finished, print results
std::cout << "Results:" << std::endl;
stats.printToConsole();
```

Please notice we don't need to activate `dev->stopCapture()` here

Here is an output example I got in a specific run of this code:

```shell
Starting capture in blocking mode...
Results:
Ethernet packet count: 1266
IPv4 packet count:     1263
IPv6 packet count:     3
TCP packet count:      1115
UDP packet count:      147
DNS packet count:      0
HTTP packet count:     36
SSL packet count:      251
```

## Sending packets

Until now we saw the different methods of capturing packets. But `PcapLiveDevice` or `WinPcapLiveDevice` also provide APIs for sending packets to the network. The APIs are rather straight forward and enable sending one packet or multiple packets in a batch, and also enable to send raw packets (of type `RawPacket`) or parsed packets (of type `Packet`). We won't go over all of the methods, we'll demonstrate some of them. The rest should be quite easy to understand.

Let's start with sending one raw packet. In this example we'll use the raw packet vector we collected from the packet capture in the previous section, iterate on it and send each packet to the network one by one. Let's look at the code first:

```cpp
std::cout << std::endl << "Sending " << packetVec.size() << " packets one by one..." << std::endl;

// go over the vector of packets and send them one by one
for (pcpp::RawPacketVector::ConstVectorIterator iter = packetVec.begin(); iter != packetVec.end(); iter++)
{
    // send the packet. If fails exit the application
    if (!dev->sendPacket(**iter))
    {
        std::cerr << "Couldn't send packet" << std::endl;
        return 1;
    }
}
std::cout << packetVec.size() << " packets sent" << std::endl;
```

As you can see we send each packet using the `dev->sendPacket()` method. Notice the return value is a boolean saying whether the packet was sent successfully or not.

Now let's demonstrate sending a bunch of packets. Here we'll only demonstrate sending a raw packet list (`RawPacketVector`). Let's see the code:

```cpp
std::cout << std::endl << "Sending " << packetVec.size() << " packets..." << std::endl;

// send all packets in the vector. The returned number shows how many packets were actually sent (expected to be equal to vector size)
int packetsSent = dev->sendPackets(packetVec);

std::cout << packetsSent << " packets sent" << std::endl;
```

As you can see we're using the same raw packet list from the previous section. The return value is how many packets were sent successfully.

## Filtering packets

Now let's learn how to use the packet filtering mechanism provided by PcapPlusPlus. Basically libpcap and WinPcap/Npcap support the [BPF (Berkeley Packet Filter)](https://en.wikipedia.org/wiki/Berkeley_Packet_Filter) format for setting a filter on an interface. When setting a filter only packets that match the filter will be passed to the user, all the other packets will be ignored by the capturing mechanism. The BPF format is great and widely used but for my opinion is too complicated and not easy to understand. In addition it's a string-based format and I don't know any C++ API that wraps it in an organized C++ class structure. That's why I developed one, quite simple and not covering all of the BPF options, but is sufficient for most use-cases (I think). In this section we'll learn how to use it and give a small example (the rest can be read in PcapPlusPlus API documentation)

As already mentioned, the filtering mechanism is actually an hierarchy of classes representing different kinds of filters, for example: IPv4 filters (`IPFilter`), TCP/UDP Port filters (`PortFilter`), MAC address filters (`MacAddressFilter`), VLAN filters (`VlanFilter`), protocol filter (`ProtoFilter`), etc. but also composite operators like "and" (`AndFilter`), "or" (`OrFilter`) and "not" (`NotFilter`). The root class for all of them is `GeneralFilter`. Each class exposes a simple API (usually in the constructor) for setting the filter values. For example: in IPv4 filter (`IPFilter`) the user should provide in the constructor what is the IPv4 address to set as a filter and also in which direction to look for this address (source address, destination address or both):

```cpp
IPFilter(const std::string& ipAddress, Direction dir)
```

We'll not go over all the filter classes but we'll do a quick demonstration of how to construct a complex filter and set it to a `PcapLiveDevice` instance. Filters can be also applied to other devices that support it such as pcap and pcap-ng files (`PcapFileReaderDevice` and `PcapNgFileReaderDevice`).

Let's start with building the filter. The filter we'd like to build is: "capture only TCP packets which their source or destination port is 80" (which are basically HTTP packets). Let's see the code for doing that:

```cpp
// create a filter instance to capture only traffic on port 80
pcpp::PortFilter portFilter(80, pcpp::SRC_OR_DST);

// create a filter instance to capture only TCP traffic
pcpp::ProtoFilter protocolFilter(pcpp::TCP);

// create an AND filter to combine both filters - capture only TCP traffic on port 80
pcpp::AndFilter andFilter;
andFilter.addFilter(&portFilter);
andFilter.addFilter(&protocolFilter);
```

As you can see we created 3 filter instances:

* `PortFilter` - in the constructor we gave it the port we'd like to filter on (80) and instructed it to search on both source and destnation port of each packet
* `ProtoFilter` - in the constructor we told it to filter only TCP packets
* `AndFilter` - this filter is to combine the port and protocol filters. So we created it and provided it pointers to the port and protocol filters we previously created

That's it, our filter is ready. Now let's set this filter in the `PcapLiveDevice` we have from the previous sections:

```cpp
// set the filter on the device
dev->setFilter(andFilter);
```

Now let's write some code to capture packets from the network and print the results (we use the same asynchronous capturing using a callback function method learnt in the previous sections):

```cpp
std::cout << std::endl << "Starting packet capture with a filter in place..." << std::endl;

// start capture in async mode. Give a callback function to call to whenever a packet is captured and the stats object as the cookie
dev->startCapture(onPacketArrives, &stats);

// sleep for 10 seconds in main thread, in the meantime packets are captured in the async thread
pcpp::multiPlatformSleep(10);

// stop capturing packets
dev->stopCapture();

// print results - should capture only packets which match the filter (which is TCP port 80)
std::cout << "Results:" << std::endl;
stats.printToConsole();
```

Here is an output example I got after running this code:

```shell
Starting packet capture with a filter in place...
Results:
Ethernet packet count: 703
IPv4 packet count:     703
IPv6 packet count:     0
TCP packet count:      703
UDP packet count:      0
DNS packet count:      0
HTTP packet count:     58
SSL packet count:      0
```

As you can see the filter worked as there are no UDP, SSL or DNS packets, although I made sure there was UDP/DNS/SSL traffic running on my machine at the time of the capture. It was simply filtered by the capturing device

## Running the example

All code that was covered in this tutorial can be found [here](https://github.com/seladb/PcapPlusPlus/tree/{{site.github_label}}/Examples/Tutorials/Tutorial-LiveTraffic). In order to compile and run the code please first download and compile PcapPlusPlus code or downloaded a pre-compiled version from [the latest PcapPlusPlus release](https://github.com/seladb/PcapPlusPlus/releases/latest). Then follow these instruction, according to your platform:

* Linux, MacOS, FreeBSD - make sure PcapPlusPlus is installed (by running **sudo make install** in PcapPlusPlus main directory). Then either change the `Makefile.non_windows` file name to `Makefile` and run `make all`, or run `make -f Makefile.non_windows all`
* Windows using MinGW or MinGW-w64 - either change the `Makefile.windows` file name to `Makefile` and run `make all`, or run `make -f Makefile.windows all`
* Windows using Visual Studio - there is a Visual Studio solution containing all tutorials: `mk\[vs_version]\Tutorials.sln`. Just open it and compile all tutorials

In all options the compiled executable will be inside the tutorial directory (`[PcapPlusPlus Folder]/Examples/Tutorials/Tutorial-LiveTraffic`)