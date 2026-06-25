import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container text--center">
        <Heading as="h2" className={styles.title}>
          The Runtime Environment for Physical AI
        </Heading>
        <p className={styles.description}>
          PUDA connects AI agents to instruments, robots, datastreams,
          approvals, and audit trails.
        </p>
        <div className={styles.actions}>
          <Link
            className={`button button--primary button--lg ${styles.primaryAction}`}
            to="https://www.puda.co/blog/whitepaper">
            Read our whitepaper
          </Link>
          <Link
            className={`button button--secondary button--lg ${styles.secondaryAction}`}
            to="https://www.puda.co/">
            See the demo
          </Link>
        </div>
      </div>
    </section>
  );
}
