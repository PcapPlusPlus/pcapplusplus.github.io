import React from 'react';
import TwoColumns from './TwoColumns';
import styles from './Styles';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Button from './Button';

const Header = (): JSX.Element => {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <TwoColumns
          columnOne={
            <div className="container">
              <h1 className="hero__title">Welcome to PcapPlusPlus!</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Button text="Get Started" to="/docs/quickstart"/>
                <Button text="Download" to="/docs/install"/>
              </div>
            </div>
          }
          columnTwo={<img alt="" src={useBaseUrl('img/landing-page/logo.svg')} />}
      />
      </header>
    );
  };

export default Header;
