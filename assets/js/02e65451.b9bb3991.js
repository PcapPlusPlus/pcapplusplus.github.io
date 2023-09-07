"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[2556],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(k,r(r({ref:t},u),{},{components:a})):n.createElement(k,r({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const i={title:"Build on Windows (VS)"},r="Build From Source on Windows - Visual Studio",o={unversionedId:"install/vs",id:"install/vs",title:"Build on Windows (VS)",description:"Please visit the supported platforms page to see the Visual Studio versions currently supported in PcapPlusPlus.",source:"@site/docs/install/vs.mdx",sourceDirName:"install",slug:"/install/vs",permalink:"/docs/next/install/vs",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/docs/install/vs.mdx",tags:[],version:"current",frontMatter:{title:"Build on Windows (VS)"},sidebar:"docs",previous:{title:"Build on MacOS",permalink:"/docs/next/install/macos"},next:{title:"Build on Windows (MinGW-w64)",permalink:"/docs/next/install/mingw"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build",id:"build",level:2},{value:"Installation",id:"installation",level:2},{value:"Running tests",id:"running-tests",level:2}],u={toc:s};function d(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"build-from-source-on-windows---visual-studio"},"Build From Source on Windows - Visual Studio"),(0,l.kt)("p",null,"Please visit the ",(0,l.kt)("a",{parentName:"p",href:"../platforms"},"supported platforms page")," to see the Visual Studio versions currently supported in PcapPlusPlus."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"In order to build PcapPlusPlus on Windows with Visual Studio you need the following components:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"A ",(0,l.kt)("a",{parentName:"p",href:"../platforms"},"supported version")," of Microsoft Visual Studio")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"CMake")," which can be installed from: ",(0,l.kt)("a",{parentName:"p",href:"https://cmake.org/install/"},"https://cmake.org/install/")," or with ",(0,l.kt)("inlineCode",{parentName:"p"},"pacman")," if using MSYS2: ",(0,l.kt)("inlineCode",{parentName:"p"},"pacman -S mingw-w64-x86_64-cmake"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download and install ",(0,l.kt)("a",{parentName:"p",href:"https://www.winpcap.org/install/"},"WinPcap")," ",(0,l.kt)("strong",{parentName:"p"},"OR")," ",(0,l.kt)("a",{parentName:"p",href:"https://npcap.com/#download"},"Npcap")," on your system"),(0,l.kt)("admonition",{parentName:"li",title:"Note for Npcap:",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you install ",(0,l.kt)("strong",{parentName:"p"},"Npcap")," please check the ",(0,l.kt)("inlineCode",{parentName:"p"},"Install Npcap in WinPcap API-compatilbility mode")," option during installation:"),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("img",{alt:"Npcap-WinPcap compatilibitly",src:a(3567).Z,width:"355",height:"75"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.winpcap.org/devel.htm"},"WinPcap developer's pack")," ",(0,l.kt)("strong",{parentName:"p"},"OR")," ",(0,l.kt)("a",{parentName:"p",href:"https://nmap.org/npcap/guide/npcap-devguide.html"},"Npcap SDK")," - containing the wpcap library PcapPlusPlus is linking with plus relevant ",(0,l.kt)("inlineCode",{parentName:"p"},"h")," files."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"WinPcap developer's pack can be downloaded from here: ",(0,l.kt)("a",{parentName:"li",href:"https://www.winpcap.org/devel.htm"},"https://www.winpcap.org/devel.htm")),(0,l.kt)("li",{parentName:"ol"},"Npcap SDK can be downloaded from here: ",(0,l.kt)("a",{parentName:"li",href:"https://nmap.org/npcap/#download"},"https://nmap.org/npcap/#download")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In some cases you also need to download and install:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads"},"Microsoft Visual C++ Redistributable")," for your version of Visual Studio"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/download/confirmation.aspx?id=14632"},"Microsoft Visual C++ 2010 Redistributable")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"OPTIONAL - download ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/zstd/releases/latest"},"Zstd")," libraries if you wish to enable ",(0,l.kt)("a",{parentName:"p",href:"../features#readingwriting-pcapng-files-with-compression"},"PCAPNG streaming compression support")))),(0,l.kt)("h2",{id:"build"},"Build"),(0,l.kt)("p",null,"Assuming you want to build PcapPlusPlus into a ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cmake -DPCAP_ROOT=<NpcapSDK_or_WinPcapDevPack_Directory> -S . -B build\n")),(0,l.kt)("p",null,"You can use the following CMake options to determine specific parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To build for a specific (non-default) version of Visual Studio you can use the ",(0,l.kt)("inlineCode",{parentName:"li"},"-G")," option, for example ",(0,l.kt)("inlineCode",{parentName:"li"},'-G "Visual Studio 16 2019"')," will builf for VS 2019"),(0,l.kt)("li",{parentName:"ul"},"To build for a specific platform you can use the ",(0,l.kt)("inlineCode",{parentName:"li"},"-A")," option, for example: ",(0,l.kt)("inlineCode",{parentName:"li"},"-A x64")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"-A Win32"))),(0,l.kt)("p",null,"This will create a VS Solution file in the build directory: ",(0,l.kt)("inlineCode",{parentName:"p"},"build\\PcapPlusPlus.sln")," and multiple VS project files ",(0,l.kt)("inlineCode",{parentName:"p"},".vcxproj"),"."),(0,l.kt)("p",null,"This solution file contains all the projects required to build the PcapPlusPlus libraries, examples, and tests. In this solution you'll find the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALL_BUILD"),"\nproject that builds everything."),(0,l.kt)("p",null,"There are multiple options to build PcapPlusPlus:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use CMake and choose the configuration:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cmake --build build --config Release\n"))),(0,l.kt)("li",{parentName:"ul"},"Open Visual Studio, choose platform and configuration and build the ",(0,l.kt)("inlineCode",{parentName:"li"},"ALL_BUILD")," project"),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"MSBuild")," and choose the platform and configuration, for example:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"msbuild PcapPlusPlus.sln -target:ALL_BUILD /p:Configuration=Release /p:Platform=x64\n")))),(0,l.kt)("p",null,"After a successful build the following artifacts will be created:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PcapPlusPlus libs:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build\\Common++\\<Debug/Release>\\libCommon++.a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build\\Packet++\\<Debug/Release>\\libPacket++.a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build\\Pcap++\\<Debug/Release>\\libPcap++.a")))),(0,l.kt)("li",{parentName:"ul"},"PcapPlusPlus examples binaries under ",(0,l.kt)("inlineCode",{parentName:"li"},"build\\examples_bin\\<Debug/Release>")),(0,l.kt)("li",{parentName:"ul"},"PcapPlusPlus tests:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<PcapPlusPlus_Dir>\\Tests\\Packet++Test\\Bin\\Packet++Test.exe")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<PcapPlusPlus_Dir>\\Tests\\Pcap++Test\\Bin\\Pcap++Test.exe"))))),(0,l.kt)("p",null,"The following configuration options are available (on top of CMake's built-in options):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAP_ROOT=<DIR>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Npcap SDK or WinPcap developer pack directory (mandatory option)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_BUILD_EXAMPLES=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Build PcapPlusPlus examples (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"ON")," if building the project itself, otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_BUILD_TESTS=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Build PcapPlusPlus tests (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"ON")," if building the project itself, otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_BUILD_TUTORIALS=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Build PcapPlusPlus tutorials. This option is only available if ",(0,l.kt)("inlineCode",{parentName:"td"},"DPCAPPP_BUILD_EXAMPLES=ON"),". The tutorials binaries will be under ",(0,l.kt)("inlineCode",{parentName:"td"},"build\\tutorials_bin")," (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_INSTALL=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Install PcapPlusPlus (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"ON")," if building the project itself, otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DBUILD_SHARED_LIBS=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Build shared libs (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_ENABLE_PCAP_IMMEDIATE_MODE=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Enable pcap immediate mode, available only in Npcap (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-DPCAPPP_ENABLE_PCAP_SET_DIRECTION=<ON/OFF>"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Enable set direction for capturing incoming or outgoing packets (default value is ",(0,l.kt)("inlineCode",{parentName:"td"},"OFF"),")")))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Windows doesn't have a default install directory, but you may want to see all libs, header files and examples under one directory (which is not the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," directory).\nHere is how to acheive that:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'set DESTDIR=<DIR>\ncmake --install build --prefix "/"\n')),(0,l.kt)("h2",{id:"running-tests"},"Running tests"),(0,l.kt)("p",null,"PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. ",(0,l.kt)("a",{parentName:"p",href:"../tests"},"This guide")," contains detailed instructions on how to run them."))}d.isMDXComponent=!0},3567:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);