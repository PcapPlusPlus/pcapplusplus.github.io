import React from 'react';
import Body from '../components/Body';
import styles from '../components/Styles';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import NetworkIcons from '../components/NetworkIcons';
import { FiChevronRight } from "react-icons/fi";
import SimpleLink from '../components/SimpleLink';


const CaptureAndSendNetworkTraffic = ({title, text, links, learnMore}): JSX.Element  => {
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
                    {links.items.map((item, i) => (
                      <span key={i}>
                        <SimpleLink linkTo={item.linkTo} text={item.name}/>
                        {i === (links.items.length-1) ? '': ', '}
                      </span>
                    ))}                    
                  </p>
                  <a className={styles.LearnMoreLink} href={learnMore.linkTo}>
                    {learnMore.text} 
                    <FiChevronRight />
                  </a>
                </>
              }
            />
          }
          columnTwo={NetworkIcons()}
        />
      </Body>
    );
  };

  export default CaptureAndSendNetworkTraffic;