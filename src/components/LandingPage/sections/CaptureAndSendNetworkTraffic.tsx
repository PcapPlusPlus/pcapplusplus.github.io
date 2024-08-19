import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Body from '../components/Body';
import styles from '../components/Styles';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import NetworkIcons from '../components/NetworkIcons';

function CaptureAndSendNetworkTraffic(): JSX.Element {
  return (
    <Body className={styles.Section} background="light">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Capture and Send Network Traffic"
            content={
              <>
                <p>
                  PcapPlusPlus enables capturing and sending network packets
                  through easy-to-use C++ wrappers for the most popular packet
                  processing engines such as{' '}
                  <a href="https://www.tcpdump.org/">libpcap</a>,{' '}
                  <a href="https://www.winpcap.org/">WinPcap</a>,{' '}
                  <a href="https://nmap.org/npcap/">NPcap</a>,{' '}
                  <a href="https://www.dpdk.org/">DPDK</a>,{' '}
                  <a href="https://ebpf.io/">eBPF AF_XDP</a> and{' '}
                  <a href="https://www.ntop.org/products/packet-capture/pf_ring/">
                    PF_RING
                  </a>
                </p>
                <a
                  className={styles.LearnMoreLink}
                  href={useBaseUrl('/docs/features#packet-capture')}
                >
                  Learn More
                  <FiChevronRight />
                </a>
              </>
            }
          />
        }
        columnTwo={NetworkIcons()}
      />
    </Body>
  );
}

export default CaptureAndSendNetworkTraffic;
