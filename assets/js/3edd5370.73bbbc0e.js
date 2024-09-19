"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[9293],{398:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(7294);const r=function(t){let{value:e}=t;return n.createElement(n.Fragment,null,e)}},7374:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(7294),r=a(7385);const l=function(t){let{data:e}=t;return n.createElement(r.Z,{height:450,chartType:"ColumnChart",loader:n.createElement("div",null,"Loading Chart"),data:e,options:{title:"Graphic view",chartArea:{left:0},backgroundColor:"transparent"},legendToggle:!0})}},4646:(t,e,a)=>{a.r(e),a.d(e,{DNS_LIBCRAFTER_PPS:()=>A,DNS_LIBCRAFTER_SEC:()=>L,DNS_LIBPCAP_PPS:()=>U,DNS_LIBPCAP_SEC:()=>x,DNS_LIBTINS_PPS:()=>Z,DNS_LIBTINS_SEC:()=>O,DNS_PCAPPLUSPLUS_PPS:()=>B,DNS_PCAPPLUSPLUS_SEC:()=>y,TCP_NO_OPTIONS_LIBCRAFTER_PPS:()=>h,TCP_NO_OPTIONS_LIBCRAFTER_SEC:()=>P,TCP_NO_OPTIONS_LIBPCAP_PPS:()=>b,TCP_NO_OPTIONS_LIBPCAP_SEC:()=>c,TCP_NO_OPTIONS_LIBTINS_PPS:()=>N,TCP_NO_OPTIONS_LIBTINS_SEC:()=>d,TCP_NO_OPTIONS_PCAPPLUSPLUS_PPS:()=>u,TCP_NO_OPTIONS_PCAPPLUSPLUS_SEC:()=>k,TCP_WITH_OPTIONS_LIBCRAFTER_PPS:()=>v,TCP_WITH_OPTIONS_LIBCRAFTER_SEC:()=>_,TCP_WITH_OPTIONS_LIBPCAP_PPS:()=>I,TCP_WITH_OPTIONS_LIBPCAP_SEC:()=>f,TCP_WITH_OPTIONS_LIBTINS_PPS:()=>S,TCP_WITH_OPTIONS_LIBTINS_SEC:()=>g,TCP_WITH_OPTIONS_PCAPPLUSPLUS_PPS:()=>C,TCP_WITH_OPTIONS_PCAPPLUSPLUS_SEC:()=>T,assets:()=>o,contentTitle:()=>s,default:()=>w,frontMatter:()=>p,metadata:()=>m,toc:()=>V});var n=a(7462),r=(a(7294),a(3905)),l=(a(7385),a(7374)),i=a(398);const p={title:"Benchmarks",sidebar_position:8},s=void 0,m={unversionedId:"benchmark",id:"version-v23.09/benchmark",title:"Benchmarks",description:"In order to benchmark the performance of PcapPlusPlus and compare it with similar C++ libraries we used Matias Fontanini's packet-capture-benchmarks project. The benchmark compared PcapPlusPlus, libtins, libcrafter and libpcap.",source:"@site/versioned_docs/version-v23.09/benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/docs/v23.09/benchmark",draft:!1,editUrl:"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v23.09/benchmark.mdx",tags:[],version:"v23.09",sidebarPosition:8,frontMatter:{title:"Benchmarks",sidebar_position:8},sidebar:"docs",previous:{title:"Example Apps",permalink:"/docs/v23.09/examples"},next:{title:"Running Tests",permalink:"/docs/v23.09/tests"}},o={},k=.219,d=.241,P=6.26,c=.12,u=2283105,N=2074688,h=79872,b=4166666,T=.218,g=.288,_=10.569,f=.12,C=2293577,S=1736111,v=47308,I=4166666,y=.234,O=.245,L=6.791,x=.028,B=2136752,Z=2040816,A=73626,U=17857142,V=[{value:"Tested projects",id:"tested-projects",level:2},{value:"Testing environment",id:"testing-environment",level:2},{value:"Test results",id:"test-results",level:2},{value:"Benchmark #1 - TCP parsing",id:"benchmark-1---tcp-parsing",level:3},{value:"Benchmark #2 - TCP + TCP Options parsing",id:"benchmark-2---tcp--tcp-options-parsing",level:3},{value:"Benchmark #3 - DNS parsing",id:"benchmark-3---dns-parsing",level:3}],E={TCP_NO_OPTIONS_PCAPPLUSPLUS_SEC:k,TCP_NO_OPTIONS_PCAPPLUSPLUS_PPS:u,TCP_WITH_OPTIONS_PCAPPLUSPLUS_SEC:T,TCP_WITH_OPTIONS_PCAPPLUSPLUS_PPS:C,DNS_PCAPPLUSPLUS_SEC:y,DNS_PCAPPLUSPLUS_PPS:B,toc:V};function w(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},E,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to benchmark the performance of PcapPlusPlus and compare it with similar C++ libraries we used ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mfontanini/packet-capture-benchmarks"},"Matias Fontanini's packet-capture-benchmarks project"),". The benchmark compared PcapPlusPlus, ",(0,r.kt)("a",{parentName:"p",href:"http://libtins.github.io/"},"libtins"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pellegre/libcrafter"},"libcrafter")," and libpcap."),(0,r.kt)("h2",{id:"tested-projects"},"Tested projects"),(0,r.kt)("p",null,"PcapPlusPlus was only compared to similar C/C++ projects such as ",(0,r.kt)("a",{parentName:"p",href:"http://libtins.github.io/"},"libtins")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pellegre/libcrafter"},"libcrafter")," because projects written higher level languages (such as Python or Java) cannot compete with the performance of native libraries. The following versions were used for the benchmarks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"libpcap-dev ",(0,r.kt)("a",{parentName:"li",href:"https://www.tcpdump.org/#old-releases"},"v0.8.1")),(0,r.kt)("li",{parentName:"ul"},"PcapPlusPlus ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/seladb/PcapPlusPlus/releases/tag/v19.04"},"v19.04")),(0,r.kt)("li",{parentName:"ul"},"libtins ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mfontanini/libtins/releases/tag/v4.2"},"v4.2")),(0,r.kt)("li",{parentName:"ul"},"libcrafter - commit ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pellegre/libcrafter/tree/3db70ab6fd62ade25de7328aaf8e9ba92696c92e"},"#3db70ab"))),(0,r.kt)("h2",{id:"testing-environment"},"Testing environment"),(0,r.kt)("p",null,"All 3 benchmarks provided in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mfontanini/packet-capture-benchmarks"},"packet-capture-benchmarks")," were run on the following environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux Ubuntu 16.04 64-bit running as a VirtualBox VM with 4 virtual cores and 8GB RAM"),(0,r.kt)("li",{parentName:"ul"},"GCC 5.4.0 compiler"),(0,r.kt)("li",{parentName:"ul"},"The host platform is a MacBook Pro model 2017 with Intel Core i7 760 3.1GHz processor and 16GB RAM running MacOS High Sierra 10.13")),(0,r.kt)("p",null,"Benchmark applications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The PcapPlusPlus benchmark application can be found in ",(0,r.kt)("a",{parentName:"li",href:"./examples#pcapplusplus-benchmark"},"PcapPlusPlus examples")),(0,r.kt)("li",{parentName:"ul"},"The other benchmark applications can be found in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mfontanini/packet-capture-benchmarks"},"Matias Fontanini's packet-capture-benchmarks project"))),(0,r.kt)("h2",{id:"test-results"},"Test results"),(0,r.kt)("h3",{id:"benchmark-1---tcp-parsing"},"Benchmark #1 - TCP parsing"),(0,r.kt)("admonition",{title:"Results",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"PcapPlusPlus is ~10% faster than libtins and ~x28 faster than libcrafter")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Library"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Time taken (seconds)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Packets per second"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"libpcap"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:c,mdxType:"ConstVal"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:b,mdxType:"ConstVal"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PcapPlusPlus")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(i.Z,{value:k,mdxType:"ConstVal"}))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(i.Z,{value:u,mdxType:"ConstVal"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"libtins"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:d,mdxType:"ConstVal"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:N,mdxType:"ConstVal"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"libcrafter"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:P,mdxType:"ConstVal"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:h,mdxType:"ConstVal"}))))),(0,r.kt)(l.Z,{data:[["Library","Seconds"],["libpcap",c],["PcapPlusPlus",k],["libtins",d],["libcrafter",P]],mdxType:"ThemedChart"}),(0,r.kt)("h3",{id:"benchmark-2---tcp--tcp-options-parsing"},"Benchmark #2 - TCP + TCP Options parsing"),(0,r.kt)("admonition",{title:"Results",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"PcapPlusPlus is ~32% faster than libtins and ~x48 faster than libcrafter")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Library"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Time taken (seconds)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Packets per second"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"libpcap"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:f,mdxType:"ConstVal"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:I,mdxType:"ConstVal"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PcapPlusPlus")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(i.Z,{value:T,mdxType:"ConstVal"}))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(i.Z,{value:C,mdxType:"ConstVal"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"libtins"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:g,mdxType:"ConstVal"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:S,mdxType:"ConstVal"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"libcrafter"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:_,mdxType:"ConstVal"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:v,mdxType:"ConstVal"}))))),(0,r.kt)(l.Z,{data:[["Library","Seconds"],["libpcap",f],["PcapPlusPlus",T],["libtins",g],["libcrafter",_]],mdxType:"ThemedChart"}),(0,r.kt)("h3",{id:"benchmark-3---dns-parsing"},"Benchmark #3 - DNS parsing"),(0,r.kt)("admonition",{title:"Results",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"PcapPlusPlus is ~5% faster than libtins and ~x29 faster than libcrafter")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Library"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Time taken (seconds)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Packets per second"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"libpcap"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:x,mdxType:"ConstVal"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:U,mdxType:"ConstVal"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"PcapPlusPlus")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(i.Z,{value:y,mdxType:"ConstVal"}))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(i.Z,{value:B,mdxType:"ConstVal"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"libtins"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:O,mdxType:"ConstVal"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:Z,mdxType:"ConstVal"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"libcrafter"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:L,mdxType:"ConstVal"})),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)(i.Z,{value:A,mdxType:"ConstVal"}))))),(0,r.kt)(l.Z,{data:[["Library","Seconds"],["libpcap",x],["PcapPlusPlus",y],["libtins",O],["libcrafter",L]],mdxType:"ThemedChart"}))}w.isMDXComponent=!0}}]);