import React from 'react';
import { useDefaultData } from 'commons/useDefaultData';
import PageFrame from 'components/PageFrame';
import styles from 'pages/Contact.module.css';
import OnlineQuestion from "../components/contact/OnlineQuestion";

export default function Contact() {
  const { menus, company } = useDefaultData();
  const menu = menus.filter((menu) => menu.id === 'con');
  const { id, to, name, midName } = menu[0];
  const { address, telephone, fax, email } = company;
  return (
    <PageFrame id={id} to={to} menu={name} submenu={midName}>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.8403149275982!2d127.0508089!3d37.5484661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca497f7db2b77%3A0x4d342dfdf821b8c7!2z7ZWY7Jqw7Iqk65SU7IS47KKF7YOA7JuM!5e0!3m2!1sko!2skr!4v1630862971541!5m2!1sko!2skr"
          width="100%"
          height="350"
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
