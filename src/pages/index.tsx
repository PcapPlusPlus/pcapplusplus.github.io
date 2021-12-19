import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--info button--lg landing-btn"
//             to="/docs">
//             Get Started
//           </Link>
//           <Link
//             className="button button--info button--lg landing-btn"
//             to="/docs/install">
//             Download
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

function LandingPageButton({text, to, className = undefined}) {
  return (
    <Link
      className={clsx("button button--lg", styles.landingBtn, className)}
      to={to}
    >
    {text}
    </Link>
  )
}

function LandingPageHeaderButton({text, to}) {
  return (
    <LandingPageButton text={text} to={to} className={styles.landingBtnHeader}/>
  )
}

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <LandingPageHeaderButton text="Get Started" to="/docs"/>
//           <LandingPageHeaderButton text="Download" to="/docs/install"/>
//         </div>
//       </div>
//     </header>
//   );
// }


function Heading({text}) {
  return <h2 className={styles.Heading}>{text}</h2>;
}

function TextColumn({title, content}) {
  return (
    <>
      <Heading text={title} />
      {content}
    </>
  );
}

function Section({
  children,
  className,
  background = 'light',
}) {
  return <section className={clsx(styles.Section, className, background)}>{children}</section>;
}

function TwoColumns({columnOne, columnTwo}) {
  return (
    <div className={styles.TwoColumns}>
      <div className={clsx(styles.column, styles.last, styles.right)}>
        {columnOne}
      </div>
      <div className={clsx(styles.column, styles.first, styles.left)}>
        {columnTwo}
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <TwoColumns
        columnOne={<img alt="" src={useBaseUrl('img/landing-page/logo.svg')} />}
        columnTwo={
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <LandingPageHeaderButton text="Get Started" to="/docs"/>
            <LandingPageHeaderButton text="Download" to="/docs/install"/>
            </div>
          </div>
        }
      />
    </header>
  )
}

function CaptureAndSendNetworkTraffic() {
  return (
    <Section className={styles.NativeApps} background="light">
      <TwoColumns
        columnOne={<img alt="" src={useBaseUrl('img/landing-page/capture-engines.png')} />}
        columnTwo={
          <TextColumn
            title="Capture and send network traffic"
            content={
              <>
                <p>
                  PcapPlusPlus enables capturing and sending network packets through easy-to-use C++ wrappers 
                  for the most popular packet processing engines such as <a href="https://www.tcpdump.org/">libpcap</a>, <a href="https://www.winpcap.org/">WinPcap</a>, <a href="https://nmap.org/npcap/">NPcap</a>, <a href="https://www.dpdk.org/">DPDK</a> and <a href="https://www.ntop.org/products/packet-capture/pf_ring/">PF_RING</a>
                </p>
                <LandingPageButton text="Learn More" to="/docs/features#packet-capture"/>
              </>
            }
          />
        }
      />
    </Section>
  );
}

function DecodeAndForgePackets() {
  return (
    <Section className={styles.NativeApps} background="light">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Decode and forge packets"
            content={
              <>
                <p>
                  PcapPlusPlus enables decoding and forging capabilities for a large variety of <a href="/docs/features#supported-network-protocols">network protocols</a>
                </p>
                <LandingPageButton text="Learn More" to="/docs/features#packet-parsing-and-crafting"/>
              </>
            }
          />
        }
        columnTwo={
          <CodeBlock className="language-cpp">
            {
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
          </CodeBlock>
        }
      />
    </Section>
  );
}

function SuperFast() {
  return (
    <Section className={styles.NativeApps} background="light">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Super Fast!"
            content={
              <>
                <p>
                  PcapPlusPlus is designed to be efficient and lightweight. It enables amazingly fast packet processing with minimum overhead 
                </p>
                <LandingPageButton text="View Benchmarks" to="/docs/benchmark"/>
              </>
            }
          />
        }
        columnTwo={<img alt="" src={useBaseUrl('img/landing-page/rocket.png')} />}
      />
    </Section>
  );
}

function MultiPlatformSupport() {
  return (
    <Section className={styles.NativeApps} background="light">
      <TwoColumns
        columnOne={<img alt="" src={useBaseUrl('img/landing-page/supported-os.png')} />}
        columnTwo={
          <TextColumn
            title="Multi platform support"
            content={
              <>
                <p>
                  PcapPlusPlus is fully supported on Windows, MacOS, Linux, Android and FreeBSD. You can download pre-built binaries for each platform or build it from source. PcapPlusPlus is available in popular package managers such as Homebrew and Conan 
                </p>
                <LandingPageButton text="View Installation Guide" to="/docs/install"/>
              </>
            }
          />
        }
      />
    </Section>
  );
}

function ReadWritePackets() {
  return (
    <Section className={styles.NativeApps} background="light">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Read and write packets to files"
            content={
              <>
                <p>
                  PcapPlusPlus provides an easy-to-use interface for reading and writing network packets into files. It supports the most popular file formats which are <a href="https://wiki.wireshark.org/Development/LibpcapFileFormat">PCAP</a> and <a href="https://github.com/pcapng/pcapng">PCAPNG</a>
                </p>
                <LandingPageButton text="Learn More" to="/docs/features#read-and-write-packets-fromto-files"/>
              </>
            }
          />
        }
        columnTwo={
          <CodeBlock className="language-cpp">
          {
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
        </CodeBlock>
      }
      />
    </Section>
  );
}

function PacketReassembly() {
  return (
    <Section className={styles.NativeApps} background="light">
      <TwoColumns
        columnOne={<img alt="" src={useBaseUrl('img/landing-page/stream.png')} />}
        columnTwo={
          <TextColumn
            title="Packet reassembly"
            content={
              <>
                <p>
                  PcapPlusPlus contains unique implementation of packet reassembly techniques.
                </p>
                <p>
                  <strong>TCP Reassembly</strong> which supports TCP retransmission, out-of-order TCP packets and missing TCP data.
                </p>
                <p>
                  <strong>IP Fragmentation and Defragmentation</strong> to create and reassemble IPv4 and IPv6 fragments
                </p>
                <LandingPageButton text="Learn More" to="/docs/features#packet-reassembly"/>
              </>
            }
          />
        }
      />
    </Section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="A multi-platform C++ library for capturing, parsing and crafting of network packets"
      description="A multi-platform C++ library for capturing, parsing and crafting of network packets">
      <HomepageHeader />
      <main>
        <CaptureAndSendNetworkTraffic />
        <DecodeAndForgePackets />
        <SuperFast />
        <MultiPlatformSupport />
        <ReadWritePackets />
        <PacketReassembly />
      </main>
    </Layout>
  );
}
