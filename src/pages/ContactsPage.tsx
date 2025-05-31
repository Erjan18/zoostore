import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold mb-2">Контакты</h1>
          <div className="flex items-center text-sm text-neutral-500">
            <Link to="/" className="hover:text-primary-500 transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">Контакты</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact info */}
          <div>
            <div className="bg-white rounded-xl shadow-card p-6 mb-6">
              <h2 className="text-xl font-montserrat font-semibold mb-6">Наши контакты</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <MapPin size={24} className="text-primary-500 flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Адрес</h3>
                    <p className="text-neutral-600">г. Бишкек, ул. Киевская 123, ТЦ "Центр", 2 этаж</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone size={24} className="text-primary-500 flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Телефон</h3>
                    <p className="text-neutral-600">+996 222 333 444</p>
                    <p className="text-neutral-600">+996 700 123 456</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail size={24} className="text-primary-500 flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-neutral-600">info@petkg.kg</p>
                    <p className="text-neutral-600">support@petkg.kg</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock size={24} className="text-primary-500 flex-shrink-0 mr-4" />
                  <div>
                    <h3 className="font-medium mb-1">Режим работы</h3>
                    <p className="text-neutral-600">Пн - Пт: 9:00 - 18:00</p>
                    <p className="text-neutral-600">Сб: 10:00 - 16:00</p>
                    <p className="text-neutral-600">Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-card p-6">
              <h2 className="text-xl font-montserrat font-semibold mb-4">Мы в социальных сетях</h2>
              <div className="flex space-x-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-100 hover:bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-100 hover:bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a 
                  href="https://whatsapp.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-100 hover:bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
                <a 
                  href="https://telegram.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neutral-100 hover:bg-primary-100 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.417 15.181l-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-xl font-montserrat font-semibold mb-6">Связаться с нами</h2>
            
            {isSubmitted ? (
              <div className="bg-secondary-100 text-secondary-700 p-6 rounded-lg text-center">
                <Send size={48} className="mx-auto mb-4 text-secondary-500" />
                <h3 className="text-lg font-montserrat font-semibold mb-2">Сообщение отправлено!</h3>
                <p className="mb-4">
                  Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.
                </p>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', message: '' });
                  }}
                  className="btn btn-secondary"
                >
                  Отправить новое сообщение
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Имя*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="example@mail.com"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                      placeholder="+996 XXX XXX XXX"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Сообщение*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Ваше сообщение..."
                    />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Отправка...' : 'Отправить сообщение'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-xl shadow-card p-6 overflow-hidden">
          <h2 className="text-xl font-montserrat font-semibold mb-4">Наше расположение</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11695.104302386322!2d74.56040722087816!3d42.87441097107162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2sBishkek%2C%20Kyrgyzstan!5e0!3m2!1sen!2sus!4v1684318012216!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;