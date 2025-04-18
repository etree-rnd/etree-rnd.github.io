import React from 'react';
import styles from './SolutionMobile.module.css';
import SolutionStep from './SolutionStepMobile';
import eCommercePlatform from 'assets/images/eCommercePlatform.png';

export default function Solution(): React.ReactElement {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>e-Commerce Platform</h1>
      <section className={styles.platformArea}>
        <article>
          <img src={eCommercePlatform} alt={'eCommercePlatform'} className={styles.img}/>
        </article>
        <article className={styles.stepArea}>
          <SolutionStep steps={1} >
            다년간 e-Commerce<br/>
            분야에서 Know-How를<br/>
            쌓아온 개발 경험 축적
          </SolutionStep>
          <SolutionStep steps={2} >
            중소형 규모의 쇼핑몰에<br/>
            특화된 솔루션 및 신속한<br/>
            론칭에 최적화된 솔루션
          </SolutionStep>
          <SolutionStep steps={3} >
            모듈별 기늘별 선택적<br/>
            구성 및 커스터마이징<br/>
            개발에 최적화된 솔루션
          </SolutionStep>
        </article>
      </section>
    </section>
  );
}