import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import { PetCategoriesSection, ProductCategoriesSection } from '../components/home/CategorySection';
import { FeaturedPetsSection, FeaturedProductsSection, NewProductsSection } from '../components/home/FeaturedSection';
import PromoSection from '../components/home/PromoSection';
import SubscribeSection from '../components/home/SubscribeSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSlider />
      <PetCategoriesSection />
      <FeaturedPetsSection />
      <ProductCategoriesSection />
      <FeaturedProductsSection />
      <PromoSection />
      <NewProductsSection />
      <SubscribeSection />
    </>
  );
};

export default HomePage;