
import React from 'react';
import styles from './ECommercePlatformMobile.module.css';
import { IoIosPerson } from 'react-icons/io';
import { RiMacbookLine } from "react-icons/ri";
import { ImMobile2 } from "react-icons/im";
import { BsCartFill } from "react-icons/bs";
import { FaArrowsAltH } from "react-icons/fa";
import { FaArrowsAltV } from "react-icons/fa";
import FrontOffice from "./FrontOfficeMobile";
import CommercePlatform from "./CommercePlatformMobile";
import InfraSystem from "./InfraSystem";
import OperationOffice, {OperationOfficeProps} from "./OperationOffice";

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
  const arrowList3: number[] = [1,2,3];
  const systemList: OperationOfficeProps[] = [
    { name: 'CS Admin (CS)' , items: ['회원정보', '상담관리', '상담처리', '상담업무관리'] },
    { name: 'Back Office (BO)' , items: ['회원/프로모션', '상품/전시', '주문/클레임', '배송/물류', '제휴관리', '정산/통계', 'KPI 관리', '업체/계약'] },
    { name: 'Partner Office (PO)' , items: ['상품관리', '전시관리', '주문/클레임', '배송/물류', '매출/정산', '통계'] },
  ];

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
      <article className={styles.heightBetween}>
        {arrowList3.map((number: number) => (
          <span key={number} className={styles.sysBetweenArrow}>
            <ArrowH size={25} color="grey" />
          </span>
        ))}
      </article>
      <article className={styles.osArea}>
        {systemList.map(({name, items}: OperationOfficeProps, index: number) => (
          <OperationOffice key={index} name={name} items={items} />
        ))}
      </article>
    </section>
  );
}