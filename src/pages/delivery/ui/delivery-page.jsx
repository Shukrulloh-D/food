import { useQuery } from '@tanstack/react-query';
import { fetchDishes } from '../../../shared/api/dish-api';
import { useCartStore } from '../../../features/cart/model/cart-store';
import { Link, useOutletContext } from 'react-router-dom'; // Добавили useOutletContext для хедера
import { useState } from 'react';
import { Header } from '../../../widgets/header/ui/header';

export const DeliveryPage = () => {
  const { onOpenBooking } = useOutletContext(); // Берем коллбэк
  const { data: dishes, isLoading } = useQuery({ queryKey: ['dishes'], queryFn: fetchDishes });
  const addToCart = useCartStore(state => state.addToCart);
  const [activeCategory, setActiveCategory] = useState('Завтраки');

  const categories = ['Завтраки', 'Салаты', 'Супы', 'Горячее', 'Напитки'];
  const filteredDishes = dishes?.filter(d => d.category === activeCategory) || [];

  if (isLoading) return <div className="p-20 text-center text-xl text-brand-gray">Загрузка меню...</div>;

  return (
    <div className="w-full">
      <Header onOpenBooking={onOpenBooking} />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 animate-fade-in">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-8 uppercase tracking-wider">Меню доставки</h1>
          
          <div className="flex gap-8 overflow-x-auto pb-4 border-b border-gray-200 scrollbar-hide">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap pb-4 text-sm uppercase tracking-wider transition-colors border-b-2 -mb-[17px] ${
                  activeCategory === cat ? 'border-brand-accent text-brand-dark font-bold' : 'border-transparent text-brand-gray hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Увеличили сетку */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDishes.map(dish => (
            <div key={dish.id} className="bg-white flex flex-col group">
              <Link to={`/dish/${dish.id}`} className="block mb-4 overflow-hidden relative">
                <img src={dish.image} alt={dish.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>
              <div className="flex-grow flex flex-col justify-between">
                <Link to={`/dish/${dish.id}`} className="block text-center font-semibold text-base leading-tight mb-4 hover:text-brand-accent transition-colors px-2">
                  {dish.title}
                </Link>
                <div className="flex justify-between items-center px-2 pb-4 mt-auto">
                  <span className="text-xl font-bold">{dish.price} ₽</span>
                  <button 
                    onClick={() => addToCart(dish)}
                    className="bg-brand-accent text-white px-5 py-2 text-xs uppercase tracking-wider hover:bg-[#9a8468] transition-colors"
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};