import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Styles';
import TwoColumns from './TwoColumns';
import Button from './Button';

function Header(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <TwoColumns
        reverse
        columnOne={
          <div className={styles.logoContainer}>
            <img alt="" src={useBaseUrl('img/landing-page/logo.svg')} />
          </div>
        }
        columnTwo={
          <div>
            <h1 className="hero__title">Welcome to PcapPlusPlus!</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Button text="Get Started" to="/docs/quickstart" />
              &nbsp;&nbsp;
              <Button text="Download" to="/docs/install" />
            </div>
          </div>
        }
      />
    </header>
  );
}

export default Header;
