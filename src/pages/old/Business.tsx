import React, { useEffect, useState } from 'react';
import { useDefaultData } from 'commons/useDefaultData';
import PageFrame from 'components/PageFrame';
import styles from 'pages/Business.module.css';
import BusinessSiSm from 'assets/images/contents/e68cc6d68b4719d5c359c7916712102a_1630858169_6475.jpg';
import BusinessSolution from 'assets/images/contents/e68cc6d68b4719d5c359c7916712102a_1698624000_1612.jpg';
import BusinessEdu from 'assets/images/contents/e68cc6d68b4719d5c359c7916712102a_1630860685_3637.jpg';
import { useLocation } from 'react-router';

export default function Business() {
  const { menus } = useDefaultData();
  const menu = menus.filter((menu) => menu.id === 'bus');
  const { id, to, name, children } = menu[0];
  const { pathname } = useLocation();
  const [viewImg, setViewImg] = useState('');

  useEffect(() => {
    switch (pathname) {
      case '/business/solution':
        setViewImg(BusinessSolution);
        break;
      case '/business/edu':
        setViewImg(BusinessEdu);
        break;
      default:
        setViewImg(BusinessSiSm);
        break;
    }
  }, [pathname]);

  return (
    <PageFrame id={id} to={to} menu={name} submenuItems={children}>
      <p className={styles.ctt_con_p}>
        <img
          src={viewImg}
          title={`e68cc6d68b4719d5c359c7916712102a_1630856412_1319.jpg`}
          alt={`Company`}
        />
        <br className={styles.ctt_con_p_br} />
        &nbsp;
      </p>
    </PageFrame>
  );
}
