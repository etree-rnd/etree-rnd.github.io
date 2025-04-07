import React from 'react';
import styles from './StepSectionMobile.module.css';

type StepSectionProps = {
  title: string | React.ReactNode;
  titleGroup: 'titleThin' | 'titleBold';
  contents: string | React.ReactNode;
};

export default function StepSection({title, titleGroup, contents}:StepSectionProps) {
  return (
    <div className={styles.container}>
      <div className={styles[titleGroup]}>{title}</div>
      <div className={styles.contents}>{contents}</div>
    </div>
  )
}