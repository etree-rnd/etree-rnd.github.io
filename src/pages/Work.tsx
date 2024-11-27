import React from 'react';
import { useDefaultData } from 'commons/useDefaultData';
import PageFrame from 'components/PageFrame';
import WorkImg from 'assets/images/work.jpg';
import styles from 'pages/Work.module.css';

export default function Work() {
  const { menus, works } = useDefaultData();
  const company = menus.filter((menu) => menu.id === 'work');
  const { id, to, name } = company[0];
  return (
    <>
      <PageFrame id={id} to={to} menu={name}>
        <div>
          <img src={WorkImg} alt="이미지" className={styles.work_img} />
          <table className={styles.work_table}>
            <tbody>
              <tr>
                <th className={styles.work_table_th}>발주사</th>
                <th className={styles.work_table_th}>프로젝트</th>
                <th className={styles.work_table_th}>기간</th>
                <th className={styles.work_table_th}>참여분야</th>
                <th className={styles.work_table_th}>참여형태</th>
                <th className={styles.work_table_th}>상태</th>
              </tr>
              {works.map(
                (
                  { orderCom, pjtName, period, assign, entryType, status },
                  index,
                ) => {
                  return (
                    <tr key={index}>
                      <td className={styles.work_table_td}>{orderCom}</td>
                      <td className={styles.work_table_td}>{pjtName}</td>
                      <td className={styles.work_table_td}>{period}</td>
                      <td className={styles.work_table_td}>{assign}</td>
                      <td className={styles.work_table_td}>{entryType}</td>
                      <td className={styles.work_table_td}>{status}</td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </div>
      </PageFrame>
    </>
  );
}
