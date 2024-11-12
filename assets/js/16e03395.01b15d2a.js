"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[6269],{6545:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"tutorials/intro","title":"Part 1: Introduction And Basics","description":"Library structure","source":"@site/versioned_docs/version-v22.05/tutorials/intro.mdx","sourceDirName":"tutorials","slug":"/tutorials/intro","permalink":"/docs/v22.05/tutorials/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.05/tutorials/intro.mdx","tags":[],"version":"v22.05","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docs","previous":{"title":"Tutorials","permalink":"/docs/v22.05/tutorials"},"next":{"title":"Part 2: Read/Write Pcap Files","permalink":"/docs/v22.05/tutorials/read-write-pcap"}}');var i=s(4848),t=s(8453),r=s(4701),l=s(3967);const c={sidebar_position:1},o="Part 1: Introduction And Basics",d={},p=[{value:"Library structure",id:"library-structure",level:2},{value:"Packet++",id:"packet",level:3},{value:"Pcap++",id:"pcap",level:3},{value:"Common++",id:"common",level:3},{value:"Packets and Layers",id:"packets-and-layers",level:2},{value:"Raw packets vs. Parsed packets",id:"raw-packets-vs-parsed-packets",level:3},{value:"Layers",id:"layers",level:3},{value:"Packet and Layers schematic structure",id:"packet-and-layers-schematic-structure",level:3},{value:"Packet capture engines",id:"packet-capture-engines",level:2},{value:"Writing a simple app including a makefile",id:"writing-a-simple-app-including-a-makefile",level:2},{value:"Windows Makefile",id:"windows-makefile",level:3},{value:"Linux, MacOS, FreeBSD Makefile",id:"linux-macos-freebsd-makefile",level:3},{value:"Writing a simple app in Visual Studio",id:"writing-a-simple-app-in-visual-studio",level:2},{value:"Running the example",id:"running-the-example",level:2}];function h(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"part-1-introduction-and-basics",children:"Part 1: Introduction And Basics"})}),"\n",(0,i.jsx)(a.h2,{id:"library-structure",children:"Library structure"}),"\n",(0,i.jsx)(a.p,{children:"As you could probably already notice, PcapPlusPlus is built of 3 libraries: Common++, Packet++ and Pcap++. Let's describes the purposes of each one and its main classes:"}),"\n",(0,i.jsx)(a.h3,{id:"packet",children:"Packet++"}),"\n",(0,i.jsxs)(a.p,{children:["A library for parsing, creating and editing packets of various ",(0,i.jsx)(a.a,{href:"../features#supported-network-protocols",children:"supported protocols"}),". This library can be used stand-alone and doesn't depend on Pcap++, libpcap/WinPcap/Npcap, etc. Main classes and utilities:"]}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"RawPacket"})," - representing the raw data captured from the network"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"Layer"})," - the base class for all protocol layers. Each protocol layer is in-charge of parsing the specific bytes in the packet that belong to this protocol"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"Packet"})," - representing a packet that was parsed by the different PcapPlusPlus protocol parsers and contains the different protocol layers"]}),"\n",(0,i.jsxs)(a.li,{children:["Protocol layers (for example: ",(0,i.jsx)(a.code,{children:"EthLayer, IPv4Layer, IPv6Layer, TcpLayer, UdpLayer, DnsLayer, HttpRequestLayer, HttpResponseLayer, PayloadLayer"}),", etc.) - classes representing specific protocol parsers. All inherit the ",(0,i.jsx)(a.code,{children:"Layer"})," class"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"PacketUtils"})," - a class containing several widely used utilities such as calculating a hash value based on 5-tuple or 2-tuple"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"TcpReassembly"})," - a class for providing TCP reassembly (a.k.a TCP reconstruction) of TCP streams"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"IPv4Reassembly"})," - a class for providing IPv4 reassembly (a.k.a IPv4 de-fragmentation) of IPv4 packets"]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"pcap",children:"Pcap++"}),"\n",(0,i.jsx)(a.p,{children:"A library for intercepting and sending packets, providing network and NIC info, stats, etc. This library is mostly a C++ wrapper for packet capturing engines such as libpcap, WinPcap, Npcap, DPDK and PF_RING, but also provide some unique features and capabilities that doesn't exist in any of these engines. Main classes and utilities:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"PcapLiveDevice"})," - representing a Linux/MacOS/FreeBSD network interface and enables capturing and sending packets as well as retrieving interface information. Also available for rooted Android devices"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"WinPcapLiveDevice"})," - representing a Windows network interface and contains all functionality exposed in ",(0,i.jsx)(a.code,{children:"PcapLiveDevice"}),". This class actually inherits ",(0,i.jsx)(a.code,{children:"PcapLiveDevice"})," and does the relevant adjustments for WinPcap/Npcap and Windows OS"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"DpdkDevice"})," - representing a DPDK-enabled network interface and wraps DPDK basic functionality for capturing and sending packets as well as retrieving interface information"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"PfRingDevice"})," - representing PF_RING-enabled network interface and wraps PF_RING functionality for capturing and sending packets as well as retrieving interface information"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"PcapRemoteDevice"})," - representing a network interface on a remote machine and enables to capture and send packets on this interface using the rpcap protocol. This class actually wraps ",(0,i.jsx)(a.a,{href:"https://www.winpcap.org/docs/docs_412/html/group__remote.html",children:"WinPcap's Remote Capture"})," capabilities and so available only on Windows"]}),"\n",(0,i.jsxs)(a.li,{children:["pcap and pcap-ng file readers and writers (",(0,i.jsx)(a.code,{children:"PcapFileReaderDevice, PcapFileWriterDevice, PcapNgFileReaderDevice, PcapNgFileWriterDevice, IFileReaderDevice, IFileWriterDevice"}),")"]}),"\n",(0,i.jsxs)(a.li,{children:["Packet filtering engine - a C++ API for the ",(0,i.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Berkeley_Packet_Filter",children:"BPF (Berkeley Packet Filter)"})," format for easy-to-use packet filtering from a network interface or pcap/pcap-ng file"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"NetworkUtils"})," - a class containing common and basic actions requiring network interaction such as discovery of a remote machine MAC address by sending ARP requests, discovery of IPv4 address from a host-name (by sending DNS requests), and so on"]}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"common",children:"Common++"}),"\n",(0,i.jsx)(a.p,{children:"A library containing common code utilities and classes used by both Packet++ and Pcap++. Main classes and utilities:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"IPv4Address, IPv6Address"})," - classes representing IPv4 and IPv6 addresses accordingly"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"MacAddress"})," - a class representing a MAC (Ethernet) address"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"IpUtils.h"})," - all kinds of helpful network utilities"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"LoggerPP"})," - a simple logging infrastructure used widely in PcapPlusPlus"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"SystemUtils.h"})," - several useful utilities for interaction with the operating system"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"packets-and-layers",children:"Packets and Layers"}),"\n",(0,i.jsx)(a.p,{children:"Parsing and crafting of packets is one of the fundamentals of PcapPlusPlus and the heart of the Packet++ library. We'll dive deep into it later, but first let's understand the basic structures as everything else is built on that."}),"\n",(0,i.jsx)(a.h3,{id:"raw-packets-vs-parsed-packets",children:"Raw packets vs. Parsed packets"}),"\n",(0,i.jsxs)(a.p,{children:["There are 2 types of packets in PcapPlusPlus: ",(0,i.jsx)(a.strong,{children:"raw packets"})," and ",(0,i.jsx)(a.strong,{children:"parsed packets"}),". A raw packet is the raw byte-stream that was captured from the network together with the timestamp it was captured on. A raw packet doesn't contain any data about the protocols it's built from and of course protocol data can't be added, removed or edited. On the other hand, parsed packets are packets that contain all protocol data and can be edited per protocol. This reveals one of the core functionalities of PcapPlusPlus: taking raw packets that were captured from the network and create parsed packets out of them, meaning identifying their protocols, saving meta data about these protocols, and allowing the user easy access to all of this parsed data for both reading and writing (edit, add data and remove data)."]}),"\n",(0,i.jsx)(a.h3,{id:"layers",children:"Layers"}),"\n",(0,i.jsxs)(a.p,{children:["A layer in PcapPlusPlus means protocol layer. Parsed packets contain layers, each one represents a protocol the packet is built from. For example: an HTTP packet may contain an Ethernet layer, an IPv4 (or IPv6) layer, a TCP layer and an HTTP layer. Each supported protocol is represented by a corresponding layer class. A layer class exposes the protocol's data for the user to read and usually also to write or modify. For example: A TCP layer exposes all TCP fields like ports, flags, sequence numbers, TCP options, etc. and also allows editing of all of those fields and also adding/removing/editing TCP options. Layers inside a parsed packet are ordered in a link list so the parsed packet actually points only to the first (lowest) layer (for example: Ethernet), this layer points to the next layer (for example: IPv4), and so on. A list of all supported protocols (and layers) can be found ",(0,i.jsx)(a.a,{href:"../features#supported-network-protocols",children:"here"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"packet-and-layers-schematic-structure",children:"Packet and Layers schematic structure"}),"\n",(0,i.jsx)(a.p,{children:"In the following diagram you can see the relations between RawPackets, (parsed) Packets and Layers:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Packets and Layers",src:s(1988).A+"",width:"1279",height:"426"})}),"\n",(0,i.jsx)(a.p,{children:"As can be seen in this diagram, a Packet (= parsed packet) holds a pointer to the RawPacket object and to the first (lowest) Layer. Each Layer has pointers to the next layer and to the previous one."}),"\n",(0,i.jsx)(a.p,{children:"It may be implied from this structure that the actual packet data (the raw byte stream) is duplicated between the raw packet and the various layers. This is not the case. We don't want to duplicate the data from various reasons:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"We don't want the packet object to take up too much memory"}),"\n",(0,i.jsx)(a.li,{children:"We would like the avoid unnecessary data coping because it's expensive"}),"\n",(0,i.jsx)(a.li,{children:"Since each layer can be edited, we would like the edited data to be written directly to the byte stream and not copied from one place to another"}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"So the raw byte stream is actually stored once, in the RawPacket object. The various layers only point to the relevant place where their data begins. Here is a diagram to visualize it:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Layers and Raw Data",src:s(5381).A+"",width:"1297",height:"724"})}),"\n",(0,i.jsx)(a.p,{children:"As you can see in this diagram, each layer points to the place in the raw data where its data starts. In this example: Ethernet Layer points to the beginning of the raw data because it is the first layer, so it actually sees all the raw data. On the other hand, IPv4 Layer points to the place where IPv4 data begins so it doesn't see the Ethernet data. UDP Layer points to the place where UDP data starts so it doesn't see the Ethernet and IPv4 data, and so on."}),"\n",(0,i.jsx)(a.p,{children:'All of these structures and pointers are built by PcapPlusPlus packet parsing engine residing in the Packet class. When a Packet object is created it is given a RawPacket object (which is created by the capturing engine) and the parsing process begins by understanding which protocols the packet is built of and creating the relevant Layer objects. Another option is to create an "empty" Packet object which doesn\'t contain any raw data and start building the layers ourselves. In that case a RawPacket object will be created and gradually built.'}),"\n",(0,i.jsx)(a.h2,{id:"packet-capture-engines",children:"Packet capture engines"}),"\n",(0,i.jsx)(a.p,{children:"Capturing and sending packets is another fundamental principal in PcapPlusPlus and is the heart of the Pcap++ library. The idea is to provide a simple, easy-to-use and as similar as possible interface to capture and send packets from different types of packet capture engines. Different types can be files (pcap/pcap-ng), network interfaces via libpcap/WinPcap/Npcap, DPDK-enabled interfaces, PF_RING-enabled interfaces, etc. This is not always easy because the APIs and work-flows of the different engines is sometimes very different from one another and it's difficult to keep one flow who suits them all. Also, many of the engine have specific OS and platform requirements, and this is also a challenge. The engine families currently supported are:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Files (pcap and pcap-ng)"}),"\n",(0,i.jsx)(a.li,{children:"Network interfaces using libpcap or WinPcap/Npcap"}),"\n",(0,i.jsx)(a.li,{children:"DPDK-enabled interfaces"}),"\n",(0,i.jsx)(a.li,{children:"PF_RING-enabled interfaces"}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://www.winpcap.org/docs/docs_412/html/group__remote.html",children:"Remote packet capture"})}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:['Each packet capture engine is represented in PcapPlusPlus in a class called "Device". All devices inherit from a common abstract parent class called ',(0,i.jsx)(a.code,{children:"IPcapDevice"})," which contains a few capabilities that are common for most devices such as opening/closing the device, gathering packet statistics, setting a filter, etc. The rest is implemented in each class."]}),"\n",(0,i.jsx)(a.p,{children:"The next parts of the tutorial will dive deep into the various device types and explain how to use them."}),"\n",(0,i.jsx)(a.h2,{id:"writing-a-simple-app-including-a-makefile",children:"Writing a simple app including a makefile"}),"\n","\n",(0,i.jsx)(a.p,{children:"Creating applications using PcapPlusPlus is rather easy. Let's have a guided tour demonstrating how to create a simple application and its Makefile or Visual Studio project."}),"\n",(0,i.jsxs)(a.p,{children:["First let's make sure PcapPlusPlus is configured and built successfully. Please follow ",(0,i.jsx)(a.a,{href:"../install",children:"the download page"})," for building instructions."]}),"\n",(0,i.jsxs)(a.p,{children:["Another option is to download a pre-compiled version of PcapPlusPlus, please download the ",(0,i.jsx)(r.A,{versionString:"latest release"})," for your platform and follow the instructions on how to configure it."]}),"\n",(0,i.jsxs)(a.p,{children:["Now all we need is under the ",(0,i.jsx)(a.code,{children:"Dist/"})," directory. We can find the PcapPlusPlus libraries, header files under ",(0,i.jsx)(a.code,{children:"Dist/header"}),", compiled examples under ",(0,i.jsx)(a.code,{children:"Dist/examples"})," and helpful makefiles we'll going to use under ",(0,i.jsx)(a.code,{children:"Dist/mk"})]}),"\n",(0,i.jsxs)(a.p,{children:["So let's write some code and put it in ",(0,i.jsx)(a.code,{children:"main.cpp"}),":"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-cpp",children:'#include <iostream>\n#include <IPv4Layer.h>\n#include <Packet.h>\n#include <PcapFileDevice.h>\n\nint main(int argc, char* argv[])\n{\n    // open a pcap file for reading\n    pcpp::PcapFileReaderDevice reader("1_packet.pcap");\n    if (!reader.open())\n    {\n        std::cerr << "Error opening the pcap file" << std::endl;\n        return 1;\n    }\n\n    // read the first (and only) packet from the file\n    pcpp::RawPacket rawPacket;\n    if (!reader.getNextPacket(rawPacket))\n    {\n        std::cerr << "Couldn\'t read the first packet in the file" << std::endl;\n        return 1;\n    }\n\n    // parse the raw packet into a parsed packet\n    pcpp::Packet parsedPacket(&rawPacket);\n\n    // verify the packet is IPv4\n    if (parsedPacket.isPacketOfType(pcpp::IPv4))\n    {\n        // extract source and dest IPs\n        pcpp::IPv4Address srcIP = parsedPacket.getLayerOfType<pcpp::IPv4Layer>()->getSrcIPv4Address();\n        pcpp::IPv4Address destIP = parsedPacket.getLayerOfType<pcpp::IPv4Layer>()->getDstIPv4Address();\n\n        // print source and dest IPs\n        std::cout\n          << "Source IP is \'" << srcIP << "\'; "\n          << "Dest IP is \'" << destIP << "\'"\n          << std::endl;\n    }\n\n    // close the file\n    reader.close();\n\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(a.p,{children:"This code does the following:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:'Opens a pcap file ("1_packet.pcap") containing only 1 packet'}),"\n",(0,i.jsx)(a.li,{children:"Reads the packet"}),"\n",(0,i.jsxs)(a.li,{children:["Parses the packet (converting it from ",(0,i.jsx)(a.code,{children:"RawPacket"})," to ",(0,i.jsx)(a.code,{children:"Packet"}),")"]}),"\n",(0,i.jsx)(a.li,{children:"Extracts the IPv4 layer"}),"\n",(0,i.jsx)(a.li,{children:"Reads the source and destination IPs and prints them to console"}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["This code is rather simple. Now let's see how to write a ",(0,i.jsx)(a.code,{children:"Makefile"})," so this app compiles successfully:"]}),"\n",(0,i.jsx)(a.h3,{id:"windows-makefile",children:"Windows Makefile"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-makefile",children:"include ../../../Dist/mk/PcapPlusPlus.mk\n\n# All Target\nall:\n    g++.exe $(PCAPPP_INCLUDES) -c -o main.o main.cpp\n    g++.exe $(PCAPPP_LIBS_DIR) -static-libgcc -static-libstdc++ -o Tutorial-LiveTraffic.exe main.o $(PCAPPP_LIBS)\n\n# Clean Target\nclean:\n    del main.o\n    del Tutorial-LiveTraffic.exe\n"})}),"\n",(0,i.jsx)(a.h3,{id:"linux-macos-freebsd-makefile",children:"Linux, MacOS, FreeBSD Makefile"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-makefile",children:"include /usr/local/etc/PcapPlusPlus.mk\n\n# All Target\nall:\n    g++ $(PCAPPP_INCLUDES) -c -o main.o main.cpp\n    g++ $(PCAPPP_LIBS_DIR) -static-libstdc++ -o Tutorial-HelloWorld main.o $(PCAPPP_LIBS)\n\n# Clean Target\nclean:\n    rm main.o\n    rm Tutorial-HelloWorld\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Now let's explore the ",(0,i.jsx)(a.code,{children:"PcapPlusPlus.mk"})," makefile - it contains variables that encapsulate all we need in order to compile your application with PcapPlusPlus:"]}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"PCAPPP_INCLUDES"})," - all the include files that are needed for compilation"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"PCAPPP_LIBS_DIR"})," - the location of all external libraries needed for compiling and linking with PcapPlusPlus"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"PCAPPP_LIBS"})," - all external libraries needed for compiling and linking with PcapPlusPlus"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.code,{children:"PCAPPLUSPLUS_HOME"})," - PcapPlusPlus home directory"]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["As you can see we used most of these variables in the Makefiles we created. The only flags we added are for static linking: ",(0,i.jsx)(a.code,{children:"-static-libstdc++"})," for non-Windows and ",(0,i.jsx)(a.code,{children:"-static-libgcc -static-libstdc++"})," for Windows (MinGW / MinGW-w64)."]}),"\n",(0,i.jsx)(a.p,{children:"Now that we have the code and the Makefile let's compile and run the code. Here is the output:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-shell",children:"Source IP is '10.0.0.138'; Dest IP is '10.0.0.1'\n"})}),"\n",(0,i.jsx)(a.h2,{id:"writing-a-simple-app-in-visual-studio",children:"Writing a simple app in Visual Studio"}),"\n",(0,i.jsxs)(a.p,{children:["So far we demonstrated how to compile using GNU compilers (",(0,i.jsx)(a.code,{children:"g++"}),"). Now let's explore how to do it in Visual Studio. We'll use the same code we wrote in the previous section and see how to build it using Visual Studio."]}),"\n",(0,i.jsxs)(a.p,{children:["There are Visual Studio solution + VC projects for all tutorials under the ",(0,i.jsx)(a.code,{children:"mk\\[vs_version]"})," directory. ",(0,i.jsx)(a.code,{children:"[vs_version]"})," is the Visual Studio version you choose to work with out of the ",(0,i.jsx)(a.a,{href:"../platforms#-windows",children:"supported Visual Studio versions"})," and is determined while running PcapPlusPlus configuration script. I strongly advise to use them as a template for your Visual Studio projects. Let's examine the ",(0,i.jsx)(a.strong,{children:"Tutorial-HelloWorld.vcxproj"})," VC project:"]}),"\n",(0,i.jsxs)(a.p,{children:["First of all let's take a look at the ",(0,i.jsx)(a.strong,{children:"Property Manager"}),":"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Property Manager",src:s(2685).A+"",width:"376",height:"665"})}),"\n",(0,i.jsxs)(a.p,{children:["You can see that we added a PcapPlusPlus property sheet file: ",(0,i.jsx)(a.strong,{children:"PcapPlusPlusPropertySheet.props"}),". This file contains paths to the PcapPlusPlus libraries and other external libraries PcapPlusPlus is using. This file is generated automatically when you run the PcapPlusPlus Visual Studio configuration file: ",(0,i.jsx)(a.strong,{children:"configure-windows-visual-studio.bat"})," and resides under ",(0,i.jsx)(a.code,{children:"mk\\[vs_version]"})," folder. Let's see the content of this file in my PC:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">\n  <ImportGroup Label="PropertySheets" />\n  <PropertyGroup Label="UserMacros">\n    <PcapPlusPlusHome>D:\\PcapPlusPlus</PcapPlusPlusHome>\n    <PcapSdkHome>D:\\WpdPack</PcapSdkHome>\n    <PThreadWin32Home>D:\\pthread-win32</PThreadWin32Home>\n  </PropertyGroup>\n  <PropertyGroup />\n  <ItemDefinitionGroup />\n  <ItemGroup />\n</Project>\n'})}),"\n",(0,i.jsx)(a.p,{children:"Now let's examine the project configuration changes:"}),"\n",(0,i.jsx)(a.p,{children:"First, we added the relevant include directories:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Visual Studio Includes",src:s(2781).A+"",width:"821",height:"728"})}),"\n",(0,i.jsx)(a.p,{children:"Also, we added the directories of PcapPlusPlus libraries and the external libraries PcapPlusPlus is using:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Visual Studio Libs Dir",src:s(1985).A+"",width:"824",height:"772"})}),"\n",(0,i.jsx)(a.p,{children:"Also, we added the PcapPlusPlus libraries and the external libraries PcapPlusPlus is using:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Visual Studio Libs",src:s(4686).A+"",width:"824",height:"708"})}),"\n",(0,i.jsxs)(a.p,{children:["Another small configuration change is to instruct the compiler ",(0,i.jsx)(a.strong,{children:"Not Using Precompiled Headers"}),":"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Visual Studio Precompiled Headers",src:s(6570).A+"",width:"821",height:"595"})}),"\n",(0,i.jsxs)(a.p,{children:["Last thing is to add a post-build event to copy ",(0,i.jsx)(a.strong,{children:"pthreadVC2.dll"})," file from the pthread-win32 directory to our output directory:"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Visual Studio Post Build Events",src:s(301).A+"",width:"971",height:"699"})}),"\n",(0,i.jsx)(a.p,{children:"That's it! The project will now build successfully! Again, I strongly advise to use this tutorial project as a template for your Visual Studio projects, it's always easier that way (but that's my opinion)"}),"\n",(0,i.jsx)(a.h2,{id:"running-the-example",children:"Running the example"}),"\n","\n",(0,i.jsxs)(a.p,{children:["All code that was covered in this tutorial can be found ",(0,i.jsx)(l.A,{relativePath:"/Examples/Tutorials/Tutorial-HelloWorld",children:"here"}),". In order to compile and run the code please first download and compile PcapPlusPlus code or downloaded a pre-compiled version from the ",(0,i.jsx)(r.A,{}),". Then follow these instruction, according to your platform:"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["Linux, MacOS, FreeBSD - make sure PcapPlusPlus is installed (by running ",(0,i.jsx)(a.strong,{children:"sudo make install"})," in PcapPlusPlus main directory). Then either change the ",(0,i.jsx)(a.code,{children:"Makefile.non_windows"})," file name to ",(0,i.jsx)(a.code,{children:"Makefile"})," and run ",(0,i.jsx)(a.code,{children:"make all"}),", or run ",(0,i.jsx)(a.code,{children:"make -f Makefile.non_windows all"})]}),"\n",(0,i.jsxs)(a.li,{children:["Windows using MinGW or MinGW-w64 - either change the ",(0,i.jsx)(a.code,{children:"Makefile.windows"})," file name to ",(0,i.jsx)(a.code,{children:"Makefile"})," and run ",(0,i.jsx)(a.code,{children:"make all"}),", or run ",(0,i.jsx)(a.code,{children:"make -f Makefile.windows all"})]}),"\n",(0,i.jsxs)(a.li,{children:["Windows using Visual Studio - there is a Visual Studio solution containing all tutorials: ",(0,i.jsx)(a.code,{children:"mk\\[vs_version]\\Tutorials.sln"}),". Just open it and compile all tutorials"]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["In all options the compiled executable will be inside the tutorial directory (",(0,i.jsx)(a.code,{children:"[PcapPlusPlus Folder]/Examples/Tutorials/Tutorial-HelloWorld"}),")"]})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3967:(e,a,s)=>{s.d(a,{A:()=>t});s(6540);var n=s(5329),i=s(4848);const t=function(e){let{relativePath:a,children:s}=e;return(0,i.jsx)("a",{href:(0,n.t_)()+a,children:s})}},5329:(e,a,s)=>{s.d(a,{ZA:()=>c,iI:()=>d,i_:()=>o,jA:()=>h,k9:()=>t,kF:()=>r,l:()=>l,t_:()=>p,zk:()=>u});var n=s(4070);const i="https://github.com/seladb/PcapPlusPlus";function t(){return i}function r(){const e=(0,n.r7)(),a=(0,n.ir)();return"Next"===a.label?e.label:a.label}function l(e){return`${i}/releases/tag/${e}`}function c(){return l(r())}function o(){return`${i}/archive/${r()}.zip`}function d(){return`${i}/archive/${r()}.tar.gz`}function p(){const e=(0,n.ir)(),a="Next"===e.label?"master":e.label;return`${i}/tree/${a}`}function h(){return`${i}/archive/master.zip`}function u(){return`${i}/archive/master.tar.gz`}},4701:(e,a,s)=>{s.d(a,{A:()=>t});s(6540);var n=s(5329),i=s(4848);const t=function(e){let{versionString:a}=e;return(0,i.jsx)("a",{href:(0,n.ZA)(),children:a||`${(0,n.kF)()} release`})}},5381:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/LayersAndRawData-3a213dff5741ad9da3e77b633f386598.PNG"},1988:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/PacketsAndLayers-f62731c335d72461fa99f4167efd45f7.PNG"},2685:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/PropertyManager-1f725170073df8540a1fa3eb0d5e2543.PNG"},2781:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/VS_Includes-7807aa18d275cdafdaee470683c1a692.PNG"},4686:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/VS_Libs-14f68d5e4d9cfe8d185ca1f02abdc9e3.PNG"},1985:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/VS_LibsDir-1201013a638adb47b3412985ca226b05.PNG"},301:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/VS_PostBuildEvents-4ecdf3e394c81bbb1777730424a491d6.PNG"},6570:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/VS_PrecompiledHeaders-9942a4d162687c8c8dad60dbaabd44c1.PNG"},8453:(e,a,s)=>{s.d(a,{R:()=>r,x:()=>l});var n=s(6540);const i={},t=n.createContext(i);function r(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);