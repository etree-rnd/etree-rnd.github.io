import React from 'react';
import image01_mobile from 'assets/images/contents/image01_mobile.png';
import PageFrame from 'components/PageFrameMobile';
import { useDefaultData } from 'commons/useDefaultData';
import styles from 'pages/CompanyMobile.module.css';
import CircleMobile from "components/company/CircleMobile";
import CrossMobile from "components/company/CrossMobile";

export default function Company() {
  const { menus } = useDefaultData();
  const menu = menus.filter((menu) => menu.id === 'com');
  const { id, to, name } = menu[0];
  return (
    <PageFrame id={id} to={to} menu={name}>
      <section>
        <h1 className={styles.mainTitle}>
          ㈜이트리소프트는<br/>
          고객의 성공과 가치 창출을 위한<br/>
          IT서비스 파트너로서 성장하겠습니다.
        </h1>
        <div className={styles.imgArea}>
          <img src={image01_mobile} alt="사무실 이미지"/>
        </div>
        <p className={styles.subTitle}>
          <b className={styles.darkBlueColor}>IT서비스</b>를 통한 <b className={styles.darkBlueColor}>사람, 기업(고객, 파트너)</b><br/>
          이라는 <b className={styles.darkBrownColor}>나무(Tree)</b>로 뿌리내려 더불어<br/>
          성장하는 기업으로 발전시키고자 합니다.
        </p>
        <article className={styles.diagramContainer}>
          <CircleMobile bgColor={'skyBlue'}>
            <span>IT<br/>프로젝트<br/>컨설팅</span>
          </CircleMobile>
          <CrossMobile />
          <CircleMobile bgColor={'darkBlue'}>
            <span>SI /
              SM</span>
          </CircleMobile>
          <CrossMobile />
          <CircleMobile bgColor={'darkBrown'}>
            <span>R&D</span>
          </CircleMobile>
        </article>
        <p className={styles.description}>
          이트리소프트는 작지만 젊고 강한 기업으로<br/>
          거듭나기 위해 끈임없는 연구개발과 개발자로서의<br/>
          근성을 통해 IT분야의 핵심기술을 연마하고<br/>
          전문인력을 양성하여<br/>
          이를 바탕으로 e-Business 분야에
          다양한 구축 경험과 노하우를 기반으로<br/>
          고객과 파트너, 임직원이 동반 성장할 수 있는<br/>
          밑거름이 되고자 합니다.
        </p>
      </section>
    </PageFrame>
  );
}
