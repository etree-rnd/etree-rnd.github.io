import React from 'react';
import styles from './OperationOffice.module.css';

export type OperationOfficeProps = {
  name: string;
  items: string[];
}

export default function OperationOffice({name, items}:OperationOfficeProps) {
  return (
    <section className={styles.container}>
      <h1 className={`${styles.title}`}>{name}</h1>
      <ul className={styles.itemList}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}