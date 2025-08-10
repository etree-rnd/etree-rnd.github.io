import React from 'react';
import { Link } from 'react-router';
import logo from 'assets/images/NextryonLogo.png';
import logoMobile from 'assets/images/menu_button_mobile.png';
import styles from 'layouts/HeaderMobile.module.css';

export default function Header() {
  return (
    <div className={styles.hd}>
      <h1 className={styles.hd_h1}>넥스트리온</h1>
      <div className={styles.header}>
        <div className={styles.hd_wrapper}>
          <div className={styles.logo}>
            <Link to="/" className={styles.logo_a}>
              <img src={logo} className={styles.logo_img} alt="넥스트리온" />
            </Link>
          </div>
          <div className={styles.menu_Mobile}>
            <Link to="/MobileMenu" className={styles.menu_a_Mobile}>
              <img src={logoMobile} className={styles.menu_img_Mobile} alt="모바일메뉴" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
