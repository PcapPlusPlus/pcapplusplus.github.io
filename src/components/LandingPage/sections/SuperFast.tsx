import React from 'react';
import Body from '../components/Body';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import Button from '../components/Button';
import styles from '../components/Styles';
import useBaseUrl from '@docusaurus/useBaseUrl';


const SuperFast = (): JSX.Element  => {
    return (
      <Body className={styles.NativeApps} background="light">
        <TwoColumns
          columnOne={
            <TextColumn
              title="Super Fast!"
              content={
                <>
                  <p>
                    PcapPlusPlus is designed to be efficient and lightweight. It enables amazingly fast packet processing with minimum overhead 
                  </p>
                  <Button text="View Benchmarks" to="/docs/benchmark"/>
                </>
              }
            />
          }
          columnTwo={<img alt="" src={useBaseUrl('img/landing-page/rocket.png')} />}
        />
      </Body>
    );
  };

export default SuperFast;