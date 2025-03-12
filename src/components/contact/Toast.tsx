import React, { useEffect } from 'react';
import styles from './Toast.module.css';

export default function Toast({ setToast, message }: { setToast: (bool: boolean) => void, message: string }): React.ReactElement {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    }
  }, [setToast]);

  return (
    <div className={styles.container}>
      <p className={styles.frame}>
        {message}
      </p>
    </div>
  )
}