import React, {useState} from 'react';
import styles from 'pages/MobileMenu.module.css';
import closeBtn from 'assets/images/close_btn.png';
import { useDefaultData } from 'commons/useDefaultData';
import { Link } from 'react-router';

export default function MobileMenu() {
  const { menus } = useDefaultData();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleMenuClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }
  
  return (
    <div className={styles.menuContainer}>
      <button className={styles.closeButton}>
        <Link to="/">
          <img src={closeBtn} alt="closeButton" />
        </Link>
      </button>
      <ul className={styles.menuList_ul}>
        {menus.map(({ id, to, name, midName, children } : Menu, index) => {
          return (
            <li key={id}
                className={styles.menuItem_li}
                onClick={() => handleMenuClick(index)}
            >
              <Link to={`${!children ? to : ''}`}>
                {midName ? midName : name}
              </Link>
              {children && openIndex === index && (
                <ul
                  className={styles.menuList_2ul}
                >
                  {children.map(({ id, to, name }) => (
                    <li key={id}>
                      <Link
                        to={to}
                        data-menuid={id}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
