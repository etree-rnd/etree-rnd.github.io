import React from 'react';
import CompanyContent from 'assets/images/contents/e68cc6d68b4719d5c359c7916712102a_1630856412_1319.jpg';
import PageFrame from 'components/PageFrame';
import { useDefaultData } from '../commons/useDefaultData';
import styles from 'pages/Company.module.css';

export default function Company() {
  const { menus } = useDefaultData();
  const menu = menus.filter((menu) => menu.id === 'com');
  const { id, to, name } = menu[0];
  return (
    <>
      <PageFrame id={id} to={to} menu={name}>
        <p className={styles.ctt_con_p}>
          <img
            src={CompanyContent}
            title={`e68cc6d68b4719d5c359c7916712102a_1630856412_1319.jpg`}
            alt={`Company`}
          />
          <br className={styles.ctt_con_p_br} />
          &nbsp;
        </p>
      </PageFrame>
    </>
  );
}
