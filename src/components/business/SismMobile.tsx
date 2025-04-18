import React from 'react';
import styles from './SismMobile.module.css';
import BorderContainer from './BorderContainerMobile';
import StepSection from './StepSectionMobile';
import w3cIcon from "assets/images/W3C_Icon.png";
import chromeIcon from "assets/images/Google_Chrome_icon.png";
import ieIcon from "assets/images/IE_icon.png";
import firefoxIcon from "assets/images/Mozilla_Firefox_icon.png";
import safariIcon from "assets/images/safari_logo_icon.png";
import operaIcon from "assets/images/opera_logo_icon.png";

export default function Sism() {
  return (
    <>
      <BorderContainer
        borderColor="lightSkyBlue"
        steps={1}
        title={'검증된 인재 투입!'}
        subtitle={(<>프로젝트 수행의 안정성 보장 / 프로젝트 성공률 상승</>)}
      >
        <>
          <p>
            당사의 자체 교육프로그램을 통한<br/>
            트랜디한 기술력 확보 및 우수 개발자 양성
          </p><br/>
          <p>
            풍부한 경험과 노하우를 보유한 당사의 리더들을 통한<br/>
            전직원의 실무역량 향상 및 프로젝트에 최적화된 인재로 성장
          </p>
        </>
      </BorderContainer>
      <BorderContainer
        borderColor="darkGreen"
        steps={2}
        title={'개발만 잘하는게 아니다!'}
        subtitle={(<>최소 10년 이상 전문가 구성 / 노련함과 기술력의 조합</>)}
      >
        <>
          <p>
            당사는 다년간 SI, SM 분야에서 고객관리 마인드와<br/>
            기획마인드를 키운 다방면의 전문가들이 모인 기업입니다.
          </p><br/>
          <p>
            프로젝트 관리, 품질기획, 기획, 디자인, 퍼블리싱,<br/>
            개발을 통합 처리 합니다.
          </p>
        </>
      </BorderContainer>
      <BorderContainer
        borderColor="lightSkyBlue"
        steps={3}
        title={<>금융 및 e-Commerce 분야에 특화</>}
        subtitle={'기술과 효율에 집중하는 회사'}
      >
        <div className={styles.contentsSection}>
          <StepSection
            title={(
              <p className={styles.projectTitle}>
                Project
              </p>
            )}
            titleGroup="titleThin"
            contents={(
              <>
                e-Commerce 등<br/>
                특화된 SI, SM서비스
              </>
            )}/>
          <StepSection
            title={(
              <>
                <img src={w3cIcon} alt="W3C Icon" className={styles.htmlIcon}/>
                <img src={chromeIcon} alt="Google Chrome Icon" className={styles.htmlIcon}/>
                <img src={ieIcon} alt="Microsoft IE Icon" className={styles.htmlIcon}/>
                <img src={firefoxIcon} alt="Mozilla Firefox Icon" className={styles.htmlIcon}/>
                <img src={safariIcon} alt="Apple Safari Icon" className={styles.htmlIcon}/>
                <img src={operaIcon} alt="Opera Icon" className={styles.htmlIcon}/>
              </>
            )}
            titleGroup="titleThin"
            contents={(
              <>
                웹표준, 웹접근성 및<br/>
                웹 보안준수
              </>
            )}/>
          <StepSection
            title={(
              <>
                <div className={`${styles.box} ${styles.uiBgColor}`}>UI</div>
                <div className={`${styles.box} ${styles.uxBgColor}`}>UX</div>
              </>
            )}
            titleGroup="titleBold"
            contents={(
              <>
                사용자환경에 최적화된<br/>
                UI / UX 제공
              </>
            )}/>
          <StepSection
            title={(
              <div className={styles.itSolution}>IT SOLUTION</div>
            )}
            titleGroup="titleBold"
            contents={(
              <>
                솔루션 기반 시스템 구축<br/>
                신규 솔루션 기획개발
              </>
            )}/>
        </div>
      </BorderContainer>
    </>
  );
}