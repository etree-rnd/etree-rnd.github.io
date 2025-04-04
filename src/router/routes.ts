import Home from 'pages/Home';
import HomeMobile from 'pages/HomeMobile';
import Business from 'pages/Business';
import BusinessMobile from 'pages/BusinessMobile';
import Work from 'pages/Work';
import WorkMobile from 'pages/WorkMobile';
import Recruit from 'pages/Recruit';
import RecruitMobile from 'pages/RecruitMobile';
import Contact from 'pages/Contact';
import ContactMobile from 'pages/ContactMobile';
import Privacy from 'pages/Privacy';
import Provision from 'pages/Provision';
import Company from "pages/Company";
import CompanyMobile from "pages/CompanyMobile";
import MobileMenu from "pages/MobileMenu";
import { isMobileDevice } from 'router/deviceDectector';

const isMobile = isMobileDevice();

export default [
  
  {
    path: '/',
    component: isMobile ? (HomeMobile) : (Home),
  },
  {
    path: '/company',
    component: isMobile ? (CompanyMobile) : (Company),
  },
  {
    path: '/business/:id',
    component: isMobile ? (BusinessMobile) : (Business),
  },
  {
    path: '/work',
    component: isMobile ? (WorkMobile) : (Work),
  },
  {
    path: '/recruit',
    component: isMobile ? (RecruitMobile) : (Recruit),
  },
  {
    path: '/contact',
    component: isMobile ? (ContactMobile) : (Contact),
  },
  {
    path: '/privacy',
    component: Privacy,
  },
  {
    path: '/provision',
    component: Provision,
  },
  {
    path: '/MobileMenu',
    component: MobileMenu,
  },
];
