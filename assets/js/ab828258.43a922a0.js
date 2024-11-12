"use strict";(self.webpackChunkpcapplusplus_github_io=self.webpackChunkpcapplusplus_github_io||[]).push([[3277],{8448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"dpdk","title":"DPDK Support","description":"The Data Plane Development Kit (DPDK) is a set of data plane libraries and network interface controller drivers for fast packet processing, currently managed as an open-source project under the Linux Foundation. The DPDK provides a programming framework for x86, ARM, and PowerPC processors and enables faster development of high speed data packet networking applications (taken from Wikipedia).","source":"@site/versioned_docs/version-v23.09/dpdk.mdx","sourceDirName":".","slug":"/dpdk","permalink":"/docs/v23.09/dpdk","draft":false,"unlisted":false,"editUrl":"https://github.com/PcapPlusPlus/pcapplusplus.github.io/edit/master/versioned_docs/version-v23.09/dpdk.mdx","tags":[],"version":"v23.09","sidebarPosition":4,"frontMatter":{"title":"DPDK Support","sidebar_position":4},"sidebar":"docs","previous":{"title":"Feature Overview","permalink":"/docs/v23.09/features"},"next":{"title":"Tutorials","permalink":"/docs/v23.09/tutorials"}}');var s=n(4848),r=n(8453),l=n(263),o=n(3967),d=n(4211);const a={title:"DPDK Support",sidebar_position:4},c="DPDK Support",h={},p=[{value:"What does PcapPlusPlus offer for DPDK?",id:"what-does-pcapplusplus-offer-for-dpdk",level:2},{value:"Set up PcapPlusPlus with DPDK",id:"set-up-pcapplusplus-with-dpdk",level:2},{value:"Supported DPDK versions",id:"supported-dpdk-versions",level:3},{value:"Download and install DPDK - prior to DPDK 20.11",id:"download-and-install-dpdk---prior-to-dpdk-2011",level:3},{value:"Download and install DPDK - DPDK 20.11 forward",id:"download-and-install-dpdk---dpdk-2011-forward",level:3},{value:"Build PcapPlusPlus with DPDK",id:"build-pcapplusplus-with-dpdk",level:3},{value:"DPDK initialization with PcapPlusPlus",id:"dpdk-initialization-with-pcapplusplus",level:3},{value:"Initialization before application is run",id:"initialization-before-application-is-run",level:3},{value:"Initialization at application startup",id:"initialization-at-application-startup",level:3},{value:"Next steps",id:"next-steps",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"dpdk-support",children:"DPDK Support"})}),"\n","\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://www.dpdk.org/",children:(0,s.jsx)(l.cJ,{src:"/img/logo-dpdk.png",width:"400",title:"DPDK"})})}),"\n",(0,s.jsxs)(t.p,{children:["The Data Plane Development Kit (DPDK) is a set of data plane libraries and network interface controller drivers for fast packet processing, currently managed as an open-source project under the Linux Foundation. The DPDK provides a programming framework for x86, ARM, and PowerPC processors and enables faster development of high speed data packet networking applications (taken from ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Data_Plane_Development_Kit",children:"Wikipedia"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["DPDK provides packet processing in line rate using kernel bypass for a large range of network interface cards. Notice that not every NIC supports DPDK as the NIC needs to support the kernel bypass feature. You can read more about DPDK in ",(0,s.jsx)(t.a,{href:"https://www.dpdk.org/",children:"DPDK's web-site"})," and get a list of supported NICs ",(0,s.jsx)(t.a,{href:"http://core.dpdk.org/supported/",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"As DPDK API is written in C, PcapPlusPlus wraps its main functionality in easy-to-use C++ wrappers which have minimum impact on performance and packet processing rate. In addition it brings DPDK to the PcapPlusPlus framework and APIs so you can use DPDK together with other PcapPlusPlus features such as packet analysis, etc."}),"\n",(0,s.jsx)(t.h2,{id:"what-does-pcapplusplus-offer-for-dpdk",children:"What does PcapPlusPlus offer for DPDK?"}),"\n",(0,s.jsx)(t.p,{children:"PcapPlusPlus tries to cover the main functionality of DPDK and its most important and popular features. Here is what PcapPlusPlus offers for DPDK:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Encapsulation of DPDK's initialization process - both outside and inside of the application - using simple scripts and methods"}),"\n",(0,s.jsx)(t.li,{children:"A C++ class wrapper for DPDK's packet structure (mbuf) which offers the most commonly used functionality"}),"\n",(0,s.jsx)(t.li,{children:"A C++ class wrapper that encapsulates a DPDK-controlled NIC (A.K.A DPDK port) for receiving, processing and sending packets using DPDK as well as an interface to retrieve NIC info, status, etc."}),"\n",(0,s.jsx)(t.li,{children:"Offload packet capture to multiple worker threads running on different cores + control the load balancing configuration between these workers"}),"\n",(0,s.jsx)(t.li,{children:"Multi RX/TX queue support"}),"\n",(0,s.jsx)(t.li,{children:"Detailed statistics about packets being captured and processed"}),"\n",(0,s.jsx)(t.li,{children:"Seamless integration to other PcapPlusPlus capabilities including: parsing of packets received with DPDK using the various protocol parsers offered in PcapPlusPlus, saving packets to a pcap file, sending crafted/edited packets through a DPDK-controlled interface, packet reassembly, and more."}),"\n",(0,s.jsxs)(t.li,{children:["An easy-to-use C++ wrapper for ",(0,s.jsx)(t.a,{href:"https://doc.dpdk.org/guides/prog_guide/kernel_nic_interface.html",children:"DPDK KNI (Kernel NIC Interface)"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"set-up-pcapplusplus-with-dpdk",children:"Set up PcapPlusPlus with DPDK"}),"\n",(0,s.jsx)(t.h3,{id:"supported-dpdk-versions",children:"Supported DPDK versions"}),"\n",(0,s.jsx)(t.p,{children:"The following DPDK versions are currently supported:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"DPDK 21.11 (LTS)"}),"\n",(0,s.jsx)(t.li,{children:"DPDK 20.11 (LTS)"}),"\n",(0,s.jsx)(t.li,{children:"DPDK 19.11 (LTS)"}),"\n",(0,s.jsx)(t.li,{children:"DPDK 18.11 (LTS)"}),"\n",(0,s.jsx)(t.li,{children:"DPDK 17.11 (LTS) (not regularly tested)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Older and newer versions may not work.\nThe non-LTS versions may also work, but are not regularly tested."}),"\n",(0,s.jsx)(t.p,{children:"In addition, not all poll-mode drivers (PMDs) were tested, but the majority of them should work. Please report an issue if the PMD you're using isn't working."}),"\n",(0,s.jsx)(t.p,{children:"The following operating systems and configurations were tested:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Ubuntu 20.04, 18.04 LTS 64bit with kernel version > 3 and gcc version >= 4.8"}),"\n",(0,s.jsx)(t.li,{children:"CentOS 7.1 64bit with kernel 3.x and gcc 4.8.x (not regularly tested)"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"download-and-install-dpdk---prior-to-dpdk-2011",children:"Download and install DPDK - prior to DPDK 20.11"}),"\n",(0,s.jsx)(t.p,{children:"Building and installing DPDK is pretty straight-forward and in a nutshell goes like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ cd /dpdk/source/location\n$ make config T=[platform_type_string] && make\n"})}),"\n",(0,s.jsx)(t.h3,{id:"download-and-install-dpdk---dpdk-2011-forward",children:"Download and install DPDK - DPDK 20.11 forward"}),"\n",(0,s.jsxs)(t.p,{children:["DPDK changed their whole build system in version 20.11 and is now using ",(0,s.jsx)(t.code,{children:"meson"})," and ",(0,s.jsx)(t.code,{children:"ninja"}),". The full build instructions can be found ",(0,s.jsx)(t.a,{href:"https://doc.dpdk.org/guides-20.11/linux_gsg/build_dpdk.html",children:"here"}),", but here are the important steps in short:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ meson build\n$ cd build\n$ ninja\n$ ninja install\n"})}),"\n",(0,s.jsx)(t.h3,{id:"build-pcapplusplus-with-dpdk",children:"Build PcapPlusPlus with DPDK"}),"\n",(0,s.jsxs)(t.p,{children:["Once the DPDK build is completed successfully, build PcapPlusPlus with DPDK using the ",(0,s.jsx)(t.code,{children:"-DPCAPPP_USE_DPDK"})," option.\nPlease refer to the ",(0,s.jsx)(t.a,{href:"./install/linux#build",children:"build instructions"})," for more details."]}),"\n",(0,s.jsx)(t.h3,{id:"dpdk-initialization-with-pcapplusplus",children:"DPDK initialization with PcapPlusPlus"}),"\n",(0,s.jsx)(t.p,{children:"DPDK has two steps of initialization: one that sets up Linux to run DPDK applications and the other at the application level which initializes DPDK data and memory structures. PcapPlusPlus wraps both of them with easy-to-use interfaces. Please see the following two sections to get more information."}),"\n",(0,s.jsx)(t.h3,{id:"initialization-before-application-is-run",children:"Initialization before application is run"}),"\n",(0,s.jsx)(t.p,{children:"Several Linux configuration steps are needed to run DPDK applications:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"DPDK uses Linux huge-pages for faster virtual to physical page conversion resulting in better performance. Huge-pages must be set before a DPDK application is run"}),"\n",(0,s.jsxs)(t.li,{children:["DPDK uses a designated kernel module for kernel bypass (there are 3 supported options: ",(0,s.jsx)(t.code,{children:"igb_uio"}),", ",(0,s.jsx)(t.code,{children:"uio_pci_generic"}),", ",(0,s.jsx)(t.code,{children:"vfio-pci"}),"). This module needs to be loaded into the kernel if not already loaded"]}),"\n",(0,s.jsx)(t.li,{children:"One or more NICs should move from Linux control to DPDK control"}),"\n",(0,s.jsxs)(t.li,{children:["For DPDK KNI there is one more kernel to be loaded into the kernel (",(0,s.jsx)(t.code,{children:"rte_kni.ko"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["PcapPlusPlus offers a python script that automatically configures all of the above. The script is located in CMake build directory (e.g ",(0,s.jsx)(t.code,{children:"/PcapPlusPlus/build"}),") and is named ",(0,s.jsx)(t.code,{children:"setup_dpdk.py"}),". It is based on the ",(0,s.jsxs)(t.a,{href:"https://doc.dpdk.org/guides/tools/devbind.html",children:[(0,s.jsx)(t.code,{children:"dpdk-devbind"})," tool that ships with DPDK"]})," and extends it with more functionality. The script supports Python 3+."]}),"\n",(0,s.jsxs)(t.p,{children:["This script has 3 modes of operation: ",(0,s.jsx)(t.code,{children:"setup"})," to configure the steps mentioned above, ",(0,s.jsx)(t.code,{children:"status"})," to view the status of all known network interfaces, and ",(0,s.jsx)(t.code,{children:"restore"})," to go back to the original Linux configuration."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Note: this script uses another file named ",(0,s.jsx)(t.code,{children:"setup_dpdk_settings.dat"})," to keep information needed for restoring the Linux configuration. This file is also located in PcapPlusPlus root directory. Please do not remove this file"]})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Setup"})," - takes the following parameters:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-g"})}),", ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--huge-pages"})})," ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"AMOUNT"})})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The amount of huge pages to allocate. By default each huge-page size is 2048KB"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-i"})}),", ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--interface"})})," ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"NIC_NAME [NIC_NAME ...]"})})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"A space-separated list of all NICs that should move from Linux to DPDK control. Only these NICs can be used by DPDK, the others will stay under Linux control"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-m"})}),", ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--dpdk-module"})})," ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"{igb_uio,uio_pci_generic,vfio-pci}"})})]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["The DPDK module to load. If not specified the default is ",(0,s.jsx)(t.code,{children:"igb_uio"}),". ",(0,s.jsx)(t.strong,{children:"NOTE:"})," in DPDK 20.11 ",(0,s.jsx)(t.code,{children:"igb_uio"})," was moved outside of the DPDK repo into a ",(0,s.jsx)(t.a,{href:"https://git.dpdk.org/dpdk-kmods",children:"separate repo"})," which means it doesn't come out of the box and needs to be built separately. However the recommendation is to use either ",(0,s.jsx)(t.code,{children:"vfio-pci"})," or ",(0,s.jsx)(t.code,{children:"uio_pci_generic"})," which come as part of most Linux distros. You can read more about it ",(0,s.jsx)(t.a,{href:"https://doc.dpdk.org/guides/linux_gsg/linux_drivers.html",children:"here"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-k"})}),", ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--load-kni"})})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Install the KNI kernel module (not loaded by default)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-p"})}),", ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--kni-params"})})," ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"KNI_PARAMS"})})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Optional parameters for installing the KNI kernel module"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-r"})}),", ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--rte-sdk"})})," ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"RTE_SDK"})})]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["DPDK home directory. If this argument is used, the script will use it as the DPDK directory, otherwise it will look for the ",(0,s.jsx)(t.code,{children:"RTE_SDK"})," environment variable. If both don't exist it will look for ",(0,s.jsx)(t.code,{children:"RTE_SDK"})," in ",(0,s.jsx)(t.code,{children:"setup_dpdk_settings.dat"}),". If none of them exist an error will be thrown"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-v"})}),", ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--verbose"})})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Print more verbose output"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"If everything goes well the system should be ready to run a DPDK applications and the output should look something like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"pcapplusplus@ubunu:~/PcapPlusPlus$ sudo python setup_dpdk.py setup -g 512 -i enp0s3\n[INFO] set up hugepages to 512\n[INFO] loaded kernel module 'uio'\n[INFO] loaded DPDK kernel module 'igb_uio'\n[INFO] set interface 'enp0s3' down\n[INFO] bound interface 'enp0s3' ['0000:00:03.0'] to 'igb_uio'\n[INFO] SETUP COMPLETE\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Status"})," - shows the interfaces under DPDK and Linux control. In the example below one interface is under DPDK control and the other (",(0,s.jsx)(t.code,{children:"enp0s8"}),") is under Linux control:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"pcapplusplus@ubunu:~/PcapPlusPlus$ sudo python setup_dpdk.py status\n\nNetwork devices using DPDK-compatible driver\n============================================\n0000:00:03.0 '82540EM Gigabit Ethernet Controller 100e' drv=igb_uio unused=e1000,vfio-pci,uio_pci_generic\n\nNetwork devices using kernel driver\n===================================\n0000:00:08.0 '82540EM Gigabit Ethernet Controller 100e' if=enp0s8 drv=e1000 unused=igb_uio,vfio-pci,uio_pci_generic *Active*\n\nNo 'Baseband' devices detected\n==============================\n\nNo 'Crypto' devices detected\n============================\n\nNo 'Eventdev' devices detected\n==============================\n\nNo 'Mempool' devices detected\n=============================\n\nNo 'Compress' devices detected\n==============================\n\nNo 'Misc (rawdev)' devices detected\n===================================\n"})}),"\n",(0,s.jsx)(t.p,{children:"This command take the following parameters:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-v"})}),", ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--verbose"})})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Print more verbose output"})]})})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Restore"})," - restores the Linux configuration to its previous state before ",(0,s.jsx)(t.code,{children:"setup_dpdk.py setup"})," was run. Please note that this command uses the ",(0,s.jsx)(t.code,{children:"setup_dpdk_settings.dat"})," file to identify the previous state. If this file was deleted or moved the restore process will most likely fail. Please also note that a machine restart will probably restore most of this configuration, but this command enables restore without a machine restart."]}),"\n",(0,s.jsx)(t.p,{children:"If everything goes well the output should look something like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"pcapplusplus@ubunu:~/PcapPlusPlus$ sudo python setup_dpdk.py restore\n[INFO] removed hugepages\n[INFO] bound device '0000:00:03.0' back to 'e1000'\n[INFO] restored interface 'enp0s3'\n[INFO] removed 'igb_uio' kernel module\n[INFO] RESTORE COMPLETE\n"})}),"\n",(0,s.jsx)(t.p,{children:"This command take the following parameters:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"-v"})}),", ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"--verbose"})})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Print more verbose output"})]})})]}),"\n",(0,s.jsx)(t.h3,{id:"initialization-at-application-startup",children:"Initialization at application startup"}),"\n",(0,s.jsx)(t.p,{children:"When using DPDK in your application it should be initialized on application startup. This configuration includes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Verify that huge-pages, kernel module(s) and NICs are all set"}),"\n",(0,s.jsx)(t.li,{children:"Initialize DPDK internal structures and memory, poll-mode drivers etc."}),"\n",(0,s.jsx)(t.li,{children:"Prepare CPU cores that will be used by the application"}),"\n",(0,s.jsx)(t.li,{children:"Initialize packet memory pool"}),"\n",(0,s.jsx)(t.li,{children:"Configure each NIC controlled by DPDK"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"These steps are wrapped in one static method that should be called once in the application startup:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"DpdkDeviceList::initDpdk();\n"})}),"\n",(0,s.jsx)(t.p,{children:"If this methods succeeds DPDK is ready to be used in your application."}),"\n",(0,s.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsx)(t.p,{children:"If you're curious to learn more, please refer to the following resources:"}),"\n","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"./tutorials/dpdk",children:"DPDK tutorial"})}),"\n",(0,s.jsxs)(t.li,{children:["DPDK example applications: ",(0,s.jsx)(t.a,{href:"./examples#dpdkexample-filtertraffic",children:"DpdkExample-FilterTraffic"}),", ",(0,s.jsx)(t.a,{href:"./examples#dpdkbridge",children:"DpdkBridge"}),", ",(0,s.jsx)(t.a,{href:"./examples#knipong",children:"KniPong"})]}),"\n",(0,s.jsxs)(t.li,{children:["DPDK API reference. A good starting points would be ",(0,s.jsxs)(d.A,{relativePath:"/_dpdk_device_8h.html#details",children:[(0,s.jsx)(t.code,{children:"DpdkDevice.h"})," file description"]})," and ",(0,s.jsxs)(d.A,{relativePath:"/classpcpp_1_1_dpdk_device.html#details",children:[(0,s.jsx)(t.code,{children:"DpdkDevice"})," class description"]})]}),"\n",(0,s.jsxs)(t.li,{children:["You can also find all the unit-tests in the ",(0,s.jsx)(o.A,{relativePath:"/Tests/Pcap%2B%2BTest/main.cpp",children:"Pcap++Test"}),' project (search for tests that contain "dpdk" or "kni")']}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4211:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var i=n(4070),s=n(6025),r=n(4848);const l=function(e){let{relativePath:t,children:n}=e;return(0,r.jsx)("a",{href:(0,s.Ay)(`/api-docs/${(0,i.ir)().label.toLowerCase()}${t}`),children:n})}},3967:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var i=n(5329),s=n(4848);const r=function(e){let{relativePath:t,children:n}=e;return(0,s.jsx)("a",{href:(0,i.t_)()+t,children:n})}},5329:(e,t,n)=>{n.d(t,{ZA:()=>d,iI:()=>c,i_:()=>a,jA:()=>p,k9:()=>r,kF:()=>l,l:()=>o,t_:()=>h,zk:()=>u});var i=n(4070);const s="https://github.com/seladb/PcapPlusPlus";function r(){return s}function l(){const e=(0,i.r7)(),t=(0,i.ir)();return"Next"===t.label?e.label:t.label}function o(e){return`${s}/releases/tag/${e}`}function d(){return o(l())}function a(){return`${s}/archive/${l()}.zip`}function c(){return`${s}/archive/${l()}.tar.gz`}function h(){const e=(0,i.ir)(),t="Next"===e.label?"master":e.label;return`${s}/tree/${t}`}function p(){return`${s}/archive/master.zip`}function u(){return`${s}/archive/master.tar.gz`}},263:(e,t,n)=>{n.d(t,{cJ:()=>l,lj:()=>o});n(6540);var i=n(6025),s=n(1122),r=n(4848);function l(e){let{src:t,width:n,title:s}=e;return(0,r.jsx)("img",{src:(0,i.Ay)(t),width:n,title:s,alt:s})}function o(e){let{srcLight:t,srcDark:n,width:l,title:o}=e;return(0,r.jsx)(s.A,{sources:{light:(0,i.Ay)(t),dark:(0,i.Ay)(n)},width:l,title:o})}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(6540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);