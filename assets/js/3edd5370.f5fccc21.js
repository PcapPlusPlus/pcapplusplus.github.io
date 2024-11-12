"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[330],{6591:(e,t,s)=>{s.r(t),s.d(t,{DNS_LIBCRAFTER_PPS:()=>B,DNS_LIBCRAFTER_SEC:()=>I,DNS_LIBPCAP_PPS:()=>w,DNS_LIBPCAP_SEC:()=>O,DNS_LIBTINS_PPS:()=>L,DNS_LIBTINS_SEC:()=>k,DNS_PCAPPLUSPLUS_PPS:()=>N,DNS_PCAPPLUSPLUS_SEC:()=>y,TCP_NO_OPTIONS_LIBCRAFTER_PPS:()=>b,TCP_NO_OPTIONS_LIBCRAFTER_SEC:()=>o,TCP_NO_OPTIONS_LIBPCAP_PPS:()=>g,TCP_NO_OPTIONS_LIBPCAP_SEC:()=>P,TCP_NO_OPTIONS_LIBTINS_PPS:()=>u,TCP_NO_OPTIONS_LIBTINS_SEC:()=>p,TCP_NO_OPTIONS_PCAPPLUSPLUS_PPS:()=>j,TCP_NO_OPTIONS_PCAPPLUSPLUS_SEC:()=>x,TCP_WITH_OPTIONS_LIBCRAFTER_PPS:()=>v,TCP_WITH_OPTIONS_LIBCRAFTER_SEC:()=>A,TCP_WITH_OPTIONS_LIBPCAP_PPS:()=>C,TCP_WITH_OPTIONS_LIBPCAP_SEC:()=>_,TCP_WITH_OPTIONS_LIBTINS_PPS:()=>S,TCP_WITH_OPTIONS_LIBTINS_SEC:()=>m,TCP_WITH_OPTIONS_PCAPPLUSPLUS_PPS:()=>T,TCP_WITH_OPTIONS_PCAPPLUSPLUS_SEC:()=>f,assets:()=>h,contentTitle:()=>d,default:()=>U,frontMatter:()=>c,metadata:()=>l,toc:()=>R});const l=JSON.parse('{"id":"benchmark","title":"Benchmarks","description":"In order to benchmark the performance of PcapPlusPlus and compare it with similar C++ libraries we used Matias Fontanini\'s packet-capture-benchmarks project. The benchmark compared PcapPlusPlus, libtins, libcrafter and libpcap.","source":"@site/versioned_docs/version-v23.09/benchmark.mdx","sourceDirName":".","slug":"/benchmark","permalink":"/docs/v23.09/benchmark","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v23.09/benchmark.mdx","tags":[],"version":"v23.09","sidebarPosition":8,"frontMatter":{"title":"Benchmarks","sidebar_position":8},"sidebar":"docs","previous":{"title":"Example Apps","permalink":"/docs/v23.09/examples"},"next":{"title":"Running Tests","permalink":"/docs/v23.09/tests"}}');var n=s(4848),i=s(8453),r=(s(8714),s(5805)),a=s(2646);const c={title:"Benchmarks",sidebar_position:8},d=void 0,h={},x=.219,p=.241,o=6.26,P=.12,j=2283105,u=2074688,b=79872,g=4166666,f=.218,m=.288,A=10.569,_=.12,T=2293577,S=1736111,v=47308,C=4166666,y=.234,k=.245,I=6.791,O=.028,N=2136752,L=2040816,B=73626,w=17857142,R=[{value:"Tested projects",id:"tested-projects",level:2},{value:"Testing environment",id:"testing-environment",level:2},{value:"Test results",id:"test-results",level:2},{value:"Benchmark #1 - TCP parsing",id:"benchmark-1---tcp-parsing",level:3},{value:"Benchmark #2 - TCP + TCP Options parsing",id:"benchmark-2---tcp--tcp-options-parsing",level:3},{value:"Benchmark #3 - DNS parsing",id:"benchmark-3---dns-parsing",level:3}];function E(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["In order to benchmark the performance of PcapPlusPlus and compare it with similar C++ libraries we used ",(0,n.jsx)(t.a,{href:"https://github.com/mfontanini/packet-capture-benchmarks",children:"Matias Fontanini's packet-capture-benchmarks project"}),". The benchmark compared PcapPlusPlus, ",(0,n.jsx)(t.a,{href:"http://libtins.github.io/",children:"libtins"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/pellegre/libcrafter",children:"libcrafter"})," and libpcap."]}),"\n",(0,n.jsx)(t.h2,{id:"tested-projects",children:"Tested projects"}),"\n",(0,n.jsxs)(t.p,{children:["PcapPlusPlus was only compared to similar C/C++ projects such as ",(0,n.jsx)(t.a,{href:"http://libtins.github.io/",children:"libtins"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/pellegre/libcrafter",children:"libcrafter"})," because projects written higher level languages (such as Python or Java) cannot compete with the performance of native libraries. The following versions were used for the benchmarks:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["libpcap-dev ",(0,n.jsx)(t.a,{href:"https://www.tcpdump.org/#old-releases",children:"v0.8.1"})]}),"\n",(0,n.jsxs)(t.li,{children:["PcapPlusPlus ",(0,n.jsx)(t.a,{href:"https://github.com/seladb/PcapPlusPlus/releases/tag/v19.04",children:"v19.04"})]}),"\n",(0,n.jsxs)(t.li,{children:["libtins ",(0,n.jsx)(t.a,{href:"https://github.com/mfontanini/libtins/releases/tag/v4.2",children:"v4.2"})]}),"\n",(0,n.jsxs)(t.li,{children:["libcrafter - commit ",(0,n.jsx)(t.a,{href:"https://github.com/pellegre/libcrafter/tree/3db70ab6fd62ade25de7328aaf8e9ba92696c92e",children:"#3db70ab"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"testing-environment",children:"Testing environment"}),"\n",(0,n.jsxs)(t.p,{children:["All 3 benchmarks provided in ",(0,n.jsx)(t.a,{href:"https://github.com/mfontanini/packet-capture-benchmarks",children:"packet-capture-benchmarks"})," were run on the following environment:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Linux Ubuntu 16.04 64-bit running as a VirtualBox VM with 4 virtual cores and 8GB RAM"}),"\n",(0,n.jsx)(t.li,{children:"GCC 5.4.0 compiler"}),"\n",(0,n.jsx)(t.li,{children:"The host platform is a MacBook Pro model 2017 with Intel Core i7 760 3.1GHz processor and 16GB RAM running MacOS High Sierra 10.13"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Benchmark applications:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The PcapPlusPlus benchmark application can be found in ",(0,n.jsx)(t.a,{href:"./examples#pcapplusplus-benchmark",children:"PcapPlusPlus examples"})]}),"\n",(0,n.jsxs)(t.li,{children:["The other benchmark applications can be found in ",(0,n.jsx)(t.a,{href:"https://github.com/mfontanini/packet-capture-benchmarks",children:"Matias Fontanini's packet-capture-benchmarks project"})]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"test-results",children:"Test results"}),"\n",(0,n.jsx)(t.h3,{id:"benchmark-1---tcp-parsing",children:"Benchmark #1 - TCP parsing"}),"\n",(0,n.jsx)(t.admonition,{title:"Results",type:"tip",children:(0,n.jsx)(t.p,{children:"PcapPlusPlus is ~10% faster than libtins and ~x28 faster than libcrafter"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Library"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Time taken (seconds)"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Packets per second"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"libpcap"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:P})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:g})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"PcapPlusPlus"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(a.A,{value:x})})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(a.A,{value:j})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"libtins"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:p})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:u})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"libcrafter"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:o})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:b})})]})]})]}),"\n",(0,n.jsx)(r.A,{data:[["Library","Seconds"],["libpcap",P],["PcapPlusPlus",x],["libtins",p],["libcrafter",o]]}),"\n",(0,n.jsx)(t.h3,{id:"benchmark-2---tcp--tcp-options-parsing",children:"Benchmark #2 - TCP + TCP Options parsing"}),"\n",(0,n.jsx)(t.admonition,{title:"Results",type:"tip",children:(0,n.jsx)(t.p,{children:"PcapPlusPlus is ~32% faster than libtins and ~x48 faster than libcrafter"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Library"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Time taken (seconds)"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Packets per second"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"libpcap"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:_})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:C})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"PcapPlusPlus"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(a.A,{value:f})})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(a.A,{value:T})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"libtins"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:m})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:S})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"libcrafter"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:A})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:v})})]})]})]}),"\n",(0,n.jsx)(r.A,{data:[["Library","Seconds"],["libpcap",_],["PcapPlusPlus",f],["libtins",m],["libcrafter",A]]}),"\n",(0,n.jsx)(t.h3,{id:"benchmark-3---dns-parsing",children:"Benchmark #3 - DNS parsing"}),"\n",(0,n.jsx)(t.admonition,{title:"Results",type:"tip",children:(0,n.jsx)(t.p,{children:"PcapPlusPlus is ~5% faster than libtins and ~x29 faster than libcrafter"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Library"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Time taken (seconds)"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Packets per second"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"libpcap"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:O})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:w})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:"PcapPlusPlus"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(a.A,{value:y})})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(a.A,{value:N})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"libtins"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:k})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:L})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"libcrafter"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:I})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(a.A,{value:B})})]})]})]}),"\n",(0,n.jsx)(r.A,{data:[["Library","Seconds"],["libpcap",O],["PcapPlusPlus",y],["libtins",k],["libcrafter",I]]})]})}function U(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(E,{...e})}):E(e)}},2646:(e,t,s)=>{s.d(t,{A:()=>n});s(6540);var l=s(4848);const n=function(e){let{value:t}=e;return(0,l.jsx)(l.Fragment,{children:t})}},5805:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var l=s(8714),n=s(4848);const i=function(e){let{data:t}=e;return(0,n.jsx)(l.A,{height:450,chartType:"ColumnChart",loader:(0,n.jsx)("div",{children:"Loading Chart"}),data:t,options:{title:"Graphic view",chartArea:{left:0},backgroundColor:"transparent"},legendToggle:!0})}}}]);