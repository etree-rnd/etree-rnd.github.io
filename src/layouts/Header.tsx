import React from 'react';
import { Link } from 'react-router';
import logo from 'assets/images/logo.jpg';
import Menu from 'components/Menu';
import styles from 'layouts/Header.module.css';

export default function Header() {
  return (
    <div className={styles.hd}>
      <h1 className={styles.hd_h1}>이트리소프트</h1>
      <div className={styles.header}>
        <div className={styles.hd_wrapper}>
          <div className={styles.logo}>
            <Link to="/" className={styles.logo_a}>
              <img src={logo} className={styles.logo_img} alt="이트리소프트" />
            </Link>
          </div>
          <nav className={styles.gnb}>
            <h2 className={styles.gnb_h2}>메인메뉴</h2>
            <Menu />
          </nav>
        </div>
      </div>
    </div>
  );
}
