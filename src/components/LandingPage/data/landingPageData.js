const landingPageData = {
    components: {
        landingPage: {
            title: "A multi-platform C++ library for capturing, parsing and crafting of network packets",
            description: "A multi-platform C++ library for capturing, parsing and crafting of network packets"
        },
        header: {
            title: "Welcome to PcapPlusPlus!",    
            img: "img/landing-page/logo.svg",    
            buttonQuickStart: {
                text: "Get Started",
                linkTo: "/docs/quickstart"
            },
            buttonDownload: {
                text: "Download",
                linkTo: "/docs/install"
            }
        },
        networkIcons: {
            items: [
                "DPDK",
                "PF_RING",
                "LIBPCAP",
                "WINPCAP",
                "NPCAP"
            ]
        },
        operatingSystems: {
            win: "windows",
            linux: "Linux",
            apple: "Apple",
            freeBSD: "FreeBSD",
            android: "Android"
        },
        captureAndSendNetworkTraffic: {
            title: "Capture and send network traffic",
            text: "PcapPlusPlus enables capturing and sending network packets through easy-to-use C++ wrappers " + 
            "for the most popular packet processing engines such as ",
            learnMore: {
                text: "Learn More",
                linkTo: "/docs/features#packet-capture"
            },
            links: {
                items: [
                    {
                        name: "Libpcap",
                        linkTo: "https://www.tcpdump.org/"
                    },
                    {
                        name: "WinPcap",
                        linkTo: "https://www.winpcap.org/"
                    },
                    {
                        name: "NPcap",
                        linkTo: "https://nmap.org/npcap/"
                    },
                    {
                        name: "DPDK",
                        linkTo: "https://www.dpdk.org/"
                    },
                    {
                        name: "PF_RING",
                        linkTo: "https://www.ntop.org/products/packet-capture/pf_ring/"
                    }
                ]
            }      
        },
        decodeAndForgePackets: {
            title: "Decode and forge packets",
            text: "PcapPlusPlus enables decoding and forging capabilities for a large variety of ",
            link: {
                text: "network protocols",
                linkTo: "/docs/features#supported-network-protocols"
            },
            learnMore: {
                text: "Learn More",
                linkTo: "/docs/features#packet-parsing-and-crafting"
            },
            code: {
                text: 
`// parse the raw packet into a parsed packet
pcpp::Packet parsedPacket(&rawPacket);

// check if it's an IPv4 packet
if (parsedPacket.isPacketOfType(pcpp::IPv4)) {
// extract source and dest IPs
pcpp::IPv4Address srcIP = 
    parsedPacket.getLayerOfType()->getSrcIPv4Address();
pcpp::IPv4Address destIP = 
    parsedPacket.getLayerOfType()->getDstIPv4Address();

// print source and dest IPs
std::cout << 
    "Source IP is: " << srcIP << std::endl <<
    "Dest IP is: " << destIP << std::endl;`
            }
        },
        multiPlatformSupport: {
            title: "Multi platform support",
            text: "PcapPlusPlus is fully supported on Windows, MacOS, Linux, Android and FreeBSD. You can download pre-built binaries for each platform or build it from source. "
            + "PcapPlusPlus is available in popular package managers such as Homebrew and Conan",
            learnMore: {
                text: "View Installation Guide",
                linkTo: "/docs/install"
            }
        },
        packetReassembly: {
            title: "Packet reassembly",
            text: {
                items: [
                    "PcapPlusPlus contains unique implementation of packet reassembly techniques.",
                    "which supports TCP retransmission, out-of-order TCP packets and missing TCP data.",
                    "to create and reassemble IPv4 and IPv6 fragments"
                ],
                textStrong: [
                    "",
                    "TCP Reassembly",
                    "IP Fragmentation and Defragmentation",
                ]
            },
            img: "img/landing-page/stream.png"
        },
        readWritePackets: {
            title: "Read and write packets to files",
            text: "PcapPlusPlus provides an easy-to-use interface for reading and writing network packets into files. It supports the most popular file formats which are ",
            links: {
                items: [
                    {
                        text: "PCAP",
                        linkTo: "https://wiki.wireshark.org/Development/LibpcapFileFormat"
                    },
                    {
                        text: "PCAPNG",
                        linkTo: "https://github.com/pcapng/pcapng"
                    }
                ]   
            },
            learnMore: {
                text: "Learn More",
                linkTo: "/docs/features#read-and-write-packets-fromto-files"
            },
            code: {
                text:
`// create a pcap file reader
pcpp::PcapFileReaderDevice pcapReader("input.pcap");
pcapReader.open();

// create a pcapng file writer
pcpp::PcapNgFileWriterDevice pcapNgWriter("output.pcapng");
pcapNgWriter.open();

// raw packet object
pcpp::RawPacket rawPacket;

// read packets from pcap reader and write pcapng writer
while (pcapReader->getNextPacket(rawPacket)) {
    pcapNgWriter.writePacket(rawPacket);
}`        
            }
        },
        superFast: {
            title: "Super Fast!",
            text: "PcapPlusPlus is designed to be efficient and lightweight. It enables amazingly fast packet processing with minimum overhead ",
            learnMore: {
                text: "View Benchmarks",
                linkTo: "/docs/benchmark"
            },
            img: "img/landing-page/rocket.png"
        }        
    }
}

export default landingPageData;