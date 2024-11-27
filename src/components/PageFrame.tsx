import React from 'react';
import styles from 'components/PageFrame.module.css';
import { Link } from 'react-router';

type PageFrameProps = {
  id: string;
  to: string;
  menu: string;
  isTab?: boolean;
  submenu?: string;
  children: JSX.Element;
};

export default function PageFrame({
  to,
  menu,
  submenu,
  isTab = true,
  children,
}: PageFrameProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sub_tit}>
        <h2 className={styles.sub_tit_h2}>{submenu ? submenu : menu}</h2>
      </div>
      <div className={styles.cons_wrap}>
        {isTab && (
          <>
            <div className={styles.cpo}>
              <h2 className={styles.cpo_h2}>{menu}</h2>
            </div>
            <div className={styles.lnb}>
              <ul>
                <li
                  className={`${styles.lnb_ul_li} ${styles.lnb_ul_li_active}`}
                >
                  <Link
                    to={to}
                    className={`${styles.lnb_ul_li_a} ${styles.lnb_ul_li_active_a}`}
                  >
                    {menu}
                  </Link>
                </li>
              </ul>
              <p className={styles.cpop}>
                home &gt; {submenu ? submenu : menu} &gt; {menu}
              </p>
            </div>
          </>
        )}

        <div className={styles.container}>
          <div className={styles.container_title}>{menu}</div>
          <article className={styles.ctt}>
            <header>
              <h1 className={styles.ctt_header_h1}>{menu}</h1>
            </header>
            <div className={styles.ctt_con}>{children}</div>
          </article>
        </div>
      </div>
    </div>
  );
}
