import React from 'react';
import styles from 'pages/HomeMobile.module.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import MenuSection from 'components/home/MenuSectionMobile';
import QuickBanner1 from 'assets/images/quck0.png';
import QuickBanner2 from 'assets/images/quck1.png';
import QuickBanner3 from 'assets/images/quck2.png';
import QuickBanner4 from 'assets/images/quck3.png';

export default function Home() {
  const mainTitle: React.ReactElement = (
    <h1 className={styles.mainTitle}>
      <span>넥스트리온은</span>
      <span>고객의 신뢰를 최우선으로</span>
      <span>다양한 프로젝트를 수행하면서</span>
      <span>우수한 평가를 받아왔고</span>
      <span>항상 도전하는 정신으로</span>
      <span>전문성과 기술력을 쌓아오면서</span>
      <span>성장하였습니다.</span>
      <span>넥스트리온은 더불어 살아가고자</span>
      <span>나누는 회사를 만드는 데에</span>
      <span>모든 임직원이 함께 하고 있습니다.</span>
    </h1>
  );

  const swiperList: number[] = [1, 2, 3];

  return (
    <div className={styles.mainContainer}>
      <div className={styles.idxWrapper}>
        <div className={styles.mainBanner}>
          <div className={styles.bxWrapper}>
            <div className={styles.bxViewport}>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                speed={500}
                pagination={{
                  clickable: true,
                }}
              >
                {swiperList.map((number) => (
                  <SwiperSlide key={number} className={`${styles.mainBannerWrapper} ${styles[`mainBannerBackground${number}`]}`}>
                    {mainTitle}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.menuArea}>
        <MenuSection iconSrc={QuickBanner1} iconAlt={'company'} name={'COMPANY'} uri={'/company'}>
          <p>
            넥스트리온은 금융 및<br/>
            e-Commerce 등에서<br/>
            풍부한 경험을 보유하고 있으며<br/>
            이미 다양한 프로젝트를 통해<br/>
            우수한 평가를 받았고<br/>
            서비스 구축 및 운영, 컨설팅<br/>
            전반에 대한 토털 서비스를<br/>
            제공하는 전문 기업입니다.
          </p>
        </MenuSection>
        <MenuSection iconSrc={QuickBanner2} iconAlt={'business'} name={'BUSINESS'} uri={'/business/si'}>
          <ul className={styles.list}>
            <li>IT 프로젝트 컨설팅</li>
            <li>System Integration</li>
            <li>System Management</li>
            <li>ITO</li>
            <li>Solution 개발</li>
          </ul>
        </MenuSection>
        <MenuSection iconSrc={QuickBanner3} iconAlt={'work'} name={'WORK'} uri={'/work'}>
          <p>
            넥스트리온은 다년간<br/>
            롯데카드, NH투자증권,<br/>
            이지자산평가, 쇼핑엔티 등<br/>
            국내 굴지의 기업을 대상으로<br/>
            최상의 IT 서비스를 제공해 왔습니다.
          </p>
        </MenuSection>
        <MenuSection iconSrc={QuickBanner4} iconAlt={'recruit'} name={'RECRUIT'} uri={'/recruit'}>
          <p>
            넥스트리온과 함께 성장하고자 하는 인재 여러분들을 환영합니다.
          </p>
        </MenuSection>
      </section>
    </div>
  );
}
