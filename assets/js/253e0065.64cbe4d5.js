"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[3259],{8288:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"install/macos","title":"Build on MacOS","description":"Prerequisites","source":"@site/versioned_docs/version-v23.09/install/macos.mdx","sourceDirName":"install","slug":"/install/macos","permalink":"/docs/v23.09/install/macos","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v23.09/install/macos.mdx","tags":[],"version":"v23.09","frontMatter":{"title":"Build on MacOS"},"sidebar":"docs","previous":{"title":"Build on Linux","permalink":"/docs/v23.09/install/linux"},"next":{"title":"Build on Windows (VS)","permalink":"/docs/v23.09/install/vs"}}');var n=s(4848),t=s(8453);const r={title:"Build on MacOS"},c="Build From Source on MacOS",d={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build",id:"build",level:2},{value:"Installation",id:"installation",level:2},{value:"Running tests",id:"running-tests",level:2}];function a(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.header,{children:(0,n.jsx)(l.h1,{id:"build-from-source-on-macos",children:"Build From Source on MacOS"})}),"\n",(0,n.jsx)(l.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(l.p,{children:"In order to compile PcapPlusPlus on MacOS please make sure you have the following components installed:"}),"\n",(0,n.jsxs)(l.ol,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.apple.com/xcode/",children:"Xcode"})," which contains all prerequisites required for PcapPlusPlus including gcc/g++ compiler and libpcap with all relevant header files"]}),"\n",(0,n.jsxs)(l.li,{children:["PcapPlusPlus is available for both ",(0,n.jsx)(l.strong,{children:"Intel"})," and ",(0,n.jsx)(l.strong,{children:"Apple Silicon"})," processors. To cross-compile for a different architecture you can use the ",(0,n.jsx)(l.code,{children:"-DCMAKE_OSX_ARCHITECTURES"})," option, see more details below"]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.strong,{children:"OPTIONAL"})," - install ",(0,n.jsx)(l.a,{href:"https://facebook.github.io/zstd/",children:"Zstd"})," if you wish to enable ",(0,n.jsx)(l.a,{href:"../features#readingwriting-pcapng-files-with-compression",children:"PCAPNG streaming compression support"}),":","\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:"brew install zstd\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"build",children:"Build"}),"\n",(0,n.jsxs)(l.p,{children:["Assuming you want to build PcapPlusPlus into a ",(0,n.jsx)(l.code,{children:"build"})," directory:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:"cmake -S . -B build\n"})}),"\n",(0,n.jsx)(l.p,{children:"And then initiate the build in one of two ways:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["Using CMake:","\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:"cmake --build build\n"})}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["Using ",(0,n.jsx)(l.code,{children:"make"}),":","\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:"cd build\nmake\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"This process will build the following artifacts:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:["PcapPlusPlus libs:","\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.code,{children:"build/Common++/libCommon++.a"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.code,{children:"build/Packet++/libPacket++.a"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.code,{children:"build/Pcap++/libPcap++.a"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(l.li,{children:["PcapPlusPlus examples binaries under ",(0,n.jsx)(l.code,{children:"build/examples_bin"})]}),"\n",(0,n.jsxs)(l.li,{children:["PcapPlusPlus tests:","\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.code,{children:"<PcapPlusPlus_Dir>/Tests/Packet++Test/Bin/Packet++Test"})}),"\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.code,{children:"<PcapPlusPlus_Dir>/Tests/Pcap++Test/Bin/Pcap++Test"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(l.p,{children:"The following configuration options are available (on top of CMake's built-in options):"}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(l.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.code,{children:"-DPCAPPP_BUILD_EXAMPLES=<ON/OFF>"})})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["Build PcapPlusPlus examples (default value is ",(0,n.jsx)(l.code,{children:"ON"})," if building the project itself, otherwise ",(0,n.jsx)(l.code,{children:"OFF"}),")"]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.code,{children:"-DPCAPPP_BUILD_TESTS=<ON/OFF>"})})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["Build PcapPlusPlus tests (default value is ",(0,n.jsx)(l.code,{children:"ON"})," if building the project itself, otherwise ",(0,n.jsx)(l.code,{children:"OFF"}),")"]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.code,{children:"-DPCAPPP_BUILD_TUTORIALS=<ON/OFF>"})})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["Build PcapPlusPlus tutorials. This option is only available if ",(0,n.jsx)(l.code,{children:"DPCAPPP_BUILD_EXAMPLES=ON"}),". The tutorials binaries will be under ",(0,n.jsx)(l.code,{children:"build/tutorials_bin"})," (default value is ",(0,n.jsx)(l.code,{children:"OFF"}),")"]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.code,{children:"-DPCAPPP_INSTALL=<ON/OFF>"})})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["Install PcapPlusPlus (default value is ",(0,n.jsx)(l.code,{children:"ON"})," if building the project itself, otherwise ",(0,n.jsx)(l.code,{children:"OFF"}),")"]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.code,{children:"-DBUILD_SHARED_LIBS=<ON/OFF>"})})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["Build shared libs (default value is ",(0,n.jsx)(l.code,{children:"OFF"}),")"]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.code,{children:"-DLIGHT_PCAPNG_ZSTD=<ON/OFF>"})})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["Build with Zstd to enable ",(0,n.jsx)(l.a,{href:"../features#readingwriting-pcapng-files-with-compression",children:"PCAPNG streaming compression support"})," (default value is ",(0,n.jsx)(l.code,{children:"OFF"}),")"]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.code,{children:"-DCMAKE_OSX_ARCHITECTURES=<x86_64,arm64>"})})}),(0,n.jsx)(l.td,{style:{textAlign:"left"},children:"Build for either Intel (x86_64) or Apple Silicon (arm64) architecture. If not provided, the default is the machine's architecture"})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.code,{children:"-DPCAPPP_ENABLE_PCAP_IMMEDIATE_MODE=<ON/OFF>"})})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["Enable pcap immediate mode (default value is ",(0,n.jsx)(l.code,{children:"OFF"}),")"]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{style:{textAlign:"left"},children:(0,n.jsx)(l.strong,{children:(0,n.jsx)(l.code,{children:"-DPCAPPP_ENABLE_PCAP_SET_DIRECTION=<ON/OFF>"})})}),(0,n.jsxs)(l.td,{style:{textAlign:"left"},children:["Enable set direction for capturing incoming or outgoing packets (default value is ",(0,n.jsx)(l.code,{children:"OFF"}),")"]})]})]})]}),"\n",(0,n.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(l.p,{children:"After the build is complete you can run the installation script which will copy the libraries, header files and examples into the installation directories:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:"sudo cmake --install .\n"})}),"\n",(0,n.jsx)(l.p,{children:"If you want to install on a non-default directory you can use this command:"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-shell",children:'DESTDIR=<DIR> cmake --install build --prefix "/"\n'})}),"\n",(0,n.jsx)(l.h2,{id:"running-tests",children:"Running tests"}),"\n",(0,n.jsxs)(l.p,{children:["PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. ",(0,n.jsx)(l.a,{href:"../tests",children:"This guide"})," contains detailed instructions on how to run them."]})]})}function h(e={}){const{wrapper:l}={...(0,t.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,l,s)=>{s.d(l,{R:()=>r,x:()=>c});var i=s(6540);const n={},t=i.createContext(n);function r(e){const l=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(t.Provider,{value:l},e.children)}}}]);