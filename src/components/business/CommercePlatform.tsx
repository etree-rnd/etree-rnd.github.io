import React from 'react';
import styles from './CommercePlatform.module.css';

type CommercePlatformProps = {
  Arrow: React.ElementType;
}

export default function CommercePlatform({ Arrow } : CommercePlatformProps) {
  const arrowList: number[] = [1,2];
  const intFwList: string[] = ['Web Services', 'Message Broker', 'Interface Adaptor'];
  const cpsList: string[] = ['Store1 CPS', 'Store1-x CPS', 'Store2 CPS'];
  const cmsList: string[] = ['Commerce Basic Module (상품/전시/주문/결제/etc.)', 'Common Technical Library'];
  const tmList: string[] = ['Transaction', 'Security', 'Resource', 'Interface', 'Template', 'Monitoring', 'Cache'];
  const tmList2: string[] = ['Spring F/W', 'MyBatis', 'Spring Batch', 'UI F/W', 'Logging'];
  return (
    <section className={styles.cpBorder}>
      <h1 className={`${styles.title}`}>Commerce Platform</h1>
      <ul>
        <li className={`${styles.cpArea}`}>
          <h2>Integration F/W</h2>
          <ul className={`${styles.detailContents} ${styles.integrationContents}`}>
            {intFwList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </li>
        <li className={styles.cpArrowArea}>
          {arrowList.map((number: number) => (
            <div key={number} className={styles.cpArrowH}>
              <Arrow size={15} color="grey" />
            </div>
          ))}
        </li>
        <li>
          <article className={`${styles.cpArea}`}>
            <h2>Commerce Platform Service (CPS)</h2>
            <ul className={`${styles.detailContents} ${styles.cpsContents}`}>
              {cpsList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
          <article className={`${styles.cpArea} ${styles.cmArea}`}>
            <h2>Commerce Modules</h2>
            <ul className={`${styles.detailContents} ${styles.cmContents}`}>
              {cmsList.map((item, i) => (
                <li key={i} className={styles.fontStretch90p}>{item}</li>
              ))}
            </ul>
          </article>
        </li>
      </ul>
      <article className={`${styles.cpArea} ${styles.tmArea} ${styles.tmContents}`}>
        <h2>Technical Modules</h2>
        <ul className={`${styles.detailContents}`}>
          {tmList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ul className={`${styles.detailContents}`}>
          {tmList2.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}