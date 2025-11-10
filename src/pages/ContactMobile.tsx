import React from 'react';
import { useDefaultData } from 'commons/useDefaultData';
import PageFrame from 'components/PageFrameMobile';
import styles from 'pages/ContactMobile.module.css';
import OnlineQuestion from "../components/contact/OnlineQuestionMobile";

export default function Contact() {
  const { menus, company } = useDefaultData();
  const menu = menus.filter((menu) => menu.id === 'con');
  const { id, to, name, midName } = menu[0];
  const { address, telephone, fax, email } = company;
  return (
    <PageFrame id={id} to={to} menu={name} submenu={midName}>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d0!2d126.8770755!3d37.4831727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9e1d2b037865%3A0xa12171157d125153!2z7Jik7IqkIOyViOyghO2VnA!5e0!3m2!1sko!2skr!4v0000000000000!5m2!1sko!2skr"
          width="90%"
          height="300"
          loading="lazy"
          className={styles.iframe_style}
        ></iframe>
        <div className={styles.map_info}>
          - {address}
          <br />- 전화번호:{telephone}
          <br />- FAX:{fax}
          <br />- E-MAIL: {email}
        </div>
        <OnlineQuestion />
      </div>
    </PageFrame>
  );
}
