import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.847 0 3.673.149 5.473.371m-5.473-.371v6.838V7.5a3 3 0 0 1 3-3c1.612 0 3.014 1.015 3.535 2.432M3 5.621v10.5a3 3 0 0 0 3 3h.5m12.5-13.121A48.474 48.474 0 0 1 21 5.621m0 0v10.5a3 3 0 0 1-3 3h-.5m-12.5-13.121v-.88c0-.53.411-.96.94-.96h3.12c.53 0 .94.43.94.96v.88" />
        </svg>
        <span className="font-semibold text-xs uppercase">
          {i18n.language === 'th' ? 'ไทย' : 'EN'}
        </span>
      </div>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32 z-[1]">
        <li>
          <button 
            onClick={() => changeLanguage('en')}
            className={`${i18n.language === 'en' ? 'active' : ''}`}
          >
            🇺🇸 English
          </button>
        </li>
        <li>
          <button 
            onClick={() => changeLanguage('th')}
            className={`${i18n.language === 'th' ? 'active' : ''}`}
          >
            🇹🇭 ไทย
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LanguageSwitcher;