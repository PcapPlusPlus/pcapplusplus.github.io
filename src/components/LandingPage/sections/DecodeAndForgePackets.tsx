import React from 'react';
import clsx from 'clsx';
import Body from '../components/Body';
import styles from '../components/Styles';
import TwoColumns from '../components/TwoColumns';
import TextColumn from '../components/TextColumn';
import Button from '../components/Button';
import CodeBlock from '@theme/CodeBlock';
import { FiChevronRight } from "react-icons/fi";
import SimpleLink from '../components/SimpleLink';


const DecodeAndForgePackets = ({title, text, link, learnMore, code}): JSX.Element  => {    

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
                        <SimpleLink 
                            linkTo={link.linkTo} 
                            text={link.text} 
                        />
                    </p>
                    <a className={styles.LearnMoreLink} href={learnMore.linkTo}>
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

export default DecodeAndForgePackets;