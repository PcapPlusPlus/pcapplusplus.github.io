import React from 'react';
import TwoColumns from './TwoColumns';
import styles from './Styles';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Button from './Button';

const Header = ({img, title, buttonQuickStart, buttonDownload}): JSX.Element => {
    const {siteConfig} = useDocusaurusContext();    
    
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <TwoColumns
          reverse={true}
          columnOne={
            <div className={styles.logoContainer}>
              <img alt="" src={useBaseUrl(img)} />
            </div>
          }
          columnTwo={
            <div>
              <h1 className="hero__title">{title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Button text={buttonQuickStart.text} to={buttonQuickStart.linkTo}/>
                &nbsp;&nbsp;
                <Button text={buttonDownload.text} to={buttonDownload.linkTo}/>
              </div>
            </div>
          }
      />
      </header>
    );
  };

export default Header;
