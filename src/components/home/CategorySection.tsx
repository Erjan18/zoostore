import React from 'react';
import { Link } from 'react-router-dom';
import { petCategories, productCategories, Category } from '../../data/categories';

interface CategorySectionProps {
  title: string;
  subtitle: string;
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ 
  title, 
  subtitle, 
  categories 
}) => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-montserrat font-bold mb-3">{title}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className="group"
            >
              <div className="card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-montserrat font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-3">{category.description}</p>
                  <span className="text-primary-500 font-medium inline-flex items-center">
                    Перейти
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PetCategoriesSection: React.FC = () => (
  <CategorySection
    title="Наши питомцы"
    subtitle="Выберите категорию животных, которые вам интересны"
    categories={petCategories}
  />
);

export const ProductCategoriesSection: React.FC = () => (
  <CategorySection
    title="Товары для питомцев"
    subtitle="Всё необходимое для здоровья и счастья ваших питомцев"
    categories={productCategories}
  />
);