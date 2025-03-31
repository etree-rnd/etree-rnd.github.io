import Home from 'pages/Home';
import Business from 'pages/Business';
import Work from 'pages/Work';
import Recruit from 'pages/Recruit';
import Contact from 'pages/Contact';
import Privacy from 'pages/Privacy';
import Provision from 'pages/Provision';
import Company from "pages/Company";
import MobileMenu from "pages/MobileMenu";

export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/company',
    component: Company,
  },
  {
    path: '/business/:id',
    component: Business,
  },
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/recruit',
    component: Recruit,
  },
  {
    path: '/contact',
    component: Contact,
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
