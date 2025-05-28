import React from 'react';
import image01 from 'assets/images/contents/image_0001.png';
import PageFrame from 'components/PageFrame';
import { useDefaultData } from 'commons/useDefaultData';
import styles from 'pages/Company.module.css';
import Circle from "components/company/Circle";
import Cross from "components/company/Cross";

export default function Company() {
  const { menus } = useDefaultData();
  const menu = menus.filter((menu) => menu.id === 'com');
  const { id, to, name } = menu[0];
  return (
    <PageFrame id={id} to={to} menu={name}>
      <section>
        <h1 className={styles.mainTitle}>
          ㈜넥스트리온은 고객의 성공과 가치 창출을 위한<br/>
          IT서비스 파트너로서 성장하겠습니다.
        </h1>
        <div className={styles.imgArea}>
          <img src={image01} alt="사무실 이미지"/>
        </div>
        <p className={styles.subTitle}>
          <b className={styles.darkBlueColor}>IT서비스</b>를 통한 <b className={styles.darkBlueColor}>사람, 기업(고객, 파트너)</b>이라는 <b className={styles.darkBrownColor}>나무(Tree)</b>로 뿌리내려<br/>
          더불어 성장하는 기업으로 발전시키고자 합니다.
        </p>
        <article className={styles.diagramContainer}>
          <Circle bgColor={'skyBlue'}>
            <span>IT<br/>프로젝트<br/>컨설팅</span>
          </Circle>
          <Cross />
          <Circle bgColor={'darkBlue'}>
            <span>SI /
              SM</span>
          </Circle>
          <Cross />
          <Circle bgColor={'darkBrown'}>
            <span>R&D</span>
          </Circle>
        </article>
        <p className={styles.description}>
          넥스트리온은 작지만 젊고 강한 기업으로 거듭나기 위해 끈임없는 연구개발과 개발자로서의 근성을 통해<br/>
          IT분야의 핵심기술을 연마하고 전문인력을 양성하여 이를 바탕으로 e-Business 분야에<br/>
          다양한 구축 경험과 노하우를 기반으로 고객과 파트너, 임직원이 동반 성장할 수 있는 밑거름이 되고자 합니다.
        </p>
      </section>
    </PageFrame>
  );
}
