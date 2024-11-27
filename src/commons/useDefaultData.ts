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
        { id: 'bus-edu', to: '/business/edu', name: 'IT교육사업' },
      ],
    },
    { id: 'work', to: '/work', name: 'WORK' },
    { id: 'rec', to: '/recruit', name: 'RECRUIT' },
    { id: 'con', to: '/contact', name: 'CONTACT US' },
  ];

  const company: Company = {
    name: '이트리소프트',
    bizNo: '115-86-01998',
    address: '서울특별시 성동구 성수일로 89, 605호(성수동1가, 메타모르포)',
    telephone: '02-2124-2025',
    fax: '02-2124-2025',
    email: 'etree_admin@etreesoft.com',
  };

  return { menus, company };
}