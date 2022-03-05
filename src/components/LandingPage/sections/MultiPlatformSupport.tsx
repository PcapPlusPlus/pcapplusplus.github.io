import React from 'react';
import Body from '../components/Body';
import styles from '../components/Styles';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import OperatingSystems from '../components/OperatingSystems';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FiChevronRight } from "react-icons/fi";

const MultiPlatformSupport = ({title, text, learnMore}): JSX.Element  => {    

    return (
      <Body className={styles.Section} background="light">
        <TwoColumns
          reverse={true}
          columnOne={
            <TextColumn
              title={title}
              content={
                <>
                  <p>
                    {text}
                  </p>
                  <a 
                    className={styles.LearnMoreLink} 
                    href={learnMore.linkTo}>
                      {learnMore.text}
                      <FiChevronRight />
                  </a>
                </>
              }
            />
          }
          columnTwo={OperatingSystems()}
        />
      </Body>
    );
  };

export default MultiPlatformSupport;