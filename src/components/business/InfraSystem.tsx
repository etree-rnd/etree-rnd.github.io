import React from 'react';
import styles from './InfraSystem.module.css'
import ServerIcon from "assets/images/server_icon.png";

export default function InfraSystem() {
  const infraList: string[] = ['ERP', 'PLM', 'SCM', 'CRM', 'BI', '검색'];
  const systemList: string[] = ['입점사', '제휴사', 'P/G', '인증기관'];
  return (
    <section className={`${styles.container}`}>
      <article className={`${styles.area}`}>
        <h2 className={styles.title}>내부<br/>인프라</h2>
        <ul className={`${styles.section}`}>
          {infraList.map((name, index) => (
            <li key={index} className={styles.serverList}>
              <img src={ServerIcon} alt={'Server'} className={styles.serverIcon}/><br/>
              {name}
            </li>
          ))}
        </ul>
      </article>
      <article className={`${styles.area}`}>
        <h2 className={styles.title}>내부<br/>인프라</h2>
        <ul className={`${styles.section}`}>
          {systemList.map((name, index) => (
            <li key={index} className={styles.serverList}>
              <img src={ServerIcon} alt={'Server'} className={styles.serverIcon}/><br/>
              {name}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}