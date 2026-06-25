import type {ReactNode} from 'react';
import {useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

type CopyPromptButtonProps = {
  variant?: 'hero' | 'docs';
  tooltip?: string;
};

export default function CopyPromptButton({
  variant = 'docs',
  tooltip = 'Paste into your AI agent to set up PUDA',
}: CopyPromptButtonProps): ReactNode {
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
    <div className={clsx(styles.wrapper, styles[variant])}>
      <button
        type="button"
        className={clsx(
          'button button--lg',
          variant === 'hero' ? styles.heroBtn : 'button--secondary',
          styles.btn,
          copied && styles.copied,
        )}
        onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy Prompt'}
      </button>
      <span className={styles.tooltip}>{tooltip}</span>
    </div>
  );
}
