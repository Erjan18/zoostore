import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu, X, Search, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/catalog/pets?search=${encodeURIComponent(searchTerm)}`);
      setIsSearchOpen(false);
      setSearchTerm('');
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        {/* Top header with contacts and info */}
        <div className="py-2 border-b border-neutral-100 text-sm hidden md:flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={14} className="mr-1 text-primary-500" />
              <span>+996 222 333 444</span>
            </div>
            <span>Бишкек, ул. Киевская 123</span>
          </div>
          <div className="flex items-center space-x-4">
            
            <Link to="/contacts" className="hover:text-primary-500 transition-colors">Контакты</Link>
          </div>
        </div>

        {/* Main header */}
        <div className="py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-montserrat font-bold text-2xl text-primary-500 flex items-center">
            <span>ПитомецКГ</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium hover:text-primary-500 transition-colors">Главная</Link>
            <Link to="/catalog/pets" className="font-medium hover:text-primary-500 transition-colors">Животные</Link>
            <Link to="/catalog/products" className="font-medium hover:text-primary-500 transition-colors">Товары</Link>
            <Link to="/about" className="font-medium hover:text-primary-500 transition-colors">О нас</Link>
          </nav>

          {/* User actions */}
          <div className="flex items-center space-x-3">
            <button onClick={toggleSearch} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <Link to="/favorites" className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <Heart size={20} />
            </Link>
            <Link to="/account" className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu} className="p-2 hover:bg-neutral-100 rounded-full transition-colors md:hidden">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar (toggled) */}
        {isSearchOpen && (
          <div className="py-3 border-t border-neutral-100">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск животных и товаров..."
                className="input pr-10"
                autoFocus
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-primary-500 transition-colors"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-neutral-100">
            <nav className="flex flex-col py-3">
              <Link to="/" className="py-2 hover:text-primary-500 transition-colors" onClick={toggleMenu}>Главная</Link>
              <Link to="/catalog/pets" className="py-2 hover:text-primary-500 transition-colors" onClick={toggleMenu}>Животные</Link>
              <Link to="/catalog/products" className="py-2 hover:text-primary-500 transition-colors" onClick={toggleMenu}>Товары</Link>
              <Link to="/about" className="py-2 hover:text-primary-500 transition-colors" onClick={toggleMenu}>О нас</Link>
              <div className="border-t border-neutral-100 mt-2 pt-2">
                <Link to="/delivery" className="py-2 text-sm hover:text-primary-500 transition-colors block" onClick={toggleMenu}>Доставка</Link>
                <Link to="/payment" className="py-2 text-sm hover:text-primary-500 transition-colors block" onClick={toggleMenu}>Оплата</Link>
                <Link to="/contacts" className="py-2 text-sm hover:text-primary-500 transition-colors block" onClick={toggleMenu}>Контакты</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;