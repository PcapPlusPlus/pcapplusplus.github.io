---
layout: page
title: 4. Packet Parsing
parent: Tutorials
permalink: /docs/tutorials/packet-parsing
nav_order: 4
---

# Part 4: Packet Parsing
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Introduction

Packet parsing, editing and crafting are a major part of PcapPlusPlus and is the essence of the Packet++ library. There is a long list of [protocols currently supported](/docs/features#supported-network-protocols), each of them is represented by a `Layer` class which (in most cases) supports both parsing of the protocol, editing and creation of new layers from scratch.

This tutorial will go through the packet parsing fundamentals and the next tutorial will focus on packet crafting and editing. The tutorial demonstrate parsing on a few popular protocols:

* Ethernet
* IPv4
* TCP
* HTTP

For further information about these protocols and the other protocols supported in PcapPlusPlus please go to the [API documentation](/docs/api)

## Packet parsing basics

In this tutorial we'll read a packet from a pcap file, let PcapPlusPlus parse it, and see how we can retrieve data from each layer. Let's start by writing a `main()` method and add the includes that we need:

```cpp
#if !defined(WIN32) && !defined(WINx64)
#include  // this is for using ntohs() and htons() on non-Windows OS's
#endif
#include "stdlib.h"
#include "Packet.h"
#include "EthLayer.h"
#include "IPv4Layer.h"
#include "TcpLayer.h"
#include "HttpLayer.h"
#include "PcapFileDevice.h"

int main(int argc, char* argv[])
{
    // We'll write our code here
}
```

As you can see we added an include to `Packet.h` which contains the basic parsed packet structures, to `PcapFileDevice.h` which contains the API for reading from pcap files and to all of the layers which we want to retrieve information from. In addition we included `in.h` for using `htons()` and `ntohs()` which we'll use later. This include is relevant for non-Windows operating systems only.

Now let's read the packet from the pcap file. This pcap file contains only 1 packet, so we'll open the reader, read the packet and close the reader:

```cpp
// use the IFileReaderDevice interface to automatically identify file type (pcap/pcap-ng)
// and create an interface instance that both readers implement
pcpp::IFileReaderDevice* reader = pcpp::IFileReaderDevice::getReader("1_http_packet.pcap");

// verify that a reader interface was indeed created
if (reader == NULL)
{
    printf("Cannot determine reader for file type\n");
    exit(1);
}

// open the reader for reading
if (!reader->open())
{
    printf("Cannot open input.pcap for reading\n");
    exit(1);
}

// read the first (and only) packet from the file
pcpp::RawPacket rawPacket;
if (!reader->getNextPacket(rawPacket))
{
    printf("Couldn't read the first packet in the file\n");
    return 1;
}

// close the file reader, we don't need it anymore
reader->close();
```

The next step is to let PcapPlusPlus parse the packet. We do this by creating an instance of the `Packet` class and giving it in the constructor a pointer to the `RawPacket` instance we have:

```cpp
// parse the raw packet into a parsed packet
pcpp::Packet parsedPacket(&rawPacket);
```

Before we dive into the protocols, let's remember how the `Packet` class is [built](/docs/tutorials/intro#packets-and-layers): it contains a link list of `Layer` instances, each layer points to the next layer in the packet. In our example: Ethernet layer will be the first one, it will point to IPv4 layer which will point to TCP layer and finally we'll have HTTP request layer. The `Packet` class exposes this link list so we can iterate over the layers and retrieve basic information like the protocols they represent, sizes, etc. Let's see the code:

```cpp
// first let's go over the layers one by one and find out its type, its total length, its header length and its payload length
for (pcpp::Layer* curLayer = parsedPacket.getFirstLayer(); curLayer != NULL; curLayer = curLayer->getNextLayer())
{
    printf("Layer type: %s; Total data: %d [bytes]; Layer data: %d [bytes]; Layer payload: %d [bytes]\n",
            getProtocolTypeAsString(curLayer->getProtocol()).c_str(), // get layer type
            (int)curLayer->getDataLen(),                              // get total length of the layer
            (int)curLayer->getHeaderLen(),                            // get the header length of the layer
            (int)curLayer->getLayerPayloadSize());                    // get the payload length of the layer (equals total length minus header length)
}
```

As you can see, we're using the `getFirstLayer()` and `getNextLayer()` APIs to iterate over the layers. In each layer we have the following information:

* `getProtocol()` - get an enum of the protocol the layer represents
* `getHeaderLen()` - get the size of the layer's header, meaning the size of the layer data
* `getLayerPayloadSize()` - get the size of the layer's payload, meaning the size of all layers that follows this layer
* `getDataLen()` - get the total size of the layer: header + payload

For printing the protocols I used a simple function that takes a `ProtocolType` enum and returns a string:

```cpp
std::string getProtocolTypeAsString(pcpp::ProtocolType protocolType)
{
    switch (protocolType)
    {
    case pcpp::Ethernet:
        return "Ethernet";
    case pcpp::IPv4:
        return "IPv4";
    case pcpp::TCP:
        return "TCP";
    case pcpp::HTTPRequest:
    case pcpp::HTTPResponse:
        return "HTTP";
    default:
        return "Unknown";
    }
}
```

Let's see the output so far:

```shell
Layer type: Ethernet; Total data: 443 [bytes]; Layer data: 14 [bytes]; Layer payload: 429 [bytes]
Layer type: IPv4; Total data: 429 [bytes]; Layer data: 20 [bytes]; Layer payload: 409 [bytes]
Layer type: TCP; Total data: 409 [bytes]; Layer data: 32 [bytes]; Layer payload: 377 [bytes]
Layer type: HTTP; Total data: 377 [bytes]; Layer data: 377 [bytes]; Layer payload: 0 [bytes]
```

## Parsing Ethernet

Now let's see what information we can get from the first layer in this packet: `EthLayer`. First let's get a pointer to this layer. We can use the methods we used before and cast the `Layer*` to `EthLayer*` but the `Packet` class offers a more convenient way to do that:

```cpp
// now let's get the Ethernet layer
pcpp::EthLayer* ethernetLayer = parsedPacket.getLayerOfType<pcpp::EthLayer>();
if (ethernetLayer == NULL)
{
    printf("Something went wrong, couldn't find Ethernet layer\n");
    exit(1);
}
```

As you can see we used the templated method `getLayerOfType<pcpp::EthLayer>()` which returns a pointer to `EthLayer` if exists in the packet or NULL otherwise. Now we are ready to start getting some information. The Ethernet layer is quite simple so there's not much information we can get. We can basically get the source and destination MAC addresses and the Ether Type of the next layer:

```cpp
// print the source and dest MAC addresses and the Ether type
printf("\nSource MAC address: %s\n", ethernetLayer->getSourceMac().toString().c_str());
printf("Destination MAC address: %s\n", ethernetLayer->getDestMac().toString().c_str());
printf("Ether type = 0x%X\n", ntohs(ethernetLayer->getEthHeader()->etherType));
```

For getting the source and destination MAC addresses `EthLayer` exposes methods which return an instance of type `MacAddress` which encapsulates MAC addresses and provides helper function such as print the MAC address as a nice string (like we have in our code example). For getting the Ether Type we call `getEthHeader()` which casts the raw packet bytes into a struct: `ether_header*` and we can read the Ether Type from this struct. Since packet raw data is stored in network order, we need to convert the Ether Type value from network to host order using `ntohs()`

The output is the following:

```shell
Source MAC address: 00:50:43:01:4d:d4
Destination MAC address: 00:90:7f:3e:02:d0
Ether type = 0x800
```

## Parsing IPv4

Now let's get the IPv4 layer, we'll do it in the same way as before using the template `getLayerOfType<pcpp::IPv4Layer>()` method:

```cpp
// let's get the IPv4 layer
pcpp::IPv4Layer* ipLayer = parsedPacket.getLayerOfType<pcpp::IPv4Layer>();
if (ipLayer == NULL)
{
    printf("Something went wrong, couldn't find IPv4 layer\n");
    exit(1);
}
```

Let's get some information from the `IPv4Layer`:

```cpp
// print source and dest IP addresses, IP ID and TTL
printf("\nSource IP address: %s\n", ipLayer->getSrcIpAddress().toString().c_str());
printf("Destination IP address: %s\n", ipLayer->getDstIpAddress().toString().c_str());
printf("IP ID: 0x%X\n", ntohs(ipLayer->getIPv4Header()->ipId));
printf("TTL: %d\n", ipLayer->getIPv4Header()->timeToLive);
```

As you can see this layer exposes 2 methods for reading the source and destination IP addresses in an easy-to-use wrapper class called `IPv4Address`. This class provides various capabilities, one of them is printing the IP address as a string. Next, we use the `getIPv4Header()` method which casts the raw packet bytes to a struct called `iphdr*` and we can retrieve the rest of the data from there. Since the packet data is in network order, we need to use `ntohs()` when getting data larger than 1 byte (like when reading the IP ID).

Here is the output:

```shell
Source IP address: 172.16.133.132
Destination IP address: 98.139.161.29
IP ID: 0x36E4
TTL: 64
```

## Parsing TCP

Let's get the TCP layer:

```cpp
// let's get the TCP layer
pcpp::TcpLayer* tcpLayer = parsedPacket.getLayerOfType<pcpp::TcpLayer>();
if (tcpLayer == NULL)
{
    printf("Something went wrong, couldn't find TCP layer\n");
    exit(1);
}
```

Now let's get the TCP data:

```cpp
// printf TCP source and dest ports, window size, and the TCP flags that are set in this layer
printf("\nSource TCP port: %d\n", (int)ntohs(tcpLayer->getTcpHeader()->portSrc));
printf("Destination TCP port: %d\n", (int)ntohs(tcpLayer->getTcpHeader()->portDst));
printf("Window size: %d\n", (int)ntohs(tcpLayer->getTcpHeader()->windowSize));
printf("TCP flags: %s\n", printTcpFlags(tcpLayer).c_str());
```

Here also, like the layers we saw before, TCP layer exposes a method `getTcpHeader()` which casts the raw packet bytes to a struct `tpchdr*` which contains all of the TCP fields. That way we can get the source and destination ports, the windows size and any other TCP field. Notice the need of using `ntohs()` to convert the data from network to host byte order because the raw packet arrives in network order. I also wrote a small function that gathers all of the TCP flags on the packet and prints them nicely:

```cpp
std::string printTcpFlags(pcpp::TcpLayer* tcpLayer)
{
    std::string result = "";
    if (tcpLayer->getTcpHeader()->synFlag == 1)
        result += "SYN ";
    if (tcpLayer->getTcpHeader()->ackFlag == 1)
        result += "ACK ";
    if (tcpLayer->getTcpHeader()->pshFlag == 1)
        result += "PSH ";
    if (tcpLayer->getTcpHeader()->cwrFlag == 1)
        result += "CWR ";
    if (tcpLayer->getTcpHeader()->urgFlag == 1)
        result += "URG ";
    if (tcpLayer->getTcpHeader()->eceFlag == 1)
        result += "ECE ";
    if (tcpLayer->getTcpHeader()->rstFlag == 1)
        result += "RST ";
    if (tcpLayer->getTcpHeader()->finFlag == 1)
        result += "FIN ";

    return result;
}
```

Another cool feature `TcpLayer` provides is retrieving information about the TCP options (if exist). We can iterate the TCP options using the methods `getFirstTcpOption()` and `getNextTcpOption(tcpOption)` and extract all the information on the TCP option such as type, length and value. In our example let's iterate over them and print their type:

```cpp
// go over all TCP options in this layer and print its type
printf("TCP options: ");
for (pcpp::TcpOption tcpOption = tcpLayer->getFirstTcpOption(); tcpOption.isNotNull(); tcpOption = tcpLayer->getNextTcpOption(tcpOption))
{
    printf("%s ", printTcpOptionType(tcpOption.getTcpOptionType()).c_str());
}
printf("\n");
```

Let's see the method that gets the TCP option type as enum and converts it to string. Notice this method handles only the TCP options we have on the specific packet we're parsing, PcapPlusPlus support all TCP options types:

```cpp
std::string printTcpOptionType(pcpp::TcpOptionType optionType)
{
    switch (optionType)
    {
    case pcpp::PCPP_TCPOPT_NOP:
        return "NOP";
    case pcpp::PCPP_TCPOPT_TIMESTAMP:
        return "Timestamp";
    default:
        return "Other";
    }
}
```

## Parsing HTTP

Finally, let's see the capabilities `HttpRequestLayer` has to offer. First let's extract the layer from the packet:

```cpp
// let's get the HTTP request layer
pcpp::HttpRequestLayer* httpRequestLayer = parsedPacket.getLayerOfType<pcpp::httprequestlayer>();
if (httpRequestLayer == NULL)
{
    printf("Something went wrong, couldn't find HTTP request layer\n");
    exit(1);
}
```

Of course there is a similar class `HttpResponseLayer` for HTTP responses.

HTTP messages (both requests and responses) have 3 main parts:

* The first line (also known as request-line or status-line) which includes the HTTP version, HTTP method (for requests) or status code (for responses) and the URI (for requests)
* Message headers which include all header fields (e.g host, user-agent, cookie, content-type etc.)
* Message body

The HTTP layer classes provide access to all of these parts. Let's start with showing how to get data from the first line:

```cpp
// print HTTP method and URI. Both appear in the first line of the HTTP request
printf("\nHTTP method: %s\n", printHttpMethod(httpRequestLayer->getFirstLine()->getMethod()).c_str());
printf("HTTP URI: %s\n", httpRequestLayer->getFirstLine()->getUri().c_str());
```

As you can see the `HttpRequestLayer` class exposes a getter (`getFirstLine()`) that retrieves an object of type `HttpRequestFirstLine` that contain all of the first-line data: method, URI,etc. The method is returned as an enum so I added a simple function `printHttpMethod` to print it as a string:

```cpp
std::string printHttpMethod(pcpp::HttpRequestLayer::HttpMethod httpMethod)
{
    switch (httpMethod)
    {
    case pcpp::HttpRequestLayer::HttpGET:
        return "GET";
    case pcpp::HttpRequestLayer::HttpPOST:
        return "POST";
    default:
        return "Other";
    }
}
```

Now let's see how to get header fields data:

```cpp
// print values of the following HTTP field: Host, User-Agent and Cookie
printf("HTTP host: %s\n", httpRequestLayer->getFieldByName(PCPP_HTTP_HOST_FIELD)->getFieldValue().c_str());
printf("HTTP user-agent: %s\n", httpRequestLayer->getFieldByName(PCPP_HTTP_USER_AGENT_FIELD)->getFieldValue().c_str());
printf("HTTP cookie: %s\n", httpRequestLayer->getFieldByName(PCPP_HTTP_COOKIE_FIELD)->getFieldValue().c_str());
```

The HTTP request and response layers exposes a method `getFieldByName()` to get a header field data by it's name. The class representing a field is called `HttpField` and has some interesting API, but probably the most important method for parsing is `getFieldValue()` which returns the value of this header field as string. Please notice that I didn't write the header field names as strings but rather used a macro defined in PcapPlusPlus for some of the most useful HTTP fields (like host, cookie, user-agent, etc.).

Finally, let's see another cool method in `HttpRequestLayer` which is `getURL()` that forms and returns the full URL from the request (including host-name from "Host" header field + URI from the request-line):

```cpp
// print the full URL of this request
printf("HTTP full URL: %s\n", httpRequestLayer->getUrl().c_str());
```

Now let's see the output:

```shell
HTTP method: GET
HTTP URI: /serv?s=19190039&t=1361916157&f=us-p9h3
HTTP host: geo.yahoo.com
HTTP user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10
HTTP cookie: B=fdnulql8iqc6l&b=3&s=ps
HTTP full URL: geo.yahoo.com/serv?s=19190039&t=1361916157&f=us-p9h3
```

## Running the example

All code that was covered in this tutorial can be found [here](https://github.com/seladb/PcapPlusPlus/tree/master/Examples/Tutorials/Tutorial-PacketParsing). In order to compile and run the code please first download and compile PcapPlusPlus code or downloaded a pre-compiled version from [the latest PcapPlusPlus release](https://github.com/seladb/PcapPlusPlus/releases/latest). Then follow these instruction, according to your platform:

* Linux and MacOS - make sure PcapPlusPlus is installed (by running **sudo make install** in PcapPlusPlus main directory). Then either change the `Makefile.non_windows` file name to `Makefile` and run `make all`, or run `make -f Makefile.non_windows all`
* Windows using MinGW or MinGW-w64 - either change the `Makefile.windows` file name to `Makefile` and run `make all`, or run `make -f Makefile.windows all`
* Windows using Visual Studio - there is a Visual Studio solution containing all tutorials: `mk\[vs_version]\Tutorials.sln`. Just open it and compile all tutorials

In all options the compiled executable will be inside the tutorial directory (`[PcapPlusPlus Folder]/Examples/Tutorials/Tutorial-PacketParsing`)
