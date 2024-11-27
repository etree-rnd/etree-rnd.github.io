import React from 'react';
import CompanyContent from 'assets/images/contents/e68cc6d68b4719d5c359c7916712102a_1630856412_1319.jpg';
import PageFrame from "../components/PageFrame";
import {useDefaultData} from "../commons/useDefaultData";

export default function Company() {
 const {menus} = useDefaultData();
 const company = menus.filter((menu) => menu.id === 'com');
 const {id, to, name} = company[0];
  return (
    <>
      <PageFrame id={id} to={to} menu={name}>
        <img
          src={CompanyContent}
          title={`e68cc6d68b4719d5c359c7916712102a_1630856412_1319.jpg`}
          alt={`Company`}
        />
      </PageFrame>
    </>
    /*<div className={styles.wrapper}>
        <div className={styles.sub_tit}><h2 className={styles.sub_tit_h2}>COMPANY</h2></div>
        <div className={styles.cons_wrap}>
          <div className={styles.cpo}>
            <h2 className={styles.cpo_h2}>COMPANY</h2>
          </div>
          <div className={styles.lnb}>
            <ul>
              <li className={`${styles.lnb_ul_li} ${styles.lnb_ul_li_active}`}>
                <Link to="/company" className={`${styles.lnb_ul_li_a} ${styles.lnb_ul_li_active_a}`}>COMPANY</Link>
              </li>
            </ul>
            <p className={styles.cpop}>home &gt; COMPANY &gt; COMPANY</p>
          </div>
          <div className={styles.container}>
            <div className={styles.container_title}>COMPANY</div>
            <article className={styles.ctt}>
              <header>
                <h1 className={styles.ctt_header_h1}>COMPANY</h1>
              </header>
              <div className={styles.ctt_con}>
                <p className={styles.ctt_con_p}>
                  <img src={CompanyContent} title={`e68cc6d68b4719d5c359c7916712102a_1630856412_1319.jpg`} alt={`Company`}/>
                  <br className={styles.ctt_con_p_br}/>&nbsp;
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>*/
  );
}
