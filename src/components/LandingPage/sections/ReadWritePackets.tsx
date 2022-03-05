import React from 'react';
import clsx from 'clsx';
import Body from '../components/Body';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import styles from '../components/Styles';
import CodeBlock from '@theme/CodeBlock';
import { FiChevronRight } from "react-icons/fi";
import SimpleLink from '../components/SimpleLink';


const ReadWritePackets = ({title, text, links, learnMore, code}): JSX.Element  => {   

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
                    <SimpleLink linkTo={links.items[0].linkTo} text={links.items[0].text} /> and 
                    {' '}<SimpleLink linkTo={links.items[1].linkTo} text={links.items[1].text} />                    
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
          columnTwo={
            <CodeBlock className={clsx("language-cpp", styles.codeBlock)}>
            {code.text}
          </CodeBlock>
        }
        />
      </Body>
    );
  };

export default ReadWritePackets;