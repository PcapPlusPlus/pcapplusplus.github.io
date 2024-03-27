"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[6234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={title:"Build on MacOS"},i="Build From Source on MacOS",o={unversionedId:"install/macos",id:"version-v23.09/install/macos",title:"Build on MacOS",description:"Prerequisites",source:"@site/versioned_docs/version-v23.09/install/macos.mdx",sourceDirName:"install",slug:"/install/macos",permalink:"/docs/install/macos",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v23.09/install/macos.mdx",tags:[],version:"v23.09",frontMatter:{title:"Build on MacOS"},sidebar:"docs",previous:{title:"Build on Linux",permalink:"/docs/install/linux"},next:{title:"Build on Windows (VS)",permalink:"/docs/install/vs"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build",id:"build",level:2},{value:"Installation",id:"installation",level:2},{value:"Running tests",id:"running-tests",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"build-from-source-on-macos"},"Build From Source on MacOS"),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"In order to compile PcapPlusPlus on MacOS please make sure you have the following components installed:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"Xcode")," which contains all prerequisites required for PcapPlusPlus including gcc/g++ compiler and libpcap with all relevant header files"),(0,l.kt)("li",{parentName:"ol"},"PcapPlusPlus is available for both ",(0,l.kt)("strong",{parentName:"li"},"Intel")," and ",(0,l.kt)("strong",{parentName:"li"},"Apple Silicon")," processors. To cross-compile for a different architecture you can use the ",(0,l.kt)("inlineCode",{parentName:"li"},"-DCMAKE_OSX_ARCHITECTURES")," option, see more details below"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"OPTIONAL")," - install ",(0,l.kt)("a",{parentName:"li",href:"https://facebook.github.io/zstd/"},"Zstd")," if you wish to enable ",(0,l.kt)("a",{parentName:"li",href:"../features#readingwriting-pcapng-files-with-compression"},"PCAPNG streaming compression support"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install zstd\n")))),(0,l.kt)("h2",{id:"build"},"Build"),(0,l.kt)("p",null,"Assuming you want to build PcapPlusPlus into a ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cmake -S . -B build\n")),(0,l.kt)("p",null,"And then initiate the build in one of two ways:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using CMake:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cmake --build build\n"))),(0,l.kt)("li",{parentName:"ul"},"Using ",(0,l.kt)("inlineCode",{parentName:"li"},"make"),":",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd build\nmake\n")))),(0,l.kt)("p",null,"This process will build the following artifacts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PcapPlusPlus libs:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/Common++/libCommon++.a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/Packet++/libPacket++.a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build/Pcap++/libPcap++.a")))),(0,l.kt)("li",{parentName:"ul"},"PcapPlusPlus examples binaries under ",(0,l.kt)("inlineCode",{parentName:"li"},"build/examples_bin")),(0,l.kt)("li",{parentName:"ul"},"PcapPlusPlus tests:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<PcapPlusPlus_Dir>/Tests/Packet++Test/Bin/Packet++Test")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<PcapPlusPlus_Dir>/Tests/Pcap++Test/Bin/Pcap++Test"))))),(0,l.kt)("p",null,"The following configuration options are available (on top of CMake's built-in options):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_BUILD_EXAMPLES=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Build PcapPlusPlus examples (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"ON")," if building the project itself, otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_BUILD_TESTS=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Build PcapPlusPlus tests (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"ON")," if building the project itself, otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_BUILD_TUTORIALS=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Build PcapPlusPlus tutorials. This option is only available if ",(0,l.kt)("inlineCode",{parentName:"td"},"DPCAPPP_BUILD_EXAMPLES=ON"),". The tutorials binaries will be under ",(0,l.kt)("inlineCode",{parentName:"td"},"build/tutorials_bin")," (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_INSTALL=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Install PcapPlusPlus (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"ON")," if building the project itself, otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DBUILD_SHARED_LIBS=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Build shared libs (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DLIGHT_PCAPNG_ZSTD=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Build with Zstd to enable ",(0,l.kt)("a",{parentName:"td",href:"../features#readingwriting-pcapng-files-with-compression"},"PCAPNG streaming compression support")," (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DCMAKE_OSX_ARCHITECTURES=<x86_64,arm64>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Build for either Intel (x86_64) or Apple Silicon (arm64) architecture. If not provided, the default is the machine's architecture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_ENABLE_PCAP_IMMEDIATE_MODE=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Enable pcap immediate mode (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_ENABLE_PCAP_SET_DIRECTION=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Enable set direction for capturing incoming or outgoing packets (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"After the build is complete you can run the installation script which will copy the libraries, header files and examples into the installation directories:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo cmake --install .\n")),(0,l.kt)("p",null,"If you want to install on a non-default directory you can use this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'DESTDIR=<DIR> cmake --install build --prefix "/"\n')),(0,l.kt)("h2",{id:"running-tests"},"Running tests"),(0,l.kt)("p",null,"PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. ",(0,l.kt)("a",{parentName:"p",href:"../tests"},"This guide")," contains detailed instructions on how to run them."))}d.isMDXComponent=!0}}]);