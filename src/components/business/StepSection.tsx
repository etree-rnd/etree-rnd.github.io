import React from 'react';
import styles from './StepSection.module.css';

type StepSectionProps = {
  title: string | React.ReactNode;
  contents: string | React.ReactNode;
};

export default function StepSection({title, contents}:StepSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.contents}>{contents}</div>
    </div>
  )
}