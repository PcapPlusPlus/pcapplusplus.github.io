import React from 'react';
import Layout from '@theme/Layout';
import CaptureAndSendNetworkTraffic from '../components/LandingPage/sections/CaptureAndSendNetworkTraffic';
import DecodeAndForgePackets from '../components/LandingPage/sections/DecodeAndForgePackets';
import SuperFast from '../components/LandingPage/sections/SuperFast';
import MultiPlatformSupport from '../components/LandingPage/sections/MultiPlatformSupport';
import ReadWritePackets from '../components/LandingPage/sections/ReadWritePackets';
import PacketReassembly from '../components/LandingPage/sections/PacketReassembly';
import Header from '../components/LandingPage/components/Header';
import landingPageData from '../components/LandingPage/data/landingPageData';

const LandingPage = (): JSX.Element => {
    const landingPageInfoData = landingPageData.components.landingPage; 
    const headerData = landingPageData.components.header; 
    const captureAndSendNetworkTrafficData = landingPageData.components.captureAndSendNetworkTraffic;
    const decodeAndForgePacketsData = landingPageData.components.decodeAndForgePackets;
    const superFastData = landingPageData.components.superFast;
    const multiPlatformSupportData = landingPageData.components.multiPlatformSupport;
    const readWritePacketsData = landingPageData.components.readWritePackets;
    const packetReassemblyData = landingPageData.components.packetReassembly;

    return (        
        <Layout
            title={landingPageInfoData.title}
            description={landingPageInfoData.description}>   
            <Header img={headerData.img} 
                    title={headerData.title} 
                    buttonQuickStart={headerData.buttonQuickStart}
                    buttonDownload={headerData.buttonDownload}
            />                             
            <main>
                <CaptureAndSendNetworkTraffic 
                    title={captureAndSendNetworkTrafficData.title}
                    text={captureAndSendNetworkTrafficData.text}
                    links={captureAndSendNetworkTrafficData.links}
                    learnMore={captureAndSendNetworkTrafficData.learnMore}
                />
                <DecodeAndForgePackets 
                    title={decodeAndForgePacketsData.title}
                    text={decodeAndForgePacketsData.text}
                    link={decodeAndForgePacketsData.link}
                    learnMore={decodeAndForgePacketsData.learnMore}
                    code={decodeAndForgePacketsData.code}
                />
                <SuperFast 
                    title={superFastData.title}
                    text={superFastData.text}
                    learnMore={superFastData.learnMore}
                    img={superFastData.img}
                />
                <MultiPlatformSupport 
                    title={multiPlatformSupportData.title}
                    text={multiPlatformSupportData.text}
                    learnMore={multiPlatformSupportData.learnMore}
                />
                <ReadWritePackets 
                    title={readWritePacketsData.title}
                    text={readWritePacketsData.text}
                    links={readWritePacketsData.links}
                    learnMore={readWritePacketsData.learnMore}
                    code={readWritePacketsData.code}
                />
                <PacketReassembly 
                    title={packetReassemblyData.title}
                    text={packetReassemblyData.text} 
                    img={packetReassemblyData.img}
                />
            </main>
        </Layout>
    );
};


export default LandingPage;