import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, PhoneCall, TicketPercent } from 'lucide-react';

const PromoSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container-custom">
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="flex items-start p-6 bg-white rounded-xl shadow-card">
            <Shield className="text-primary-500 w-10 h-10 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Гарантия качества</h3>
              <p className="text-neutral-600">Все наши животные проходят ветеринарный контроль</p>
            </div>
          </div>
          
          <div className="flex items-start p-6 bg-white rounded-xl shadow-card">
            <Truck className="text-primary-500 w-10 h-10 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Быстрая доставка</h3>
              <p className="text-neutral-600">Доставка по Бишкеку в течение дня</p>
            </div>
          </div>
          
          <div className="flex items-start p-6 bg-white rounded-xl shadow-card">
            <PhoneCall className="text-primary-500 w-10 h-10 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Консультация</h3>
              <p className="text-neutral-600">Наши специалисты всегда готовы помочь</p>
            </div>
          </div>
          
          <div className="flex items-start p-6 bg-white rounded-xl shadow-card">
            <TicketPercent className="text-primary-500 w-10 h-10 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Скидки</h3>
              <p className="text-neutral-600">Регулярные акции и программа лояльности</p>
            </div>
          </div>
        </div>
        
        {/* CTA Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Banner */}
          <div className="relative h-64 rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(https://images.pexels.com/photos/37860/border-collie-jump-water-british-sheepdog-37860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            
            <div className="relative h-full p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-3">Консультация ветеринара</h3>
              <p className="text-white/90 mb-4 max-w-xs">Бесплатная консультация при покупке любого питомца</p>
              <Link to="/services" className="btn btn-primary self-start">Подробнее</Link>
            </div>
          </div>
          
          {/* Second Banner */}
          <div className="relative h-64 rounded-xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(https://static.insales-cdn.com/r/yoo-emQBlcI/rs:fit:1408:0:1/q:100/plain/images/articles/1/671/4629151/%D1%81%D0%BA%D0%B8%D0%B4%D0%BA%D0%B0.jpg@jpg)` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            
            <div className="relative h-full p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-montserrat font-bold text-white mb-3">Скидка 10% на первый заказ</h3>
              <p className="text-white/90 mb-4 max-w-xs">Используйте промокод ПЕРВЫЙЗАКАЗ при оформлении</p>
              <Link to="/catalog/products" className="btn btn-primary self-start">За покупками</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;