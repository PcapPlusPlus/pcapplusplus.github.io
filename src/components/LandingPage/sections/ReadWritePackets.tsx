import React from 'react';
import clsx from 'clsx';
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FiChevronRight } from 'react-icons/fi';
import Body from '../components/Body';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import styles from '../components/Styles';

function ReadWritePackets(): JSX.Element {
  return (
    <Body className={styles.Section} background="light">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Read and Write Packets to Files"
            content={
              <>
                <p>
                  PcapPlusPlus provides an easy-to-use interface for reading and
                  writing network packets into files.It supports the most
                  popular file formats which are{' '}
                  <a href="https://wiki.wireshark.org/Development/LibpcapFileFormat">
                    PCAP
                  </a>{' '}
                  and <a href="https://github.com/pcapng/pcapng">PCAPNG</a>
                </p>
                <a
                  className={styles.LearnMoreLink}
                  href={useBaseUrl(
                    '/docs/features#read-and-write-packets-fromto-files'
                  )}
                >
                  Learn More
                  <FiChevronRight />
                </a>
              </>
            }
          />
        }
        columnTwo={
          <CodeBlock className={clsx('language-cpp', styles.codeBlock)}>
            {`// create a pcap file reader
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
}`}
          </CodeBlock>
        }
      />
    </Body>
  );
}

export default ReadWritePackets;
