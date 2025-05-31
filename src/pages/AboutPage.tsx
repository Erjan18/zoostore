import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, PhoneCall, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold mb-2">О нас</h1>
          <div className="flex items-center text-sm text-neutral-500">
            <Link to="/" className="hover:text-primary-500 transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">О нас</span>
          </div>
        </div>

        {/* Hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-montserrat font-bold mb-4">Интернет-магазин домашних животных в Кыргызстане</h2>
            <p className="text-neutral-600 mb-4">
              ПитомецКГ - ведущий интернет-магазин домашних животных и товаров для них в Кыргызстане. 
              Мы работаем с 2020 года и за это время помогли обрести дом тысячам питомцев и обеспечили 
              качественными товарами десятки тысяч клиентов.
            </p>
            <p className="text-neutral-600 mb-4">
              Наша миссия - помогать животным находить любящих хозяев и обеспечивать владельцев питомцев 
              всем необходимым для счастливой жизни их четвероногих друзей.
            </p>
            <p className="text-neutral-600">
              В нашем магазине вы найдете широкий выбор кошек, собак, птиц, грызунов, рептилий и рыб, 
              а также все необходимые товары для их содержания: корма, аксессуары, средства ухода, 
              клетки и домики.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden h-80">
            <img 
              src="https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Команда ПитомецКГ"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our advantages */}
        <div className="mb-12">
          <h2 className="text-2xl font-montserrat font-bold mb-6 text-center">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-card p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-primary-500" />
              <h3 className="text-lg font-montserrat font-semibold mb-2">Качество и гарантия</h3>
              <p className="text-neutral-600">
                Все наши животные проходят ветеринарный контроль и имеют необходимые документы. 
                Мы предоставляем гарантию на всех питомцев и товары.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-card p-6 text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-primary-500" />
              <h3 className="text-lg font-montserrat font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-neutral-600">
                Доставляем животных и товары по всему Бишкеку в день заказа или на следующий день. 
                Также осуществляем доставку по всему Кыргызстану.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-card p-6 text-center">
              <PhoneCall className="w-12 h-12 mx-auto mb-4 text-primary-500" />
              <h3 className="text-lg font-montserrat font-semibold mb-2">Консультация</h3>
              <p className="text-neutral-600">
                Наши специалисты всегда готовы помочь с выбором питомца или товара, 
                а также дать рекомендации по уходу и содержанию.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-card p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary-500" />
              <h3 className="text-lg font-montserrat font-semibold mb-2">Забота о животных</h3>
              <p className="text-neutral-600">
                Мы любим животных и заботимся о них. Часть прибыли направляем на поддержку 
                приютов для бездомных животных в Кыргызстане.
              </p>
            </div>
          </div>
        </div>

        {/* Our story */}
        <div className="bg-white rounded-xl shadow-card p-8 mb-12">
          <h2 className="text-2xl font-montserrat font-bold mb-6">Наша история</h2>
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-bold text-primary-500">2020</div>
              <div>
                <h3 className="font-montserrat font-semibold mb-1">Основание компании</h3>
                <p className="text-neutral-600">
                  ПитомецКГ был основан группой единомышленников, любящих животных и стремящихся 
                  создать лучший сервис для владельцев питомцев в Кыргызстане.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-bold text-primary-500">2021</div>
              <div>
                <h3 className="font-montserrat font-semibold mb-1">Открытие первого магазина</h3>
                <p className="text-neutral-600">
                  Мы открыли наш первый физический магазин в Бишкеке, где клиенты могли лично 
                  познакомиться с питомцами и выбрать товары.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-bold text-primary-500">2022</div>
              <div>
                <h3 className="font-montserrat font-semibold mb-1">Расширение ассортимента</h3>
                <p className="text-neutral-600">
                  Мы значительно расширили ассортимент товаров и животных, начали сотрудничество 
                  с ведущими мировыми брендами зоотоваров.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-bold text-primary-500">2023</div>
              <div>
                <h3 className="font-montserrat font-semibold mb-1">Запуск программы помощи приютам</h3>
                <p className="text-neutral-600">
                  Мы запустили благотворительную программу помощи приютам для бездомных животных 
                  в Кыргызстане, направляя часть прибыли на их поддержку.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-bold text-primary-500">2024</div>
              <div>
                <h3 className="font-montserrat font-semibold mb-1">Запуск обновленного интернет-магазина</h3>
                <p className="text-neutral-600">
                  Мы полностью обновили наш интернет-магазин, сделав его еще более удобным 
                  и функциональным для наших клиентов.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 w-24 font-bold text-primary-500">2025</div>
              <div>
                <h3 className="font-montserrat font-semibold mb-1">Расширение на весь Кыргызстан</h3>
                <p className="text-neutral-600">
                  Сегодня мы доставляем животных и товары по всему Кыргызстану, помогая 
                  питомцам находить любящих хозяев по всей стране.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our team */}
        <div className="mb-12">
          <h2 className="text-2xl font-montserrat font-bold mb-6 text-center">Наша команда</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="h-64">
                <img 
                  src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Азамат Джумаев"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-montserrat font-semibold">Азамат Джумаев</h3>
                <p className="text-sm text-primary-500">Основатель и директор</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="h-64">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Айгуль Садырова"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-montserrat font-semibold">Айгуль Садырова</h3>
                <p className="text-sm text-primary-500">Ветеринарный врач</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="h-64">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Бакыт Асанов"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-montserrat font-semibold">Бакыт Асанов</h3>
                <p className="text-sm text-primary-500">Менеджер по продажам</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              <div className="h-64">
                <img 
                  src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Нурзат Кенешова"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-montserrat font-semibold">Нурзат Кенешова</h3>
                <p className="text-sm text-primary-500">Кинолог-консультант</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-primary-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-montserrat font-bold mb-3">Остались вопросы?</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            Если у вас остались вопросы о нашем магазине, животных или товарах, свяжитесь с нами. 
            Мы всегда рады помочь вам выбрать идеального питомца или необходимые товары для вашего 
            четвероногого друга.
          </p>
          <Link to="/contacts" className="btn btn-primary">Связаться с нами</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;