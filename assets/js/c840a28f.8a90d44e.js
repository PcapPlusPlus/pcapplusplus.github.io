"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[3338],{1096:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"tutorials/capture-packets","title":"Part 3: Capture/Send Packets","description":"Introduction","source":"@site/versioned_docs/version-v24.09/tutorials/capture-packets.mdx","sourceDirName":"tutorials","slug":"/tutorials/capture-packets","permalink":"/docs/tutorials/capture-packets","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v24.09/tutorials/capture-packets.mdx","tags":[],"version":"v24.09","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Part 3: Capture/Send Packets"},"sidebar":"docs","previous":{"title":"Part 2: Read/Write Pcap Files","permalink":"/docs/tutorials/read-write-pcap"},"next":{"title":"Part 4: Packet Parsing","permalink":"/docs/tutorials/packet-parsing"}}');var c=n(4848),s=n(8453),i=n(3967);const r={sidebar_position:3,title:"Part 3: Capture/Send Packets"},o="Part 3: Capturing And Sending Packets",l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"PcapLiveDevice and WinPcapLiveDevice instances",id:"pcaplivedevice-and-winpcaplivedevice-instances",level:2},{value:"Capturing packets",id:"capturing-packets",level:2},{value:"Asynchronous packet capture using a callback function",id:"asynchronous-packet-capture-using-a-callback-function",level:3},{value:"Asynchronous packet capture using a packet list (vector)",id:"asynchronous-packet-capture-using-a-packet-list-vector",level:3},{value:"Synchronous (blocking) packet capture using a callback function",id:"synchronous-blocking-packet-capture-using-a-callback-function",level:3},{value:"Sending packets",id:"sending-packets",level:2},{value:"Filtering packets",id:"filtering-packets",level:2},{value:"Running the code",id:"running-the-code",level:2},{value:"Option 1: Install a pre-compiled version of PcapPlusPlus",id:"option-1-install-a-pre-compiled-version-of-pcapplusplus",level:3},{value:"Option 2: build the tutorials with PcapPlusPlus",id:"option-2-build-the-tutorials-with-pcapplusplus",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"part-3-capturing-and-sending-packets",children:"Part 3: Capturing And Sending Packets"})}),"\n",(0,c.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,c.jsx)(t.p,{children:"PcapPlusPlus provides simple and easy-to-use wrappers for libpcap/WinPcap APIs for capturing and sending packets over network interfaces. These wrappers pretty much sum up in the following classes:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"PcapLiveDevice"})," - wraps libpcap functionality of capturing and sending packets and also provide information and statistics on the network interface"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"WinPcapLiveDevice"})," - wraps WinPcap/Npcap functionality which is basically similar to libpcap but provides adjustments for Windows OS. This class inherits PcapLiveDevice and provides the necessary changes for Windows vs. Linux/MacOS/FreeBSD/Android"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"PcapLiveDeviceList"})," - A singleton class that creates, stores and provides access to all PcapLiveDevice or WinPcapLiveDevice instances. These instances are initialized on startup and wrap all the network interfaces installed on the machine"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"PcapRemoteDevice"})," - wraps WinPcap functionality for ",(0,c.jsx)(t.a,{href:"https://www.winpcap.org/docs/docs_412/html/group__remote.html",children:"remote packet capture"}),". As this functionality is less common and less used, it won't be covered in this tutorial. You can take a look at PcapPlusPlus documentation for a comprehensive overview and API description"]}),"\n"]}),"\n",(0,c.jsx)(t.p,{children:"In this tutorial we'll write a simple application that demonstrates how to capture and send packet over the network."}),"\n",(0,c.jsx)(t.h2,{id:"pcaplivedevice-and-winpcaplivedevice-instances",children:"PcapLiveDevice and WinPcapLiveDevice instances"}),"\n",(0,c.jsx)(t.p,{children:'Let\'s start out application with a "main" method and an include to "PcapLiveDeviceList.h". This header file contains another include to "PcapLiveDevice.h" and those 2 files contain all the APIs for capturing and sending packets:'}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'#include <iostream>\n#include <algorithm>\n#include "stdlib.h"\n#include "PcapLiveDeviceList.h"\n#include "SystemUtils.h"\n\n/**\n* main method of the application\n*/\nint main(int argc, char* argv[])\n{\n    // write your code here\n}\n'})}),"\n",(0,c.jsxs)(t.p,{children:["The next step would be to find the ",(0,c.jsx)(t.code,{children:"PcapLiveDevice"})," or ",(0,c.jsx)(t.code,{children:"WinPcapLiveDevice"})," instance which represents the network interface we'd like to use. We can use the ",(0,c.jsx)(t.code,{children:"PcapLiveDeviceList"}),' singleton for retrieving an interface by IPv4 address or by name. We\'ll use the retrieve-by-IP method (here I use IP address of "10.0.0.1". Of course you should change that to the IP address of your network interface):']}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'// IPv4 address of the interface we want to sniff\nstd::string interfaceIPAddr = "10.0.0.1";\n\n// find the interface by IP address\nauto* dev = pcpp::PcapLiveDeviceList::getInstance().getPcapLiveDeviceByIp(interfaceIPAddr);\nif (dev == nullptr)\n{\n    std::cerr << "Cannot find interface with IPv4 address of \'" << interfaceIPAddr << "\'" << std::endl;\n    return 1;\n}\n'})}),"\n",(0,c.jsxs)(t.p,{children:["Now we have an instance of ",(0,c.jsx)(t.code,{children:"PcapLiveDevice"})," or ",(0,c.jsx)(t.code,{children:"WinPcapLiveDevice"})," we can use. You may wonder who decides whether to return this type or the other and where does ",(0,c.jsx)(t.code,{children:"WinPcapLiveDevice"})," fits in. Well, ",(0,c.jsx)(t.code,{children:"WinPcapLiveDevice"})," actually inherits ",(0,c.jsx)(t.code,{children:"PcapLiveDevice"})," and the ",(0,c.jsx)(t.code,{children:"PcapLiveDeviceList"})," singleton creates the relevant type of instances according to the operating system the application is running on. So ",(0,c.jsx)(t.code,{children:"pcpp::PcapLiveDevice* dev"})," can be either of type ",(0,c.jsx)(t.code,{children:"PcapLiveDevice"})," or ",(0,c.jsx)(t.code,{children:"WinPcapLiveDevice"}),", but the API of the two is the same so we shouldn't really care."]}),"\n",(0,c.jsxs)(t.p,{children:["Before actually capturing packets let's demonstrate some more cool features this instance enables like presenting information about the network interface. There's a bunch of information PcapPlusPlus exposes on the interface. Some of it already exists in libpcap/WinPcap and is only wrapped by the ",(0,c.jsx)(t.code,{children:"PcapLiveDevice"})," class, but some of it doesn't exist in libpcap/WinPcap and is collected by querying the various OS's APIs."]}),"\n",(0,c.jsx)(t.p,{children:"The next lines of code demonstrate how to get the following information:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:'Interface name (e.g "eth0" in Linux)'}),"\n",(0,c.jsx)(t.li,{children:"Interface description (where exposed by the OS)"}),"\n",(0,c.jsx)(t.li,{children:"Interface MAC address"}),"\n",(0,c.jsx)(t.li,{children:"Interface default gateway"}),"\n",(0,c.jsx)(t.li,{children:"Interface maximum transmission unit (MTU)"}),"\n",(0,c.jsx)(t.li,{children:"The DNS server associated with this interface"}),"\n"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'// before capturing packets let\'s print some info about this interface\nstd::cout\n    << "Interface info:" << std::endl\n    << "   Interface name:        " << dev->getName() << std::endl // get interface name\n    << "   Interface description: " << dev->getDesc() << std::endl // get interface description\n    << "   MAC address:           " << dev->getMacAddress() << std::endl // get interface MAC address\n    << "   Default gateway:       " << dev->getDefaultGateway() << std::endl // get default gateway\n    << "   Interface MTU:         " << dev->getMtu() << std::endl; // get interface MTU\n\nif (!dev->getDnsServers().empty())\n{\n    std::cout << "   DNS server:            " << dev->getDnsServers().front() << std::endl;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"capturing-packets",children:"Capturing packets"}),"\n",(0,c.jsx)(t.p,{children:"Now let's move on to capturing packets. Before start capturing we must first open the device:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'// open the device before start capturing/sending packets\nif (!dev->open())\n{\n    std::cerr << "Cannot open device" << std::endl;\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(t.p,{children:"For the sake of this demo we'll create a struct that collects statistics on captured packets. It examines every packet and counts number of Ethernet, IPv4, IPv6, TCP, UDP, DNS, HTTP and SSL packets we have seen during the capture."}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'/**\n * A struct for collecting packet statistics\n */\nstruct PacketStats\n{\n    int ethPacketCount = 0;\n    int ipv4PacketCount = 0;\n    int ipv6PacketCount = 0;\n    int tcpPacketCount = 0;\n    int udpPacketCount = 0;\n    int dnsPacketCount = 0;\n    int httpPacketCount = 0;\n    int sslPacketCount = 0;\n\n\n    /**\n     * Clear all stats\n     */\n    void clear() { ethPacketCount = ipv4PacketCount = ipv6PacketCount = tcpPacketCount = udpPacketCount = dnsPacketCount = httpPacketCount = sslPacketCount = 0; }\n\n    // Constructor is optional here since the members are already initialized\n    PacketStats() = default;\n\n    /**\n     * Collect stats from a packet\n     */\n    void consumePacket(pcpp::Packet& packet)\n    {\n        if (packet.isPacketOfType(pcpp::Ethernet))\n            ethPacketCount++;\n        if (packet.isPacketOfType(pcpp::IPv4))\n            ipv4PacketCount++;\n        if (packet.isPacketOfType(pcpp::IPv6))\n            ipv6PacketCount++;\n        if (packet.isPacketOfType(pcpp::TCP))\n            tcpPacketCount++;\n        if (packet.isPacketOfType(pcpp::UDP))\n            udpPacketCount++;\n        if (packet.isPacketOfType(pcpp::DNS))\n            dnsPacketCount++;\n        if (packet.isPacketOfType(pcpp::HTTP))\n            httpPacketCount++;\n        if (packet.isPacketOfType(pcpp::SSL))\n            sslPacketCount++;\n    }\n\n    /**\n     * Print stats to console\n     */\n    void printToConsole()\n    {\n        std::cout\n            << "Ethernet packet count: " << ethPacketCount << std::endl\n            << "IPv4 packet count:     " << ipv4PacketCount << std::endl\n            << "IPv6 packet count:     " << ipv6PacketCount << std::endl\n            << "TCP packet count:      " << tcpPacketCount << std::endl\n            << "UDP packet count:      " << udpPacketCount << std::endl\n            << "DNS packet count:      " << dnsPacketCount << std::endl\n            << "HTTP packet count:     " << httpPacketCount << std::endl\n            << "SSL packet count:      " << sslPacketCount << std::endl;\n    }\n};\n'})}),"\n",(0,c.jsx)(t.p,{children:"Let's create an instance of this struct:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:"// create the stats object\nPacketStats stats;\n"})}),"\n",(0,c.jsx)(t.p,{children:"We'll demonstrate the 3 types of packet capturing options currently available in PcapPlusPlus:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"Asynchronous packet capture using a callback function"}),"\n",(0,c.jsx)(t.li,{children:"Asynchronous packet capture using a packet list (vector)"}),"\n",(0,c.jsx)(t.li,{children:"Synchronous (blocking) packet capture using a callback function"}),"\n"]}),"\n",(0,c.jsx)(t.h3,{id:"asynchronous-packet-capture-using-a-callback-function",children:"Asynchronous packet capture using a callback function"}),"\n",(0,c.jsxs)(t.p,{children:["The first way we'll demonstrate is capturing packets asynchronously, meaning the packet capture is happening on a different thread created by PcapPlusPlus. Whenever a packet is captured a callback function provided by the user is invoked, and the context where this callback is running is the packet capture thread (not the main thread). For showing that let's first create our callback function. The callback function header complies to the ",(0,c.jsx)(t.code,{children:"OnPacketArrivesCallback"}),' typedef defined in "PcapLiveDevice.h". Its parameters will be a pointer to the packet currently captured, a pointer to the interface instance doing this capture and a pointer to an object supplied by the user at the beginning of the packet capture (a cookie). Why do we need this cookie? in order to pass objects (or data) between our main code and the callback running in a static context-less environment. The cookie is a way of providing a context to our callback function. In our case this context will be an instance of the statistics collector we just defined: ',(0,c.jsx)(t.code,{children:"PacketStats"})]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:"/**\n * A callback function for the async capture which is called each time a packet is captured\n */\nstatic void onPacketArrives(pcpp::RawPacket* packet, pcpp::PcapLiveDevice* dev, void* cookie)\n{\n    // extract the stats object form the cookie\n    auto* stats = static_cast<PacketStats*>(cookie);\n\n    // parsed the raw packet\n    pcpp::Packet parsedPacket(packet);\n\n    // collect stats from packet\n    stats->consumePacket(parsedPacket);\n}\n"})}),"\n",(0,c.jsxs)(t.p,{children:["As you can see this callback is doing something pretty simple: cast the cookie as ",(0,c.jsx)(t.code,{children:"PacketStats*"}),", parse the raw packet as parsed packet, and feed it to the ",(0,c.jsx)(t.code,{children:"PacketStats"})," instance to collect information about the protocols used in this packet"]}),"\n",(0,c.jsxs)(t.p,{children:["Now let's activate the packet capture and pass it a pointer to the callback and a pointer to the ",(0,c.jsx)(t.code,{children:"PacketStats"})," instance we created:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'std::cout << std::endl << "Starting async capture..." << std::endl;\n\n// start capture in async mode. Give a callback function to call to whenever a packet is captured and the stats object as the cookie\ndev->startCapture(onPacketArrives, &stats);\n'})}),"\n",(0,c.jsxs)(t.p,{children:['Please remember the packet capture is happening in a different thread so code written from now on in our main thread will work in parallel. For the sake of this demo let\'s choose not to do anything and wait (sleep) for 10 seconds and then stop the capture. Since there is no one "sleep" method compatible for all operating systems PcapPlusPlus provides a method called ',(0,c.jsx)(t.code,{children:"pcpp::multiPlatformSleep()"}),' which runs the right "sleep" method according to the operating system the application is currently running on. For using this macro we need to add an include phrase to ',(0,c.jsx)(t.code,{children:"SystemUtils.h"})," in Common++:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'#include "SystemUtils.h"\n'})}),"\n",(0,c.jsx)(t.p,{children:"Now let's write the code that sleeps for 10 seconds and then stops the packet capture:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:"// sleep for 10 seconds in main thread, in the meantime packets are captured in the async thread\npcpp::multiPlatformSleep(10);\n\n// stop capturing packets\ndev->stopCapture();\n"})}),"\n",(0,c.jsxs)(t.p,{children:["In the meantime, while the main thread was sleeping, packets were (hopefully) captured by the packet capture thread and information was collected in the ",(0,c.jsx)(t.code,{children:"PacketStats"})," instance. So let's print the results:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'// print results\nstd::cout << "Results:" << std::endl;\nstats.printToConsole();\n'})}),"\n",(0,c.jsx)(t.p,{children:"Here is an output example I got in a specific run of this code:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-shell",children:"Starting async capture...\nResults:\nEthernet packet count: 2346\nIPv4 packet count:     2346\nIPv6 packet count:     0\nTCP packet count:      2203\nUDP packet count:      143\nDNS packet count:      0\nHTTP packet count:     87\nSSL packet count:      342\n"})}),"\n",(0,c.jsx)(t.h3,{id:"asynchronous-packet-capture-using-a-packet-list-vector",children:"Asynchronous packet capture using a packet list (vector)"}),"\n",(0,c.jsx)(t.p,{children:"Now let's see a different way to capture packet in PcapPlusPlus. Here instead of using a callback function, we'll supply PcapPlusPlus an instance of raw packet pointer list and the capture thread will fill it with pointers to captured packets. In this capturing method the capture is still asynchronous, meaning it happens on a different thread created by PcapPlusPlus, but there is no callback function involved. The advantage here is that you can use the packets that were captured in the main thread."}),"\n",(0,c.jsxs)(t.p,{children:["PcapPlusPlus provides a class for representing a list of raw packet pointers. It's called ",(0,c.jsx)(t.code,{children:"RawPacketVector"}),". This class actually wraps ",(0,c.jsx)(t.code,{children:"std::vector"})," and add some more functionality such as freeing the raw packet instances inside the list when the list memory is freed."]}),"\n",(0,c.jsxs)(t.p,{children:["So let's create an instance of ",(0,c.jsx)(t.code,{children:"RawPacketVector"})," and start the packet capture:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'std::cout << std::endl << "Starting capture with packet vector..." << std::endl;\n\n// create an empty packet vector object\npcpp::RawPacketVector packetVec;\n\n// start capturing packets. All packets will be added to the packet vector\ndev->startCapture(packetVec);\n'})}),"\n",(0,c.jsx)(t.p,{children:"As we said the packet capture happens in another thread so like in the previous example let's sleep for 10 seconds in the main thread and then stop the capture:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:"// sleep for 10 seconds in main thread, in the meantime packets are captured in the async thread\npcpp::multiPlatformSleep(10);\n\n// stop capturing packets\ndev->stopCapture();\n"})}),"\n",(0,c.jsxs)(t.p,{children:["Now the raw packet list is (hopefully) filled with packets that were captured. Let's go over all packets and feed them to our stats collector (let's first clear the stats collector from its previous run). Note this code is running on the main thread and it's an example of how to access the packets in the main thread after they were captured. For going over the packets we'll use an iterator provided in the ",(0,c.jsx)(t.code,{children:"RawPacketVector"})," class:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:"// go over the packet vector and feed all packets to the stats object\nfor (const auto& packet : packetVec)\n{\n    pcpp::Packet parsedPacket(packet);\n    stats.consumePacket(parsedPacket);\n}\n"})}),"\n",(0,c.jsx)(t.p,{children:"Now let's print the results:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'// print results\nstd::cout << "Results:" << std::endl;\nstats.printToConsole();\n'})}),"\n",(0,c.jsx)(t.p,{children:"Here is an output example I got in a specific run of this code:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-shell",children:"Starting capture with packet vector...\nResults:\nEthernet packet count: 4064\nIPv4 packet count:     4058\nIPv6 packet count:     6\nTCP packet count:      3939\nUDP packet count:      121\nDNS packet count:      0\nHTTP packet count:     127\nSSL packet count:      188\n"})}),"\n",(0,c.jsx)(t.h3,{id:"synchronous-blocking-packet-capture-using-a-callback-function",children:"Synchronous (blocking) packet capture using a callback function"}),"\n",(0,c.jsxs)(t.p,{children:["The last way we'll demonstrate to capture packets is a synchronous way where the main thread is blocked during the packet capture and released only when the user instructs or after a timeout pre-defined by the user. In this case there is no separate thread created for the packet capture and everything is happening on the main thread. This method requires a callback of type ",(0,c.jsx)(t.code,{children:"OnPacketArrivesStopBlocking"})," to be defined by the user. Let's first define this callback:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:"/**\n * a callback function for the blocking mode capture which is called each time a packet is captured\n */\nstatic bool onPacketArrivesBlockingMode(pcpp::RawPacket* packet, pcpp::PcapLiveDevice* dev, void* cookie)\n{\n    // extract the stats object from the cookie\n    auto* stats = static_cast<PacketStats*>(cookie);\n\n    // parsed the raw packet\n    pcpp::Packet parsedPacket(packet);\n\n    // collect stats from packet\n    stats->consumePacket(parsedPacket);\n\n    // return false means we don't want to stop capturing after this callback\n    return false;\n}\n"})}),"\n",(0,c.jsxs)(t.p,{children:["As you can see the callback accepts several parameters: a pointer to the packet currently captured, a pointer to the interface instance doing this capture and a pointer to an object supplied by the user at the beginning of the packet capture (a cookie). Until now everything seems similar to the ",(0,c.jsx)(t.code,{children:"OnPacketArrivesCallback"})," callback we demonstrated previously. But there is one important difference: the returning value. In ",(0,c.jsx)(t.code,{children:"OnPacketArrivesCallback"})," there is no return value but in ",(0,c.jsx)(t.code,{children:"OnPacketArrivesStopBlocking"}),' the return value is boolean. This boolean return value allows the user who writes the callback to stop the synchronous packet capture any time, by returning a "true" value. As long as the return value is "false" the packet capture will continue until the timeout expires (we\'ll get to that soon), but if "true" is returned the capture will stop immediately. In our example we choose to always return "false" but you\'re welcome to try returning "true" and see that it\'s working. Besides returning "false" the callback is doing the same as the previous callback: cast the cookie as ',(0,c.jsx)(t.code,{children:"PacketStats*"}),", parse the raw packet as parsed packet, and feed it to the ",(0,c.jsx)(t.code,{children:"PacketStats"})," instance to collect information about the protocols used in this packet"]}),"\n",(0,c.jsx)(t.p,{children:'Now let\'s start the packet capture. Here, of course, we don\'t need to sleep as everything is happening on the main thread. But we do want to stop the capture at some point (please remember we always return "false" in the callback so that won\'t stop the capturing). Here is where the timeout feature comes in hand: when starting the packet capture you can provide a timeout of when to stop the packet capture (if not previously stopped by returning "true" from the callback function). If you provide a timeout of 0 or less it\'s like saying there is no timeout and the capture will continue until a "true" value is returned from the callback. The timeout unit is in seconds'}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'std::cout << std::endl << "Starting capture in blocking mode..." << std::endl;\n\n// clear stats\nstats.clear();\n\n// start capturing in blocking mode. Give a callback function to call to whenever a packet is captured, the stats object as the cookie and a 10 seconds timeout\ndev->startCaptureBlockingMode(onPacketArrivesBlockingMode, &stats, 10);\n\n// thread is blocked until capture is finished\n\n// capture is finished, print results\nstd::cout << "Results:" << std::endl;\nstats.printToConsole();\n'})}),"\n",(0,c.jsxs)(t.p,{children:["Please notice we don't need to activate ",(0,c.jsx)(t.code,{children:"dev->stopCapture()"})," here"]}),"\n",(0,c.jsx)(t.p,{children:"Here is an output example I got in a specific run of this code:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-shell",children:"Starting capture in blocking mode...\nResults:\nEthernet packet count: 1266\nIPv4 packet count:     1263\nIPv6 packet count:     3\nTCP packet count:      1115\nUDP packet count:      147\nDNS packet count:      0\nHTTP packet count:     36\nSSL packet count:      251\n"})}),"\n",(0,c.jsx)(t.h2,{id:"sending-packets",children:"Sending packets"}),"\n",(0,c.jsxs)(t.p,{children:["Until now we saw the different methods of capturing packets. But ",(0,c.jsx)(t.code,{children:"PcapLiveDevice"})," or ",(0,c.jsx)(t.code,{children:"WinPcapLiveDevice"})," also provide APIs for sending packets to the network. The APIs are rather straight forward and enable sending one packet or multiple packets in a batch, and also enable to send raw packets (of type ",(0,c.jsx)(t.code,{children:"RawPacket"}),") or parsed packets (of type ",(0,c.jsx)(t.code,{children:"Packet"}),"). We won't go over all of the methods, we'll demonstrate some of them. The rest should be quite easy to understand."]}),"\n",(0,c.jsx)(t.p,{children:"Let's start with sending one raw packet. In this example we'll use the raw packet vector we collected from the packet capture in the previous section, iterate on it and send each packet to the network one by one. Let's look at the code first:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'std::cout << std::endl << "Sending " << packetVec.size() << " packets one by one..." << std::endl;\n\n// go over the vector of packets and send them one by one\nbool allSent = std::all_of(packetVec.begin(), packetVec.end(), [dev](pcpp::RawPacket* packet) {\n    return dev->sendPacket(*packet);\n});\n\nif (!allSent)\n{\n    std::cerr << "Couldn\'t send packet" << std::endl;\n    return 1;\n}\n\nstd::cout << packetVec.size() << " packets sent" << std::endl;\n'})}),"\n",(0,c.jsxs)(t.p,{children:["As you can see we send each packet using the ",(0,c.jsx)(t.code,{children:"dev->sendPacket()"})," method. Notice the return value is a boolean saying whether the packet was sent successfully or not."]}),"\n",(0,c.jsxs)(t.p,{children:["Now let's demonstrate sending a bunch of packets. Here we'll only demonstrate sending a raw packet list (",(0,c.jsx)(t.code,{children:"RawPacketVector"}),"). Let's see the code:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'std::cout << std::endl << "Sending " << packetVec.size() << " packets..." << std::endl;\n\n// send all packets in the vector. The returned number shows how many packets were actually sent (expected to be equal to vector size)\nint packetsSent = dev->sendPackets(packetVec);\n\nstd::cout << packetsSent << " packets sent" << std::endl;\n'})}),"\n",(0,c.jsx)(t.p,{children:"As you can see we're using the same raw packet list from the previous section. The return value is how many packets were sent successfully."}),"\n",(0,c.jsx)(t.h2,{id:"filtering-packets",children:"Filtering packets"}),"\n",(0,c.jsxs)(t.p,{children:["Now let's learn how to use the packet filtering mechanism provided by PcapPlusPlus. Basically libpcap and WinPcap/Npcap support the ",(0,c.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Berkeley_Packet_Filter",children:"BPF (Berkeley Packet Filter)"})," format for setting a filter on an interface. When setting a filter only packets that match the filter will be passed to the user, all the other packets will be ignored by the capturing mechanism. The BPF format is great and widely used but for my opinion is too complicated and not easy to understand. In addition it's a string-based format and I don't know any C++ API that wraps it in an organized C++ class structure. That's why I developed one, quite simple and not covering all of the BPF options, but is sufficient for most use-cases (I think). In this section we'll learn how to use it and give a small example (the rest can be read in PcapPlusPlus API documentation)"]}),"\n",(0,c.jsxs)(t.p,{children:["As already mentioned, the filtering mechanism is actually an hierarchy of classes representing different kinds of filters, for example: IPv4 filters (",(0,c.jsx)(t.code,{children:"IPFilter"}),"), TCP/UDP Port filters (",(0,c.jsx)(t.code,{children:"PortFilter"}),"), MAC address filters (",(0,c.jsx)(t.code,{children:"MacAddressFilter"}),"), VLAN filters (",(0,c.jsx)(t.code,{children:"VlanFilter"}),"), protocol filter (",(0,c.jsx)(t.code,{children:"ProtoFilter"}),'), etc. but also composite operators like "and" (',(0,c.jsx)(t.code,{children:"AndFilter"}),'), "or" (',(0,c.jsx)(t.code,{children:"OrFilter"}),') and "not" (',(0,c.jsx)(t.code,{children:"NotFilter"}),"). The root class for all of them is ",(0,c.jsx)(t.code,{children:"GeneralFilter"}),". Each class exposes a simple API (usually in the constructor) for setting the filter values. For example: in IPv4 filter (",(0,c.jsx)(t.code,{children:"IPFilter"}),") the user should provide in the constructor what is the IPv4 address to set as a filter and also in which direction to look for this address (source address, destination address or both):"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:"IPFilter(const std::string& ipAddress, Direction dir)\n"})}),"\n",(0,c.jsxs)(t.p,{children:["We'll not go over all the filter classes but we'll do a quick demonstration of how to construct a complex filter and set it to a ",(0,c.jsx)(t.code,{children:"PcapLiveDevice"})," instance. Filters can be also applied to other devices that support it such as pcap and pcap-ng files (",(0,c.jsx)(t.code,{children:"PcapFileReaderDevice"})," and ",(0,c.jsx)(t.code,{children:"PcapNgFileReaderDevice"}),")."]}),"\n",(0,c.jsx)(t.p,{children:"Let's start with building the filter. The filter we'd like to build is: \"capture only TCP packets which their source or destination port is 80\" (which are basically HTTP packets). Let's see the code for doing that:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:"// create a filter instance to capture only traffic on port 80\npcpp::PortFilter portFilter(80, pcpp::SRC_OR_DST);\n\n// create a filter instance to capture only TCP traffic\npcpp::ProtoFilter protocolFilter(pcpp::TCP);\n\n// create an AND filter to combine both filters - capture only TCP traffic on port 80\npcpp::AndFilter andFilter;\nandFilter.addFilter(&portFilter);\nandFilter.addFilter(&protocolFilter);\n"})}),"\n",(0,c.jsx)(t.p,{children:"As you can see we created 3 filter instances:"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"PortFilter"})," - in the constructor we gave it the port we'd like to filter on (80) and instructed it to search on both source and destnation port of each packet"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"ProtoFilter"})," - in the constructor we told it to filter only TCP packets"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:"AndFilter"})," - this filter is to combine the port and protocol filters. So we created it and provided it pointers to the port and protocol filters we previously created"]}),"\n"]}),"\n",(0,c.jsxs)(t.p,{children:["That's it, our filter is ready. Now let's set this filter in the ",(0,c.jsx)(t.code,{children:"PcapLiveDevice"})," we have from the previous sections:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:"// set the filter on the device\ndev->setFilter(andFilter);\n"})}),"\n",(0,c.jsx)(t.p,{children:"Now let's write some code to capture packets from the network and print the results (we use the same asynchronous capturing using a callback function method learnt in the previous sections):"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-cpp",children:'std::cout << std::endl << "Starting packet capture with a filter in place..." << std::endl;\n\n// start capture in async mode. Give a callback function to call to whenever a packet is captured and the stats object as the cookie\ndev->startCapture(onPacketArrives, &stats);\n\n// sleep for 10 seconds in main thread, in the meantime packets are captured in the async thread\npcpp::multiPlatformSleep(10);\n\n// stop capturing packets\ndev->stopCapture();\n\n// print results - should capture only packets which match the filter (which is TCP port 80)\nstd::cout << "Results:" << std::endl;\nstats.printToConsole();\n'})}),"\n",(0,c.jsx)(t.p,{children:"Here is an output example I got after running this code:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-shell",children:"Starting packet capture with a filter in place...\nResults:\nEthernet packet count: 703\nIPv4 packet count:     703\nIPv6 packet count:     0\nTCP packet count:      703\nUDP packet count:      0\nDNS packet count:      0\nHTTP packet count:     58\nSSL packet count:      0\n"})}),"\n",(0,c.jsx)(t.p,{children:"As you can see the filter worked as there are no UDP, SSL or DNS packets, although I made sure there was UDP/DNS/SSL traffic running on my machine at the time of the capture. It was simply filtered by the capturing device"}),"\n",(0,c.jsx)(t.h2,{id:"running-the-code",children:"Running the code"}),"\n","\n",(0,c.jsxs)(t.p,{children:["All code that was covered in this tutorial can be found ",(0,c.jsx)(i.A,{relativePath:"/Examples/Tutorials/Tutorial-LiveTraffic",children:"here"}),". In order to compile and run the code please choose one of these options:"]}),"\n",(0,c.jsx)(t.h3,{id:"option-1-install-a-pre-compiled-version-of-pcapplusplus",children:"Option 1: Install a pre-compiled version of PcapPlusPlus"}),"\n",(0,c.jsxs)(t.p,{children:["You can download and install PcapPlusPlus using one of the options mentioned in the ",(0,c.jsx)(t.a,{href:"../install",children:"installation page"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["Once installed, download all of the files in the ",(0,c.jsx)(i.A,{relativePath:"/Examples/Tutorials/Tutorial-LiveTraffic",children:"tutorial folder"})," and run CMake:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-shell",children:"cmake -S . -B build\ncmake --build build\n"})}),"\n",(0,c.jsx)(t.p,{children:"The executable will be created in the same directory."}),"\n",(0,c.jsx)(t.admonition,{title:"Notes:",type:"tip",children:(0,c.jsxs)(t.ol,{children:["\n",(0,c.jsxs)(t.li,{children:["If you're running on Windows with MinGW you need to run cmake with ",(0,c.jsx)(t.code,{children:'-G "MinGW Makefiles"'})]}),"\n",(0,c.jsxs)(t.li,{children:["If PcapPlusPlus is ",(0,c.jsx)(t.strong,{children:"NOT"})," installed in the default directory you may need to specify ",(0,c.jsx)(t.code,{children:"CMAKE_LIBRARY_PATH"}),", for example:","\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-shell",children:"CMAKE_LIBRARY_PATH=/my/pcapplusplus/path cmake -S . -B build\n"})}),"\n","Or on Windows:","\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-shell",children:"set CMAKE_LIBRARY_PATH=C:\\my\\pcapplusplus\\path\ncmake -S . -B build\n"})}),"\n"]}),"\n",(0,c.jsxs)(t.li,{children:["On Windows you may also need to specify Npcap/WinPcap path in ",(0,c.jsx)(t.code,{children:"CMAKE_LIBRARY_PATH"}),", for example:","\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-shell",children:"set CMAKE_LIBRARY_PATH=C:\\my\\pcapplusplus\\path;C:\\my\\npcap\\path\ncmake -S . -B build\n"})}),"\n"]}),"\n"]})}),"\n",(0,c.jsx)(t.h3,{id:"option-2-build-the-tutorials-with-pcapplusplus",children:"Option 2: build the tutorials with PcapPlusPlus"}),"\n",(0,c.jsxs)(t.p,{children:["If you're building PcapPlusPlus from source and would like to build the tutorials as well you can use the ",(0,c.jsx)(t.code,{children:"-DPCAPPP_BUILD_TUTORIALS=ON"})," option.\nPlease refer to the ",(0,c.jsx)(t.a,{href:"../install#build-from-source",children:"build from source page"})," for more details (choose your platform page)."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},3967:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(5329),c=n(4848);const s=function(e){let{relativePath:t,children:n}=e;return(0,c.jsx)("a",{href:(0,a.t_)()+t,children:n})}},5329:(e,t,n)=>{n.d(t,{ZA:()=>o,iI:()=>p,i_:()=>l,jA:()=>h,k9:()=>s,kF:()=>i,l:()=>r,t_:()=>d,zk:()=>u});var a=n(4070);const c="https://github.com/seladb/PcapPlusPlus";function s(){return c}function i(){const e=(0,a.r7)(),t=(0,a.ir)();return"Next"===t.label?e.label:t.label}function r(e){return`${c}/releases/tag/${e}`}function o(){return r(i())}function l(){return`${c}/archive/${i()}.zip`}function p(){return`${c}/archive/${i()}.tar.gz`}function d(){const e=(0,a.ir)(),t="Next"===e.label?"master":e.label;return`${c}/tree/${t}`}function h(){return`${c}/archive/master.zip`}function u(){return`${c}/archive/master.tar.gz`}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var a=n(6540);const c={},s=a.createContext(c);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);