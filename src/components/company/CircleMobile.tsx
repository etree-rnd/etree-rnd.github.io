import React from 'react';
import styles from './CircleMobile.module.css';

type CircleProps = {
  bgColor: 'skyBlue' | 'darkBlue' | 'darkBrown';
  children: JSX.Element;
};

export default function Circle({bgColor, children}: CircleProps) {
  return (
    <div className={`${styles.circle} ${styles[bgColor]}`}>
      {children}
    </div>
  )
}