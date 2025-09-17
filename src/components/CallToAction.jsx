import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function CallToAction() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log to console - can be replaced with actual form submission
    console.log('Form submitted:', formData);
    alert(t('contact.form.successMessage'));
    setFormData({ name: '', contact: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-primary text-primary-content">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-xl opacity-90">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="card bg-base-100 text-base-content shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">{t('contact.sendInquiry')}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">{t('contact.form.name')}</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">{t('contact.form.contact')}</span>
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder={t('contact.form.contactPlaceholder')}
                      className="input input-bordered"
                      required
                    />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">{t('contact.form.message')}</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="textarea textarea-bordered h-24"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full">
                    {t('contact.form.submitButton')}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="card bg-primary-content text-primary shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl mb-4">{t('contact.contactInformation')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">📞</div>
                      <div>
                        <p className="font-semibold">{t('contact.info.phone')}</p>
                        <p className="opacity-70">+66 (0) 123-456-789</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">✉️</div>
                      <div>
                        <p className="font-semibold">{t('contact.info.email')}</p>
                        <p className="opacity-70">info@jackjeje.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">📍</div>
                      <div>
                        <p className="font-semibold">{t('contact.info.location')}</p>
                        <p className="opacity-70">{t('contact.info.locationValue')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-primary-content text-primary shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-xl mb-4">{t('contact.businessHours')}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>{t('contact.hours.mondayFriday')}</span>
                      <span>{t('contact.hours.weekdayHours')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('contact.hours.saturday')}</span>
                      <span>{t('contact.hours.saturdayHours')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t('contact.hours.sunday')}</span>
                      <span>{t('contact.hours.closed')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;