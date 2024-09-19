"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[397],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3901:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(3743);const i="tableOfContentsInline_prmo";function o(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:o}=e;return n.createElement("div",{className:i},n.createElement(r.Z,{toc:t,minHeadingLevel:a,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),r=a(7294),i=a(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...r}=e;a>=0?t[a].children.push(r):n.push(r)})),n}function l(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function p(e){const t=e.getBoundingClientRect();return t.top===t.bottom?p(e.parentNode):t}function s(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>p(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(p(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),a=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let r=t;r<=a;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),p=s(l,{anchorTopOffset:a.current}),c=e.find((e=>p&&p.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:i}=e;return t.length?r.createElement("ul",{className:i?void 0:a},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const m=r.memo(u);function h(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:p="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const f=(0,i.L)(),k=c??f.tableOfContents.minHeadingLevel,g=u??f.tableOfContents.maxHeadingLevel,P=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,r.useMemo)((()=>l({toc:o(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:k,maxHeadingLevel:g});return d((0,r.useMemo)((()=>{if(p&&s)return{linkClassName:p,linkActiveClassName:s,minHeadingLevel:k,maxHeadingLevel:g}}),[p,s,k,g])),r.createElement(m,(0,n.Z)({toc:P,className:a,linkClassName:p},h))}},2845:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(143),i=a(4996);const o=function(e){let{relativePath:t,children:a}=e;return n.createElement("a",{href:(0,i.Z)(`/api-docs/${(0,r.zu)().label.toLowerCase()}${t}`)},a)}},7912:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=a(3901),o=a(2845);const l={title:"Feature Overview",sidebar_position:3},p="Feature Overview",s={unversionedId:"features",id:"version-v24.09/features",title:"Feature Overview",description:"Packet capture",source:"@site/versioned_docs/version-v24.09/features.mdx",sourceDirName:".",slug:"/features",permalink:"/docs/features",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v24.09/features.mdx",tags:[],version:"v24.09",sidebarPosition:3,frontMatter:{title:"Feature Overview",sidebar_position:3},sidebar:"docs",previous:{title:"Build on FreeBSD",permalink:"/docs/install/freebsd"},next:{title:"DPDK Support",permalink:"/docs/dpdk"}},c={},d=[{value:"Packet capture",id:"packet-capture",level:2},{value:"What&#39;s next?",id:"whats-next",level:3},{value:"Packet parsing and crafting",id:"packet-parsing-and-crafting",level:2},{value:"Read and write packets from/to files",id:"read-and-write-packets-fromto-files",level:2},{value:"Reading/Writing PCAPNG files with compression",id:"readingwriting-pcapng-files-with-compression",level:3},{value:"DPDK support",id:"dpdk-support",level:2},{value:"AF_XDP support",id:"af_xdp-support",level:2},{value:"PF_RING support",id:"pf_ring-support",level:2},{value:"Packet reassembly",id:"packet-reassembly",level:2},{value:"Packet filtering",id:"packet-filtering",level:2},{value:"TLS Fingerprinting",id:"tls-fingerprinting",level:2},{value:"Supported network protocols",id:"supported-network-protocols",level:2},{value:"Data Link Layer (L2)",id:"data-link-layer-l2",level:3},{value:"Network Layer (L3)",id:"network-layer-l3",level:3},{value:"Transport Layer (L4)",id:"transport-layer-l4",level:3},{value:"Session Layer (L5)",id:"session-layer-l5",level:3},{value:"Presentation Layer (L6)",id:"presentation-layer-l6",level:3},{value:"Application Layer (L7)",id:"application-layer-l7",level:3},{value:"License",id:"license",level:2}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feature-overview"},"Feature Overview"),(0,r.kt)(i.Z,{toc:d,maxHeadingLevel:2,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"packet-capture"},"Packet capture"),(0,r.kt)("p",null,"Packet capture (A.K.A packet sniffing or network tapping) is the process of intercepting and logging traffic that passes over a digital network or part of a network (taken from ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Packet_analyzer"},"Wikipedia"),"). It is one of the most important and popular features of PcapPlusPlus and it is what PcapPlusPlus is basically all about."),(0,r.kt)("p",null,"There are multiple packet capture engines out there, the most popular are ",(0,r.kt)("a",{parentName:"p",href:"https://www.tcpdump.org/"},"libpcap"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.winpcap.org/"},"WinPcap")," (which is libpcap for Windows), ",(0,r.kt)("a",{parentName:"p",href:"https://nmap.org/npcap/"},"Npcap")," (WinPcap's successor), ",(0,r.kt)("a",{parentName:"p",href:"https://www.dpdk.org/"},"Intel DPDK"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/next/networking/af_xdp.html"},"eBPF AF_XDP"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.ntop.org/products/packet-capture/pf_ring/"},"ntop's PF_RING")," and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_socket#Raw_socket"},"raw sockets"),". Each engine has different strengths, purposes and features, works on different platforms and obviously has different APIs and setup process. Most of them are written in C (to achieve the best performance) and don't expose a C++ interface."),(0,r.kt)("p",null,"PcapPlusPlus aims to create a consolidated and easy-to-use C++ API for all of these engines which simplifies their complexity and provides a common infrastructure for capturing, processing, analyzing and forging of network packets."),(0,r.kt)("p",null,"Here is a list of of the packet capture engines currently supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.tcpdump.org/"},"libpcap")," live capture (on Linux, MacOS, Android, FreeBSD)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.winpcap.org/"},"WinPcap"),"/",(0,r.kt)("a",{parentName:"li",href:"https://nmap.org/npcap/"},"Npcap")," live capture (on Windows)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.dpdk.org/"},"Intel DPDK")," (on Linux)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/html/next/networking/af_xdp.html"},"eBPF AF_XDP sockets")," (on Linux)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ntop.org/products/packet-capture/pf_ring/"},"ntop's Vanilla PF_RING")," (on Linux)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.winpcap.org/docs/docs_412/html/group__remote.html"},"WinPcap Remote capture")," (on Windows)")),(0,r.kt)("p",null,"The main features provided for each one are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Browse all interfaces available on the machine"),(0,r.kt)("li",{parentName:"ul"},"Capture network traffic on a specific interface"),(0,r.kt)("li",{parentName:"ul"},"Send packets to the network"),(0,r.kt)("li",{parentName:"ul"},"Filter packets")),(0,r.kt)("h3",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"You can find out more information in the ",(0,r.kt)("a",{parentName:"p",href:"./api"},"API documentation"),", ",(0,r.kt)("a",{parentName:"p",href:"./tutorials/intro"},"tutorial pages")," and browse through the code of the ",(0,r.kt)("a",{parentName:"p",href:"./examples"},"example apps"),"."),(0,r.kt)("h2",{id:"packet-parsing-and-crafting"},"Packet parsing and crafting"),(0,r.kt)("p",null,"PcapPlusPlus provides advanced capabilities for packet analysis which include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Packet parsing, which is a detailed analysis of the protocols and layers of a packet"),(0,r.kt)("li",{parentName:"ul"},"Packet crafting which is generation and editing of network packets")),(0,r.kt)("p",null,"A large variety of network protocols are supported, see the full list ",(0,r.kt)("a",{parentName:"p",href:"#supported-network-protocols"},"here"),"."),(0,r.kt)("p",null,"Packets can be analyzed from any source including those captured from the network, packets stored in PCAP/PCAPNG files, and more.\nThe design of PcapPlusPlus allows similar analysis capabilities for each packet, regardless of where it came from. For example, you can write the same code for parsing packets that are captured using DPDK, libpcap, WinPcap/Npcap, raw sockets or read from a PCAP/PCAPNG file. Same goes for packet crafting."),(0,r.kt)("p",null,"Consider this simple code snippet that shows how to read a packet from a PCAP file, parse it, identify if it's an IPv4 packet and print the source and dest IP addresses:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <iostream>\n#include <IPv4Layer.h>\n#include <Packet.h>\n#include <PcapFileDevice.h>\n\nint main(int argc, char* argv[])\n{\n    // open a pcap file for reading\n    pcpp::PcapFileReaderDevice reader("1_packet.pcap");\n    if (!reader.open())\n    {\n        std::cerr << "Error opening the pcap file" << std::endl;\n        return 1;\n    }\n\n    // read the first (and only) packet from the file\n    pcpp::RawPacket rawPacket;\n    if (!reader.getNextPacket(rawPacket))\n    {\n        std::cerr << "Couldn\'t read the first packet in the file" << std::endl;\n        return 1;\n    }\n\n    // parse the raw packet into a parsed packet\n    pcpp::Packet parsedPacket(&rawPacket);\n\n    // verify the packet is IPv4\n    if (parsedPacket.isPacketOfType(pcpp::IPv4))\n    {\n        // extract source and dest IPs\n        pcpp::IPv4Address srcIP = parsedPacket.getLayerOfType<pcpp::IPv4Layer>()->getSrcIPv4Address();\n        pcpp::IPv4Address destIP = parsedPacket.getLayerOfType<pcpp::IPv4Layer>()->getDstIPv4Address();\n\n        // print source and dest IPs\n        std::cout\n            << "Source IP is \'" << srcIP << "\'; "\n            << "Dest IP is \'" << destIP << "\'"\n            << std::endl;\n    }\n\n    // close the file\n    reader.close();\n\n    return 0;\n}\n')),(0,r.kt)("h2",{id:"read-and-write-packets-fromto-files"},"Read and write packets from/to files"),(0,r.kt)("p",null,"Network packets can be stored in files, usually for offline analysis. ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.wireshark.org/Development/LibpcapFileFormat"},"PCAP")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pcapng/pcapng"},"PCAPNG")," are the two most popular file formats and both are supported in PcapPlusPlus. In addition the ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc1761"},"SNOOP")," file format is supported for read-only."),(0,r.kt)("p",null,"The main features include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read packets from PCAP/PCAPNG/SNOOP files"),(0,r.kt)("li",{parentName:"ul"},"Create new PCAP/PCAPNG files and write packets to them"),(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"#packet-filtering"},"packet filtering mechanism")," to read or write only packets that match the filter"),(0,r.kt)("li",{parentName:"ul"},"Append packets to existing PCAP/PCAPNG files"),(0,r.kt)("li",{parentName:"ul"},"Write compressed PCAPNG files using ",(0,r.kt)("a",{parentName:"li",href:"https://facebook.github.io/zstd/"},"Zstd")," compression in real time (OPTIONAL and requires building with Zstd)")),(0,r.kt)("p",null,"Consider this simple code snippet that shows how to open a PCAP file for reading and another PCAPNG file for writing, and then read all packets from the PCAP file and write them to the PCAPNG file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// create a pcap file reader\npcpp::PcapFileReaderDevice pcapReader("input.pcap");\npcapReader.open();\n\n// create a pcapng file writer\npcpp::PcapNgFileWriterDevice pcapNgWriter("output.pcapng");\npcapNgWriter.open();\n\n// raw packet object\npcpp::RawPacket rawPacket;\n\n// read packets from pcap reader and write pcapng writer\nwhile (pcapReader->getNextPacket(rawPacket)) {\n  pcapNgWriter.writePacket(rawPacket);\n}\n\npcapNgReader.close(); //These will close when going out of scope\npcapNgWriter.close(); //or you may close them manually\n')),(0,r.kt)("p",null,"For more information please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./tutorials/read-write-pcap"},"Read/Write Pcap Files tutorial"),", look at the ",(0,r.kt)("a",{parentName:"p",href:"./api"},"API documentation")," or browse through the code of the ",(0,r.kt)("a",{parentName:"p",href:"./examples"},"example apps"),"."),(0,r.kt)("h3",{id:"readingwriting-pcapng-files-with-compression"},"Reading/Writing PCAPNG files with compression"),(0,r.kt)("p",null,"Zstd streaming compression is only supported when working with pcapng files. To enable this feature you must build PcapPlusPlus with Zstd support. For more guidance on building PcapPlusPlus see the ",(0,r.kt)("a",{parentName:"p",href:"./install"},"build instructions per platform"),"."),(0,r.kt)("p",null,"Once you have a working build modifying your code to start enabling compression is fast and easy!"),(0,r.kt)("p",null,"When writing PCAPNG files, to enable streaming compression all you need to do is add a second integer argument when constructing your writer. The integer should be between 0-10 and it specifies the compression level. Values outside this range will be clamped. A value of zero, which is also the default, indicates to skip compression. A value of 10 would indicate use maximum compression. For most scenarios a value of 5 or less should be adequate."),(0,r.kt)("p",null,"For reading compressed PCAPNG files the only requirement is that the file name extension must terminate in ",(0,r.kt)("inlineCode",{parentName:"p"},".zstd"),". If a compressed file is supplied to the reader without the ",(0,r.kt)("inlineCode",{parentName:"p"},".zstd")," extension the file will fail to load. Currently, APPENDING to a compressed file is NOT supported!"),(0,r.kt)("p",null,"If you write code enabling compression, by adding a compression level to your writer constructor, but use a build of PcapPlusPlus without compression support, everything will work just fine and the compression will be skipped/ignored and normal PCAPNG files will be generated/read."),(0,r.kt)("p",null,"There is a tradeoff between compression speed and compression efficiency. A compression value of 10 will yield the most compression but be slower, while a value of 1 will yield the least compression but be fastest. Depending upon your capture rates and data size you can tune this number to fit your needs."),(0,r.kt)("p",null,"Since Zstd is designed to support fast and efficient streaming compression most users should not see any noticeable performance impact when enabling compression. Exact savings from compression will always vary based upon the input data, however; in one test case an uncompressed PCAPNG file of 140MB was duplicated with a compression level of 5 to yield a compressed PCAPNG file of only 40MB giving about 4x space savings! Note that the compression is performed while the file is written so you will not notice any delay when closing the file or a long processing time like you work normally experience when compressing an existing file."),(0,r.kt)("p",null,"Some example compression code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// create a pcapng file reader\npcpp::PcapNgFileReaderDevice reader("input.pcap.zstd");  //Notice the Zstd extension\nreader.open();                                           //This is required for proper loading\n\n// create a pcapng file writer\npcpp::PcapNgFileWriterDevice writer("output.pcapng.zstd", 5);  //The second integer argument 5\npcapNgWriter.open();                                           //is the compression level to use\n\n// read packets from pcapng reader and write pcapng writer\nwhile (reader->getNextPacket(rawPacket)) {\n  writer.writePacket(rawPacket);\n}\n')),(0,r.kt)("h2",{id:"dpdk-support"},"DPDK support"),(0,r.kt)("p",null,"The Data Plane Development Kit (DPDK) is a set of data plane libraries and network interface controller drivers for fast packet processing, currently managed as an open-source project under the Linux Foundation. The DPDK provides a programming framework for x86, ARM, and PowerPC processors and enables faster development of high speed data packet networking applications (taken from ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Data_Plane_Development_Kit"},"Wikipedia"),")."),(0,r.kt)("p",null,"DPDK provides packet processing in line rate using kernel bypass for a large range of network interface cards. Notice that not every NIC supports DPDK as the NIC needs to support the kernel bypass feature. You can read more about DPDK in ",(0,r.kt)("a",{parentName:"p",href:"https://www.dpdk.org/"},"DPDK's web-site")," and get a list of supported NICs ",(0,r.kt)("a",{parentName:"p",href:"http://core.dpdk.org/supported/"},"here"),"."),(0,r.kt)("p",null,"As DPDK API is written in C, PcapPlusPlus wraps its main functionality in easy-to-use C++ wrappers which have minimum impact on performance and packet processing rate. In addition it brings DPDK to the PcapPlusPlus framework and APIs so you can use DPDK together with other PcapPlusPlus features such as packet analysis, etc."),(0,r.kt)("p",null,"You can find more information about setting up DPDK and the API in ",(0,r.kt)("a",{parentName:"p",href:"./dpdk"},"DPDK support page")," and also in ",(0,r.kt)("a",{parentName:"p",href:"./tutorials/dpdk"},"DPDK tutorial"),"."),(0,r.kt)("h2",{id:"af_xdp-support"},"AF_XDP support"),(0,r.kt)("p",null,"AF_XDP represents an address family tailored for optimizing high-performance packet processing. It functions as a socket, specifically referred to as XSK sockets, introduced in Linux Kernel 4.18.\nUnlike complete kernel bypass solutions like DPDK, AF_XDP leverages kernel functionality to create an efficient framework akin to DPDK or AF_Packet."),(0,r.kt)("p",null,"AF_XDP facilitates the direct transfer of packets to userspace, minimizing latency by circumventing the conventional kernel network stack.\nWhile it doesn't entirely bypass the kernel like DPDK, AF_XDP establishes an in-kernel fast path for accelerated packet processing."),(0,r.kt)("p",null,"AF_XDP is built on the foundation of eBPF (extended Berkeley Packet Filter) and XDP (eXpress Data Path). eBPF provides means to run custom code in the kernel in response to various events.\nXDP is one of these hooks that gives access to nework packets as soon as they arrive at the network driver. The eBPF program can then decide what to do with these packets, like modifying them, dropping them, passing them to the network stack,\nor in the case of AF_XDP scokets - redirect them to userspace."),(0,r.kt)("p",null,"Here are a few good sources to learn more about AF_XDP:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/html/next/networking/af_xdp.html"},"https://www.kernel.org/doc/html/next/networking/af_xdp.html")," (Linux kernel documentation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/high-performance-network-programming/recapitulating-af-xdp-ef6c1ebead8"},"https://medium.com/high-performance-network-programming/recapitulating-af-xdp-ef6c1ebead8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/pantheon-tech/af-xdp-and-its-potential-38485f267fe"},"https://medium.com/pantheon-tech/af-xdp-and-its-potential-38485f267fe"))),(0,r.kt)("p",null,"PcapPlusPlus currently provides fairly basic support for AF_XDP sockets which includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creating an AF_XDP socket with either default or custom configuration"),(0,r.kt)("li",{parentName:"ul"},"Receiving and sending packets through the socket"),(0,r.kt)("li",{parentName:"ul"},"Collecting statistics on packets going through the socket")),(0,r.kt)("p",null,"While the interface is simple, it wraps most of the complexity working with AF_XDP sockets.\nBehind the scenes, it leverages ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libbpf/libbpf"},(0,r.kt)("inlineCode",{parentName:"a"},"libbpf"))," to create and configure the socket, then utilize various rings for receiving packets from the kernel and transmitting packets to the kernel."),(0,r.kt)("p",null,"AF_XDP is only available on Linux. In order to build PcapPlusplus with AF_XDP please make sure you have ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libbpf/libbpf"},(0,r.kt)("inlineCode",{parentName:"a"},"libbpf"))," installed on your device and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-DPCAPPP_USE_XDP=ON")," CMake option."),(0,r.kt)("p",null,"To learn more about the API please take a look at the ",(0,r.kt)("a",{parentName:"p",href:"./examples#xdpexample-filtertraffic"},"AF_XDP example"),"."),(0,r.kt)("h2",{id:"pf_ring-support"},"PF_RING support"),(0,r.kt)("p",null,"PF_RING\u2122 is a new type of network socket that dramatically improves the packet capture speed. It's providing high-speed packet capture, filtering and analysis (taken from ",(0,r.kt)("a",{parentName:"p",href:"https://www.ntop.org/products/packet-capture/pf_ring/"},"ntop's website"),")."),(0,r.kt)("p",null,"PcapPlusPlus provides a clean and simple C++ wrapper API for ",(0,r.kt)("a",{parentName:"p",href:"https://www.ntop.org/products/packet-capture/pf_ring/"},"Vanilla PF_RING"),". Currently only Vanilla PF_RING is supported which provides significant performance improvement in comparison to libpcap or Linux kernel, but ",(0,r.kt)("a",{parentName:"p",href:"https://www.ntop.org/products/packet-capture/pf_ring/pf_ring-zc-zero-copy/"},"PF_RING Zero Copy")," (which allows kernel bypass and zero-copy of packets from NIC to user-space) is not yet supported."),(0,r.kt)("p",null,"In order to compile PcapPlusPlus with PF_RING you need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download PF_RING from ",(0,r.kt)("a",{parentName:"li",href:"https://www.ntop.org/get-started/download/#PF_RING"},"ntop's web-site")),(0,r.kt)("li",{parentName:"ul"},"Once PF_RING is compiled successfully, you need to run PcapPlusPlus build using the ",(0,r.kt)("inlineCode",{parentName:"li"},"-DPCAPPP_USE_PF_RING=ON")," option"),(0,r.kt)("li",{parentName:"ul"},"Before you activate any PcapPlusPlus application that uses PF_RING, don't forget to enable PF_RING kernel module. If you forget to do that, PcapPlusPlus will output an - appropriate error on startup which will remind you:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo insmod <PF_RING_LOCATION>/kernel/pf_ring.ko\n")),(0,r.kt)("h2",{id:"packet-reassembly"},"Packet reassembly"),(0,r.kt)("p",null,"Network protocols often need to transport large chunks of data which are complete in themselves, e.g. when transferring a file. The underlying protocol might not be able to handle that chunk size (e.g. limitation of the network packet size), or is stream-based like TCP, which doesn\u2019t know data chunks at all."),(0,r.kt)("p",null,"In that case the network protocol has to handle the chunk boundaries itself and (if required) spread the data over multiple packets. It obviously also needs a mechanism to determine the chunk boundaries on the receiving side."),(0,r.kt)("p",null,"This mechanism is called reassembly, although a specific protocol specification might use a different term for this (e.g. desegmentation, defragmentation, etc)."),(0,r.kt)("p",null,"(this description is taken from ",(0,r.kt)("a",{parentName:"p",href:"https://www.wireshark.org/docs/wsug_html_chunked/ChAdvReassemblySection.html"},"Wireshark documentation"),")."),(0,r.kt)("p",null,"PcapPlusPlus currently supports two types of packets reassembly:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IPv4 and IPv6 defragmentation which is a Layer 3 (Network layer) packet reassembly. You can read more about IP fragmentation ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/IP_fragmentation"},"here"),". To get more information about how it works and the API to use it please refer to the ",(0,r.kt)("a",{parentName:"li",href:"./api"},"API documentation")," and browse through the code of the ",(0,r.kt)("a",{parentName:"li",href:"./examples#ipdefragutil"},"IPDefragUtil")," and ",(0,r.kt)("a",{parentName:"li",href:"./examples#ipfragutil"},"IPFragUtil")," example apps"),(0,r.kt)("li",{parentName:"ul"},"TCP reassembly which is a Layer 4 (Transport layer) packet reassembly. To get more information on how it works and the API to use it please refer to the ",(0,r.kt)("a",{parentName:"li",href:"./api"},"API documentation")," and browse through the code of the ",(0,r.kt)("a",{parentName:"li",href:"./examples#tcpreassembly"},"TcpReassembly")," example app")),(0,r.kt)("h2",{id:"packet-filtering"},"Packet filtering"),(0,r.kt)("p",null,"Most packet capture engines contain packet filtering capabilities. In order to set the filters there should be a known syntax user can use. The most popular syntax is ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Berkeley_Packet_Filter"},"Berkeley Packet Filter (BPF)"),". Detailed explanation of the syntax can be found ",(0,r.kt)("a",{parentName:"p",href:"http://www.tcpdump.org/manpages/pcap-filter.7.html"},"here"),"."),(0,r.kt)("p",null,"The challenge with BPF is that it is too complicated and poorly documented. When compiling BPF filters you often get syntax errors that are hard to understand and debug. Our experience with BPF was not good, so we decided to include in PcapPlusPlus a filter mechanism which is more structured, easier to understand and less error-prone by creating classes that represent filters. Each possible filter phrase is represented by a class. The filter, in the end, is that class."),(0,r.kt)("p",null,"Consider the following code snippet for creating the filter ",(0,r.kt)("inlineCode",{parentName:"p"},"src ip 1.1.1.1 and dst port 80")," and setting it up on a packet capture device:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// create a filter instance to capture only traffic on port 80\npcpp::PortFilter portFilter(80, pcpp::DST);\n\n// create a filter instance to capture only TCP traffic\npcpp::IPFilter ipFilter("1.1.1.1", pcpp::SRC);\n\n// create an AND filter to combine both filters - capture only TCP traffic on port 80\npcpp::AndFilter andFilter;\nandFilter.addFilter(&portFilter);\nandFilter.addFilter(&ipFilter);\n\n// set the filter on the device\ndev->setFilter(andFilter);\n')),(0,r.kt)("p",null,"You can read more in the ",(0,r.kt)(o.Z,{relativePath:"/_pcap_filter_8h.html",mdxType:"APIDocsLink"},(0,r.kt)("inlineCode",{parentName:"p"},"PcapFilter.h")," API documentation")," and in the ",(0,r.kt)("a",{parentName:"p",href:"./tutorials/capture-packets#filtering-packets"},"capture packets tutorial"),"."),(0,r.kt)("h2",{id:"tls-fingerprinting"},"TLS Fingerprinting"),(0,r.kt)("p",null,"TLS Fingerprinting is a technique that extracts specific parameters from TLS handshake messages such as ClientHello and ServerHello. Most applications that need network access (such as browsers, apps, etc.) have a unique combination(s) of these parameters while making network connections, so this technique can be used to fingerprint those applications. By using a database of curated fingerprints it's possible to detect network traffic anomalies which can point to malware, security vulnerabilities or other undesired behavior. It can also be used for network visibility, for example identify popular applications, detect applications that use weak encryption, etc. This method of fingerprinting is very effective because TLS handshake is often done in lower levels of the application hence it's difficult to forge or tamper with it."),(0,r.kt)("p",null,"The primary concept for TLS fingerprinting came from ",(0,r.kt)("a",{parentName:"p",href:"https://blog.squarelemon.com/tls-fingerprinting/"},"Lee Brotherston\u2019s 2015 research")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LeeBrotherston/tls-fingerprinting"},"GitHub repo"),"). Following his work more articles and implementations came out, one of them was ",(0,r.kt)("a",{parentName:"p",href:"https://engineering.salesforce.com/tls-fingerprinting-with-ja3-and-ja3s-247362855967"},"Salesforce JA3")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/salesforce/ja3"},"GitHub repo"),") which implements TLS fingerprinting in Python and ",(0,r.kt)("a",{parentName:"p",href:"https://www.zeekurity.org/"},"Zeek"),'. This project introduced two types of TLS fingerprinting: JA3 which is the "traditional" ClientHello fingerprinting (which is the more common and well-known method), and JA3S which is ServerHello fingerprinting.'),(0,r.kt)("p",null,"PcapPlusPlus contains an implementation of JA3 and JA3S in C++. There are not a lot of C++ implementations for TLS fingerprinting and we thought this can be a good feature for PcapPlusPlus as it already analyzes TLS network traffic."),(0,r.kt)("p",null,"Using TLS fingerprinting in PcapPlusPlus is very easy, here is a quick example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'// Get the handshake layer and extract the ClientHello message\npcpp::SSLHandshakeLayer* sslHandshakeLayer = parsedPacket.getLayerOfType<pcpp::SSLHandshakeLayer>();\npcpp::SSLClientHelloMessage* clientHelloMessage =\n    sslHandshakeLayer->getHandshakeMessageOfType<pcpp::SSLClientHelloMessage>();\n\n// Extract the TLS fingerprint from the ClientHello message\npcpp::SSLClientHelloMessage::ClientHelloTLSFingerprint tlsFingerprint =\n    clientHelloMessage->generateTLSFingerprint();\nstd::pair<std::string, std::string> tlsFingerprintStringAndMD5 = tlsFingerprint.toStringAndMD5();\n\n// Print the full fingerprint and an MD5 version of it\nstd::cout\n    << "ClientHello (JA3) TLS fingerprint: "\n    << tlsFingerprintStringAndMD5.first\n    << "; MD5: "\n    << tlsFingerprintStringAndMD5.second\n    << std::endl;\n')),(0,r.kt)("p",null,"ServerHello TLS fingerprinting (JA3S) is almost similar but for ",(0,r.kt)("inlineCode",{parentName:"p"},"pcpp::SSLServerHelloMessage")," messages."),(0,r.kt)("p",null,"To learn more please take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/seladb/PcapPlusPlus/tree/%7B%7Bsite.github_label%7D%7D/Examples/TLSFingerprinting"},"TLS fingerprinting example")," in PcapPlusPlus GitHub repo which demonstrates how to collect ClientHello and ServerHello fingerprints from live traffic or pcap files, write them to an output file and display various statistics."),(0,r.kt)("h2",{id:"supported-network-protocols"},"Supported network protocols"),(0,r.kt)("p",null,"PcapPlusPlus currently supports parsing, editing and generation of packets of the following protocols:"),(0,r.kt)("h3",{id:"data-link-layer-l2"},"Data Link Layer (L2)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ethernet II"),(0,r.kt)("li",{parentName:"ol"},"IEEE 802.3 Ethernet"),(0,r.kt)("li",{parentName:"ol"},"LLC (Only BPDU supported)"),(0,r.kt)("li",{parentName:"ol"},"Null/Loopback"),(0,r.kt)("li",{parentName:"ol"},"Packet trailer (a.k.a footer or padding)"),(0,r.kt)("li",{parentName:"ol"},"PPPoE"),(0,r.kt)("li",{parentName:"ol"},"SLL (Linux cooked capture)"),(0,r.kt)("li",{parentName:"ol"},"SLL2 (Linux cooked capture v2)"),(0,r.kt)("li",{parentName:"ol"},"STP"),(0,r.kt)("li",{parentName:"ol"},"VLAN"),(0,r.kt)("li",{parentName:"ol"},"VXLAN"),(0,r.kt)("li",{parentName:"ol"},"Wake on LAN (WoL)"),(0,r.kt)("li",{parentName:"ol"},"NFLOG (Linux Netfilter NFLOG) - parsing only (no editing capabilities)")),(0,r.kt)("h3",{id:"network-layer-l3"},"Network Layer (L3)"),(0,r.kt)("ol",{start:14},(0,r.kt)("li",{parentName:"ol"},"ARP"),(0,r.kt)("li",{parentName:"ol"},"GRE"),(0,r.kt)("li",{parentName:"ol"},"ICMP"),(0,r.kt)("li",{parentName:"ol"},"ICMPv6"),(0,r.kt)("li",{parentName:"ol"},"IGMP (IGMPv1, IGMPv2 and IGMPv3 are supported)"),(0,r.kt)("li",{parentName:"ol"},"IPv4"),(0,r.kt)("li",{parentName:"ol"},"IPv6"),(0,r.kt)("li",{parentName:"ol"},"MPLS"),(0,r.kt)("li",{parentName:"ol"},"NDP"),(0,r.kt)("li",{parentName:"ol"},"Raw IP (IPv4 & IPv6)"),(0,r.kt)("li",{parentName:"ol"},"VRRP (IPv4 & IPv6)")),(0,r.kt)("h3",{id:"transport-layer-l4"},"Transport Layer (L4)"),(0,r.kt)("ol",{start:25},(0,r.kt)("li",{parentName:"ol"},"COTP"),(0,r.kt)("li",{parentName:"ol"},"GTP (v1)"),(0,r.kt)("li",{parentName:"ol"},"IPSec AH & ESP - parsing only (no editing capabilities)"),(0,r.kt)("li",{parentName:"ol"},"TCP"),(0,r.kt)("li",{parentName:"ol"},"TPKT"),(0,r.kt)("li",{parentName:"ol"},"UDP")),(0,r.kt)("h3",{id:"session-layer-l5"},"Session Layer (L5)"),(0,r.kt)("ol",{start:31},(0,r.kt)("li",{parentName:"ol"},"SDP"),(0,r.kt)("li",{parentName:"ol"},"SIP")),(0,r.kt)("h3",{id:"presentation-layer-l6"},"Presentation Layer (L6)"),(0,r.kt)("ol",{start:33},(0,r.kt)("li",{parentName:"ol"},"SSL/TLS - parsing only (no editing capabilities)")),(0,r.kt)("h3",{id:"application-layer-l7"},"Application Layer (L7)"),(0,r.kt)("ol",{start:34},(0,r.kt)("li",{parentName:"ol"},"ASN.1 decoder and encoder"),(0,r.kt)("li",{parentName:"ol"},"BGP (v4)"),(0,r.kt)("li",{parentName:"ol"},"DHCP"),(0,r.kt)("li",{parentName:"ol"},"DHCPv6"),(0,r.kt)("li",{parentName:"ol"},"DNS"),(0,r.kt)("li",{parentName:"ol"},"FTP"),(0,r.kt)("li",{parentName:"ol"},"HTTP headers (request & response)"),(0,r.kt)("li",{parentName:"ol"},"LDAP"),(0,r.kt)("li",{parentName:"ol"},"NTP (v3, v4)"),(0,r.kt)("li",{parentName:"ol"},"Radius"),(0,r.kt)("li",{parentName:"ol"},"S7 Communication (S7comm)"),(0,r.kt)("li",{parentName:"ol"},"SMTP"),(0,r.kt)("li",{parentName:"ol"},"SOME/IP"),(0,r.kt)("li",{parentName:"ol"},"SSH - parsing only (no editing capabilities)"),(0,r.kt)("li",{parentName:"ol"},"Telnet - parsing only (no editing capabilities)"),(0,r.kt)("li",{parentName:"ol"},"Generic payload")),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"PcapPlusPlus is released under the ",(0,r.kt)("a",{parentName:"p",href:"https://unlicense.org/"},"Unlicense license"),"."))}m.isMDXComponent=!0}}]);