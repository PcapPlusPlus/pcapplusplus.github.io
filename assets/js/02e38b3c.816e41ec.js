"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[5225],{1099:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tutorials/packet-crafting","title":"Part 5: Packet Crafting","description":"Introduction","source":"@site/versioned_docs/version-v22.11/tutorials/packet-crafting.mdx","sourceDirName":"tutorials","slug":"/tutorials/packet-crafting","permalink":"/docs/v22.11/tutorials/packet-crafting","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.11/tutorials/packet-crafting.mdx","tags":[],"version":"v22.11","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Part 5: Packet Crafting"},"sidebar":"docs","previous":{"title":"Part 4: Packet Parsing","permalink":"/docs/v22.11/tutorials/packet-parsing"},"next":{"title":"Part 6: Working With DPDK","permalink":"/docs/v22.11/tutorials/dpdk"}}');var r=a(4848),s=a(8453),i=a(4701),c=a(3967);const d={sidebar_position:5,title:"Part 5: Packet Crafting"},l="Part 5: Packet Crafting And Editing",o={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Packet editing",id:"packet-editing",level:2},{value:"Packet Creation",id:"packet-creation",level:2},{value:"Running the example",id:"running-the-example",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"part-5-packet-crafting-and-editing",children:"Part 5: Packet Crafting And Editing"})}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["In the previous ",(0,r.jsx)(t.a,{href:"./packet-parsing",children:"Packet parsing"})," tutorial we demonstrated how PcapPlusPlus parses packets and how to read data out the various layers. In this tutorial we'll focus on editing packets - meaning change existing protocol data, add more data and add/remove layers, and also how to craft new packets from scratch."]}),"\n",(0,r.jsx)(t.p,{children:"Of course we won't go over all the protocols, we'll focus on a few which are popular:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Ethernet"}),"\n",(0,r.jsx)(t.li,{children:"VLAN"}),"\n",(0,r.jsx)(t.li,{children:"IPv4"}),"\n",(0,r.jsx)(t.li,{children:"TCP"}),"\n",(0,r.jsx)(t.li,{children:"UDP"}),"\n",(0,r.jsx)(t.li,{children:"HTTP"}),"\n",(0,r.jsx)(t.li,{children:"DNS"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For further information about these protocols and the other protocols supported in PcapPlusPlus please go to the ",(0,r.jsx)(t.a,{href:"../api",children:"API documentation"})]}),"\n",(0,r.jsx)(t.h2,{id:"packet-editing",children:"Packet editing"}),"\n",(0,r.jsxs)(t.p,{children:["In this part of the tutorial we'll read a packet from a pcap file, let PcapPlusPlus parse it, and then see how we can edit and change the data in each layer. Let's start by writing a ",(0,r.jsx)(t.code,{children:"main()"})," method and add the includes that we need:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'#include <iostream>\n#include "stdlib.h"\n#include "SystemUtils.h"\n#include "Packet.h"\n#include "EthLayer.h"\n#include "VlanLayer.h"\n#include "IPv4Layer.h"\n#include "TcpLayer.h"\n#include "HttpLayer.h"\n#include "UdpLayer.h"\n#include "DnsLayer.h"\n#include "PcapFileDevice.h"\n\nint main(int argc, char* argv[])\n{\n    // We\'ll write our code here\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["As you can see we added an include to ",(0,r.jsx)(t.code,{children:"Packet.h"})," which contains the basic parsed packet structures, to ",(0,r.jsx)(t.code,{children:"PcapFileDevice.h"})," which contains the API for reading/writing from/to pcap files and to all of the layers which we will edit and add data from. In addition we included ",(0,r.jsx)(t.code,{children:"SystemUtils.h"})," for using ",(0,r.jsx)(t.code,{children:"hostToNet16()"})," which we'll use later."]}),"\n",(0,r.jsx)(t.p,{children:"Now let's read the packet from the pcap file. This pcap file contains only 1 packet, so we'll open the reader, read the packet and close the reader:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'// use the IFileReaderDevice interface to automatically identify file type (pcap/pcap-ng)\n// and create an interface instance that both readers implement\npcpp::IFileReaderDevice* reader = pcpp::IFileReaderDevice::getReader("1_http_packet.pcap");\n\n// verify that a reader interface was indeed created\nif (reader == NULL)\n{\n    std::cerr << "Cannot determine reader for file type" << std::endl;\n    return 1;\n}\n\n// open the reader for reading\nif (!reader->open())\n{\n    std::cerr << "Cannot open input.pcap for reading" << std::endl;\n    return 1;\n}\n\n// read the first (and only) packet from the file\npcpp::RawPacket rawPacket;\nif (!reader->getNextPacket(rawPacket))\n{\n    std::cerr << "Couldn\'t read the first packet in the file" << std::endl;\n    return 1;\n}\n\n// close the file reader, we don\'t need it anymore\nreader->close();\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The next step is to let PcapPlusPlus parse the packet by creating an instance of the ",(0,r.jsx)(t.code,{children:"Packet"})," class and giving it in the constructor a pointer to the ",(0,r.jsx)(t.code,{children:"RawPacket"})," instance we have:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// parse the raw packet into a parsed packet\npcpp::Packet parsedPacket(&rawPacket);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You may notice this is exactly the same packet as we used in the ",(0,r.jsx)(t.a,{href:"./packet-parsing",children:"Packet parsing"})," tutorial but this time we won't just read data from the various layers but actually change it. First thing we'll do is get the ",(0,r.jsx)(t.strong,{children:"Ethernet"})," layer and change it:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'// now let\'s get the Ethernet layer\npcpp::EthLayer* ethernetLayer = parsedPacket.getLayerOfType<pcpp::EthLayer>();\n// change the source dest MAC address\n// change the source dest MAC address\nethernetLayer->setDestMac(pcpp::MacAddress("aa:bb:cc:dd:ee:ff"));\n'})}),"\n",(0,r.jsxs)(t.p,{children:["As you can see, we changed the destination MAC address to ",(0,r.jsx)(t.code,{children:'"aa:bb:cc:dd:ee"'})," We used the ",(0,r.jsx)(t.code,{children:"setDestMac()"})," method exposed in ",(0,r.jsx)(t.code,{children:"EthLayer"})," to do that and we gave it a ",(0,r.jsx)(t.code,{children:"MacAddress"})," class instance we created with the new MAC address we want."]}),"\n",(0,r.jsxs)(t.p,{children:["Ethernet layer is quite simple, let's move to a more complex layer - ",(0,r.jsx)(t.strong,{children:"IPv4"}),", and see what data we can change there:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'// let\'s get the IPv4 layer\npcpp::IPv4Layer* ipLayer = parsedPacket.getLayerOfType<pcpp::IPv4Layer>();\n// change source IP address\nipLayer->setSrcIPv4Address(pcpp::IPv4Address("1.1.1.1"));\n// change IP ID\nipLayer->getIPv4Header()->ipId = pcpp::hostToNet16(4000);\n// change TTL value\nipLayer->getIPv4Header()->timeToLive = 12;\n'})}),"\n",(0,r.jsxs)(t.p,{children:["First we changed the source IPv4 address to ",(0,r.jsx)(t.code,{children:'"1.1.1.1"'})," using the method ",(0,r.jsx)(t.code,{children:"setSrcIPv4Address()"})," and provided it an instance of the class ",(0,r.jsx)(t.code,{children:"IPv4Address"})," with the value of ",(0,r.jsx)(t.code,{children:'"1.1.1.1"'}),". Then, we used the ",(0,r.jsx)(t.code,{children:"getIPv4Header()"})," method which casts the raw packet bytes to a struct called ",(0,r.jsx)(t.code,{children:"iphdr*"})," in the same way we did in the packet parsing tutorial, but this time instead of reading values we're changing them. It is very important to understand that the ",(0,r.jsx)(t.code,{children:"iphdr*"})," object gives access to the actual packet bytes so it can be both read and manipulated, and each change affects the actual packet data. When setting fields which are wider than 1 byte it's important to write in network order and that's why we're using ",(0,r.jsx)(t.code,{children:"hostToNet16()"})," to set the IP ID to 4000."]}),"\n",(0,r.jsxs)(t.p,{children:["Let's move on to the next layer - ",(0,r.jsx)(t.strong,{children:"TCP"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// let's get the TCP layer\npcpp::TcpLayer* tcpLayer = parsedPacket.getLayerOfType<pcpp::TcpLayer>();\n// change source port\ntcpLayer->getTcpHeader()->portSrc = pcpp::hostToNet16(12345);\n// add URG flag\ntcpLayer->getTcpHeader()->urgFlag = 1;\n// add MSS TCP option\ntcpLayer->addTcpOptionAfter(pcpp::TcpOptionBuilder(pcpp::TCPOPT_MSS, (uint16_t)1460));\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We start by using the method ",(0,r.jsx)(t.code,{children:"getTcpHeader()"})," which casts the raw packet bytes to a struct ",(0,r.jsx)(t.code,{children:"tpchdr*"})," which contains all of the TCP fields. Again, like we saw in ",(0,r.jsx)(t.code,{children:"IPv4Layer"}),", this method gives access to the actual packet bytes so every change we do changes the packet. So we changed the source port to 12345 and set the URG flag."]}),"\n",(0,r.jsxs)(t.p,{children:["Now let's take a look at the 2 bottom lines in the code snippet above. ",(0,r.jsx)(t.code,{children:"TcpLayer"})," exposes an API to read, add and remove TCP options. The packet we're editing already has 3 TCP options: NOP, NOP and Timestamp. We'd like to add a fourth one of type MSS with MSS value of 1460 and we want it to appear first (before the existing TCP options). So we use the ",(0,r.jsx)(t.code,{children:"addTcpOptionAfter()"})," method and give it a ",(0,r.jsx)(t.code,{children:"TcpOptionBuilder"})," object. This builder object gets in its constructor the TCP option type (which is ",(0,r.jsx)(t.code,{children:"PCPP_TCPOLEN_MSS"}),"), and the option value (1460) and ",(0,r.jsx)(t.code,{children:"addTcpOptionAfter()"})," uses it to create the TCP option object and add it to the existing list of TCP options. That's it! with 1 line of code we managed to add a new TCP option!"]}),"\n",(0,r.jsxs)(t.p,{children:["Now let move on to the last layer in this packet: ",(0,r.jsx)(t.strong,{children:"HTTP"}),". Let's see the code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'// let\'s get the HTTP layer\npcpp::HttpRequestLayer* httpRequestLayer = parsedPacket.getLayerOfType<pcpp::HttpRequestLayer&hl;();\n// change the request method from GET to TRACE\nhttpRequestLayer->getFirstLine()->setMethod(pcpp::HttpRequestLayer::HttpTRACE);\n// change host to www.google.com\nhttpRequestLayer->getFieldByName(PCPP_HTTP_HOST_FIELD)->setFieldValue("www.google.com");\n// change referer value to www.aol.com\nhttpRequestLayer->getFieldByName(PCPP_HTTP_REFERER_FIELD)->setFieldValue("www.aol.com");\n// remove cookie field\nhttpRequestLayer->removeField(PCPP_HTTP_COOKIE_FIELD);\n// add x-forwarded-for field\npcpp::HttpField* xForwardedForField = httpRequestLayer->insertField(httpRequestLayer->getFieldByName(PCPP_HTTP_HOST_FIELD), "X-Forwarded-For", "1.1.1.1");\n// add cache-control field\nhttpRequestLayer->insertField(xForwardedForField, "Cache-Control", "max-age=0");\n'})}),"\n",(0,r.jsxs)(t.p,{children:["We already discussed the highlights of the ",(0,r.jsx)(t.code,{children:"HttpLayer"})," API in the ",(0,r.jsx)(t.a,{href:"./packet-parsing",children:"Packet parsing"})," tutorial so we won't repeat all of it again. But as you can see the API provides setters for all of the relevant data:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"HttpRequestFirstLine"})," exposes is a setter for the HTTP method ",(0,r.jsx)(t.code,{children:"setMethod()"})," where we change it to ",(0,r.jsx)(t.code,{children:"TRACE"}),". Similar methods exist for the URI and version"]}),"\n",(0,r.jsxs)(t.li,{children:["When retrieving HTTP fields, the ",(0,r.jsx)(t.code,{children:"HttpField"})," class exposes a method of ",(0,r.jsx)(t.code,{children:"setFieldValue()"})," for setting the field value (demonstrated above for ",(0,r.jsx)(t.code,{children:'"Host"'})," and ",(0,r.jsx)(t.code,{children:'"Referer"'})," fields)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"HttpLayer"})," exposes methods for adding new fields: ",(0,r.jsx)(t.code,{children:"insertField()"})," and ",(0,r.jsx)(t.code,{children:"addField()"}),", and methods for removing existing fields: ",(0,r.jsx)(t.code,{children:"removeField()"}),". Here we demonstrated how to add ",(0,r.jsx)(t.code,{children:'"X-Forwarded-For"'})," and ",(0,r.jsx)(t.code,{children:'"Cache-Control"'})," header fields (and set their values) and how to remove the ",(0,r.jsx)(t.code,{children:'"Cookie"'})," header field"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"So far we've seen editing of existing layers. But what about adding new layers or removing existing ones?"}),"\n",(0,r.jsxs)(t.p,{children:["Of course this is also possible using the ",(0,r.jsx)(t.code,{children:"Packet"})," class API. Let's demonstrate how to add a VLAN layer between the Ethernet and IPv4 layer:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// create a new vlan layer\npcpp::VlanLayer newVlanLayer(123, false, 1, PCPP_ETHERTYPE_IP);\n\n// add the vlan layer to the packet after the existing Ethernet layer\nparsedPacket.insertLayer(ethernetLayer, &newVlanLayer);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["First we created a new ",(0,r.jsx)(t.code,{children:"VlanLayer"})," instance and gave it the necessary parameters which are VLAN ID (123), CFI (false), priority (1) and the Ether type for the next layer (IPv4). Then we added this layer to the packet right after the Ethernet layer using ",(0,r.jsx)(t.code,{children:"insertLayer()"})," method. Nice and simple :)"]}),"\n",(0,r.jsxs)(t.p,{children:["In the same way we added a new layer we can also remove layers from the packet using the ",(0,r.jsx)(t.code,{children:"Packet::removeLayer()"})," method."]}),"\n",(0,r.jsx)(t.p,{children:"We've made quite a lot of changes to the packet. Let's save it to a pcap file and view the result in Wireshark. But before doing that let's first instruct the packet to re-calculate all of the layers' calculated fields:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'// compute all calculated fields\nparsedPacket.computeCalculateFields();\n\n// write the modified packet to a pcap file\npcpp::PcapFileWriterDevice writer("1_modified_packet.pcap");\nwriter.open();\nwriter.writePacket(*(parsedPacket.getRawPacket()));\nwriter.close();\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Now let's open ",(0,r.jsx)(t.code,{children:'"1_modified_packet.pcap"'})," in Wireshark and view the result:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Packet Edit 1",src:a(4651).A+"",width:"843",height:"466"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Packet Edit 2",src:a(9616).A+"",width:"875",height:"669"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Packet Edit 3",src:a(4441).A+"",width:"832",height:"382"})}),"\n",(0,r.jsx)(t.h2,{id:"packet-creation",children:"Packet Creation"}),"\n",(0,r.jsx)(t.p,{children:"In this part of the tutorial we'll build a packet from scratch, create the different layers one by one and eventually save it to a pcap file to verify packet data is the same as expected."}),"\n",(0,r.jsxs)(t.p,{children:["Let's start by creating the first layer - an ",(0,r.jsx)(t.strong,{children:"Ethernet"})," layer:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'// create a new Ethernet layer\npcpp::EthLayer newEthernetLayer(pcpp::MacAddress("00:50:43:11:22:33"), pcpp::MacAddress("aa:bb:cc:dd:ee"));\n'})}),"\n",(0,r.jsxs)(t.p,{children:["What we did here is create a new instance of the ",(0,r.jsx)(t.code,{children:"EthLayer"})," class and give it the necessary parameters which are source and dest MAC addresses (both are instances of the ",(0,r.jsx)(t.code,{children:"MacAddress"})," class instantiated with the MAC address string). Rather easy right?"]}),"\n",(0,r.jsxs)(t.p,{children:["Now let's move on to the second layer - ",(0,r.jsx)(t.strong,{children:"IPv4"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'// create a new IPv4 layer\npcpp::IPv4Layer newIPLayer(pcpp::IPv4Address("192.168.1.1"), pcpp::IPv4Address("10.0.0.1"));\nnewIPLayer.getIPv4Header()->ipId = pcpp::hostToNet16(2000);\nnewIPLayer.getIPv4Header()->timeToLive = 64;\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Here we created a new instance of the ",(0,r.jsx)(t.code,{children:"IPv4Layer"})," and gave it the necessary parameters which are source and dest IP addresses (both are instances of the ",(0,r.jsx)(t.code,{children:"IPv4Address"})," class instantiated with the IP address string). Next, we wanted to set the IP ID and TTL values of this layer. As you can see we do that using the same API we used in the ",(0,r.jsx)(t.a,{href:"#packet-editing",children:"Packet editing"})," part: call the ",(0,r.jsx)(t.code,{children:"getIPv4Header()"})," method to get an instance of the ",(0,r.jsx)(t.code,{children:"iphdr*"})," struct (which is actually a pointer to the packet raw data cast to ",(0,r.jsx)(t.code,{children:"iphdr*"}),") and set the IP ID and TTL values. Since IP ID is 2-bytes long we use ",(0,r.jsx)(t.code,{children:"hostToNet16()"})," to convert from host to network order."]}),"\n",(0,r.jsxs)(t.p,{children:["Now let's move on to the third layer - ",(0,r.jsx)(t.strong,{children:"UDP"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// create a new UDP layer\npcpp::UdpLayer newUdpLayer(12345, 53);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["As you can see, this is quite straight forward: we created a new instance of ",(0,r.jsx)(t.code,{children:"UdpLayer"})," and gave it in the constructor the source and dest UDP ports."]}),"\n",(0,r.jsxs)(t.p,{children:["Let's move on to the fourth and last layer - ",(0,r.jsx)(t.strong,{children:"DNS"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'// create a new DNS layer\npcpp::DnsLayer newDnsLayer;\nnewDnsLayer.addQuery("www.ebay.com", pcpp::DNS_TYPE_A, pcpp::DNS_CLASS_IN);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Here we first created an instance of ",(0,r.jsx)(t.code,{children:"DnsLayer"})," with the default constructor (without any parameters). Then we added a DNS query record to the layer using the ",(0,r.jsx)(t.code,{children:"addQuery()"}),' method and gave it the query parameters which are: query name ("',(0,r.jsx)(t.a,{href:"http://www.ebay.com",children:"www.ebay.com"}),'"),'," query type (type A means IPv4 address) and query class (class IN means Internet)."]}),"\n",(0,r.jsxs)(t.p,{children:["That's it! we created 4 layers, now let's add them to a new packet. Let's first create a new ",(0,r.jsx)(t.code,{children:"Packet"})," instance:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// create a packet with initial capacity of 100 bytes (will grow automatically if needed)\npcpp::Packet newPacket(100);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The value 100 we gave in the constructor is the expected length of the packet (in bytes). When we give this number a buffer of size 100 is automatically created and will be used to store the packet raw data. Of course, if our packet exceeds 100 bytes this buffer will be automatically extended, but this has a performance cost, so in applications that require high performance it's better to allocate this buffer in advanced (meaning setting the buffer size in the constructor). Now it's time to add all the layers we created to the packet, we'll use the ",(0,r.jsx)(t.code,{children:"addLayer()"})," method for that:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// add all the layers we created\nnewPacket.addLayer(&newEthernetLayer);\nnewPacket.addLayer(&newIPLayer);\nnewPacket.addLayer(&newUdpLayer);\nnewPacket.addLayer(&newDnsLayer);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We're almost done. All that is left is to call the ",(0,r.jsx)(t.code,{children:"computeCalculateFields()"})," method to calculate the layers' calculated fields:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:"// compute all calculated fields\nnewPacket.computeCalculateFields();\n"})}),"\n",(0,r.jsx)(t.p,{children:"Our packet is ready! Now let's save it to a pcap file and open this file in Wireshark to verify the packet looks exactly like we built it:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cpp",children:'// write the new packet to a pcap file\npcpp::PcapFileWriterDevice writer2("1_new_packet.pcap");\nwriter2.open();\nwriter2.writePacket(*(newPacket.getRawPacket()));\nwriter2.close();\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Now let's compile the code, run it and open the ",(0,r.jsx)(t.code,{children:'"1_new_packet.pcap"'})," file in Wireshark:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"New Packet",src:a(7320).A+"",width:"915",height:"650"})}),"\n",(0,r.jsx)(t.p,{children:"As you can see, the packet looks exactly as expected."}),"\n",(0,r.jsx)(t.h2,{id:"running-the-example",children:"Running the example"}),"\n","\n",(0,r.jsxs)(t.p,{children:["All code that was covered in this tutorial can be found ",(0,r.jsx)(c.A,{relativePath:"/Examples/Tutorials/Tutorial-PacketCraftAndEdit",children:"here"}),". In order to compile and run the code please first download and compile PcapPlusPlus code or downloaded a pre-compiled version from the ",(0,r.jsx)(i.A,{}),". Then follow these instruction, according to your platform:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Linux, MacOS, FreeBSD - make sure PcapPlusPlus is installed (by running ",(0,r.jsx)(t.strong,{children:"sudo make install"})," in PcapPlusPlus main directory). Then either change the ",(0,r.jsx)(t.code,{children:"Makefile.non_windows"})," file name to ",(0,r.jsx)(t.code,{children:"Makefile"})," and run ",(0,r.jsx)(t.code,{children:"make all"}),", or run ",(0,r.jsx)(t.code,{children:"make -f Makefile.non_windows all"})]}),"\n",(0,r.jsxs)(t.li,{children:["Windows using MinGW-w64 - either change the ",(0,r.jsx)(t.code,{children:"Makefile.windows"})," file name to ",(0,r.jsx)(t.code,{children:"Makefile"})," and run ",(0,r.jsx)(t.code,{children:"make all"}),", or run ",(0,r.jsx)(t.code,{children:"make -f Makefile.windows all"})]}),"\n",(0,r.jsxs)(t.li,{children:["Windows using Visual Studio - there is a Visual Studio solution containing all tutorials: ",(0,r.jsx)(t.code,{children:"mk\\[vs_version]\\Tutorials.sln"}),". Just open it and compile all tutorials"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In all options the compiled executable will be inside the tutorial directory (",(0,r.jsx)(t.code,{children:"[PcapPlusPlus Folder]/Examples/Tutorials/Tutorial-PacketCraftAndEdit"}),")"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3967:(e,t,a)=>{a.d(t,{A:()=>s});a(6540);var n=a(5329),r=a(4848);const s=function(e){let{relativePath:t,children:a}=e;return(0,r.jsx)("a",{href:(0,n.t_)()+t,children:a})}},5329:(e,t,a)=>{a.d(t,{ZA:()=>d,iI:()=>o,i_:()=>l,jA:()=>p,k9:()=>s,kF:()=>i,l:()=>c,t_:()=>h,zk:()=>u});var n=a(4070);const r="https://github.com/seladb/PcapPlusPlus";function s(){return r}function i(){const e=(0,n.r7)(),t=(0,n.ir)();return"Next"===t.label?e.label:t.label}function c(e){return`${r}/releases/tag/${e}`}function d(){return c(i())}function l(){return`${r}/archive/${i()}.zip`}function o(){return`${r}/archive/${i()}.tar.gz`}function h(){const e=(0,n.ir)(),t="Next"===e.label?"master":e.label;return`${r}/tree/${t}`}function p(){return`${r}/archive/master.zip`}function u(){return`${r}/archive/master.tar.gz`}},4701:(e,t,a)=>{a.d(t,{A:()=>s});a(6540);var n=a(5329),r=a(4848);const s=function(e){let{versionString:t}=e;return(0,r.jsx)("a",{href:(0,n.ZA)(),children:t||`${(0,n.kF)()} release`})}},7320:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/NewPacket-2f8931f78cc00e944c6d5080e43e6b85.png"},4651:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/PacketEdit1-eddc6e4dce2cb091a612908922eb57f4.png"},9616:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/PacketEdit2-b3e0a9658b43290ccd20a26388d57645.png"},4441:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/PacketEdit3-5ee85201ffe6b6b2c6e733e1f4c182c7.png"},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>c});var n=a(6540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);