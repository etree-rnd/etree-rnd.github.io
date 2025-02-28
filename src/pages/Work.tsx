import React from 'react';
import { useDefaultData } from 'commons/useDefaultData';
import PageFrame from 'components/PageFrame';
import styles from 'pages/Work.module.css';
import Client from "../components/work/Client";

export default function Work() {
  const { menus, works } = useDefaultData();
  const menu = menus.filter((menu) => menu.id === 'work');
  const { id, to, name } = menu[0];

  const groupBy = <T, K extends keyof any>(
    works: T[],
    key: (work: T) => K
  ): Record<K, T[]> =>
    works.reduce((acc, work) => {
      const groupKey = key(work);
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(work);
      return acc;
    }, {} as Record<K, T[]>);

  const _yearWorks = works
      .sort((a, b) =>
        `${a.endYear}${a.endMonth}` < `${b.endYear}${b.endMonth}` ? 1 :
          `${a.endYear}${a.endMonth}` > `${b.endYear}${b.endMonth}` ? -1 : 0);
  const yearWorks = groupBy(_yearWorks, (work) => work.endYear);
  const keys = Object.keys(yearWorks).reverse();

  return (
    <>
      <PageFrame id={id} to={to} menu={name}>
        <div className={styles.container}>
          <p className={styles.description}>
            이트리소프트는 고객만족을 최우선으로 새로운 것에 늘 도전하며<br/>
            다양한 금융 프로젝트에서 괄목할 만한 성과를 만들어 가고 있습니다.
          </p>
          <p className={styles.mainClientTitle}>- 주요 고객사 -</p>
          <Client />
          {keys.map((year) => (
            <div key={year}>
              <div className={styles.workYear}>{year}</div>
              <table className={styles.workTable}>
                <tbody>
                <tr>
                  <th className={styles.workTableTh}>로고 이미지</th>
                  <th className={styles.workTableTh}>발주사</th>
                  <th className={styles.workTableTh}>프로젝트명</th>
                </tr>
                {yearWorks[year].map((work, index) => (
                  <tr key={index}>
                    <td className={styles.workTableTd}><img src={work.clientLogo} alt={work.clientName} className={styles.clientLogo}/></td>
                    <td className={styles.workTableTd}>{work.orderCom}</td>
                    <td className={styles.workTableTd}>{work.pjtName}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </PageFrame>
    </>
  );
}
