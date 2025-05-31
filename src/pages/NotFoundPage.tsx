import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-primary-500 text-9xl font-bold mb-4">404</div>
          <h1 className="text-3xl font-montserrat font-bold mb-4">Страница не найдена</h1>
          <p className="text-neutral-600 mb-8">
            К сожалению, запрашиваемая вами страница не существует или была перемещена.
            Проверьте правильность введенного URL или воспользуйтесь ссылками ниже.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-primary flex items-center justify-center">
              <Home size={18} className="mr-2" />
              На главную
            </Link>
            <Link to="/catalog/pets" className="btn btn-outline flex items-center justify-center">
              <Search size={18} className="mr-2" />
              Искать питомцев
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;