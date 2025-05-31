import React, { useState } from 'react';
import { Link, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { User, Package, LogOut, Heart, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Account Profile Component
const ProfileSection: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    try {
      await updateProfile(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-montserrat font-semibold">Личные данные</h2>
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="text-primary-500 hover:text-primary-600 font-medium"
          >
            Редактировать
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className="input"
              placeholder="+996 XXX XXX XXX"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
            Адрес доставки
          </label>
          <textarea
            id="address"
            name="address"
            rows={3}
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
            className="input"
            placeholder="Укажите адрес доставки"
          />
        </div>

        {isEditing && (
          <div className="flex gap-3">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSaving}
            >
              {isSaving ? 'Сохранение...' : 'Сохранить'}
            </button>
            <button 
              type="button" 
              onClick={() => setIsEditing(false)} 
              className="btn btn-outline"
              disabled={isSaving}
            >
              Отмена
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

// Orders Section Component
const OrdersSection: React.FC = () => {
  // This would be fetched from an API in a real application
  const mockOrders = [
    {
      id: 'ORD-123456',
      date: '15.05.2025',
      status: 'delivered',
      total: 3500,
      items: [
        { name: 'Royal Canin для взрослых кошек', quantity: 1, price: 2500 },
        { name: 'Ошейник для кошек с бубенчиком', quantity: 2, price: 500 }
      ]
    },
    {
      id: 'ORD-123457',
      date: '10.05.2025',
      status: 'processing',
      total: 30000,
      items: [
        { name: 'Белла (Лабрадор)', quantity: 1, price: 30000 }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      <h2 className="text-xl font-montserrat font-semibold mb-6">История заказов</h2>
      
      {mockOrders.length > 0 ? (
        <div className="space-y-6">
          {mockOrders.map(order => (
            <div key={order.id} className="border border-neutral-200 rounded-lg overflow-hidden">
              <div className="bg-neutral-50 p-4 flex flex-wrap gap-4 justify-between items-center">
                <div>
                  <div className="font-medium">Заказ {order.id}</div>
                  <div className="text-sm text-neutral-500">от {order.date}</div>
                </div>
                <div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    order.status === 'delivered' 
                      ? 'bg-green-100 text-green-800' 
                      : order.status === 'processing'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status === 'delivered' && 'Доставлен'}
                    {order.status === 'processing' && 'В обработке'}
                    {order.status === 'pending' && 'Ожидает оплаты'}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-primary-600">{order.total.toLocaleString()} сом</div>
                  <div className="text-sm text-neutral-500">{order.items.length} {order.items.length === 1 ? 'товар' : order.items.length < 5 ? 'товара' : 'товаров'}</div>
                </div>
              </div>
              
              <div className="p-4 border-t border-neutral-200">
                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span className="font-medium">{(item.price * item.quantity).toLocaleString()} сом</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6">
          <Package size={48} className="mx-auto mb-4 text-neutral-400" />
          <h3 className="text-lg font-medium mb-2">У вас еще нет заказов</h3>
          <p className="text-neutral-500 mb-4">
            Ваша история заказов появится здесь после совершения покупки.
          </p>
          <Link to="/catalog/products" className="btn btn-primary">
            Перейти в каталог
          </Link>
        </div>
      )}
    </div>
  );
};

// Login Component
const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login(formData.email, formData.password);
    } catch (error) {
      setError('Неверный email или пароль');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-card p-6">
      <h2 className="text-2xl font-montserrat font-bold mb-6 text-center">Вход в аккаунт</h2>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email
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
        
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input"
            placeholder="••••••••"
          />
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary w-full mb-4"
          disabled={isLoading}
        >
          {isLoading ? 'Вход...' : 'Войти'}
        </button>
        
        <p className="text-center text-neutral-600">
          Нет аккаунта? <Link to="/account/register" className="text-primary-500 hover:underline">Зарегистрироваться</Link>
        </p>
      </form>
    </div>
  );
};

// Register Component
const RegisterForm: React.FC = () => {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(formData.name, formData.email, formData.password);
    } catch (error) {
      setError('Ошибка при регистрации');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-card p-6">
      <h2 className="text-2xl font-montserrat font-bold mb-6 text-center">Регистрация</h2>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
            Имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
            placeholder="Иван Иванов"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email
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
        
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
            Пароль
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className="input"
            placeholder="••••••••"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
            Подтверждение пароля
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="input"
            placeholder="••••••••"
          />
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary w-full mb-4"
          disabled={isLoading}
        >
          {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        </button>
        
        <p className="text-center text-neutral-600">
          Уже есть аккаунт? <Link to="/account/login" className="text-primary-500 hover:underline">Войти</Link>
        </p>
      </form>
    </div>
  );
};

// Main Account Page
const AccountPage: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    // If not on login or register page, redirect to login
    if (location.pathname !== '/account/login' && location.pathname !== '/account/register') {
      return <Navigate to="/account/login" />;
    }
    
    return (
      <div className="py-12">
        <div className="container-custom">
          <Routes>
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegisterForm />} />
            <Route path="*" element={<Navigate to="/account/login" />} />
          </Routes>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-montserrat font-bold mb-2">Личный кабинет</h1>
          <div className="flex items-center text-sm text-neutral-500">
            <Link to="/" className="hover:text-primary-500 transition-colors">Главная</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-800">Личный кабинет</span>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 mb-6 lg:mb-0">
            <div className="bg-white rounded-xl shadow-card p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User size={32} />
                </div>
                <h3 className="font-montserrat font-semibold">{user?.name}</h3>
                <p className="text-sm text-neutral-500">{user?.email}</p>
              </div>
              
              <nav className="space-y-1">
                <Link 
                  to="/account" 
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    location.pathname === '/account' 
                      ? 'bg-primary-50 text-primary-600' 
                      : 'hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center">
                    <User size={18} className="mr-3" />
                    <span>Профиль</span>
                  </div>
                  <ChevronRight size={16} />
                </Link>
                
                <Link 
                  to="/account/orders" 
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    location.pathname === '/account/orders' 
                      ? 'bg-primary-50 text-primary-600' 
                      : 'hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center">
                    <Package size={18} className="mr-3" />
                    <span>Мои заказы</span>
                  </div>
                  <ChevronRight size={16} />
                </Link>
                
                <Link 
                  to="/favorites" 
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50"
                >
                  <div className="flex items-center">
                    <Heart size={18} className="mr-3" />
                    <span>Избранное</span>
                  </div>
                  <ChevronRight size={16} />
                </Link>
                
                <button 
                  onClick={logout}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-50 w-full text-left"
                >
                  <div className="flex items-center text-red-500">
                    <LogOut size={18} className="mr-3" />
                    <span>Выйти</span>
                  </div>
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Routes>
              <Route path="/" element={<ProfileSection />} />
              <Route path="/orders" element={<OrdersSection />} />
              <Route path="*" element={<Navigate to="/account" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;