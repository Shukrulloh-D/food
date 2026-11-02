import { useQuery } from '@tanstack/react-query';
import { fetchDishes } from '../../../shared/api/dish-api';
import { useCartStore } from '../../../features/cart/model/cart-store';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const DeliveryPage = () => {
  const { data: dishes, isLoading } = useQuery({ queryKey: ['dishes'], queryFn: fetchDishes });
  const addToCart = useCartStore(state => state.addToCart);
  const [activeCategory, setActiveCategory] = useState('Завтраки');

  const categories = ['Завтраки', 'Салаты', 'Супы', 'Горячее', 'Напитки'];
  const filteredDishes = dishes?.filter(d => d.category === activeCategory) || [];

  if (isLoading) return <div className="p-20 text-center text-xl text-brand-gray">Загрузка меню...</div>;

  return (
    <div className="p-6 md:p-12 max-w-[1400px] mx-auto animate-fade-in">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-8">Меню доставки</h1>
        
        {/* Фильтры */}
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap pb-2 text-sm uppercase tracking-wider transition-colors border-b-2 ${
                activeCategory === cat ? 'border-brand-accent text-brand-dark font-bold' : 'border-transparent text-brand-gray hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Сетка */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDishes.map(dish => (
          <div key={dish.id} className="bg-white p-4 flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300 group">
            <Link to={`/dish/${dish.id}`} className="block mb-5 overflow-hidden">
              <img src={dish.image} alt={dish.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            </Link>
            <div className="flex-grow">
              <Link to={`/dish/${dish.id}`} className="block text-center font-semibold text-lg leading-tight mb-2 hover:text-brand-accent transition-colors">
                {dish.title}
              </Link>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold">{dish.price} ₽</span>
              <button 
                onClick={() => addToCart(dish)}
                className="bg-brand-accent text-white px-4 py-2 text-xs uppercase tracking-wider hover:bg-[#9a8468] transition-colors"
              >
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};