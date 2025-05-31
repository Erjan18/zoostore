import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Пожалуйста, введите email');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Пожалуйста, введите корректный email');
      return;
    }
    
    // Here you would send the email to your backend
    setIsSubmitted(true);
    setError('');
  };

  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <Mail size={40} className="mx-auto mb-4 text-primary-500" />
          <h2 className="text-3xl font-montserrat font-bold mb-3">Подпишитесь на новости</h2>
          <p className="text-neutral-600 mb-8">
            Будьте в курсе новых поступлений питомцев, акций и скидок на товары. 
            Подпишитесь на нашу рассылку и получите скидку 5% на следующий заказ!
          </p>
          
          {isSubmitted ? (
            <div className="bg-secondary-100 text-secondary-700 p-4 rounded-lg max-w-md mx-auto">
              <p className="font-medium">Спасибо за подписку!</p>
              <p className="text-sm mt-1">Мы отправили письмо с подтверждением на ваш email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                  />
                  {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                </div>
                <button type="submit" className="btn btn-primary whitespace-nowrap">Подписаться</button>
              </div>
              <p className="text-xs text-neutral-500 mt-3">
                Подписываясь, вы соглашаетесь с нашей политикой конфиденциальности.
                Мы никогда не передаем ваши данные третьим лицам.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;