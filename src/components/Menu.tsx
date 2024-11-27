import React, { useState } from 'react';
import { Link } from 'react-router';
import { useDefaultData } from 'commons/useDefaultData';
import styles from 'components/Menu.module.css';

export default function Menu() {
  const { menus } = useDefaultData();
  const [menuState, setMenuState] = useState('');
  const [showSubMenu, setShowSubMenu] = useState(false);

  const mainMenuMouseOverHandler = (menuId: string) => {
    const result = menuId.includes('bus');
    setShowSubMenu(result);
    setMenuState(() => menuId);
  };

  const mainMenuMouseOutHandler = () => {
    setShowSubMenu(false);
    setMenuState('');
  };

  return (
    <ul className={styles.gnb_1dul}>
      {menus.map(({ id, to, name, children }: Menu) => {
        return (
          <li
            key={id}
            className={`${styles.gnb_1dli} ${id.includes('bus') && showSubMenu ? styles.gnb_1dli_active : ''}`}
          >
            <Link
              to={to}
              className={`${styles.a_gnb_1da} ${id.includes('bus') && showSubMenu ? styles.a_gnb_1da_active : ''}`}
              onMouseOver={() => {
                mainMenuMouseOverHandler(id);
              }}
              onMouseOut={() => {
                mainMenuMouseOutHandler();
              }}
            >
              {name}
            </Link>
            {children && (
              <ul className={`${styles.gnb_2dul} ${showSubMenu ? styles['gnb_2dul_active'] : ''}`}>
                {children.map(({ id, to, name }) => (
                  <li key={id}>
                    <Link to={to} className={styles.gnb_2da} data-menuid={id}
                          onMouseOver={() => {
                            mainMenuMouseOverHandler(id);
                          }}
                          onMouseOut={() => {
                            mainMenuMouseOutHandler();
                          }}
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
  );
}
