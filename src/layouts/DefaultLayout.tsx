import React from 'react';
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';
import { Outlet } from 'react-router';
import styles from 'layouts/DefaultLayout.module.css';

export default function DefaultLayout() {
  return (
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
  );
}
