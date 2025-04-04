import React from 'react';
import styles from "./MenuSectionMobile.module.css";
import {Link} from "react-router";

type MenuProps = {
  name: string;
  uri: string;
  iconSrc: string;
  iconAlt: string;
  children: React.ReactNode;
}

export default function MenuSection({ iconSrc, iconAlt, name, uri,  children }: MenuProps): React.ReactElement {
  return (
    <article className={styles.menuContainer}>
      <div>
        <img src={iconSrc} alt={iconAlt} className={styles.image} />
      </div>
      <div className={styles.menuArea}>
        <h2 className={styles.menuTitle}>
          <Link to={uri}>{name}</Link>
        </h2>
        <div className={styles.contents}>
          {children}
        </div>
      </div>
    </article>
  );
}