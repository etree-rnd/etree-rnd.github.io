import React from 'react';
import styles from './PointIcon.module.css';

export type PointIconProps = {
  imgSrc: string;
  imgAlt: string;
  children: React.ReactElement;
}

export default function PointIcon({imgSrc, imgAlt, children} : PointIconProps) {
  return (
    <div className={styles.container}>
      <img src={imgSrc} alt={imgAlt} className={styles.image} />
      <div className={styles.description}>{children}</div>
    </div>
  );
}