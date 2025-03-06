
import React from 'react';
import styles from './ECommercePlatform.module.css';
import { IoIosPerson } from 'react-icons/io';
import { RiMacbookLine } from "react-icons/ri";
import { ImMobile2 } from "react-icons/im";
import { BsCartFill } from "react-icons/bs";
import { FaArrowsAltH } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
import ServerIcon from 'assets/images/server_icon.png'
import FrontOffice from "./FrontOffice";
import CommercePlatform from "./CommercePlatform";
import InfraSystem from "./InfraSystem";

export default function ECommercePlatform(): React.ReactElement {
  const icons: React.ElementType[] = [
    IoIosPerson as React.ElementType,
    RiMacbookLine as React.ElementType,
    ImMobile2 as React.ElementType,
    BsCartFill as React.ElementType
  ];
  const ArrowH = FaArrowsAltH as React.ElementType;
  const ArrowV = FaArrowsAltV as React.ElementType;
  const arrowList1: number[] = [1,2,3,4];
  const arrowList2: number[] = [1,2,3,4,5,6,7,8,9];
  // const infraList: string[] = ['ERP', 'PLM', 'SCM', 'CRM', 'BI', '검색'];
  // const systemList: string[] = ['입점사', '제휴사', 'P/G', '인증기관'];

  return (
    <section className={styles.mainContainer}>
      <article className={styles.leftContainer}>
        <header className={styles.leftTop}>
          {icons.map((Icon: React.ElementType, index: number) => (
            <span key={index} className={styles.headerIcon}>
              <Icon size={28} color="grey" />
            </span>
          ))}
        </header>
        <main className={styles.foContainer}>
          <FrontOffice />
          <section className={styles.foBottom}>
            {arrowList1.map((number: number) => (
              <span key={number}>
                <ArrowV size={24} color="grey" />
              </span>
            ))}
          </section>
          <CommercePlatform Arrow={ArrowH} />
          <article className={styles.cpBottom}>
            {arrowList2.map((number: number) => (
              <span key={number}>
                  <ArrowV size={15} color="grey" />
                </span>
            ))}
          </article>
          <InfraSystem />
        </main>
      </article>
      <article>
        <ArrowH size={25} color="grey" />
      </article>
      <article>
        <section>
          <h1 className={`${styles.title}`}>CS Admin (CS)</h1>
        </section>
        <section>
          <h1 className={`${styles.title}`}>Back Office (BO)</h1>
        </section>
        <section>
          <h1 className={`${styles.title}`}>Partner Office (PO)</h1>
        </section>
      </article>
    </section>
  );
}