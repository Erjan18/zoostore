import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  btnText: string;
  position?: 'left' | 'right' | 'center';
}

const slides: SlideProps[] = [
  {
    title: 'Щенки в наличии',
    subtitle: 'Большой выбор породистых щенков с документами и прививками',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalog/pets/dog',
    btnText: 'Выбрать щенка',
    position: 'left'
  },
  {
    title: 'Корма со скидкой',
    subtitle: 'Скидки до 15% на премиальные корма для ваших питомцев',
    image: 'https://petobzor.com/wp-content/uploads/2017/11/Korma-ekonom-klassa-dlya-koshek.jpg',
    link: '/catalog/products/food',
    btnText: 'Перейти к кормам',
    position: 'right'
  },
  {
    title: 'Попугаи с доставкой',
    subtitle: 'Волнистые попугаи, кореллы и другие виды с доставкой по Бишкеку',
    image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/catalog/pets/bird',
    btnText: 'Выбрать попугая',
    position: 'left'
  }
];

const Slide: React.FC<SlideProps> = ({ title, subtitle, image, link, btnText, position = 'left' }) => {
  const positionClasses = {
    left: 'items-start text-left',
    right: 'items-end text-right',
    center: 'items-center text-center'
  };

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      
      <div className={`relative h-full container-custom flex flex-col justify-center ${positionClasses[position]}`}>
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-3">{title}</h2>
          <p className="text-lg text-white/90 mb-6">{subtitle}</p>
          <Link to={link} className="btn btn-primary px-6">{btnText}</Link>
        </div>
      </div>
    </div>
  );
};

const HeroSlider: React.FC = () => {
  return (
    <section className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;