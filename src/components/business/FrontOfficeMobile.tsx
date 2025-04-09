import React from 'react';
import styles from './FrontOfficeMobile.module.css';

export default function FrontOffice() {
  return (
    <section className={styles.border}>
      <h1 className={`${styles.title}`}>Front Office (FO)</h1>
      <ul className={styles.storeList}>
        <li className={`${styles.common} ${styles.main}`}>Store1</li>
        <li className={`${styles.common} ${styles.sub}`}>Store1-1</li>
        <li className={`${styles.common} ${styles.sub}`}>Store1-2</li>
        <li className={`${styles.common} ${styles.ext}`}>신규확장</li>
        <li className={`${styles.common} ${styles.main}`}>Store2</li>
      </ul>
    </section>
  );
}