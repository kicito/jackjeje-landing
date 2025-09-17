import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  const { t } = useTranslation();

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#home">{t('navigation.home')}</a></li>
            <li><a href="#services">{t('navigation.services')}</a></li>
            <li><a href="#contact">{t('navigation.contact')}</a></li>
          </ul>
        </div>
        <a href="#home" className="btn btn-ghost text-xl font-bold text-primary">JackJeJe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#home" className="btn btn-ghost">{t('navigation.home')}</a></li>
          <li><a href="#services" className="btn btn-ghost">{t('navigation.services')}</a></li>
          <li><a href="#contact" className="btn btn-ghost">{t('navigation.contact')}</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <LanguageSwitcher />
        <a href="#contact" className="btn btn-primary ml-2">{t('navigation.getQuote')}</a>
      </div>
    </div>
  );
}

export default Header;