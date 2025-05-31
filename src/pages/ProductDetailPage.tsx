import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart, ArrowLeft, Minus, Plus } from 'lucide-react';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id) : [];
  
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const isFav = product ? isFavorite(product.id) : false;

  const handleAddToCart = () => {
    if (!product) return;
    
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        type: 'product'
      });
    }
  };

  const toggleFavorite = () => {
    if (!product) return;
    
    if (isFav) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({ id: product.id, type: 'product' });
    }
  };

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-montserrat font-bold mb-4">Товар не найден</h2>
        <p className="mb-6">К сожалению, запрашиваемый товар не найден или был удален.</p>
        <Link to="/catalog/products" className="btn btn-primary">Вернуться в каталог</Link>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <div className="flex items-center text-sm text-neutral-500">
            <Link to="/" className="hover:text-primary-500 transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <Link to="/catalog/products" className="hover:text-primary-500 transition-colors">Товары</Link>
            <span className="mx-2">/</span>
            <Link 
              to={`/catalog/products/${product.category}`}
              className="hover:text-primary-500 transition-colors"
            >
              {product.category === 'food' && 'Корма и питание'}
              {product.category === 'accessories' && 'Аксессуары'}
              {product.category === 'toys' && 'Игрушки'}
              {product.category === 'care' && 'Средства ухода'}
              {product.category === 'housing' && 'Домики и клетки'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">{product.name}</span>
          </div>
        </div>

        {/* Back button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-neutral-600 hover:text-primary-500 transition-colors mb-6"
        >
          <ArrowLeft size={16} className="mr-1" />
          <span>Назад</span>
        </button>

        {/* Product details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left side - Images */}
          <div>
            <div className="bg-white rounded-xl overflow-hidden mb-4">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-80 object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right side - Info */}
          <div>
            <div className="bg-white rounded-xl shadow-card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-montserrat font-bold mb-1">{product.name}</h1>
                  <p className="text-neutral-600">Бренд: {product.brand}</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="bg-secondary-100 text-secondary-700 text-sm font-medium px-3 py-1 rounded mb-2">
                    {product.category === 'food' && 'Корм'}
                    {product.category === 'accessories' && 'Аксессуар'}
                    {product.category === 'toys' && 'Игрушка'}
                    {product.category === 'care' && 'Уход'}
                    {product.category === 'housing' && 'Жилье'}
                  </span>
                  {product.new && (
                    <span className="bg-accent-100 text-accent-700 text-sm font-medium px-3 py-1 rounded">
                      Новинка
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-primary-600 mr-3">{product.price.toLocaleString()} сом</span>
                  {product.oldPrice && (
                    <span className="text-lg text-neutral-500 line-through">{product.oldPrice.toLocaleString()} сом</span>
                  )}
                </div>
                <div className="text-sm text-neutral-500 mt-1">
                  {product.stock > 0 ? `В наличии: ${product.stock} шт.` : 'Нет в наличии'}
                </div>
              </div>

              {product.weight && (
                <div className="mb-4 text-sm">
                  <span className="text-neutral-500">Вес/объем:</span>
                  <span className="ml-2 font-medium">{product.weight}</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-montserrat font-semibold mb-2">Особенности</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {product.stock > 0 && (
                <div className="mb-6">
                  <h3 className="font-montserrat font-semibold mb-2">Количество</h3>
                  <div className="flex items-center">
                    <button 
                      onClick={decrementQuantity}
                      className="p-2 rounded-l-lg border border-neutral-300 bg-neutral-100"
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value >= 1 && value <= product.stock) {
                          setQuantity(value);
                        }
                      }}
                      className="w-16 text-center border-y border-neutral-300 h-10"
                    />
                    <button 
                      onClick={incrementQuantity}
                      className="p-2 rounded-r-lg border border-neutral-300 bg-neutral-100"
                      disabled={quantity >= product.stock}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button 
                  onClick={handleAddToCart}
                  className="btn btn-primary flex-grow flex items-center justify-center"
                  disabled={!product.available || product.stock === 0}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  В корзину
                </button>
                <button 
                  onClick={toggleFavorite}
                  className={`btn ${isFav ? 'bg-primary-100 text-primary-500' : 'btn-outline'} p-3`}
                >
                  <Heart size={20} className={isFav ? 'fill-primary-500' : ''} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-card p-6 mb-12">
          <h2 className="text-xl font-montserrat font-semibold mb-4">Описание</h2>
          <p className="text-neutral-600 whitespace-pre-line">{product.description}</p>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold mb-6">Похожие товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <Link key={relatedProduct.id} to={`/products/${relatedProduct.id}`} className="group">
                  <div className="card overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      {relatedProduct.oldPrice && (
                        <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded">
                          Скидка {Math.round((1 - relatedProduct.price / relatedProduct.oldPrice) * 100)}%
                        </span>
                      )}
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-montserrat font-semibold group-hover:text-primary-500 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-neutral-600 text-sm">{relatedProduct.brand}</p>
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <span className="font-semibold text-primary-600">{relatedProduct.price.toLocaleString()} сом</span>
                          {relatedProduct.oldPrice && (
                            <span className="text-sm text-neutral-500 line-through ml-2">{relatedProduct.oldPrice.toLocaleString()} сом</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;