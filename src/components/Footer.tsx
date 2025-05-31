import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-montserrat font-semibold mb-4">ПитомецКГ</h3>
            <p className="text-neutral-300 mb-4">
              Интернет-магазин домашних животных и товаров для них в Кыргызстане. Большой выбор, доставка по всей стране.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="bg-neutral-700 hover:bg-primary-500 w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="bg-neutral-700 hover:bg-primary-500 w-9 h-9 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-300 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/catalog/pets" className="text-neutral-300 hover:text-white transition-colors">Каталог животных</Link></li>
              <li><Link to="/catalog/products" className="text-neutral-300 hover:text-white transition-colors">Каталог товаров</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/contacts" className="text-neutral-300 hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          {/* Animal Categories */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Животные</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog/pets/cat" className="text-neutral-300 hover:text-white transition-colors">Кошки</Link></li>
              <li><Link to="/catalog/pets/dog" className="text-neutral-300 hover:text-white transition-colors">Собаки</Link></li>
              <li><Link to="/catalog/pets/bird" className="text-neutral-300 hover:text-white transition-colors">Птицы</Link></li>
              <li><Link to="/catalog/pets/rodent" className="text-neutral-300 hover:text-white transition-colors">Грызуны</Link></li>
              <li><Link to="/catalog/pets/reptile" className="text-neutral-300 hover:text-white transition-colors">Рептилии</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin size={18} className="mr-2 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">г. Бишкек, ул. Киевская 123, ТЦ "Центр"</span>
              </li>
              <li className="flex">
                <Phone size={18} className="mr-2 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">+996 222 333 444</span>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-2 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">info@petkg.kg</span>
              </li>
              <li className="text-neutral-300 mt-2">
                <p>Пн - Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-6 text-center text-neutral-400 text-sm">
          <p>© 2025 ПитомецКГ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;