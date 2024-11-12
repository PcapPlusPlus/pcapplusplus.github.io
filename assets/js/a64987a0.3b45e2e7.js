"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[4539],{4187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"tutorials/packet-parsing","title":"Part 4: Packet Parsing","description":"Introduction","source":"@site/versioned_docs/version-v22.05/tutorials/packet-parsing.mdx","sourceDirName":"tutorials","slug":"/tutorials/packet-parsing","permalink":"/docs/v22.05/tutorials/packet-parsing","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.05/tutorials/packet-parsing.mdx","tags":[],"version":"v22.05","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docs","previous":{"title":"Part 3: Capture/Send Packets","permalink":"/docs/v22.05/tutorials/capture-packets"},"next":{"title":"Part 5: Packet Crafting","permalink":"/docs/v22.05/tutorials/packet-crafting"}}');var s=n(4848),a=n(8453),i=n(4701),c=n(3967);const o={sidebar_position:4},l="Part 4: Packet Parsing",d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Packet parsing basics",id:"packet-parsing-basics",level:2},{value:"Parsing Ethernet",id:"parsing-ethernet",level:2},{value:"Parsing IPv4",id:"parsing-ipv4",level:2},{value:"Parsing TCP",id:"parsing-tcp",level:2},{value:"Parsing HTTP",id:"parsing-http",level:2},{value:"Running the example",id:"running-the-example",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"part-4-packet-parsing",children:"Part 4: Packet Parsing"})}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["Packet parsing, editing and crafting are a major part of PcapPlusPlus and is the essence of the Packet++ library. There is a long list of ",(0,s.jsx)(t.a,{href:"../features#supported-network-protocols",children:"protocols currently supported"}),", each of them is represented by a ",(0,s.jsx)(t.code,{children:"Layer"})," class which (in most cases) supports both parsing of the protocol, editing and creation of new layers from scratch."]}),"\n",(0,s.jsx)(t.p,{children:"This tutorial will go through the packet parsing fundamentals and the next tutorial will focus on packet crafting and editing. The tutorial demonstrate parsing on a few popular protocols:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Ethernet"}),"\n",(0,s.jsx)(t.li,{children:"IPv4"}),"\n",(0,s.jsx)(t.li,{children:"TCP"}),"\n",(0,s.jsx)(t.li,{children:"HTTP"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For further information about these protocols and the other protocols supported in PcapPlusPlus please go to the ",(0,s.jsx)(t.a,{href:"../api",children:"API documentation"})]}),"\n",(0,s.jsx)(t.h2,{id:"packet-parsing-basics",children:"Packet parsing basics"}),"\n",(0,s.jsxs)(t.p,{children:["In this tutorial we'll read a packet from a pcap file, let PcapPlusPlus parse it, and see how we can retrieve data from each layer. Let's start by writing a ",(0,s.jsx)(t.code,{children:"main()"})," method and add the includes that we need:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'#include <iostream>\n#include "stdlib.h"\n#include "SystemUtils.h"\n#include "Packet.h"\n#include "EthLayer.h"\n#include "IPv4Layer.h"\n#include "TcpLayer.h"\n#include "HttpLayer.h"\n#include "PcapFileDevice.h"\n\nint main(int argc, char* argv[])\n{\n    // We\'ll write our code here\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see we added an include to ",(0,s.jsx)(t.code,{children:"Packet.h"})," which contains the basic parsed packet structures, to ",(0,s.jsx)(t.code,{children:"PcapFileDevice.h"})," which contains the API for reading from pcap files and to all of the layers which we want to retrieve information from. In addition we included ",(0,s.jsx)(t.code,{children:"SystemUtils.h"})," for using ",(0,s.jsx)(t.code,{children:"netToHost16()"})," which we'll use later."]}),"\n",(0,s.jsx)(t.p,{children:"Now let's read the packet from the pcap file. This pcap file contains only 1 packet, so we'll open the reader, read the packet and close the reader:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'// use the IFileReaderDevice interface to automatically identify file type (pcap/pcap-ng)\n// and create an interface instance that both readers implement\npcpp::IFileReaderDevice* reader = pcpp::IFileReaderDevice::getReader("1_http_packet.pcap");\n\n// verify that a reader interface was indeed created\nif (reader == NULL)\n{\n    std::cerr << "Cannot determine reader for file type" << std::endl;\n    return 1;\n}\n\n// open the reader for reading\nif (!reader->open())\n{\n    std::cerr << "Cannot open input.pcap for reading" << std::endl;\n    return 1;\n}\n\n// read the first (and only) packet from the file\npcpp::RawPacket rawPacket;\nif (!reader->getNextPacket(rawPacket))\n{\n    std::cerr << "Couldn\'t read the first packet in the file" << std::endl;\n    return 1;\n}\n\n// close the file reader, we don\'t need it anymore\nreader->close();\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The next step is to let PcapPlusPlus parse the packet. We do this by creating an instance of the ",(0,s.jsx)(t.code,{children:"Packet"})," class and giving it in the constructor a pointer to the ",(0,s.jsx)(t.code,{children:"RawPacket"})," instance we have:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"// parse the raw packet into a parsed packet\npcpp::Packet parsedPacket(&rawPacket);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Before we dive into the protocols, let's remember how the ",(0,s.jsx)(t.code,{children:"Packet"})," class is ",(0,s.jsx)(t.a,{href:"./intro#packets-and-layers",children:"built"}),": it contains a link list of ",(0,s.jsx)(t.code,{children:"Layer"})," instances, each layer points to the next layer in the packet. In our example: Ethernet layer will be the first one, it will point to IPv4 layer which will point to TCP layer and finally we'll have HTTP request layer. The ",(0,s.jsx)(t.code,{children:"Packet"})," class exposes this link list so we can iterate over the layers and retrieve basic information like the protocols they represent, sizes, etc. Let's see the code:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'// first let\'s go over the layers one by one and find out its type, its total length, its header length and its payload length\nfor (pcpp::Layer* curLayer = parsedPacket.getFirstLayer(); curLayer != NULL; curLayer = curLayer->getNextLayer())\n{\n    std::cout\n        << "Layer type: " << getProtocolTypeAsString(curLayer->getProtocol()) << "; " // get layer type\n        << "Total data: " << curLayer->getDataLen() << " [bytes]; " // get total length of the layer\n        << "Layer data: " << curLayer->getHeaderLen() << " [bytes]; " // get the header length of the layer\n        << "Layer payload: " << curLayer->getLayerPayloadSize() << " [bytes]" // get the payload length of the layer (equals total length minus header length)\n        << std::endl;\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, we're using the ",(0,s.jsx)(t.code,{children:"getFirstLayer()"})," and ",(0,s.jsx)(t.code,{children:"getNextLayer()"})," APIs to iterate over the layers. In each layer we have the following information:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getProtocol()"})," - get an enum of the protocol the layer represents"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getHeaderLen()"})," - get the size of the layer's header, meaning the size of the layer data"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getLayerPayloadSize()"})," - get the size of the layer's payload, meaning the size of all layers that follows this layer"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getDataLen()"})," - get the total size of the layer: header + payload"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["For printing the protocols I used a simple function that takes a ",(0,s.jsx)(t.code,{children:"ProtocolType"})," enum and returns a string:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'std::string getProtocolTypeAsString(pcpp::ProtocolType protocolType)\n{\n    switch (protocolType)\n    {\n    case pcpp::Ethernet:\n        return "Ethernet";\n    case pcpp::IPv4:\n        return "IPv4";\n    case pcpp::TCP:\n        return "TCP";\n    case pcpp::HTTPRequest:\n    case pcpp::HTTPResponse:\n        return "HTTP";\n    default:\n        return "Unknown";\n    }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Let's see the output so far:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"Layer type: Ethernet; Total data: 443 [bytes]; Layer data: 14 [bytes]; Layer payload: 429 [bytes]\nLayer type: IPv4; Total data: 429 [bytes]; Layer data: 20 [bytes]; Layer payload: 409 [bytes]\nLayer type: TCP; Total data: 409 [bytes]; Layer data: 32 [bytes]; Layer payload: 377 [bytes]\nLayer type: HTTP; Total data: 377 [bytes]; Layer data: 377 [bytes]; Layer payload: 0 [bytes]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parsing-ethernet",children:"Parsing Ethernet"}),"\n",(0,s.jsxs)(t.p,{children:["Now let's see what information we can get from the first layer in this packet: ",(0,s.jsx)(t.code,{children:"EthLayer"}),". First let's get a pointer to this layer. We can use the methods we used before and cast the ",(0,s.jsx)(t.code,{children:"Layer*"})," to ",(0,s.jsx)(t.code,{children:"EthLayer*"})," but the ",(0,s.jsx)(t.code,{children:"Packet"})," class offers a more convenient way to do that:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"// now let's get the Ethernet layer\npcpp::EthLayer* ethernetLayer = parsedPacket.getLayerOfType<pcpp::EthLayer>();\nif (ethernetLayer == NULL)\n{\n    std::cerr << \"Something went wrong, couldn't find Ethernet layer\" << std::endl;\n    return 1;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see we used the templated method ",(0,s.jsx)(t.code,{children:"getLayerOfType<pcpp::EthLayer>()"})," which returns a pointer to ",(0,s.jsx)(t.code,{children:"EthLayer"})," if exists in the packet or NULL otherwise. Now we are ready to start getting some information. The Ethernet layer is quite simple so there's not much information we can get. We can basically get the source and destination MAC addresses and the Ether Type of the next layer:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'// print the source and dest MAC addresses and the Ether type\nstd::cout << std::endl\n    << "Source MAC address: " << ethernetLayer->getSourceMac() << std::endl\n    << "Destination MAC address: " << ethernetLayer->getDestMac() << std::endl\n    << "Ether type = 0x" << std::hex << pcpp::netToHost16(ethernetLayer->getEthHeader()->etherType) << std::endl;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["For getting the source and destination MAC addresses ",(0,s.jsx)(t.code,{children:"EthLayer"})," exposes methods which return an instance of type ",(0,s.jsx)(t.code,{children:"MacAddress"})," which encapsulates MAC addresses and provides helper function such as print the MAC address as a nice string (like we have in our code example). For getting the Ether Type we call ",(0,s.jsx)(t.code,{children:"getEthHeader()"})," which casts the raw packet bytes into a struct: ",(0,s.jsx)(t.code,{children:"ether_header*"})," and we can read the Ether Type from this struct. Since packet raw data is stored in network order, we need to convert the Ether Type value from network to host order using ",(0,s.jsx)(t.code,{children:"netToHost16()"})]}),"\n",(0,s.jsx)(t.p,{children:"The output is the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"Source MAC address: 00:50:43:01:4d:d4\nDestination MAC address: 00:90:7f:3e:02:d0\nEther type = 0x800\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parsing-ipv4",children:"Parsing IPv4"}),"\n",(0,s.jsxs)(t.p,{children:["Now let's get the IPv4 layer, we'll do it in the same way as before using the template ",(0,s.jsx)(t.code,{children:"getLayerOfType<pcpp::IPv4Layer>()"})," method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"// let's get the IPv4 layer\npcpp::IPv4Layer* ipLayer = parsedPacket.getLayerOfType<pcpp::IPv4Layer>();\nif (ipLayer == NULL)\n{\n    std::cerr << \"Something went wrong, couldn't find IPv4 layer\" << std::endl;\n    return 1;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Let's get some information from the ",(0,s.jsx)(t.code,{children:"IPv4Layer"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'// print source and dest IP addresses, IP ID and TTL\nstd::cout << std::endl\n    << "Source IP address: " << ipLayer->getSrcIPAddress() << std::endl\n    << "Destination IP address: " << ipLayer->getDstIPAddress() << std::endl\n    << "IP ID: 0x" << std::hex << pcpp::netToHost16(ipLayer->getIPv4Header()->ipId) << std::endl\n    << "TTL: " << std::dec << (int)ipLayer->getIPv4Header()->timeToLive << std::endl;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see this layer exposes 2 methods for reading the source and destination IP addresses in an easy-to-use wrapper class called ",(0,s.jsx)(t.code,{children:"IPv4Address"}),". This class provides various capabilities, one of them is printing the IP address as a string. Next, we use the ",(0,s.jsx)(t.code,{children:"getIPv4Header()"})," method which casts the raw packet bytes to a struct called ",(0,s.jsx)(t.code,{children:"iphdr*"})," and we can retrieve the rest of the data from there. Since the packet data is in network order, we need to use ",(0,s.jsx)(t.code,{children:"netToHost16()"})," when getting data larger than 1 byte (like when reading the IP ID)."]}),"\n",(0,s.jsx)(t.p,{children:"Here is the output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"Source IP address: 172.16.133.132\nDestination IP address: 98.139.161.29\nIP ID: 0x36E4\nTTL: 64\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parsing-tcp",children:"Parsing TCP"}),"\n",(0,s.jsx)(t.p,{children:"Let's get the TCP layer:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"// let's get the TCP layer\npcpp::TcpLayer* tcpLayer = parsedPacket.getLayerOfType<pcpp::TcpLayer>();\nif (tcpLayer == NULL)\n{\n    std::cerr << \"Something went wrong, couldn't find TCP layer\" << std::endl;\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now let's get the TCP data:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'// print TCP source and dest ports, window size, and the TCP flags that are set in this layer\nstd::cout << std::endl\n    << "Source TCP port: " << tcpLayer->getSrcPort() << std::endl\n    << "Destination TCP port: " << tcpLayer->getDstPort() << std::endl\n    << "Window size: " << pcpp::netToHost16(tcpLayer->getTcpHeader()->windowSize) << std::endl\n    << "TCP flags: " << printTcpFlags(tcpLayer) << std::endl;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The TCP layer exposes two methods: ",(0,s.jsx)(t.code,{children:"getPortSrc()"})," and ",(0,s.jsx)(t.code,{children:"getPortDst()"})," to fetch the source and destination ports. It also exposes the method ",(0,s.jsx)(t.code,{children:"getTcpHeader()"})," to cast the raw packet data into a struct ",(0,s.jsx)(t.code,{children:"tpchdr*"})," which contains all of the TCP fields. That way we can fetch additional fields such as windows size etc. Notice the use of ",(0,s.jsx)(t.code,{children:"netToHost16()"})," to convert the data from network to host byte order as the raw packet arrives in network order. I also wrote a small function that gathers all of the TCP flags on the packet and prints them nicely:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'std::string printTcpFlags(pcpp::TcpLayer* tcpLayer)\n{\n    std::string result = "";\n    if (tcpLayer->getTcpHeader()->synFlag == 1)\n        result += "SYN ";\n    if (tcpLayer->getTcpHeader()->ackFlag == 1)\n        result += "ACK ";\n    if (tcpLayer->getTcpHeader()->pshFlag == 1)\n        result += "PSH ";\n    if (tcpLayer->getTcpHeader()->cwrFlag == 1)\n        result += "CWR ";\n    if (tcpLayer->getTcpHeader()->urgFlag == 1)\n        result += "URG ";\n    if (tcpLayer->getTcpHeader()->eceFlag == 1)\n        result += "ECE ";\n    if (tcpLayer->getTcpHeader()->rstFlag == 1)\n        result += "RST ";\n    if (tcpLayer->getTcpHeader()->finFlag == 1)\n        result += "FIN ";\n\n    return result;\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Another cool feature ",(0,s.jsx)(t.code,{children:"TcpLayer"})," provides is retrieving information about the TCP options (if exist). We can iterate the TCP options using the methods ",(0,s.jsx)(t.code,{children:"getFirstTcpOption()"})," and ",(0,s.jsx)(t.code,{children:"getNextTcpOption(tcpOption)"})," and extract all the information on the TCP option such as type, length and value. In our example let's iterate over them and print their type:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'// go over all TCP options in this layer and print its type\nstd::cout << "TCP options: ";\nfor (pcpp::TcpOption tcpOption = tcpLayer->getFirstTcpOption(); tcpOption.isNotNull(); tcpOption = tcpLayer->getNextTcpOption(tcpOption))\n{\n    std::cout << printTcpOptionType(tcpOption.getTcpOptionType()) << " ";\n}\nstd::cout << std::endl;\n'})}),"\n",(0,s.jsx)(t.p,{children:"Let's see the method that gets the TCP option type as enum and converts it to string. Notice this method handles only the TCP options we have on the specific packet we're parsing, PcapPlusPlus support all TCP options types:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'std::string printTcpOptionType(pcpp::TcpOptionType optionType)\n{\n    switch (optionType)\n    {\n    case pcpp::PCPP_TCPOPT_NOP:\n        return "NOP";\n    case pcpp::PCPP_TCPOPT_TIMESTAMP:\n        return "Timestamp";\n    default:\n        return "Other";\n    }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"parsing-http",children:"Parsing HTTP"}),"\n",(0,s.jsxs)(t.p,{children:["Finally, let's see the capabilities ",(0,s.jsx)(t.code,{children:"HttpRequestLayer"})," has to offer. First let's extract the layer from the packet:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"// let's get the HTTP request layer\npcpp::HttpRequestLayer* httpRequestLayer = parsedPacket.getLayerOfType<pcpp::httprequestlayer>();\nif (httpRequestLayer == NULL)\n{\n    std::cerr << \"Something went wrong, couldn't find HTTP request layer\" << std::endl;\n    return 1;\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Of course there is a similar class ",(0,s.jsx)(t.code,{children:"HttpResponseLayer"})," for HTTP responses."]}),"\n",(0,s.jsx)(t.p,{children:"HTTP messages (both requests and responses) have 3 main parts:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The first line (also known as request-line or status-line) which includes the HTTP version, HTTP method (for requests) or status code (for responses) and the URI (for requests)"}),"\n",(0,s.jsx)(t.li,{children:"Message headers which include all header fields (e.g host, user-agent, cookie, content-type etc.)"}),"\n",(0,s.jsx)(t.li,{children:"Message body"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The HTTP layer classes provide access to all of these parts. Let's start with showing how to get data from the first line:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'// print HTTP method and URI. Both appear in the first line of the HTTP request\nstd::cout << std::endl\n    << "HTTP method: " << printHttpMethod(httpRequestLayer->getFirstLine()->getMethod()) << std::endl\n    << "HTTP URI: " << httpRequestLayer->getFirstLine()->getUri() << std::endl;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see the ",(0,s.jsx)(t.code,{children:"HttpRequestLayer"})," class exposes a getter (",(0,s.jsx)(t.code,{children:"getFirstLine()"}),") that retrieves an object of type ",(0,s.jsx)(t.code,{children:"HttpRequestFirstLine"})," that contain all of the first-line data: method, URI,etc. The method is returned as an enum so I added a simple function ",(0,s.jsx)(t.code,{children:"printHttpMethod"})," to print it as a string:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'std::string printHttpMethod(pcpp::HttpRequestLayer::HttpMethod httpMethod)\n{\n    switch (httpMethod)\n    {\n    case pcpp::HttpRequestLayer::HttpGET:\n        return "GET";\n    case pcpp::HttpRequestLayer::HttpPOST:\n        return "POST";\n    default:\n        return "Other";\n    }\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now let's see how to get header fields data:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'// print values of the following HTTP field: Host, User-Agent and Cookie\nstd::cout\n    << "HTTP host: " << httpRequestLayer->getFieldByName(PCPP_HTTP_HOST_FIELD)->getFieldValue() << std::endl\n    << "HTTP user-agent: " << httpRequestLayer->getFieldByName(PCPP_HTTP_USER_AGENT_FIELD)->getFieldValue() << std::endl\n    << "HTTP cookie: " << httpRequestLayer->getFieldByName(PCPP_HTTP_COOKIE_FIELD)->getFieldValue() << std::endl;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The HTTP request and response layers exposes a method ",(0,s.jsx)(t.code,{children:"getFieldByName()"})," to get a header field data by it's name. The class representing a field is called ",(0,s.jsx)(t.code,{children:"HttpField"})," and has some interesting API, but probably the most important method for parsing is ",(0,s.jsx)(t.code,{children:"getFieldValue()"})," which returns the value of this header field as string. Please notice that I didn't write the header field names as strings but rather used a macro defined in PcapPlusPlus for some of the most useful HTTP fields (like host, cookie, user-agent, etc.)."]}),"\n",(0,s.jsxs)(t.p,{children:["Finally, let's see another cool method in ",(0,s.jsx)(t.code,{children:"HttpRequestLayer"})," which is ",(0,s.jsx)(t.code,{children:"getURL()"}),' that forms and returns the full URL from the request (including host-name from "Host" header field + URI from the request-line):']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:'// print the full URL of this request\nstd::cout << "HTTP full URL: " << httpRequestLayer->getUrl() << std::endl;\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now let's see the output:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"HTTP method: GET\nHTTP URI: /serv?s=19190039&t=1361916157&f=us-p9h3\nHTTP host: geo.yahoo.com\nHTTP user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/534.55.3 (KHTML, like Gecko) Version/5.1.3 Safari/534.53.10\nHTTP cookie: B=fdnulql8iqc6l&b=3&s=ps\nHTTP full URL: geo.yahoo.com/serv?s=19190039&t=1361916157&f=us-p9h3\n"})}),"\n",(0,s.jsx)(t.h2,{id:"running-the-example",children:"Running the example"}),"\n","\n",(0,s.jsxs)(t.p,{children:["All code that was covered in this tutorial can be found ",(0,s.jsx)(c.A,{relativePath:"/Examples/Tutorials/Tutorial-PacketParsing",children:"here"}),". In order to compile and run the code please first download and compile PcapPlusPlus code or downloaded a pre-compiled version from the ",(0,s.jsx)(i.A,{}),". Then follow these instruction, according to your platform:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Linux, MacOS, FreeBSD - make sure PcapPlusPlus is installed (by running ",(0,s.jsx)(t.strong,{children:"sudo make install"})," in PcapPlusPlus main directory). Then either change the ",(0,s.jsx)(t.code,{children:"Makefile.non_windows"})," file name to ",(0,s.jsx)(t.code,{children:"Makefile"})," and run ",(0,s.jsx)(t.code,{children:"make all"}),", or run ",(0,s.jsx)(t.code,{children:"make -f Makefile.non_windows all"})]}),"\n",(0,s.jsxs)(t.li,{children:["Windows using MinGW or MinGW-w64 - either change the ",(0,s.jsx)(t.code,{children:"Makefile.windows"})," file name to ",(0,s.jsx)(t.code,{children:"Makefile"})," and run ",(0,s.jsx)(t.code,{children:"make all"}),", or run ",(0,s.jsx)(t.code,{children:"make -f Makefile.windows all"})]}),"\n",(0,s.jsxs)(t.li,{children:["Windows using Visual Studio - there is a Visual Studio solution containing all tutorials: ",(0,s.jsx)(t.code,{children:"mk\\[vs_version]\\Tutorials.sln"}),". Just open it and compile all tutorials"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["In all options the compiled executable will be inside the tutorial directory (",(0,s.jsx)(t.code,{children:"[PcapPlusPlus Folder]/Examples/Tutorials/Tutorial-PacketParsing"}),")"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},3967:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(5329),s=n(4848);const a=function(e){let{relativePath:t,children:n}=e;return(0,s.jsx)("a",{href:(0,r.t_)()+t,children:n})}},5329:(e,t,n)=>{n.d(t,{ZA:()=>o,iI:()=>d,i_:()=>l,jA:()=>p,k9:()=>a,kF:()=>i,l:()=>c,t_:()=>h,zk:()=>u});var r=n(4070);const s="https://github.com/seladb/PcapPlusPlus";function a(){return s}function i(){const e=(0,r.r7)(),t=(0,r.ir)();return"Next"===t.label?e.label:t.label}function c(e){return`${s}/releases/tag/${e}`}function o(){return c(i())}function l(){return`${s}/archive/${i()}.zip`}function d(){return`${s}/archive/${i()}.tar.gz`}function h(){const e=(0,r.ir)(),t="Next"===e.label?"master":e.label;return`${s}/tree/${t}`}function p(){return`${s}/archive/master.zip`}function u(){return`${s}/archive/master.tar.gz`}},4701:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(5329),s=n(4848);const a=function(e){let{versionString:t}=e;return(0,s.jsx)("a",{href:(0,r.ZA)(),children:t||`${(0,r.kF)()} release`})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);