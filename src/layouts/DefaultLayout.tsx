import React from 'react';
import Header from 'layouts/Header';
import HeaderMobile from 'layouts/HeaderMobile';
import Footer from 'layouts/Footer';
import { Outlet } from 'react-router';
import styles from 'layouts/DefaultLayout.module.css';
import { useDevice } from 'contexts/DeviceContext';

export default function DefaultLayout() {
  const { isMobileDevice } = useDevice();
  
  return (
    <>
      {isMobileDevice ? (
        <>
          <HeaderMobile />
          <Outlet />
        </>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
          <div
            className={styles.top_btn}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            상단으로
          </div>
        </>
      )}
    </>
  );
}
