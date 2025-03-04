import React from 'react';
import styles from './BorderContainer.module.css';

type BorderContainerProps = {
  borderColor: 'lightSkyBlue' | 'darkGreen';
  steps: 1 | 2 | 3;
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  children: React.ReactNode;
};

export default function BorderContainer({borderColor, steps, title, subtitle, children}: BorderContainerProps) {
  return (
    <>
      <div className={`${styles.container} ${styles[borderColor]}`}>
        <p className={styles.step}>
          STEP.0{steps}
        </p>
        <p className={styles.mailTitle}>
          {title}
        </p>
        <p className={styles.subTitle}>
          {subtitle}
        </p>
        <div className={styles.description}>
          {children}
        </div>
      </div>
    </>
  );
}