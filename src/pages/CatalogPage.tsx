import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import { Pet, pets, getPetsByType } from '../data/pets';
import { Product, products, getProductsByCategory, getProductsByPetType } from '../data/products';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

interface CatalogPageProps {
  type: 'pets' | 'products';
}

const CatalogPage: React.FC<CatalogPageProps> = ({ type }) => {
  const params = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';
  const filterNew = searchParams.get('filter') === 'new';

  const petType = params.petType as Pet['type'] | undefined;
  const productCategory = params.productCategory as Product['category'] | undefined;

  const [filteredItems, setFilteredItems] = useState<Pet[] | Product[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [sortOption, setSortOption] = useState('default');
  const [filtersVisible, setFiltersVisible] = useState(false);

  // Get initial data based on the route parameters
  useEffect(() => {
    let items: Pet[] | Product[] = [];
    
    if (type === 'pets') {
      items = petType ? getPetsByType(petType) : pets;
    } else {
      if (productCategory) {
        items = getProductsByCategory(productCategory);
      } else if (petType) {
        items = getProductsByPetType(petType as Product['petType']);
      } else {
        items = products;
      }

      if (filterNew) {
        items = (items as Product[]).filter(product => product.new);
      }
    }

    // Apply search filter if there's a search term
    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (type === 'pets' && (item as Pet).breed.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (type === 'products' && (item as Product).brand.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Set initial price range based on the filtered items
    if (items.length > 0) {
      const prices = items.map(item => item.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setPriceRange([minPrice, maxPrice]);
    }

    setFilteredItems(items);
  }, [type, petType, productCategory, filterNew, searchTerm]);

  // Apply filters and sorting
  const applyFilters = () => {
    let filtered = [...(type === 'pets' ? pets : products)];
    
    // Filter by type or category
    if (type === 'pets' && petType) {
      filtered = filtered.filter(item => (item as Pet).type === petType);
    } else if (type === 'products' && productCategory) {
      filtered = filtered.filter(item => (item as Product).category === productCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (type === 'pets' && (item as Pet).breed.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (type === 'products' && (item as Product).brand.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by price range
    filtered = filtered.filter(item => 
      item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    // Filter by new (for products)
    if (type === 'products' && filterNew) {
      filtered = filtered.filter(item => (item as Product).new);
    }

    // Apply sorting
    if (sortOption !== 'default') {
      filtered.sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
        if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
      });
    }

    setFilteredItems(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [priceRange, sortOption, searchTerm, type, petType, productCategory, filterNew]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  // Rendering pet or product cards
  const renderItem = (item: Pet | Product) => {
    if (type === 'pets') {
      return renderPetCard(item as Pet);
    } else {
      return renderProductCard(item as Product);
    }
  };

  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const renderPetCard = (pet: Pet) => {
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
      <div key={pet.id} className="card overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={pet.images[0]} 
            alt={pet.name}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={toggleFavorite}
            className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
          >
            <svg className={`w-5 h-5 ${isFav ? 'fill-primary-500 text-primary-500' : 'text-neutral-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
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
            <p>Возраст: {pet.age}</p>
            <p>Пол: {pet.gender === 'male' ? 'Мальчик' : 'Девочка'}</p>
          </div>
          <div className="flex justify-between items-center mt-4 pt-2 border-t border-neutral-100">
            <span className="text-lg font-semibold text-primary-600">{pet.price.toLocaleString()} сом</span>
            <a 
              href={`/pets/${pet.id}`} 
              className="text-primary-500 font-medium hover:underline"
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
    );
  };

  const renderProductCard = (product: Product) => {
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
      <div key={product.id} className="card overflow-hidden h-full flex flex-col">
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
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <button 
              onClick={toggleFavorite}
              className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            >
              <svg className={`w-5 h-5 ${isFav ? 'fill-primary-500 text-primary-500' : 'text-neutral-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button 
              onClick={handleAddToCart}
              className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
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
            <a 
              href={`/products/${product.id}`} 
              className="text-primary-500 font-medium hover:underline"
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold mb-3">
            {type === 'pets' 
              ? (petType 
                ? `${petType === 'cat' ? 'Кошки' : petType === 'dog' ? 'Собаки' : petType === 'bird' ? 'Птицы' : petType === 'rodent' ? 'Грызуны' : petType === 'reptile' ? 'Рептилии' : 'Рыбы'}`
                : 'Каталог животных')
              : (productCategory 
                ? `${productCategory === 'food' ? 'Корма и питание' : productCategory === 'accessories' ? 'Аксессуары' : productCategory === 'toys' ? 'Игрушки' : productCategory === 'care' ? 'Средства ухода' : 'Домики и клетки'}`
                : 'Каталог товаров')
            }
          </h1>
          <p className="text-neutral-600">
            {type === 'pets' 
              ? 'Выберите своего идеального питомца из нашей коллекции'
              : 'Всё необходимое для вашего питомца в одном месте'
            }
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Mobile filters toggle */}
          <div className="lg:hidden mb-4">
            <button 
              onClick={() => setFiltersVisible(!filtersVisible)}
              className="w-full btn btn-outline flex items-center justify-between"
            >
              <span>Фильтры</span>
              <ChevronDown size={16} className={`transition-transform ${filtersVisible ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Filters */}
          <div className={`${filtersVisible ? 'block' : 'hidden'} lg:block lg:col-span-1`}>
            <div className="bg-white rounded-xl shadow-card p-4 mb-4 sticky top-24">
              <h3 className="font-montserrat font-semibold mb-4">Фильтры</h3>
              
              {/* Search */}
              <div className="mb-6">
                <form onSubmit={handleSearchSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Поиск..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="input pr-10"
                    />
                    <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
                      <Search size={18} />
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Цена</h4>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="input"
                    placeholder="От"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 0])}
                    className="input"
                    placeholder="До"
                  />
                </div>
              </div>
              
              {/* Pet specific filters */}
              {type === 'pets' && (
                <>
                  <div className="mb-6">
                    
                    
                  </div>
                </>
              )}
              
              {/* Product specific filters */}
              {type === 'products' && (
                <>
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Категория</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" checked={!productCategory} onChange={() => {}} />
                        <span>Все</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" checked={productCategory === 'food'} onChange={() => {}} />
                        <span>Корма и питание</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" checked={productCategory === 'accessories'} onChange={() => {}} />
                        <span>Аксессуары</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" checked={productCategory === 'toys'} onChange={() => {}} />
                        <span>Игрушки</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" checked={productCategory === 'care'} onChange={() => {}} />
                        <span>Средства ухода</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" checked={productCategory === 'housing'} onChange={() => {}} />
                        <span>Домики и клетки</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Дополнительно</h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="mr-2" 
                          checked={filterNew} 
                          onChange={() => {}} 
                        />
                        <span>Только новинки</span>
                      </label>
                    </div>
                  </div>
                </>
              )}
              
              {/* Sorting */}
              <div>
                <h4 className="font-medium mb-3">Сортировка</h4>
                <select 
                  value={sortOption} 
                  onChange={(e) => setSortOption(e.target.value)}
                  className="select"
                >
                  <option value="default">По умолчанию</option>
                  <option value="price-asc">Цена: по возрастанию</option>
                  <option value="price-desc">Цена: по убыванию</option>
                  <option value="name-asc">Название: А-Я</option>
                  <option value="name-desc">Название: Я-А</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="lg:col-span-3">
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => renderItem(item))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-card p-8 text-center">
                <h3 className="text-xl font-montserrat font-semibold mb-3">Ничего не найдено</h3>
                <p className="text-neutral-600 mb-4">
                  К сожалению, по вашему запросу ничего не найдено. Попробуйте изменить параметры фильтрации.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSortOption('default');
                    setPriceRange([0, 50000]);
                  }}
                  className="btn btn-primary"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;