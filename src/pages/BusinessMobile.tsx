import React from 'react';
import { useDefaultData } from 'commons/useDefaultData';
import PageFrame from 'components/PageFrameMobile';
import styles from 'pages/BusinessMobile.module.css';
import { useLocation } from 'react-router';
import Sism from 'components/business/SismMobile';
import Solution from 'components/business/SolutionMobile';
import BusinessTopImg from 'assets/images/businessMobile_top.png';

export default function Business() {
  const { menus } = useDefaultData();
  const menu = menus.filter((menu) => menu.id === 'bus');
  const { id, to, name, children } = menu[0];
  const { pathname } = useLocation();

  return (
    <PageFrame
      id={id}
      to={to}
      menu={name}
      submenuItems={children}
    >
      <>
        <img src={BusinessTopImg} alt={'businessTopImg'} className={styles.imgArea}/>
        <p className={styles.description}>
          넥스트리온은 금융 및 e-Commerce 등에서<br/>
          풍부한 경험과 노하우를 보유하고 있으며<br/>
          이미 다양한 프로젝트를 통해 우수한 평가를<br/>
          받았고 현재도 여러 프로젝트에서 좋은 성과를<br/>
          만들어 가고 있습니다.
        </p>
        <div className={styles.section}>
          {pathname === '/business/si' && (<Sism />)}
          {pathname === '/business/solution' && (<Solution />)}
        </div>
      </>
    </PageFrame>
  );
}
