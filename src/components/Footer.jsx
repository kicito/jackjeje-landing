import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div className="grid grid-flow-col gap-4">
        <a href="#home" className="link link-hover">{t('navigation.home')}</a>
        <a href="#services" className="link link-hover">{t('navigation.services')}</a>
        <a href="#contact" className="link link-hover">{t('navigation.contact')}</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="mailto:info@jackjeje.com" className="link link-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
          <a href="tel:+66123456789" className="link link-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.27 1.11l-2.2 2.2z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center">
        <h3 className="font-bold text-lg text-primary mb-2">{t('footer.companyName')}</h3>
        <p className="text-sm opacity-70 max-w-md">
          {t('footer.description')}
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm opacity-70">
          {t('footer.copyright', { year: currentYear })}
        </p>
      </div>
    </footer>
  );
}

export default Footer;