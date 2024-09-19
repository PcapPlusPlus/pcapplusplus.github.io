"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[9361],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),o=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?i.createElement(h,l(l({ref:t},c),{},{components:a})):i.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var o=2;o<r;o++)l[o]=a[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1054:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(7294),n=a(2232);const r=function(e){let{relativePath:t,children:a}=e;return i.createElement("a",{href:(0,n.E2)()+t},a)}},2232:(e,t,a)=>{a.d(t,{E2:()=>d,K7:()=>p,Wx:()=>c,hv:()=>r,kq:()=>l,rU:()=>u,s6:()=>s,u$:()=>o,vR:()=>m});var i=a(143);const n="https://github.com/seladb/PcapPlusPlus";function r(){return n}function l(){const e=(0,i.yW)(),t=(0,i.zu)();return"Next"===t.label?e.label:t.label}function p(e){return`${n}/releases/tag/${e}`}function s(){return p(l())}function o(){return`${n}/archive/${l()}.zip`}function c(){return`${n}/archive/${l()}.tar.gz`}function d(){const e=(0,i.zu)(),t="Next"===e.label?"master":e.label;return`${n}/tree/${t}`}function u(){return`${n}/archive/master.zip`}function m(){return`${n}/archive/master.tar.gz`}},8110:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var i=a(7462),n=(a(7294),a(3905)),r=a(1054);const l={title:"Example Apps",sidebar_position:7},p="Example Applications",s={unversionedId:"examples",id:"version-v24.09/examples",title:"Example Apps",description:"PcapPlusPlus contains various example applications that make use of most PcapPlusPlus APIs and features. Although some of them may be useful on their own (like arping or arp-spoofing), their main objective is to show how to use PcapPlusPlus. All examples are well documented and contain code which is easy to understand. After compiling PcapPlusPlus all compiled applications are under Dist/examples. Here is the list of example applications:",source:"@site/versioned_docs/version-v24.09/examples.mdx",sourceDirName:".",slug:"/examples",permalink:"/docs/examples",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v24.09/examples.mdx",tags:[],version:"v24.09",sidebarPosition:7,frontMatter:{title:"Example Apps",sidebar_position:7},sidebar:"docs",previous:{title:"Supported platforms",permalink:"/docs/platforms"},next:{title:"Benchmarks",permalink:"/docs/benchmark"}},o={},c=[{value:'<CodeLink relativePath="/Examples/ArpSpoofing">ArpSpoofing</CodeLink>',id:"arpspoofing",level:2},{value:'<CodeLink relativePath="/Examples/Arping">Arping</CodeLink>',id:"arping",level:2},{value:'<CodeLink relativePath="/Examples/DnsSpoofing">DnsSpoofing</CodeLink>',id:"dnsspoofing",level:2},{value:'<CodeLink relativePath="/Examples/DNSResolver">DNSResolver</CodeLink>',id:"dnsresolver",level:2},{value:'<CodeLink relativePath="/Examples/IcmpFileTransfer">IcmpFileTransfer</CodeLink>',id:"icmpfiletransfer",level:2},{value:'<CodeLink relativePath="/Examples/HttpAnalyzer">HttpAnalyzer</CodeLink>',id:"httpanalyzer",level:2},{value:'<CodeLink relativePath="/Examples/SSLAnalyzer">SSLAnalyzer</CodeLink>',id:"sslanalyzer",level:2},{value:'<CodeLink relativePath="/Examples/DpdkExample-FilterTraffic">DpdkExample-FilterTraffic</CodeLink>',id:"dpdkexample-filtertraffic",level:2},{value:'<CodeLink relativePath="/Examples/DpdkBridge">DpdkBridge</CodeLink>',id:"dpdkbridge",level:2},{value:'<CodeLink relativePath="/Examples/KniPong">KniPong</CodeLink>',id:"knipong",level:2},{value:'<CodeLink relativePath="/Examples/PfRingExample-FilterTraffic">PfRingExample-FilterTraffic</CodeLink>',id:"pfringexample-filtertraffic",level:2},{value:'<CodeLink relativePath="/Examples/XdpExample-FilterTraffic">XdpExample-FilterTraffic</CodeLink>',id:"xdpexample-filtertraffic",level:2},{value:'<CodeLink relativePath="/Examples/PcapPrinter">PcapPrinter</CodeLink>',id:"pcapprinter",level:2},{value:'<CodeLink relativePath="/Examples/PcapSplitter">PcapSplitter</CodeLink>',id:"pcapsplitter",level:2},{value:'<CodeLink relativePath="/Examples/PcapSearch">PcapSearch</CodeLink>',id:"pcapsearch",level:2},{value:'<CodeLink relativePath="/Examples/TcpReassembly">TcpReassembly</CodeLink>',id:"tcpreassembly",level:2},{value:'<CodeLink relativePath="/Examples/IPFragUtil">IPFragUtil</CodeLink>',id:"ipfragutil",level:2},{value:'<CodeLink relativePath="/Examples/IPDefragUtil">IPDefragUtil</CodeLink>',id:"ipdefragutil",level:2},{value:'<CodeLink relativePath="/Examples/TLSFingerprinting">TLSFingerprinting</CodeLink>',id:"tlsfingerprinting",level:2},{value:'<CodeLink relativePath="/Examples/PcapPlusPlus-benchmark">PcapPlusPlus-benchmark</CodeLink>',id:"pcapplusplus-benchmark",level:2}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"example-applications"},"Example Applications"),(0,n.kt)("p",null,"PcapPlusPlus contains various example applications that make use of most PcapPlusPlus APIs and features. Although some of them may be useful on their own (like arping or arp-spoofing), their main objective is to show how to use PcapPlusPlus. All examples are well documented and contain code which is easy to understand. After compiling PcapPlusPlus all compiled applications are under Dist/examples. Here is the list of example applications:"),(0,n.kt)("h2",{id:"arpspoofing"},(0,n.kt)(r.Z,{relativePath:"/Examples/ArpSpoofing",mdxType:"CodeLink"},"ArpSpoofing")),(0,n.kt)("p",null,"An application that does ARP spoofing using Packet++ and Pcap++. You can read more about ARP spoofing ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ARP_spoofing"},"here"),"."),(0,n.kt)("h2",{id:"arping"},(0,n.kt)(r.Z,{relativePath:"/Examples/Arping",mdxType:"CodeLink"},"Arping")),(0,n.kt)("p",null,"An implementation of the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Arping"},"arping")," utility using PcapPlusPlus."),(0,n.kt)("h2",{id:"dnsspoofing"},(0,n.kt)(r.Z,{relativePath:"/Examples/DnsSpoofing",mdxType:"CodeLink"},"DnsSpoofing")),(0,n.kt)("p",null,"A command-line utility that does ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/DNS_spoofing"},"DNS spoofing")," using Packet++ and Pcap++."),(0,n.kt)("h2",{id:"dnsresolver"},(0,n.kt)(r.Z,{relativePath:"/Examples/DNSResolver",mdxType:"CodeLink"},"DNSResolver")),(0,n.kt)("p",null,"A command-line utility that resolves IPv4 address for an hostname using ARP and DNS protocols."),(0,n.kt)("h2",{id:"icmpfiletransfer"},(0,n.kt)(r.Z,{relativePath:"/Examples/IcmpFileTransfer",mdxType:"CodeLink"},"IcmpFileTransfer")),(0,n.kt)("p",null,"An application that demonstrates how to transfer files between two machines using only ICMP messages. The basic idea is to use the data part of ICMP messages to transfer chunks of the file between the machines. You can read more about it ",(0,n.kt)("a",{parentName:"p",href:"http://www.unixist.com/security/data-transfer-over-icmp/index.html"},"here"),"."),(0,n.kt)("h2",{id:"httpanalyzer"},(0,n.kt)(r.Z,{relativePath:"/Examples/HttpAnalyzer",mdxType:"CodeLink"},"HttpAnalyzer")),(0,n.kt)("p",null,"An application that analyzes HTTP traffic and presents detailed and diverse information about it such as packet count and rate, bandwidth, flow count and rate, HTTP requests and responses count and rate, hostname histogram, content-type histogram, status code histogram and much more. Can operate on live traffic or read packets from a pcap file."),(0,n.kt)("h2",{id:"sslanalyzer"},(0,n.kt)(r.Z,{relativePath:"/Examples/SSLAnalyzer",mdxType:"CodeLink"},"SSLAnalyzer")),(0,n.kt)("p",null,"An application that analyzes SSL/TLS traffic and presents detailed and diverse information about it such as packet count and rate, bandwidth, flow count and rate, SSL/TLS messages count, hostname histogram, SSL/TLS version count, cipher-suite count and much more. Can operate on live traffic or read packets from a pcap file."),(0,n.kt)("h2",{id:"dpdkexample-filtertraffic"},(0,n.kt)(r.Z,{relativePath:"/Examples/DpdkExample-FilterTraffic",mdxType:"CodeLink"},"DpdkExample-FilterTraffic")),(0,n.kt)("p",null,"An application that demonstrates PcapPlusPlus DPDK APIs. This application listens to one or more DPDK ports (a.k.a DPDK devices), captures all traffic and matches packets by user-defined matching criteria such as source/dest IP, source/dest TCP/UDP port and more. Matched packets can be sent to another DPDK port and/or be saved to a pcap file. In addition the application collects statistics on received and matched packets."),(0,n.kt)("h2",{id:"dpdkbridge"},(0,n.kt)(r.Z,{relativePath:"/Examples/DpdkBridge",mdxType:"CodeLink"},"DpdkBridge")),(0,n.kt)("p",null,"An application that demonstrates how to create a bridge between two network devices (similar to DPDK's L2 forwarding example) using PcapPlusPlus DPDK APIs."),(0,n.kt)("h2",{id:"knipong"},(0,n.kt)(r.Z,{relativePath:"/Examples/KniPong",mdxType:"CodeLink"},"KniPong")),(0,n.kt)("p",null,"An application that demonstrates PcapPlusPlus wrapper for DPDK KNI. It emulates the Unix NETCAT utility run with -u key. It is basically a ping/pong client/server channel using user provided input from stdin."),(0,n.kt)("h2",{id:"pfringexample-filtertraffic"},(0,n.kt)(r.Z,{relativePath:"/Examples/PfRingExample-FilterTraffic",mdxType:"CodeLink"},"PfRingExample-FilterTraffic")),(0,n.kt)("p",null,"An application that demonstrates PcapPlusPlus PF_RING APIs. This application listens to a PF_RING interface, captures all traffic and matches packets by user-defined matching criteria such as source/dest IP, source/dest TCP/UDP port and more. Matched packets can be sent to another PF_RING interface and/or be saved to a pcap file. In addition the application collects statistics on received and matched packets."),(0,n.kt)("h2",{id:"xdpexample-filtertraffic"},(0,n.kt)(r.Z,{relativePath:"/Examples/XdpExample-FilterTraffic",mdxType:"CodeLink"},"XdpExample-FilterTraffic")),(0,n.kt)("p",null,"An application that demonstrates PcapPlusPlus ",(0,n.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/next/networking/af_xdp.html"},"AF_XDP")," APIs. This application opens an AF_XDP socket, receives packets on it and matches the packets by user-defined matching criteria such as source/dest IP, source/dest TCP/UDP port and more. Matched packets can be sent to another AF_XDP socket and/or be saved to a pcap file. In addition the application collects statistics on received and matched packets."),(0,n.kt)("h2",{id:"pcapprinter"},(0,n.kt)(r.Z,{relativePath:"/Examples/PcapPrinter",mdxType:"CodeLink"},"PcapPrinter")),(0,n.kt)("p",null,"A simple application that outputs packets from a pcap file as a readable string."),(0,n.kt)("h2",{id:"pcapsplitter"},(0,n.kt)(r.Z,{relativePath:"/Examples/PcapSplitter",mdxType:"CodeLink"},"PcapSplitter")),(0,n.kt)("p",null,"An application that splits pcap files into smaller pcap files by various criteria defined by the user like file size, packet count, split per connection, per client-ip, per server-ip, per server-port (protocol) or per IP src + IP dst (2-tuple). This application is very advanced compared to similar tools, for example: there is no limit on input file size or packet count, no technical limit on number of output files (unless the user sets a limit), support for both IPv4 and IPv6, and a lot more."),(0,n.kt)("h2",{id:"pcapsearch"},(0,n.kt)(r.Z,{relativePath:"/Examples/PcapSearch",mdxType:"CodeLink"},"PcapSearch")),(0,n.kt)("p",null,"An application that search inside pcap files in a directory/ies given by the user and counts how many packet match a user-defined pattern given in a BPF format."),(0,n.kt)("h2",{id:"tcpreassembly"},(0,n.kt)(r.Z,{relativePath:"/Examples/TcpReassembly",mdxType:"CodeLink"},"TcpReassembly")),(0,n.kt)("p",null,"An application that captures data transmitted as part of TCP connections, organizes the data and stores it in a way that is convenient for protocol analysis and debugging. This application reconstructs the TCP data streams and stores each connection in a separate file(s). TcpReassembly understands TCP sequence numbers and will correctly reconstruct data streams regardless of retransmissions, out-of-order delivery or data loss."),(0,n.kt)("h2",{id:"ipfragutil"},(0,n.kt)(r.Z,{relativePath:"/Examples/IPFragUtil",mdxType:"CodeLink"},"IPFragUtil")),(0,n.kt)("p",null,"A utility for splitting IP packets into fragments. It works on pcap and pcapng files and allows the user to choose which packets to fragment and to which size. Works on IPv4 and IPv6 packets."),(0,n.kt)("h2",{id:"ipdefragutil"},(0,n.kt)(r.Z,{relativePath:"/Examples/IPDefragUtil",mdxType:"CodeLink"},"IPDefragUtil")),(0,n.kt)("p",null,"A utility for reassembling IP fragments back to IP packets. It works on pcap and pcapng files and allows the user to choose which fragments to reassemble. Works on IPv4 and IPv6 packets."),(0,n.kt)("h2",{id:"tlsfingerprinting"},(0,n.kt)(r.Z,{relativePath:"/Examples/TLSFingerprinting",mdxType:"CodeLink"},"TLSFingerprinting")),(0,n.kt)("p",null,"An application the demonstrates how to collect ClientHello (JA3) and ServerHello (JA3S) TLS fingerprints from live traffic or pcap files, write them to an output file and display various statistics."),(0,n.kt)("h2",{id:"pcapplusplus-benchmark"},(0,n.kt)(r.Z,{relativePath:"/Examples/PcapPlusPlus-benchmark",mdxType:"CodeLink"},"PcapPlusPlus-benchmark")),(0,n.kt)("p",null,"The benchmark application used for measuring PcapPlusPlus performance. See ",(0,n.kt)("a",{parentName:"p",href:"./benchmark"},"benchmark page")," for more details. This application currently compiles on Linux only (where benchmark was running on)."))}u.isMDXComponent=!0}}]);