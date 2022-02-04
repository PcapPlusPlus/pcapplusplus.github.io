import React from 'react';
import clsx from 'clsx';
import Body from '../components/Body';
import styles from '../components/Styles';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import Button from '../components/Button';
import CodeBlock from '@theme/CodeBlock';
import { FiChevronRight } from "react-icons/fi";


const DecodeAndForgePackets = (): JSX.Element  => {

    return (
        <Body className={styles.Section} background="light">
        <TwoColumns
            reverse={true}
            columnOne={
            <TextColumn
                title="Decode and forge packets"
                content={
                <>
                    <p>
                    PcapPlusPlus enables decoding and forging capabilities for a large variety of <a href="/docs/features#supported-network-protocols">network protocols</a>
                    </p>
                    <a className="learn-more-link" href="/docs/features#packet-parsing-and-crafting">Learn More <FiChevronRight /></a>
                </>
                }
            />
            }
            columnTwo={
            <CodeBlock className={clsx("language-cpp", styles.codeBlock)}>
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
        </Body>
    );
};

export default DecodeAndForgePackets;