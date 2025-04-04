import React from 'react';
import styles from './SectionMobile.module.css';

export default function Section({bottomBorder, leftBorder, image, alt, title, children}: SectionProps): React.ReactElement {
  return (
    <div className={`
            ${styles.container}
            ${bottomBorder ? styles.bottomBorder : ''}
          `}>
      <div
        className={`
            ${styles.sectionArea}
            ${leftBorder ? styles.leftBorder : ''}
          `}
      >
        <section>
          <img src={image} alt={alt} className={styles.image} />
        </section>
        <section>
          <h1 className={styles.title}>{title}</h1>
          {children}
        </section>
      </div>
    </div>
);
}

type SectionProps = {
  bottomBorder?: boolean;
  leftBorder?: boolean;
  image: string;
  alt: string;
  title: string;
  children: React.ReactNode;
}
