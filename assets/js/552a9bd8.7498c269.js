"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[9703],{1152:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"install/macos","title":"Build on MacOS","description":"Prerequisites","source":"@site/versioned_docs/version-v22.11/install/macos.mdx","sourceDirName":"install","slug":"/install/macos","permalink":"/docs/v22.11/install/macos","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.11/install/macos.mdx","tags":[],"version":"v22.11","frontMatter":{"title":"Build on MacOS"},"sidebar":"docs","previous":{"title":"Build on Linux","permalink":"/docs/v22.11/install/linux"},"next":{"title":"Build on Windows (VS)","permalink":"/docs/v22.11/install/vs"}}');var n=l(4848),t=l(8453);const r={title:"Build on MacOS"},c="Build From Source on MacOS",d={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Build the code",id:"build-the-code",level:2},{value:"Installation",id:"installation",level:2},{value:"Running tests",id:"running-tests",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"build-from-source-on-macos",children:"Build From Source on MacOS"})}),"\n",(0,n.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(s.p,{children:"In order to compile PcapPlusPlus on MacOS please make sure you have the following components installed:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://developer.apple.com/xcode/",children:"Xcode"})," which contains all prerequisites required for PcapPlusPlus including gcc/g++ compiler and libpcap with all relevant header files"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Make sure you have Xcode Command Line Tools. You can install it by running the following command in Terminal:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"xcode-select --install\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["PcapPlusPlus is available for both ",(0,n.jsx)(s.strong,{children:"Intel"})," and ",(0,n.jsx)(s.strong,{children:"Apple silicon (M1)"})," processors. To build for Apple silicon please use the ",(0,n.jsx)(s.code,{children:"--arm64"})," flag (please see below)"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"OPTIONAL"})," - install ",(0,n.jsx)(s.a,{href:"https://facebook.github.io/zstd/",children:"Zstd"})," if you wish to enable ",(0,n.jsx)(s.a,{href:"../features#readingwriting-pcapng-files-with-compression",children:"PCAPNG streaming compression support"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"brew install zstd\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(s.p,{children:"Run the configuration script from PcapPlusPlus main directory:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"./configure-mac_os_x.sh\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This script has the following command-line switches (you can also view then by running ",(0,n.jsx)(s.code,{children:"./configure-mac_os_x.sh --help"})," or ",(0,n.jsx)(s.code,{children:"./configure-mac_os_x.sh -h"}),"):"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Option"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.strong,{children:"no switches"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"use the default configuration"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--use-immediate-mode"})})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"use libpcap immediate mode which enables getting packets as fast as possible (supported on libpcap>=1.5)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--set-direction-enabled"})})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"set direction for capturing incoming or outgoing packets (supported on libpcap>=0.9.1)"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--install-dir"})})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["set a custom installation directory. Default is ",(0,n.jsx)(s.code,{children:"/usr/local"})]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--libpcap-include-dir"})})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"libpcap header files directory. This parameter is optional and if omitted PcapPlusPlus will look for the header files in the default include paths"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--libpcap-lib-dir"})})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"libpcap pre compiled lib directory. This parameter is optional and if omitted PcapPlusPlus will look for the lib file in the default lib paths"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--use-zstd"})})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["use ",(0,n.jsx)(s.a,{href:"../features#readingwriting-pcapng-files-with-compression",children:"Zstd for PCAPNG streaming compression"}),". This parameter is optional"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--arm64"})})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"build for Apple Silicon M1 (arm64 architecture). This flag can be used for cross-compilation which means you can don't have to run the build on an Apple silicon M1 machine"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"-h"})}),", ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--help"})})]}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:"displays a help message and exits. No further actions are performed"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Here are a few examples:"}),"\n",(0,n.jsx)(s.p,{children:"Default configuration:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"./configure-mac_os_x.sh\n"})}),"\n",(0,n.jsx)(s.p,{children:"Configure PcapPlusPlus with libpcap's immediate mode:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"./configure-mac_os_x.sh --use-immediate-mode\n"})}),"\n",(0,n.jsx)(s.p,{children:"Configure PcapPlusPlus with libpcap's set direction:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"./configure-mac_os_x.sh --set-direction-enabled\n"})}),"\n",(0,n.jsx)(s.p,{children:"Provide non-standard paths for libpcap header and library files:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"./configure-mac_os_x.sh --libpcap-include-dir /home/myuser/my-libpcap/include --libpcap-lib-dir /home/myuser/my-libpcap/lib\n"})}),"\n",(0,n.jsx)(s.p,{children:"Provide a custom installation directory:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"./configure-mac_os_x.sh --install-dir /home/myuser/my-install-dir\n"})}),"\n",(0,n.jsx)(s.p,{children:"Use Zstd for pcapng compression:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"./configure-linux.sh --use-zstd\n"})}),"\n",(0,n.jsx)(s.h2,{id:"build-the-code",children:"Build the code"}),"\n",(0,n.jsx)(s.p,{children:"After running the config script, you're can safely build the code:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Run ",(0,n.jsx)(s.code,{children:"make"})," or ",(0,n.jsx)(s.code,{children:"make all"})," from PcapPlusPlus main directory"]}),"\n",(0,n.jsx)(s.li,{children:"This should compile all libraries, unit-tests and examples"}),"\n",(0,n.jsxs)(s.li,{children:["To build the libraries only (without the unit-tests and examples) run ",(0,n.jsx)(s.code,{children:"make libs"})," instead of ",(0,n.jsx)(s.code,{children:"make all"})]}),"\n",(0,n.jsxs)(s.li,{children:["After compilation you can find the libraries, examples, header files and helpful makefiles under the ",(0,n.jsx)(s.code,{children:"Dist"})," directory"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(s.p,{children:"After build is complete you can run the installation script which will copy the library and header files to the installation directory:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"sudo make install\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The default installation directory is ",(0,n.jsx)(s.code,{children:"/usr/local"})," which means the header files will be copied to ",(0,n.jsx)(s.code,{children:"/usr/local/include/pcapplusplus"})," and the library files will be copied to ",(0,n.jsx)(s.code,{children:"/usr/local/lib"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["You can change the installation directory by using the ",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"--install-dir"})})," switch in the configuration script."]}),"\n",(0,n.jsx)(s.h2,{id:"running-tests",children:"Running tests"}),"\n",(0,n.jsxs)(s.p,{children:["PcapPlusPlus contains a set of test-cases you can run to make sure that everything works correctly on your system. ",(0,n.jsx)(s.a,{href:"../tests",children:"This guide"})," contains detailed instructions on how to run them."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,s,l)=>{l.d(s,{R:()=>r,x:()=>c});var i=l(6540);const n={},t=i.createContext(n);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);