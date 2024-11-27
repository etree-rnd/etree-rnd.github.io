import React from 'react';
import { Link } from 'react-router';
import styles from 'layouts/Footer.module.css';
import { useDefaultData } from '../commons/useDefaultData';

export default function Footer() {
  const { company } = useDefaultData();
  const { name, bizNo, address, telephone, fax, email } = company;
  return (
    <div className={styles.ft}>
      <div className={styles.ft_wr}>
        <div className={styles.ft_copy}>
          <Link to="/company" className={styles.ft_copy_a}>
            회사소개
          </Link>
          <Link to="/privacy" className={styles.ft_copy_a}>
            개인정보취급방침
          </Link>
          <Link to="/provision" className={styles.ft_copy_a}>
            서비스이용약관
          </Link>
          <Link to="/contact" className={styles.ft_copy_a}>
            찾아오시는길
          </Link>
        </div>
        <div className={styles.ft_company}>
          <p className={styles.p_ft_info}>
            {name} │ 사업자등록번호 {bizNo} │ {address}
            <br />
            TEL {telephone} │ FAX {fax} │ E-mail{' '}
            <a href={`emailto:${email}`} className={styles.email}>
              {email}
            </a>
          </p>
          <p className={styles.p_ft_copy}>
            Copyright © <b>2021 {name}.</b> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
