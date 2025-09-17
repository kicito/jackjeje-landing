import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <div id="home" className="hero min-h-screen bg-gradient-to-r from-blue-50 to-green-50">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">{t('hero.title')}</h1>
          <p className="py-6 text-lg">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn btn-primary btn-lg">{t('hero.viewBatches')}</a>
            <a href="#contact" className="btn btn-outline btn-lg">{t('hero.getQuoteNow')}</a>
          </div>
        </div>
      </div>
      <div className="hero-overlay bg-opacity-10"></div>
    </div>
  );
}

export default Hero;