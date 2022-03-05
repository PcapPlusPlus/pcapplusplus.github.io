import React from 'react';
import Body from '../components/Body';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../components/Styles';
import { FiChevronRight } from "react-icons/fi";


const PacketReassembly = ({title, text, img}): JSX.Element  => {    
    
    return (
      <Body className={styles.Section} background="light">
        <TwoColumns
          reverse={true}
          columnOne={
            <TextColumn
              title={title}
              content={
                <>     
                  {text.items.map((item, i) => (
                    <p key={i}>
                      {text.textStrong[i].length > 0 ? (<strong> {text.textStrong[i]} </strong>) : ''}
                      {text.items[i]}
                    </p>
                  ))}                             
                </>
              }
            />
          }
          columnTwo={<img alt="" src={useBaseUrl(img)} />}
        />
      </Body>
    );
};


export default PacketReassembly;