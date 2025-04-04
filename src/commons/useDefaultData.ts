import egAssets from 'assets/images/eg_assets_logo.png';
import fis from 'assets/images/fis_logo.png';
import tOrder from 'assets/images/torder_logo.png';
import nhSecurities from 'assets/images/nh_securities_logo.png';
import gmb from 'assets/images/gmg_logo.png';
import samsungSecurities from 'assets/images/samsung_securities_logo.png';
import meritzSecurities from 'assets/images/meritz_securities_logo.png';
import lotteCard from 'assets/images/lotte_card_logo.png';
import kiaMotors from 'assets/images/kia_motors_logo.png';
import lfMall from 'assets/images/lfmall_logo.png';
import fintech from 'assets/images/fintech_logo.png';
import nis from 'assets/images/nis_logo.png';
import s1 from 'assets/images/samsung_s1_logo.png';
import hyundaiAutoEver from 'assets/images/hyundai_auto_ever_logo.png';
import samsungCard from 'assets/images/samsung_card_logo.png';
import lotteOn from 'assets/images/lotte_on_logo.png';
import lotteDutyFree from 'assets/images/lotte_duty_free_logo.png';
import homeplus from 'assets/images/homeplus_logo.png';
import richNco from 'assets/images/richnco_logo.png';
import shoppingnt from 'assets/images/shoppingnt_logo.png';
import samsungMedicalCenter from 'assets/images/samsung_medical_center_logo.png';

export function useDefaultData() {
  const menus: Menu[] = [
    { id: 'com', to: '/company', name: 'COMPANY' },
    {
      id: 'bus',
      to: '/business/si',
      name: 'BUSINESS',
      children: [
        { id: 'bus-si', to: '/business/si', name: 'SI/SM' },
        { id: 'bus-sol', to: '/business/solution', name: 'Solution' },
      ],
    },
    { id: 'work', to: '/work', name: 'WORK' },
    { id: 'rec', to: '/recruit', name: 'RECRUIT' },
    { id: 'con', to: '/contact', name: 'CONTACT', midName: 'CONTACT US' },
  ];

  const company: Company = {
    name: '이트리소프트',
    bizNo: '115-86-01998',
    address: '서울특별시 성동구 성수일로 89, 605호(성수동1가, 메타모르포)',
    telephone: '02-2124-2025',
    fax: '02-2124-2025',
    email: 'etree_admin@etreesoft.com',
  };

  const works: WorkContents[] = [
    {
      orderCom: '이지자산평가',
      pjtName: '대외 정보제공 시스템 구축',
      period: '2024.06 ~ 2024.10',
      assign: '기업자산 평가 정보를 대외고객에게 서비스',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2024',
      startMonth: '06',
      endYear: '2024',
      endMonth: '10',
      clientLogo: egAssets,
      clientName: '이지자산평가',
    },
    {
      orderCom: '재정정보원',
      pjtName: 'E-나라도움 시스템 기능 개선 개발',
      period: '2024.05 ~ 2024.10',
      assign: 'E-나라도움 시스템 기능 개선 개발',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2024',
      startMonth: '05',
      endYear: '2024',
      endMonth: '10',
      clientLogo: fis,
      clientName: '재정정보원',
    },
    {
      orderCom: '티오더',
      pjtName: '티오더 CDP 법인분리 시스템 구축',
      period: '2024.01 ~ 2024.05',
      assign: '고객관리 플랫폼의 대외 고객에게 서비스',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2024',
      startMonth: '01',
      endYear: '2024',
      endMonth: '05',
      clientLogo: tOrder,
      clientName: '티오더',
    },
    {
      orderCom: 'NH농협투자증권',
      pjtName: 'WM 디지털 사업 웹서비스 운영,개발',
      period: '2024.01 ~ 현재',
      assign: 'NH농협투자증권의 웹서비스 운영',
      entryType: '수행사',
      status: '수행중',
      startYear: '2024',
      startMonth: '01',
      endYear: '2025',
      endMonth: '',
      clientLogo: nhSecurities,
      clientName: 'NH농협투자증권',
    },
    {
      orderCom: 'NH농협투자증권',
      pjtName: 'TAX Advisory 플랫폼 구축',
      period: '2023.08 ~ 2024.01',
      assign: 'TAX Advisory 플랫폼 구축',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2023',
      startMonth: '08',
      endYear: '2024',
      endMonth: '01',
      clientLogo: nhSecurities,
      clientName: 'NH농협투자증권',
    },
    {
      orderCom: '경기도마을버스조합',
      pjtName: '경기도마을버스 교통카드시스템 구축',
      period: '2023.04 ~ 2023.12',
      assign: '경기도마을버스 교통카드시스템 구축',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2023',
      startMonth: '04',
      endYear: '2023',
      endMonth: '12',
      clientLogo: gmb,
      clientName: '경기도마을버스조합',
    },
    {
      orderCom: '롯데카드',
      pjtName: '롯데카드 신분증진위여부 시스템 구축',
      period: '2023.08 ~ 2023.12',
      assign: '롯데카드 신분증진위여부 시스템 구축',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2023',
      startMonth: '08',
      endYear: '2023',
      endMonth: '12',
      clientLogo: lotteCard,
      clientName: '롯데카드',
    },
    {
      orderCom: '롯데카드',
      pjtName: '롯데카드 전환대출 시스템 구축',
      period: '2023.02 ~ 2023.08',
      assign: '롯데카드 신용대출 전환 자동화 서비스',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2023',
      startMonth: '02',
      endYear: '2023',
      endMonth: '08',
      clientLogo: lotteCard,
      clientName: '롯데카드',
    },
    {
      orderCom: '메리츠증권',
      pjtName: '메리츠증권 MTS 운영,개발',
      period: '2023.02 ~ 2023.12',
      assign: '메리츠증권 MTS 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2023',
      startMonth: '02',
      endYear: '2023',
      endMonth: '12',
      clientLogo: meritzSecurities,
      clientName: '메리츠증권',
    },
    {
      orderCom: '현대기아자동차',
      pjtName: '현대기아자동차 중고차 쇼핑몰 구축',
      period: '2022.11 ~ 2023.03',
      assign: '중고차 쇼핑몰 프로트엔드 구축',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2022',
      startMonth: '11',
      endYear: '2023',
      endMonth: '03',
      clientLogo: kiaMotors,
      clientName: '현대기아자동차',
    },
    {
      orderCom: '롯데카드',
      pjtName: '롯데카드 로카모빌리티 연계시스템 구축',
      period: '2022.03 ~ 2023.01',
      assign: '로카모빌리티 서비스 통합앱 구축',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2022',
      startMonth: '03',
      endYear: '2023',
      endMonth: '01',
      clientLogo: lotteCard,
      clientName: '롯데카드',
    },
    {
      orderCom: '쇼핑엔티',
      pjtName: '온라인 쇼핑몰 재구축',
      period: '2021.10 ~ 2022.09',
      assign: '온라인 쇼핑몰 재구축',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2021',
      startMonth: '10',
      endYear: '2022',
      endMonth: '09',
      clientLogo: shoppingnt,
      clientName: '쇼핑엔티',
    },
    {
      orderCom: 'LF몰',
      pjtName: 'LF몰 쇼핑몰 재구축',
      period: '2021.12 ~ 2022.03',
      assign: '온라인 쇼핑몰 재구축',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2021',
      startMonth: '12',
      endYear: '2022',
      endMonth: '03',
      clientLogo: lfMall,
      clientName: 'LF몰',
    },
    {
      orderCom: '롯데카드',
      pjtName: '디지털 ARS 시스템 개선사업',
      period: '2021.10 ~ 2022.02',
      assign: '디지털 ARS 시스템 개선사업',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2021',
      startMonth: '10',
      endYear: '2022',
      endMonth: '02',
      clientLogo: lotteCard,
      clientName: '롯데카드',
    },
    {
      orderCom: '핀테크',
      pjtName: '마이데이터 서비스 구축',
      period: '2021.10 ~ 2022.04',
      assign: '마이데이터 서비스 구축',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2021',
      startMonth: '10',
      endYear: '2022',
      endMonth: '04',
      clientLogo: fintech,
      clientName: '핀테크',
    },
    {
      orderCom: '국정원',
      pjtName: '위협요소관리 시스템 개선',
      period: '2021.10 ~ 2021.12',
      assign: '위협요소관리 시스템 개선',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2021',
      startMonth: '10',
      endYear: '2021',
      endMonth: '12',
      clientLogo: nis,
      clientName: '국정원',
    },
    {
      orderCom: '삼성에스원',
      pjtName: '터키보안포탈 시스템 구축',
      period: '2021.08 ~ 2021.11',
      assign: '터키보안보탈 시스템 구축',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2021',
      startMonth: '08',
      endYear: '2021',
      endMonth: '11',
      clientLogo: s1,
      clientName: '삼성에스원',
    },
    {
      orderCom: '리치앤코',
      pjtName: '리치앤코 코어시스템 차세대 구축',
      period: '2020.10 ~ 2021.11',
      assign: '영업관리 차세대 시스템 구축',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2020',
      startMonth: '10',
      endYear: '2021',
      endMonth: '11',
      clientLogo: richNco,
      clientName: '리치앤코',
    },
    {
      orderCom: '리치앤코',
      pjtName: '애드알바 글로벌 시스템 구축',
      period: '2020.04 ~ 2021.05',
      assign: '애드알바 글로벌 시스템 구축',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2020',
      startMonth: '04',
      endYear: '2021',
      endMonth: '05',
      clientLogo: richNco,
      clientName: '리치앤코',
    },
    {
      orderCom: '리치앤코',
      pjtName: 'MA운영팀 운영,개발',
      period: '2020.03 ~ 2021.03',
      assign: 'MA운영팀 시스템 유지보수',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2020',
      startMonth: '03',
      endYear: '2021',
      endMonth: '03',
      clientLogo: richNco,
      clientName: '리치앤코',
    },
    {
      orderCom: '롯데온',
      pjtName: '롯데 통합EC 구축 및 운영',
      period: '2020.08 ~ 2021.01',
      assign: '롯데 통합EC 구축 및 운영',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2020',
      startMonth: '08',
      endYear: '2021',
      endMonth: '01',
      clientLogo: lotteOn,
      clientName: '롯데온',
    },
    {
      orderCom: '홈플러스',
      pjtName: '온라인 플랫폼 리뉴얼',
      period: '2020.02 ~ 2021.02',
      assign: '온라인 플랫폼 리뉴얼',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2020',
      startMonth: '02',
      endYear: '2021',
      endMonth: '02',
      clientLogo: homeplus,
      clientName: '홈플러스',
    },
    {
      orderCom: '롯데면세점',
      pjtName: '롯데면세점 온라인몰 운영,개발',
      period: '2020.09 ~ 2021.12',
      assign: '롯데면세점 온라인몰 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2020',
      startMonth: '09',
      endYear: '2021',
      endMonth: '12',
      clientLogo: lotteDutyFree,
      clientName: '롯데면세점',
    },
    {
      orderCom: '삼성카드',
      pjtName: '커뮤니티앱 시스템 운영,개발',
      period: '2020.09 ~ 2021.08',
      assign: '커뮤니티앱 시스템 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2020',
      startMonth: '09',
      endYear: '2021',
      endMonth: '08',
      clientLogo: samsungCard,
      clientName: '삼성카드',
    },
    {
      orderCom: '삼성서울병원',
      pjtName: '삼성서울병원 시스템 운영,개발',
      period: '2020.09 ~ 2021.06',
      assign: '삼성서울병원 시스템 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2020',
      startMonth: '09',
      endYear: '2021',
      endMonth: '06',
      clientLogo: samsungMedicalCenter,
      clientName: '삼성서울병원',
    },
    {
      orderCom: '현대오토에버',
      pjtName: '쇼핑몰 운영',
      period: '2020.12 ~ 2023.03',
      assign: '쇼핑몰 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2020',
      startMonth: '12',
      endYear: '2023',
      endMonth: '03',
      clientLogo: hyundaiAutoEver,
      clientName: '현대오토에버',
    },
    {
      orderCom: '삼성증권',
      pjtName: '삼성증권 팝터치 운영',
      period: '2020.09 ~ 2022.12',
      assign: '삼성증권 팝터치 운영,개발',
      entryType: '전문업체',
      status: '수행완료',
      startYear: '2020',
      startMonth: '09',
      endYear: '2022',
      endMonth: '12',
      clientLogo: samsungSecurities,
      clientName: '삼성증권',
    },
  ];

  return { menus, company, works };
}
