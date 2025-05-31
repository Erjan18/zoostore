import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { getPetById } from '../data/pets';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

const FavoritesPage: React.FC = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  const favoritePets = favorites
    .filter(fav => fav.type === 'pet')
    .map(fav => {
      const pet = getPetById(fav.id);
      return pet ? { ...pet, favId: fav.id } : null;
    })
    .filter(Boolean);

  const favoriteProducts = favorites
    .filter(fav => fav.type === 'product')
    .map(fav => {
      const product = getProductById(fav.id);
      return product ? { ...product, favId: fav.id } : null;
    })
    .filter(Boolean);

  const handleAddToCart = (productId: string) => {
    const product = getProductById(productId);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        type: 'product'
      });
    }
  };

  if (favorites.length === 0) {
    return (
      <div className="py-12">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-card p-8 text-center max-w-lg mx-auto">
            <Heart size={48} className="mx-auto mb-4 text-neutral-400" />
            <h1 className="text-2xl font-montserrat font-bold mb-3">Список избранного пуст</h1>
            <p className="text-neutral-600 mb-6">
              Вы еще не добавили ни одного товара или питомца в избранное. 
              Добавляйте понравившиеся товары и питомцев, чтобы вернуться к ним позже.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/catalog/pets" className="btn btn-outline">Посмотреть питомцев</Link>
              <Link to="/catalog/products" className="btn btn-primary">Посмотреть товары</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold mb-2">Избранное</h1>
          <div className="flex items-center text-sm text-neutral-500">
            <Link to="/" className="hover:text-primary-500 transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">Избранное</span>
          </div>
        </div>

        {/* Favorite Pets */}
        {favoritePets.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Животные ({favoritePets.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favoritePets.map(pet => (
                <div key={pet.id} className="card overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={pet.images[0]} 
                      alt={pet.name}
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={() => removeFromFavorites(pet.id)}
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                    >
                      <Heart size={18} className="fill-primary-500 text-primary-500" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-lg font-montserrat font-semibold">
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
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-2 border-t border-neutral-100">
                      <span className="text-lg font-semibold text-primary-600">{pet.price.toLocaleString()} сом</span>
                      <Link 
                        to={`/pets/${pet.id}`} 
                        className="text-primary-500 font-medium hover:underline"
                      >
                        Подробнее
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Favorite Products */}
        {favoriteProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Товары ({favoriteProducts.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favoriteProducts.map(product => (
                <div key={product.id} className="card overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    {product.oldPrice && (
                      <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded">
                        Скидка {Math.round((1 - product.price / product.oldPrice) * 100)}%
                      </span>
                    )}
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      <button 
                        onClick={() => removeFromFavorites(product.id)}
                        className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                      >
                        <Heart size={18} className="fill-primary-500 text-primary-500" />
                      </button>
                      <button 
                        onClick={() => handleAddToCart(product.id)}
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
                    <h3 className="text-lg font-montserrat font-semibold">
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
                      <Link 
                        to={`/products/${product.id}`} 
                        className="text-primary-500 font-medium hover:underline"
                      >
                        Подробнее
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;