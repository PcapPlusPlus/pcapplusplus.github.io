import React from 'react';
import Body from '../components/Body';
import styles from '../components/Styles';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import Button from '../components/Button';
import useBaseUrl from '@docusaurus/useBaseUrl';


const CaptureAndSendNetworkTraffic = (): JSX.Element  => {
    return (
      <Body className={styles.Section} background="light">
        <TwoColumns
          columnOne={
            <TextColumn
              title="Capture and send network traffic"
              content={
                <>
                  <p>
                    PcapPlusPlus enables capturing and sending network packets through easy-to-use C++ wrappers 
                    for the most popular packet processing engines such as <a href="https://www.tcpdump.org/">libpcap</a>, <a href="https://www.winpcap.org/">WinPcap</a>, <a href="https://nmap.org/npcap/">NPcap</a>, <a href="https://www.dpdk.org/">DPDK</a> and <a href="https://www.ntop.org/products/packet-capture/pf_ring/">PF_RING</a>
                  </p>
                  <Button text="Learn More" to="/docs/features#packet-capture"/>
                </>
              }
            />
          }
          columnTwo={<img alt="" src={useBaseUrl('img/landing-page/capture-engines.png')} />}
        />
      </Body>
    );
  };

  export default CaptureAndSendNetworkTraffic;