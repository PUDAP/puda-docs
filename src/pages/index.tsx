import type {ReactNode} from 'react';
import {useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const promptUrl = new URL('agent-setup/prompt.md', siteConfig.url).href;
  const agentPrompt = `Fetch ${promptUrl}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(agentPrompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
            className={clsx('button button--lg', styles.getStartedBtn)}
            to="/docs/getting-started">
            Get Started
          </Link>
          <div className={styles.copyPromptWrapper}>
            <button
              className={clsx('button button--lg', styles.copyPromptBtn, {
                [styles.copied]: copied,
              })}
              onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy Prompt'}
            </button>
            <span className={styles.tooltip}>Paste into your AI agent to set up PUDA</span>
          </div>
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
