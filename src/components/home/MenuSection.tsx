import React from 'react';
import styles from "./MenuSection.module.css";
import {Link} from "react-router";

type MenuProps = {
  name: string;
  uri: string;
  children: React.ReactNode;
}

export default function MenuSection({ name, uri, children }: MenuProps): React.ReactElement {
  return (
    <article className={styles.menuContainer}>
      <div>
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