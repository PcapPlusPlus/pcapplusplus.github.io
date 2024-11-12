"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[6773],{8202:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"install/android","title":"Build for Android","description":"Prerequisites","source":"@site/versioned_docs/version-v21.11/install/android.mdx","sourceDirName":"install","slug":"/install/android","permalink":"/docs/v21.11/install/android","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v21.11/install/android.mdx","tags":[],"version":"v21.11","frontMatter":{"title":"Build for Android"},"sidebar":"docs","previous":{"title":"Build on Windows (MinGW)","permalink":"/docs/v21.11/install/mingw"},"next":{"title":"Build on FreeBSD","permalink":"/docs/v21.11/install/freebsd"}}');var t=s(4848),l=s(8453),r=s(4211);const d={title:"Build for Android"},o="Build From Source for Android",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Build the code",id:"build-the-code",level:2},{value:"Do I need a rooted device in order to use PcapPlusPlus in my Android app?",id:"do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app",level:2},{value:"Using PcapPlusPlus in my app",id:"using-pcapplusplus-in-my-app",level:2}];function p(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"build-from-source-for-android",children:"Build From Source for Android"})}),"\n",(0,t.jsx)(i.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(i.p,{children:"In order to build PcapPlusPlus for Android please make sure you have the following prerequisites:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"A Linux machine - building on other platforms is currently not supported"}),"\n",(0,t.jsxs)(i.li,{children:["You should have ",(0,t.jsx)(i.a,{href:"https://developer.android.com/ndk",children:"Android NDK"})," installed"]}),"\n",(0,t.jsxs)(i.li,{children:["Pre-compiled ",(0,t.jsx)(i.code,{children:"libpcap"})," library for Android + header files which can be downloaded from ",(0,t.jsxs)(i.a,{href:"https://github.com/seladb/libpcap-android",children:["the ",(0,t.jsx)(i.code,{children:"libpcap-android"})," GitHub repo"]})," (for Android API versions 21-30)"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(i.p,{children:"Run the configuration script from PcapPlusPlus main directory:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"./configure-android.sh\n"})}),"\n",(0,t.jsx)(i.p,{children:"This script accepts the following arguments:"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Argument"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Is mandatory / default value"}),(0,t.jsx)(i.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"--ndk-path"})})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Mandatory"}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["The path of Android NDK, for example: ",(0,t.jsx)(i.code,{children:"/opt/Android/Sdk/ndk/22.0.7026061"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"--target"})})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Mandatory"}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Target architecture which accepts the following values: ",(0,t.jsx)(i.code,{children:"arm64-v8a"}),", ",(0,t.jsx)(i.code,{children:"armeabi-v7a"}),", ",(0,t.jsx)(i.code,{children:"x86"}),", ",(0,t.jsx)(i.code,{children:"x86_64"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"--api"})})}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:["Optional. Default value is ",(0,t.jsx)(i.code,{children:"29"})]}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Android API level. Must be between 21 and 30"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"--libpcap-include-dir"})})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Mandatory"}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,t.jsx)(i.code,{children:"libpcap"})," header files directory. Can be downloaded from ",(0,t.jsxs)(i.a,{href:"https://github.com/seladb/libpcap-android",children:["the ",(0,t.jsx)(i.code,{children:"libpcap-android"})," GitHub repo"]})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{style:{textAlign:"left"},children:(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"--libpcap-lib-dir"})})}),(0,t.jsx)(i.td,{style:{textAlign:"left"},children:"Mandatory"}),(0,t.jsxs)(i.td,{style:{textAlign:"left"},children:[(0,t.jsx)(i.code,{children:"libpcap"})," pre-compiled libs directory. Can be downloaded from ",(0,t.jsxs)(i.a,{href:"https://github.com/seladb/libpcap-android",children:["the ",(0,t.jsx)(i.code,{children:"libpcap-android"})," GitHub repo"]})," for all 4 targets and API versions 21-30"]})]})]})]}),"\n",(0,t.jsx)(i.p,{children:"Here is an example output:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"./configure-android.sh --ndk-path /opt/Android/Sdk/ndk/22.0.7026061 --target arm64-v8a --api 29 --libpcap-include-dir ~/libpcap-android/include --libpcap-lib-dir ~/libpcap-android/arm64-v8a/29\n\n******************************************\nPcapPlusPlus Android configuration script\n******************************************\n\nPcapPlusPlus configuration is complete. Files created (or modified): mk/platform.mk, mk/PcapPlusPlus.mk\n"})}),"\n",(0,t.jsx)(i.h2,{id:"build-the-code",children:"Build the code"}),"\n",(0,t.jsx)(i.p,{children:"After running the config script, you're can safely build the code:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Run ",(0,t.jsx)(i.code,{children:"make libs"})," to build PcapPlusPlus libraries only (which is the common use-case for Android) or ",(0,t.jsx)(i.code,{children:"make all"})," to build everything including the unit-tests and examples"]}),"\n",(0,t.jsxs)(i.li,{children:["After a successful build you can find the libraries, header files, example executables (if built) and helpful makefiles under the ",(0,t.jsx)(i.code,{children:"Dist"})," directory"]}),"\n",(0,t.jsxs)(i.li,{children:["Please notice that in order to run ",(0,t.jsx)(i.a,{href:"../examples",children:"PcapPlusPlus examples"})," on an Android device you need shell access, and for some of them you also need a rooted device"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"do-i-need-a-rooted-device-in-order-to-use-pcapplusplus-in-my-android-app",children:"Do I need a rooted device in order to use PcapPlusPlus in my Android app?"}),"\n","\n",(0,t.jsxs)(i.p,{children:["The quick answer is no. A lot of PcapPlusPlus functionality will work on any device and any app. However, on non-rooted devices some of the features may not work. The main reason is that non-rooted devices do not allow access to the device's network interfaces and configuration. That means that capturing live network traffic using ",(0,t.jsx)(r.A,{relativePath:"/classpcpp_1_1_pcap_live_device.html",children:(0,t.jsx)(i.code,{children:"PcapLiveDevice"})})," may not work, as well as opening raw sockets with ",(0,t.jsx)(r.A,{relativePath:"/classpcpp_1_1_raw_socket_device.html",children:(0,t.jsx)(i.code,{children:"RawSocketDevice"})}),". You may also need your app to request ",(0,t.jsx)(i.a,{href:"https://developer.android.com/training/data-storage",children:"additional permissions to read and write files"})," in order to read and write pcap/pcapng files."]}),"\n",(0,t.jsxs)(i.p,{children:["But other than that, most of the features should work including parsing and analyzing of network packets and the ",(0,t.jsx)(i.a,{href:"../features#supported-network-protocols",children:"various protocols"})," supported by PcapPlusPlus, which is what ",(0,t.jsx)(i.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus",children:"ToyVpn-PcapPlusPlus"})," demonstrates."]}),"\n",(0,t.jsxs)(i.p,{children:["If you do have a rooted device most of PcapPlusPlus features should work. Please feel free to ",(0,t.jsx)(i.a,{href:"https://github.com/seladb/PcapPlusPlus/issues",children:"open an issue"})," if something is not working as expected."]}),"\n",(0,t.jsx)(i.h2,{id:"using-pcapplusplus-in-my-app",children:"Using PcapPlusPlus in my app"}),"\n",(0,t.jsxs)(i.p,{children:["PcapPlusPlus is a native C++ library so in order to use it in an Android app you need to get familiar with ",(0,t.jsx)(i.a,{href:"https://developer.android.com/ndk",children:"Android NDK"})," which is the toolset for using native code in Android apps."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus",children:"ToyVpn-PcapPlusPlus"})," is a good way to get started because it provides a very simple yet end-to-end example of writing PcapPlusPlus code and integrating it with the app. Here are a few links to parts in the code you might find interesting:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/cpp/pcapplusplus_interface.cpp",children:(0,t.jsx)(i.code,{children:"pcapplusplus_interface.cpp"})})," - the C++ code that uses PcapPlusPlus. It exposes 2 ",(0,t.jsx)(i.a,{href:"https://developer.android.com/training/articles/perf-jni",children:"JNI"})," methods that are used within the app"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/cpp/CMakeLists.txt",children:(0,t.jsx)(i.code,{children:"CMakeLists.txt"})})," - a CMake file to build the native code"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/app/src/main/java/com/example/android/pcapplusplus/PcapPlusPlusInterface.kt",children:(0,t.jsx)(i.code,{children:"PcapPlusPlusInterface.kt"})})," - a Kotlin file that uses the native JNI methods"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["If you want to learn more we strongly recommend going over ",(0,t.jsxs)(i.a,{href:"https://github.com/seladb/ToyVpn-PcapPlusPlus/blob/master/README.md",children:["ToyVpn-PcapPlusPlus's ",(0,t.jsx)(i.code,{children:"README.md"})]})," file as it contains very detail information of how PcapPlusPlus can be used in a real Android app."]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},4211:(e,i,s)=>{s.d(i,{A:()=>r});s(6540);var n=s(4070),t=s(6025),l=s(4848);const r=function(e){let{relativePath:i,children:s}=e;return(0,l.jsx)("a",{href:(0,t.Ay)(`/api-docs/${(0,n.ir)().label.toLowerCase()}${i}`),children:s})}},8453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>d});var n=s(6540);const t={},l=n.createContext(t);function r(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);