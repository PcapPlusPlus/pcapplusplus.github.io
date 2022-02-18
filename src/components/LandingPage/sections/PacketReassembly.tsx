import React from 'react';
import Body from '../components/Body';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import Button from '../components/Button';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../components/Styles';
import { FiChevronRight } from "react-icons/fi";


const PacketReassembly = (): JSX.Element  => {
    
    return (
      <Body className={styles.Section} background="light">
        <TwoColumns
          reverse={true}
          columnOne={
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
                  <a className={styles.LearnMoreLink} href="/docs/features#packet-reassembly">Learn More<FiChevronRight /></a>
                </>
              }
            />
          }
          columnTwo={<img alt="" src={useBaseUrl('img/landing-page/stream.png')} />}
        />
      </Body>
    );
};


export default PacketReassembly;