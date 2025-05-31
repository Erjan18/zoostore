import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Pet, getPopularPets } from '../../data/pets';
import { Product, getPopularProducts, getNewProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';

interface FeaturedSectionProps {
  title: string;
  subtitle: string;
  viewAllLink: string;
  viewAllText: string;
}

// Pet Card Component
interface PetCardProps {
  pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const isFav = isFavorite(pet.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFav) {
      removeFromFavorites(pet.id);
    } else {
      addToFavorites({ id: pet.id, type: 'pet' });
    }
  };

  return (
    <Link to={`/pets/${pet.id}`} className="group">
      <div className="card overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={pet.images[0]} 
            alt={pet.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <button 
            onClick={toggleFavorite}
            className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
          >
            <Heart size={18} className={isFav ? 'fill-primary-500 text-primary-500' : 'text-neutral-500'} />
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-2">
            <h3 className="text-lg font-montserrat font-semibold group-hover:text-primary-500 transition-colors">
              {pet.name}
            </h3>
            <span className="bg-secondary-100 text-secondary-700 text-xs font-medium px-2 py-1 rounded">
              {pet.type === 'cat' && 'Кошка'}
              {pet.type === 'dog' && 'Собака'}
              {pet.type === 'bird' && 'Птица'}
              {pet.type === 'rodent' && 'Грызун'}
              {pet.type === 'reptile' && 'Рептилия'}
              {pet.type === 'fish' && 'Рыба'}
            </span>
          </div>
          <div className="text-sm text-neutral-600 mb-3">
            <p>{pet.breed}</p>
            <p>Возраст: {pet.age}</p>
            <p>Пол: {pet.gender === 'male' ? 'Мальчик' : 'Девочка'}</p>
          </div>
          <div className="flex justify-between items-center mt-auto pt-2 border-t border-neutral-100">
            <span className="text-lg font-semibold text-primary-600">{pet.price.toLocaleString()} сом</span>
            <span className="text-xs text-neutral-500">
              {pet.available ? 'В наличии' : 'Нет в наличии'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Product Card Component
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const isFav = isFavorite(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      type: 'product'
    });
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFav) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({ id: product.id, type: 'product' });
    }
  };

  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="card overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          {product.oldPrice && (
            <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded">
              Скидка {Math.round((1 - product.price / product.oldPrice) * 100)}%
            </span>
          )}
          {product.new && (
            <span className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
              Новинка
            </span>
          )}
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button 
              onClick={toggleFavorite}
              className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            >
              <Heart size={18} className={isFav ? 'fill-primary-500 text-primary-500' : 'text-neutral-500'} />
            </button>
            <button 
              onClick={handleAddToCart}
              className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            >
              <ShoppingCart size={18} className="text-neutral-500" />
            </button>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="bg-secondary-100 text-secondary-700 text-xs font-medium px-2 py-1 rounded">
              {product.category === 'food' && 'Корм'}
              {product.category === 'accessories' && 'Аксессуар'}
              {product.category === 'toys' && 'Игрушка'}
              {product.category === 'care' && 'Уход'}
              {product.category === 'housing' && 'Жилье'}
            </span>
          </div>
          <h3 className="text-lg font-montserrat font-semibold group-hover:text-primary-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-neutral-600 mb-3">{product.brand}</p>
          <div className="flex justify-between items-center mt-auto pt-2 border-t border-neutral-100">
            <div>
              <span className="text-lg font-semibold text-primary-600">{product.price.toLocaleString()} сом</span>
              {product.oldPrice && (
                <span className="text-sm text-neutral-500 line-through ml-2">{product.oldPrice.toLocaleString()} сом</span>
              )}
            </div>
            <span className="text-xs text-neutral-500">
              {product.stock > 0 ? 'В наличии' : 'Нет в наличии'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Featured Pet Section
export const FeaturedPetsSection: React.FC = () => {
  const popularPets = getPopularPets();

  return (
    <section className="py-12 bg-neutral-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-montserrat font-bold mb-2">Популярные питомцы</h2>
            <p className="text-neutral-600">Наши самые популярные животные в поисках дома</p>
          </div>
          <Link to="/catalog/pets" className="btn btn-outline">
            Смотреть всех
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Products Section
export const FeaturedProductsSection: React.FC = () => {
  const popularProducts = getPopularProducts();

  return (
    <section className="py-12">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-montserrat font-bold mb-2">Популярные товары</h2>
            <p className="text-neutral-600">Товары, которые чаще всего выбирают наши клиенты</p>
          </div>
          <Link to="/catalog/products" className="btn btn-outline">
            Смотреть все
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

// New Products Section
export const NewProductsSection: React.FC = () => {
  const newProducts = getNewProducts();

  return (
    <section className="py-12 bg-neutral-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-montserrat font-bold mb-2">Новинки</h2>
            <p className="text-neutral-600">Свежие поступления товаров для ваших питомцев</p>
          </div>
          <Link to="/catalog/products?filter=new" className="btn btn-outline">
            Смотреть все
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};