import React from 'react';
import styles from "./SolutionStep.module.css";

type SolutionStepProps = {
  steps: 1 | 2 | 3;
  children: React.ReactNode;
}

export default function SolutionStep({steps, children}: SolutionStepProps):React.ReactElement {
  return (
    <div className={`${styles.container}`}>
      <p className={styles.step}>
        STEP.0{steps}
      </p>
      <p className={styles.contents}>
        {children}
      </p>
    </div>
  );
}