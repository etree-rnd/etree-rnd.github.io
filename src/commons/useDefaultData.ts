import egAssets from 'assets/images/eg_assets_logo.png';
import nhSecurities from 'assets/images/nh_securities_logo.png';

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
    name: '넥스트리온',
    bizNo: '000-00-00000',
    address: '서울특별시 금천구 가산동, 0호',
    telephone: '02-0000-0000',
    fax: '02-0000-0000',
    email: 'etree_admin@nextryon.com',
  };

  const works: WorkContents[] = [
    {
      orderCom: '이지자산평가',
      pjtName: '대외 정보제공 시스템 구축',
      period: '2025.06 ~ 2025.09',
      assign: '기업자산 평가 정보를 대외고객에게 서비스',
      entryType: '수행사',
      status: '수행완료',
      startYear: '2025',
      startMonth: '06',
      endYear: '2025',
      endMonth: '09',
      clientLogo: egAssets,
      clientName: '이지자산평가',
    },
    {
      orderCom: 'NH농협투자증권',
      pjtName: 'WM 디지털 사업 웹서비스 운영,개발',
      period: '2025.06 ~ 현재',
      assign: 'NH농협투자증권의 웹서비스 운영',
      entryType: '수행사',
      status: '수행중',
      startYear: '2025',
      startMonth: '06',
      endYear: '2025',
      endMonth: '',
      clientLogo: nhSecurities,
      clientName: 'NH농협투자증권',
    },
  ];

  return { menus, company, works };
}
