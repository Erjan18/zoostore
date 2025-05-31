import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft, Check, X } from 'lucide-react';
import { getPetById, getSimilarPets } from '../data/pets';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';

const PetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pet = id ? getPetById(id) : undefined;
  const similarPets = id ? getSimilarPets(id) : [];
  
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const isFav = pet ? isFavorite(pet.id) : false;

  const handleBuyNow = () => {
    if (!pet) return;
    
    addToCart({
      id: pet.id,
      name: pet.name,
      price: pet.price,
      image: pet.images[0],
      type: 'pet'
    });
    
    navigate('/cart');
  };

  const toggleFavorite = () => {
    if (!pet) return;
    
    if (isFav) {
      removeFromFavorites(pet.id);
    } else {
      addToFavorites({ id: pet.id, type: 'pet' });
    }
  };

  if (!pet) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-montserrat font-bold mb-4">Питомец не найден</h2>
        <p className="mb-6">К сожалению, запрашиваемый питомец не найден или был удален.</p>
        <Link to="/catalog/pets" className="btn btn-primary">Вернуться в каталог</Link>
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
            <Link to="/catalog/pets" className="hover:text-primary-500 transition-colors">Животные</Link>
            <span className="mx-2">/</span>
            <Link 
              to={`/catalog/pets/${pet.type}`}
              className="hover:text-primary-500 transition-colors"
            >
              {pet.type === 'cat' && 'Кошки'}
              {pet.type === 'dog' && 'Собаки'}
              {pet.type === 'bird' && 'Птицы'}
              {pet.type === 'rodent' && 'Грызуны'}
              {pet.type === 'reptile' && 'Рептилии'}
              {pet.type === 'fish' && 'Рыбы'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">{pet.name}</span>
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

        {/* Pet details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left side - Images */}
          <div>
            <div className="bg-white rounded-xl overflow-hidden mb-4">
              <img 
                src={pet.images[0]} 
                alt={pet.name}
                className="w-full h-80 object-cover"
              />
            </div>
            {pet.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {pet.images.map((image, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${pet.name} ${index + 1}`}
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
                  <h1 className="text-3xl font-montserrat font-bold mb-1">{pet.name}</h1>
                  <p className="text-neutral-600">{pet.breed}</p>
                </div>
                <span className="bg-secondary-100 text-secondary-700 text-sm font-medium px-3 py-1 rounded">
                  {pet.type === 'cat' && 'Кошка'}
                  {pet.type === 'dog' && 'Собака'}
                  {pet.type === 'bird' && 'Птица'}
                  {pet.type === 'rodent' && 'Грызун'}
                  {pet.type === 'reptile' && 'Рептилия'}
                  {pet.type === 'fish' && 'Рыба'}
                </span>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-primary-600 mb-1">{pet.price.toLocaleString()} сом</div>
                <div className="text-sm text-neutral-500">
                  {pet.available ? 'В наличии' : 'Нет в наличии'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-sm">
                  <span className="text-neutral-500">Возраст:</span>
                  <span className="ml-2 font-medium">{pet.age}</span>
                </div>
                <div className="text-sm">
                  <span className="text-neutral-500">Пол:</span>
                  <span className="ml-2 font-medium">{pet.gender === 'male' ? 'Мальчик' : 'Девочка'}</span>
                </div>
                {pet.weight && (
                  <div className="text-sm">
                    <span className="text-neutral-500">Вес:</span>
                    <span className="ml-2 font-medium">{pet.weight}</span>
                  </div>
                )}
                <div className="text-sm">
                  <span className="text-neutral-500">Прививки:</span>
                  <span className="ml-2 font-medium flex items-center">
                    {pet.vaccinated 
                      ? <><Check size={16} className="text-green-500 mr-1" /> Есть</> 
                      : <><X size={16} className="text-red-500 mr-1" /> Нет</>}
                  </span>
                </div>
                <div className="text-sm">
                  <span className="text-neutral-500">Паспорт:</span>
                  <span className="ml-2 font-medium flex items-center">
                    {pet.passport 
                      ? <><Check size={16} className="text-green-500 mr-1" /> Есть</> 
                      : <><X size={16} className="text-red-500 mr-1" /> Нет</>}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-montserrat font-semibold mb-2">Особенности</h3>
                <div className="flex flex-wrap gap-2">
                  {pet.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={handleBuyNow} 
                  className="btn btn-primary flex-grow"
                  disabled={!pet.available}
                >
                  Купить
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

        {/* Description and Care */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-xl font-montserrat font-semibold mb-4">Описание</h2>
            <p className="text-neutral-600 whitespace-pre-line">{pet.description}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-card p-6">
            <h2 className="text-xl font-montserrat font-semibold mb-4">Рекомендации по уходу</h2>
            <p className="text-neutral-600 whitespace-pre-line">{pet.careInstructions}</p>
          </div>
        </div>

        {/* Similar Pets */}
        {similarPets.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold mb-6">Похожие питомцы</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarPets.map(similarPet => (
                <Link key={similarPet.id} to={`/pets/${similarPet.id}`} className="group">
                  <div className="card overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={similarPet.images[0]} 
                        alt={similarPet.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-montserrat font-semibold group-hover:text-primary-500 transition-colors">
                        {similarPet.name}
                      </h3>
                      <p className="text-neutral-600 text-sm">{similarPet.breed}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-semibold text-primary-600">{similarPet.price.toLocaleString()} сом</span>
                        <span className="text-xs text-neutral-500">
                          {similarPet.available ? 'В наличии' : 'Нет в наличии'}
                        </span>
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

export default PetDetailPage;