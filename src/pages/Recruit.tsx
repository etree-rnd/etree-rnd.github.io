import React from 'react';
import PageFrame from 'components/PageFrame';
import styles from 'pages/Recruit.module.css';
import CompanyContent from 'assets/images/contents/e68cc6d68b4719d5c359c7916712102a_1630862620_5204.jpg';
import { useDefaultData } from 'commons/useDefaultData';

export default function Recruit() {
  const { menus } = useDefaultData();
  const company = menus.filter((menu) => menu.id === 'rec');
  const { id, to, name } = company[0];
  return (
    <PageFrame id={id} to={to} menu={name}>
      <p className={styles.ctt_con_p}>
        <img
          src={CompanyContent}
          title={`e68cc6d68b4719d5c359c7916712102a_1630862620_5204.jpg`}
          alt={`Company`}
        />
        <br className={styles.ctt_con_p_br} />
        &nbsp;
      </p>
    </PageFrame>
  );
}
