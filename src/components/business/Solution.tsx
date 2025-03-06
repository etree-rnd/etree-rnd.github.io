import React from 'react';
import styles from './Solution.module.css';
import SolutionStep from './SolutionStep';
import ECommercePlatform from './ECommercePlatform';

export default function Solution(): React.ReactElement {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>e-Commerce Platform</h1>
      <section className={styles.platformArea}>
        <article>
          <ECommercePlatform />
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
            모듈별 기늘별 선택적 구성<br/>
            및 커스터마이징 개발에<br/>
            최적화된 솔루션
          </SolutionStep>
        </article>
      </section>
    </section>
  );
}