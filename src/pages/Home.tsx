import React from 'react';
import styles from 'pages/Home.module.css';
import MenuSection from "../components/home/MenuSection";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainTitle}>
        이트리소프트는 고객의 신뢰를 최우선으로 다양한 프로젝트를 수행하면서 우수한 평가를 받아왔고<br/>
        항상 도전하는 정신으로 전문성과 기술력을 쌓아오면서 성장하였습니다.<br/>
        이트리소프트는 더불어 살아가고 나누는 회사를 만드는데 모든 임직원이 함께 하고 있습니다.
      </h1>
      <section className={styles.menuArea}>
        <MenuSection name={'COMPANY'} uri={'/company'}>
          <p>
            이트리소프트는 금융 및 e-Commerce 등에서 풍부한 경험을 보유하고 있으며<br/>
            이미 다양한 프로젝트를 통해 우수한 평가를 받았고<br/>
            서비스 구축 및 운영, 컨설팅 전반에 대한 토털 서비스를 제공하는 전문 기업입니다.
          </p>
        </MenuSection>
        <MenuSection name={'BUSINESS'} uri={'/business/si'}>
          <ul className={styles.list}>
            <li>IT 프로젝트 컨설팅</li>
            <li>System Integration</li>
            <li>System Management</li>
            <li>ITO</li>
            <li>Solution 개발</li>
          </ul>
        </MenuSection>
        <MenuSection name={'WORK'} uri={'/work'}>
          <p>
            이트리소프트는 다년간 롯데카드, NH투자증권, 이지자산평가, 쇼핑엔티 등<br/>
            국내 굴지의 기업을 대상으로 최상의 IT 서비스를 제공해 왔습니다.
          </p>
        </MenuSection>
        <MenuSection name={'RECRUIT'} uri={'/recruit'}>
          <p>
            이트리소프트와 함께 성장하고자 하는 인재 여러분들을 환영합니다.
          </p>
        </MenuSection>
      </section>
    </div>
  );
}
