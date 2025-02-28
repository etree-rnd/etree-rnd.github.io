import React from 'react';
import PageFrame from 'components/PageFrame';
import styles from 'pages/Recruit.module.css';
import { useDefaultData } from 'commons/useDefaultData';
import Section from "components/recruit/Section";

export default function Recruit() {
  const { menus } = useDefaultData();
  const menu = menus.filter((menu) => menu.id === 'rec');
  const { id, to, name } = menu[0];
  return (
    <PageFrame id={id} to={to} menu={name}>
      <div className={styles.container}>
        <p className={styles.description}>
          이트리소프트는 열정과 도전정신을 가지고<br/>
          항상 긍정, 능동, 적극적인 마인드로 일할 수 있는 인재를 채용합니다.
        </p>
        <div>
          <Section title={'인재상'}>
            <li>
              변화를 두려워하지 않고 항상 열정과 도전정신으로<br/>
              혁신을 추구하는 인재상을 지향합니다.
            </li>
            <li>
              긍정의 마인드로 고객과 회사와 직원이 함께<br/>
              성장하며 행복을 나눌수 있는 인재상을 지향합니다.
            </li>
            <li>
              팀웍을 중시하며 지속적인 자기계발을 통해<br/>
              최고의 전문가를 추구하는 인재상을 지향합니다.
            </li>
          </Section>
          <Section title={'채용 분야'}>
            <li>
              WEB, MOBILE WEB, APP 개발자
            </li>
            <li>
              APPLICATION, TECHNICAL ARCHITECT (AA/TA)
            </li>
            <li>
              DATA MODELING, DB관리
            </li>
          </Section>
          <Section title={'채용 절차'}>
            <li>
              서류 전형 &#10142; 실무 면접 &#10142; 최종 합격
            </li>
          </Section>
          <Section title={'인재상'}>
            <li>
              주 5일 근무제
            </li>
            <li>
              퇴직연금, 4대보험 가입
            </li>
            <li>
              매월 노트북, 모니터 비용 지원
            </li>
            <li>
              명절 상여금 지급
            </li>
            <li>
              생일 축하금 지급
            </li>
            <li>
              장기 근무자 REFRESH 휴가
            </li>
            <li>
              경조휴가, 경조사비 지원
            </li>
            <li>
              교육훈련비 지원(교육/세미나/전시회/도서구입 등)
            </li>
          </Section>
        </div>
      </div>
    </PageFrame>
  );
}
