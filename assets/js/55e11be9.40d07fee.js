"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[5419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={title:"Build on FreeBSD"},i="Build From Source on FreeBSD",o={unversionedId:"install/freebsd",id:"version-v22.11/install/freebsd",title:"Build on FreeBSD",description:"Prerequisites",source:"@site/versioned_docs/version-v22.11/install/freebsd.mdx",sourceDirName:"install",slug:"/install/freebsd",permalink:"/docs/v22.11/install/freebsd",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.11/install/freebsd.mdx",tags:[],version:"v22.11",frontMatter:{title:"Build on FreeBSD"},sidebar:"docs",previous:{title:"Build for Android",permalink:"/docs/v22.11/install/android"},next:{title:"Feature Overview",permalink:"/docs/v22.11/features"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Build the code",id:"build-the-code",level:2},{value:"Installation",id:"installation",level:2},{value:"Running tests",id:"running-tests",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"build-from-source-on-freebsd"},"Build From Source on FreeBSD"),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"In order to compile PcapPlusPlus on FreeBSD please make sure you have the following components installed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"git")," (if not installed please run: ",(0,l.kt)("inlineCode",{parentName:"li"},"pkg install git"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gsed")," (if not installed please run: ",(0,l.kt)("inlineCode",{parentName:"li"},"pkg install gsed"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gmake")," (if not installed please run: ",(0,l.kt)("inlineCode",{parentName:"li"},"pkg install gmake"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"libpcap")," (if not installed please run: ",(0,l.kt)("inlineCode",{parentName:"li"},"pkg install libpcap"),")")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Run the configuration script from PcapPlusPlus main directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./configure-freebsd.sh\n")),(0,l.kt)("p",null,"This script has the following command-line switches (you can also view then by running ",(0,l.kt)("inlineCode",{parentName:"p"},"./configure-freebsd.sh --help")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"./configure-freebsd.sh -h"),"):"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"no switches")),(0,l.kt)("td",{parentName:"tr",align:"left"},"use the default configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--use-immediate-mode"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"use libpcap immediate mode which enables getting packets as fast as possible (supported on libpcap>=1.5)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--set-direction-enabled"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"set direction for capturing incoming or outgoing packets (supported on libpcap>=0.9.1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--install-dir"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"set a custom installation directory. Default is ",(0,l.kt)("inlineCode",{parentName:"td"},"/usr/local"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--libpcap-include-dir"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"libpcap header files directory. This parameter is optional and if omitted PcapPlusPlus will look for the header files in the default include paths")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--libpcap-lib-dir"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"libpcap pre compiled lib directory. This parameter is optional and if omitted PcapPlusPlus will look for the lib file in the default lib paths")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"-h")),", ",(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"--help"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"displays a help message and exits. No further actions are performed")))),(0,l.kt)("p",null,"Here are a few examples:"),(0,l.kt)("p",null,"Default configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-freebsd.sh\n")),(0,l.kt)("p",null,"Configure PcapPlusPlus with libpcap's immediate mode:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-freebsd.sh --use-immediate-mode\n")),(0,l.kt)("p",null,"Configure PcapPlusPlus with libpcap's set direction:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-freebsd.sh --set-direction-enabled\n")),(0,l.kt)("p",null,"Provide non-standard paths for libpcap header and library files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-freebsd.sh --libpcap-include-dir /my-folder/my-libpcap/include --libpcap-lib-dir /my-folder/my-libpcap/lib\n")),(0,l.kt)("p",null,"Provide a custom installation directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./configure-freebsd.sh --install-dir /my-folder/my-install-dir\n")),(0,l.kt)("h2",{id:"build-the-code"},"Build the code"),(0,l.kt)("p",null,"After running the config script, you're can safely build the code:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Run ",(0,l.kt)("inlineCode",{parentName:"li"},"gmake")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"gmake all")," from PcapPlusPlus main directory"),(0,l.kt)("li",{parentName:"ol"},"This should compile all libraries, unit-tests and examples"),(0,l.kt)("li",{parentName:"ol"},"To build the libraries only (without the unit-tests and examples) run ",(0,l.kt)("inlineCode",{parentName:"li"},"gmake libs")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"gmake all")),(0,l.kt)("li",{parentName:"ol"},"After compilation you can find the libraries, examples, header files and helpful makefiles under the ",(0,l.kt)("inlineCode",{parentName:"li"},"Dist")," directory")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"After build is complete you can run the installation script which will copy the library and header files to the installation directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo gmake install\n")),(0,l.kt)("p",null,"The default installation directory is ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local")," which means the header files will be copied to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/include/pcapplusplus")," and the library files will be copied to ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/lib"),"."),(0,l.kt)("p",null,"You can change the installation directory by using the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"--install-dir"))," switch in the configuration script."),(0,l.kt)("h2",{id:"running-tests"},"Running tests"),(0,l.kt)("p",null,"PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. ",(0,l.kt)("a",{parentName:"p",href:"../tests"},"This guide")," contains detailed instructions on how to run them."))}u.isMDXComponent=!0}}]);