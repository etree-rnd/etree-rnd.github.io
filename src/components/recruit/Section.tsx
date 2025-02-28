import React from 'react';
import styles from './Section.module.css';

type SectionProps = {
  title: string;
  children: React.ReactNode;
}

export default function Section({title, children}: SectionProps): React.ReactElement {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.contents}>{children}</ul>
    </div>
  );
}