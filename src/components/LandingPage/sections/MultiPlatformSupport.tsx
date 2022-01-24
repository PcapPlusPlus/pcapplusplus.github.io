import React from 'react';
import Body from '../components/Body';
import styles from '../components/Styles';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import Button from '../components/Button';
import useBaseUrl from '@docusaurus/useBaseUrl';


const MultiPlatformSupport = (): JSX.Element  => {
    return (
      <Body className={styles.Section} background="light">
        <TwoColumns
          reverse={true}
          columnOne={
            <TextColumn
              title="Multi platform support"
              content={
                <>
                  <p>
                    PcapPlusPlus is fully supported on Windows, MacOS, Linux, Android and FreeBSD. You can download pre-built binaries for each platform or build it from source. PcapPlusPlus is available in popular package managers such as Homebrew and Conan 
                  </p>
                  <Button text="View Installation Guide" to="/docs/install"/>
                </>
              }
            />
          }
          columnTwo={<img alt="" src={useBaseUrl('img/landing-page/supported-os.png')} />}
        />
      </Body>
    );
  };

export default MultiPlatformSupport;