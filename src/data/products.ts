import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'food-1',
    name: 'Royal Canin для взрослых кошек',
    category: 'food',
    petType: 'cat',
    price: 2500,
    oldPrice: 2800,
    description: 'Сухой корм премиум класса для взрослых кошек с нормальной активностью. Содержит оптимальное количество белков, жиров и углеводов для поддержания здоровья вашего питомца.',
    features: ['Для взрослых кошек', 'Поддержание иммунитета', 'Здоровая шерсть', 'Без искусственных красителей'],
    images: [
      'https://images.pexels.com/photos/6823218/pexels-photo-6823218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    available: true,
    stock: 15,
    brand: 'Royal Canin',
    weight: '2 кг',
    popular: true
  },
  // ... other products
];

export const getPopularProducts = (): Product[] => {
  return products.filter(product => product.popular).slice(0, 4);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new).slice(0, 4);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByPetType = (petType: Product['petType']): Product[] => {
  return products.filter(product => product.petType === petType || product.petType === 'universal');
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string, count = 3): Product[] => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  return products
    .filter(product => 
      product.id !== productId && 
      (product.petType === currentProduct.petType || product.petType === 'universal')
    )
    .slice(0, count);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.brand.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.features.some(feature => feature.toLowerCase().includes(searchTerm))
  );
};