import React from 'react';
import clsx from 'clsx';
import Body from '../components/Body';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import Button from '../components/Button';
import styles from '../components/Styles';
import CodeBlock from '@theme/CodeBlock';
import { FiChevronRight } from "react-icons/fi";


const ReadWritePackets = (): JSX.Element  => {
    return (
      <Body className={styles.Section} background="light">
        <TwoColumns
          columnOne={
            <TextColumn
              title="Read and write packets to files"
              content={
                <>
                  <p>
                    PcapPlusPlus provides an easy-to-use interface for reading and writing network packets into files. It supports the most popular file formats which are <a href="https://wiki.wireshark.org/Development/LibpcapFileFormat">PCAP</a> and <a href="https://github.com/pcapng/pcapng">PCAPNG</a>
                  </p>
                  <a className="learn-more-link" href="/docs/features#read-and-write-packets-fromto-files">Learn More <FiChevronRight /></a>
                </>
              }
            />
          }
          columnTwo={
            <CodeBlock className={clsx("language-cpp", styles.codeBlock)}>
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
      </Body>
    );
  };

export default ReadWritePackets;