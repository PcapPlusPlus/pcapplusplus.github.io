import React from 'react';
import Body from '../components/Body';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import styles from '../components/Styles';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FiChevronRight } from "react-icons/fi";

const SuperFast = ({title, text, learnMore, img}): JSX.Element  => {
  
    return (
      <Body className={styles.Section} background="light">
        <TwoColumns
          columnOne={
            <TextColumn
              title={title}
              content={
                <>
                  <p>
                    {text}
                  </p>
                  <a className={styles.LearnMoreLink} 
                     href={learnMore.linkTo}>
                        {learnMore.text}
                        <FiChevronRight />
                  </a>
                </>
              }
            />
          }
          columnTwo={<img alt="" src={useBaseUrl(img)} />}
        />
      </Body>
    );
  };

export default SuperFast;