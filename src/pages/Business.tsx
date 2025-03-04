import React from 'react';
import { useDefaultData } from 'commons/useDefaultData';
import PageFrame from 'components/PageFrame';
import styles from 'pages/Business.module.css';
import { useLocation } from 'react-router';
import Sism from 'components/business/Sism';

export default function Business() {
  const { menus } = useDefaultData();
  const menu = menus.filter((menu) => menu.id === 'bus');
  const { id, to, name, children } = menu[0];
  const { pathname } = useLocation();

  return (
    <>
      <PageFrame
        id={id}
        to={to}
        menu={name}
        submenuItems={children}
        description={(
          <p className={styles.description}>
            이트리소프트는 금융 및 e-Commerce 등에서 풍부한 경험과 노하우를 보유하고 있으며<br/>
            이미 다양한 프로젝트를 통해 우수한 평가를 받았고 현재도 여러 프로젝트에서 좋은 성과를 만들어 가고 있습니다.
          </p>
        )}
      >
        <>
          <div className={styles.section}>
            {pathname === '/business/si' && (<Sism />)}
            {pathname === '/business/solution' && (<><div></div></>)}
          </div>
        </>
      </PageFrame>
    </>
  );
}
