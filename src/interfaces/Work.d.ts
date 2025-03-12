/**
 * 프로젝트 수행 내역
 */
interface WorkContents {
  /** 발주사 */
  orderCom: string;
  /** 프로젝트명 */
  pjtName: string;
  /** 프로젝트 시작년 */
  startYear: string;
  /** 프로젝트 시작월 */
  startMonth: string;
  /** 프로젝트 종료년 */
  endYear: string;
  /** 프로젝트 종료월 */
  endMonth: string;
  /** 고객사 로고 */
  clientLogo: string;
  /** 고객사 로고 */
  clientName: string;
  period: string;
  assign: string;
  entryType: string;
  status: string;
}