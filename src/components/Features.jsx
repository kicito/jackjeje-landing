import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.qualityGuarantee.title'),
      description: t('services.qualityGuarantee.description'),
      icon: "🏆"
    },
    {
      title: t('services.flexibleBatches.title'),
      description: t('services.flexibleBatches.description'),
      icon: "📦"
    },
    {
      title: t('services.expertAdvice.title'),
      description: t('services.expertAdvice.description'),
      icon: "🎯"
    }
  ];

  return (
    <section id="services" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('services.title')}</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="card-title justify-center text-2xl mb-4">{service.title}</h3>
                <p className="text-base-content/70">{service.description}</p>
                <div className="card-actions justify-center mt-6">
                  <button className="btn btn-primary btn-outline">{t('services.learnMore')}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;