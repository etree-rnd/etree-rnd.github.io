import React from 'react';
import styles from './CrossMobile.module.css';

export default function Cross() {
  return (
    <div className={styles.container}>
      <p className={styles.widthLine}></p>
      <p className={styles.heightLine}></p>
    </div>
  );
}