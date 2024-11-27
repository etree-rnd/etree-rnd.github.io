import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from 'pages/Home.module.css';
import { Link } from 'react-router';

export default function Home() {
  return (
    <>
      <div className={styles.idx_wrapper}>
        <div className={styles.main_bn}>
          <div className={styles.bx_wrapper}>
            <div className={styles.bx_viewport}>
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
                <SwiperSlide
                  className={`${styles.main_bn_wf} ${styles.main_bn_bg1}`}
                ></SwiperSlide>
                <SwiperSlide
                  className={`${styles.main_bn_wf} ${styles.main_bn_bg2}`}
                ></SwiperSlide>
                <SwiperSlide
                  className={`${styles.main_bn_wf} ${styles.main_bn_bg3}`}
                ></SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.idx_container}>
        <div className={styles.quck_wrap}>
          <div className={styles.inner_quck}>
            <Link to={`/company`} className={`${styles.quck} ${styles.quck_a}`} />
            <Link to={`/business/si`} className={`${styles.quck} ${styles.quck_b}`} />
            <Link to={`/work`} className={`${styles.quck} ${styles.quck_c}`} />
            <Link to={`/contact`} className={`${styles.quck} ${styles.quck_d}`} />
          </div>
        </div>
      </div>
    </>
  );
}
