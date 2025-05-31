import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    delivery: 'courier',
    payment: 'card'
  });
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the order to your backend
    alert('Ваш заказ успешно оформлен!');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="py-12">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-card p-8 text-center max-w-lg mx-auto">
            <ShoppingCart size={48} className="mx-auto mb-4 text-neutral-400" />
            <h1 className="text-2xl font-montserrat font-bold mb-3">Ваша корзина пуста</h1>
            <p className="text-neutral-600 mb-6">
              В вашей корзине еще нет товаров. Перейдите в каталог, чтобы выбрать интересующие вас товары.
            </p>
            <Link to="/catalog/products" className="btn btn-primary">Перейти в каталог</Link>
          </div>
        </div>
      </div>
    );
  }

  const deliveryCost = formData.delivery === 'courier' ? 300 : 0;
  const totalWithDelivery = totalPrice + deliveryCost;

  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="mb-6">
          <h1 className="text-3xl font-montserrat font-bold mb-2">Корзина</h1>
          <div className="flex items-center text-sm text-neutral-500">
            <Link to="/" className="hover:text-primary-500 transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">Корзина</span>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Cart Items (Left) */}
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            {step === 1 && (
              <div className="bg-white rounded-xl shadow-card p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-montserrat font-semibold">Товары в корзине ({totalItems})</h2>
                  <button 
                    onClick={clearCart}
                    className="text-neutral-500 hover:text-primary-500 text-sm flex items-center"
                  >
                    <Trash size={16} className="mr-1" />
                    Очистить корзину
                  </button>
                </div>

                <div className="divide-y divide-neutral-100">
                  {items.map(item => (
                    <div key={item.id} className="py-4 flex items-center">
                      <div className="w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-grow">
                        <Link 
                          to={`/${item.type === 'pet' ? 'pets' : 'products'}/${item.id}`}
                          className="font-medium hover:text-primary-500 transition-colors"
                        >
                          {item.name}
                        </Link>
                        <div className="text-sm text-neutral-500 mt-1">
                          {item.type === 'pet' ? 'Питомец' : 'Товар'}
                        </div>
                      </div>
                      <div className="flex items-center mx-4">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-l-lg border border-neutral-300 bg-neutral-100"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center border-y border-neutral-300 h-8 flex items-center justify-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-r-lg border border-neutral-300 bg-neutral-100"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{(item.price * item.quantity).toLocaleString()} сом</div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-400 hover:text-red-500 transition-colors mt-1"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-between">
                  <Link to="/" className="flex items-center text-neutral-600 hover:text-primary-500 transition-colors">
                    <ArrowLeft size={16} className="mr-1" />
                    <span>Продолжить покупки</span>
                  </Link>
                  <button 
                    onClick={() => setStep(2)} 
                    className="btn btn-primary"
                  >
                    Оформить заказ
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-xl shadow-card p-6">
                <h2 className="text-xl font-montserrat font-semibold mb-6">Оформление заказа</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <h3 className="text-lg font-montserrat font-medium mb-4">Контактные данные</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Имя*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="Введите ваше имя"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                          Телефон*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="+996 XXX XXX XXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input"
                          placeholder="example@mail.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-montserrat font-medium mb-4">Доставка</h3>
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        <input
                          type="radio"
                          id="courier"
                          name="delivery"
                          value="courier"
                          checked={formData.delivery === 'courier'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="courier" className="font-medium">
                          Курьерская доставка (300 сом)
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="pickup"
                          name="delivery"
                          value="pickup"
                          checked={formData.delivery === 'pickup'}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <label htmlFor="pickup" className="font-medium">
                          Самовывоз из магазина (бесплатно)
                        </label>
                      </div>
                    </div>
                    
                    {formData.delivery === 'courier' && (
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                          Адрес доставки*
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="input"
                          placeholder="Укажите полный адрес доставки"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-montserrat font-medium mb-4">Оплата</h3>
                    <div className="flex items-center mb-3">
                      <input
                        type="radio"
                        id="card"
                        name="payment"
                        value="card"
                        checked={formData.payment === 'card'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="card" className="font-medium">
                        Оплата картой онлайн
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="cash"
                        checked={formData.payment === 'cash'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="cash" className="font-medium">
                        Наличными при получении
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button 
                      type="button"
                      onClick={() => setStep(1)} 
                      className="flex items-center text-neutral-600 hover:text-primary-500 transition-colors"
                    >
                      <ArrowLeft size={16} className="mr-1" />
                      <span>Назад к корзине</span>
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Подтвердить заказ
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Order Summary (Right) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-card p-6 sticky top-24">
              <h2 className="text-xl font-montserrat font-semibold mb-4">Ваш заказ</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Товары ({totalItems}):</span>
                  <span className="font-medium">{totalPrice.toLocaleString()} сом</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Доставка:</span>
                  <span className="font-medium">
                    {deliveryCost > 0 ? `${deliveryCost.toLocaleString()} сом` : 'Бесплатно'}
                  </span>
                </div>
              </div>
              
              <div className="border-t border-neutral-100 pt-4 mb-6">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Итого:</span>
                  <span className="text-primary-600">{totalWithDelivery.toLocaleString()} сом</span>
                </div>
              </div>
              
              {step === 1 && (
                <button 
                  onClick={() => setStep(2)} 
                  className="btn btn-primary w-full"
                >
                  Оформить заказ
                </button>
              )}
              
              {step === 2 && (
                <div className="text-sm text-neutral-500">
                  <p>
                    Нажимая кнопку "Подтвердить заказ", вы соглашаетесь с условиями 
                    <a href="#" className="text-primary-500 hover:underline"> пользовательского соглашения</a> и 
                    <a href="#" className="text-primary-500 hover:underline"> политикой конфиденциальности</a>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;