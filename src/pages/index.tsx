import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CopyPromptButton from '@site/src/components/CopyPromptButton';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          PUDA Developer Docs
        </Heading>
        <p className={styles.heroSubtitle}>
          Explore guides and tutorials to start building on PUDA&apos;s platform
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.getStartedBtn)}
            to="/docs/getting-started">
            Get Started
          </Link>
          <CopyPromptButton variant="hero" />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="PUDA Developer Docs"
      description="Explore guides and tutorials to start building on PUDA's platform">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
