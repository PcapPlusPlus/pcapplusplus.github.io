import React from 'react';
import Layout from '@theme/Layout';
import CaptureAndSendNetworkTraffic from '../components/LandingPage/sections/CaptureAndSendNetworkTraffic';
import DecodeAndForgePackets from '../components/LandingPage/sections/DecodeAndForgePackets';
import SuperFast from '../components/LandingPage/sections/SuperFast';
import MultiPlatformSupport from '../components/LandingPage/sections/MultiPlatformSupport';
import ReadWritePackets from '../components/LandingPage/sections/ReadWritePackets';
import PacketReassembly from '../components/LandingPage/sections/PacketReassembly';
import Header from '../components/LandingPage/components/Header';


const LandingPage = (): JSX.Element => {
    return (        
        <Layout
            title="A multi-platform C++ library for capturing, parsing and crafting of network packets"
            description="A multi-platform C++ library for capturing, parsing and crafting of network packets">   
            <Header />                             
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
};


export default LandingPage;