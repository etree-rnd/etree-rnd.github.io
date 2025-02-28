import React from 'react';
import styles from "./Client.module.css";

import nhSecurities from 'assets/images/nh_securities_logo.png';
import samsungSecurities from 'assets/images/samsung_securities_logo.png';
import meritzSecurities from 'assets/images/meritz_securities_logo.png';
import lotteCard from 'assets/images/lotte_card_logo.png';
import samsungCard from 'assets/images/samsung_card_logo.png';
import lotteOn from 'assets/images/lotte_on_logo.png';
import lotteHomeshopping from 'assets/images/lotte_homeshopping_logo.png';
import lotteMart from 'assets/images/lotte_mart_logo.png';
import lotteDutyFree from 'assets/images/lotte_duty_free_logo.png';
import lotteRental from 'assets/images/lotte_rental_logo.png';
import homeplus from 'assets/images/homeplus_logo.png';
import richNco from 'assets/images/richnco_logo.png';
import hanhwaLifeInsurance from 'assets/images/hanhwa_life_insurance_logo.png';
import shoppingnt from 'assets/images/shoppingnt_logo.png';
import samsungMedicalCenter from 'assets/images/samsung_medical_center_logo.png';
import lotteDataCommucation from 'assets/images/lotte_data_commuication_logo.png';
import samsungSDS from 'assets/images/samsung_sds_logo.png';
import SamsungElectronics from 'assets/images/samsung_electronics_logo.png';

type ClientLogoProps = {
  src: string;
  name: string;
}

const clientLogos: ClientLogoProps[] = [
  {src: nhSecurities, name: 'NH투자증권'},
  {src: samsungSecurities, name: '삼성증권'},
  {src: meritzSecurities, name: '메리츠증권'},
  {src: lotteCard, name: '롯데카드'},
  {src: samsungCard, name: '삼성카드'},
  {src: lotteOn, name: '롯데온'},
  {src: lotteHomeshopping, name: '롯데홈쇼핑'},
  {src: lotteMart, name: '롯데마트'},
  {src: lotteDutyFree, name: '롯데면세점'},
  {src: lotteRental, name: '롯데렌탈'},
  {src: richNco, name: '리치엔코'},
  {src: homeplus, name: '홈플러스'},
  {src: hanhwaLifeInsurance, name: '한화생명'},
  {src: shoppingnt, name: '쇼핑엔티'},
  {src: samsungMedicalCenter, name: '삼성서울병원'},
  {src: lotteDataCommucation, name: '롯데정보통신'},
  {src: samsungSDS, name: '삼성SDS'},
  {src: SamsungElectronics, name: '삼성전자'},
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