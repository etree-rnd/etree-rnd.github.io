import React from 'react';
import styles from "./ClientMobile.module.css";

import nhSecurities from 'assets/images/nh_securities_logo.png';
import egAssets from 'assets/images/eg_assets_logo.png';

type ClientLogoProps = {
  src: string;
  name: string;
}

const clientLogos: ClientLogoProps[] = [
  {src: nhSecurities, name: 'NH투자증권'},
  {src: egAssets, name: '이지자산평가'},
];

export default function Client() {
  return (
    <ul className={styles.container}>
      {
        clientLogos.map((clientLogo, index) => (
          <li key={index} className={styles.clientLogoGrid}>
            <img src={clientLogo.src} alt={clientLogo.name} className={styles.clientLogo} />
          </li>
        ))
      }
    </ul>
  );
}