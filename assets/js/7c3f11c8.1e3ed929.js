"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[9053],{6989:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"platforms","title":"Supported platforms","description":"The platforms and toolchains described below are supported and being continuously tested.","source":"@site/versioned_docs/version-v22.05/platforms.mdx","sourceDirName":".","slug":"/platforms","permalink":"/docs/v22.05/platforms","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v22.05/platforms.mdx","tags":[],"version":"v22.05","sidebarPosition":6,"frontMatter":{"title":"Supported platforms","sidebar_position":6},"sidebar":"docs","previous":{"title":"Part 6: Working With DPDK","permalink":"/docs/v22.05/tutorials/dpdk"},"next":{"title":"Example Apps","permalink":"/docs/v22.05/examples"}}');var l=t(4848),r=t(8453),n=t(263);const o={title:"Supported platforms",sidebar_position:6},d=void 0,a={},c=[{value:"<ImageWithBaseUrl></ImageWithBaseUrl> Windows",id:"-windows",level:2},{value:"<ImageWithBaseUrl></ImageWithBaseUrl> Linux",id:"-linux",level:2},{value:"<ThemedImageWithBaseUrl></ThemedImageWithBaseUrl> MacOS",id:"-macos",level:2},{value:"<ImageWithBaseUrl></ImageWithBaseUrl> Android",id:"-android",level:2},{value:"<ImageWithBaseUrl></ImageWithBaseUrl> FreeBSD",id:"-freebsd",level:2},{value:"Other platforms",id:"other-platforms",level:2},{value:"CI reports",id:"ci-reports",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"The platforms and toolchains described below are supported and being continuously tested."}),"\n",(0,l.jsxs)(s.h2,{id:"-windows",children:[(0,l.jsx)(n.cJ,{src:"/img/os-logos/logo-windows.png",width:"24",title:"Windows"})," Windows"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://visualstudio.microsoft.com/",children:"Microsoft Visual Studio"})," (32-bit + 64-bit compilation):","\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Visual Studio 2019"}),"\n",(0,l.jsx)(s.li,{children:"Visual Studio 2017"}),"\n",(0,l.jsx)(s.li,{children:"Visual Studio 2015"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"http://www.mingw.org/",children:"MinGW32"})," (32-bit compilation only)"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://mingw-w64.org",children:"MinGW-w64"})," (32-bit compilation only)"]}),"\n"]}),"\n",(0,l.jsxs)(s.h2,{id:"-linux",children:[(0,l.jsx)(n.cJ,{src:"/img/os-logos/logo-linux.png",width:"24",title:"Linux"})," Linux"]}),"\n",(0,l.jsx)(s.p,{children:"Basically every x86 GCC toolchain should work, but PcapPlusPlus is being continuously tested on the following platforms:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://ubuntu.com/",children:"Ubuntu"})," (20.04 LTS, 18.04 LTS, 16.04 LTS)"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://getfedora.org/",children:"Fedora"})," 26 & 29"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.a,{href:"https://www.centos.org/",children:"CentOS"})," 7"]}),"\n"]}),"\n",(0,l.jsxs)(s.h2,{id:"-macos",children:[(0,l.jsx)(n.lj,{srcLight:"/img/os-logos/logo-apple.png",srcDark:"/img/os-logos/logo-apple-dark.png",width:"24",title:"MacOS"})," MacOS"]}),"\n",(0,l.jsxs)(s.p,{children:["Both ",(0,l.jsx)(s.strong,{children:"Intel"})," and ",(0,l.jsx)(s.strong,{children:"Apple silicon (M1)"})," processors are supported."]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Big Sur (11.0)"}),"\n",(0,l.jsx)(s.li,{children:"Catalina (10.15)"}),"\n",(0,l.jsx)(s.li,{children:"Mojave (10.14)"}),"\n",(0,l.jsx)(s.li,{children:"High Sierra (10.13)"}),"\n",(0,l.jsx)(s.li,{children:"Sierra (10.12)"}),"\n",(0,l.jsx)(s.li,{children:"El Capitan (10.11)"}),"\n"]}),"\n",(0,l.jsxs)(s.h2,{id:"-android",children:[(0,l.jsx)(n.cJ,{src:"/img/os-logos/logo-android.png",width:"24",title:"Android"})," Android"]}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["All 4 major ",(0,l.jsx)(s.a,{href:"https://developer.android.com/ndk/guides/abis",children:"Android ABIs"})," are supported: ",(0,l.jsx)(s.code,{children:"armeabi-v7a"}),", ",(0,l.jsx)(s.code,{children:"arm64-v8a"}),", ",(0,l.jsx)(s.code,{children:"x86"}),", ",(0,l.jsx)(s.code,{children:"x86_64"})]}),"\n",(0,l.jsx)(s.li,{children:"API versions 21-30"}),"\n"]}),"\n",(0,l.jsxs)(s.h2,{id:"-freebsd",children:[(0,l.jsx)(n.cJ,{src:"/img/os-logos/logo-freebsd.png",width:"24",title:"FreeBSD"})," FreeBSD"]}),"\n",(0,l.jsx)(s.p,{children:"Versions 12.3 and above are supported"}),"\n",(0,l.jsx)(s.h2,{id:"other-platforms",children:"Other platforms"}),"\n",(0,l.jsxs)(s.p,{children:["Other platforms and toolchains may work as well, but the support is not guaranteed. If you'd like us to add additional platforms please ",(0,l.jsx)(s.a,{href:"/community",children:"contact us"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"ci-reports",children:"CI reports"}),"\n",(0,l.jsx)(s.p,{children:"You can view the status of each supported platform in our CI reports:"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"CI Platform"}),(0,l.jsx)(s.th,{style:{textAlign:"left"},children:"Build Status"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,l.jsx)(s.strong,{children:"GitHub Actions"})," (Linux, MacOS, Windows):"]}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.a,{href:"https://github.com/seladb/PcapPlusPlus/actions?query=workflow%3A%22Build+and+test%22",children:(0,l.jsx)(s.img,{src:"https://github.com/seladb/PcapPlusPlus/workflows/Build%20and%20test/badge.svg",alt:"GitHub Actions"})})})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,l.jsx)(s.strong,{children:"Cirrus CI"})," (FreeBSD):"]}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.a,{href:"https://cirrus-ci.com/github/seladb/PcapPlusPlus",children:(0,l.jsx)(s.img,{src:"https://api.cirrus-ci.com/github/seladb/PcapPlusPlus.svg",alt:"Build Status"})})})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,l.jsx)(s.strong,{children:"AppVeyor"})," (Windows MinGW and VS 2015):"]}),(0,l.jsx)(s.td,{style:{textAlign:"left"},children:(0,l.jsx)(s.a,{href:"https://ci.appveyor.com/project/seladb/pcapplusplus/branch/master",children:(0,l.jsx)(s.img,{src:"https://ci.appveyor.com/api/projects/status/4u5ui21ibbevkstc/branch/master?svg=true",alt:"Build status"})})})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},263:(e,s,t)=>{t.d(s,{cJ:()=>n,lj:()=>o});t(6540);var i=t(6025),l=t(1122),r=t(4848);function n(e){let{src:s,width:t,title:l}=e;return(0,r.jsx)("img",{src:(0,i.Ay)(s),width:t,title:l,alt:l})}function o(e){let{srcLight:s,srcDark:t,width:n,title:o}=e;return(0,r.jsx)(l.A,{sources:{light:(0,i.Ay)(s),dark:(0,i.Ay)(t)},width:n,title:o})}},8453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>o});var i=t(6540);const l={},r=i.createContext(l);function n(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);