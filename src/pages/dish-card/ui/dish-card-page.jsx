import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchDishById } from '../../../shared/api/dish-api';
import { useCartStore } from '../../../features/cart/model/cart-store';
import { Button } from '../../../shared/ui/button';
import { useState } from 'react';

export const DishCardPage = () => {
  const { id } = useParams();
  const { data: dish, isLoading } = useQuery({ queryKey: ['dish', id], queryFn: () => fetchDishById(id) });
  const addToCart = useCartStore(state => state.addToCart);
  const [quantity, setQuantity] = useState(1);
  const [addons, setAddons] = useState([]);

  if (isLoading || !dish) return <div className="p-20 text-center">Загрузка...</div>;

  const MOCK_ADDONS = [
    { id: 1, name: 'Тигровые креветки 60 г', price: 450 },
    { id: 2, name: 'Томаты / паприка', price: 80 },
    { id: 3, name: 'Бекон', price: 120 },
    { id: 4, name: 'Сыр чеддер 30 г', price: 80 },
  ];

  const handleAddonToggle = (addon) => {
    setAddons(prev => 
      prev.find(a => a.id === addon.id) 
        ? prev.filter(a => a.id !== addon.id) 
        : [...prev, addon]
    );
  };

  const totalPrice = (dish.price + addons.reduce((acc, a) => acc + a.price, 0)) * quantity;

  return (
    <div className="p-6 md:p-12 max-w-[1200px] mx-auto animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Галерея */}
        <div>
          <div className="bg-white p-4 mb-4 shadow-sm">
            <img src={dish.image} alt={dish.title} className="w-full h-[400px] object-contain" />
          </div>
          <div className="flex gap-4">
             {[1, 2, 3].map(i => (
               <div key={i} className="bg-white p-2 cursor-pointer border border-transparent hover:border-brand-accent transition-colors">
                  <img src={dish.image} alt="thumb" className="w-20 h-20 object-cover" />
               </div>
             ))}
          </div>
        </div>
        
        {/* Инфо и Действия */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{dish.title}</h1>
          <div className="text-2xl font-bold mb-8 flex items-baseline gap-2">
            {dish.price} ₽ <span className="text-sm text-brand-gray font-normal">/ {dish.weight}</span>
          </div>
          
          <div className="flex items-center gap-6 mb-10">
            <div className="flex items-center border border-gray-300 bg-white">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-3 hover:bg-gray-100 transition-colors">−</button>
              <span className="px-4 py-3 font-medium w-12 text-center">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-3 hover:bg-gray-100 transition-colors">+</button>
            </div>
            <Button 
              onClick={() => {
                const finalDish = { ...dish, price: totalPrice / quantity, selectedAddons: addons }; // Упрощенно для корзины
                for(let i=0; i<quantity; i++) addToCart(finalDish);
              }} 
              className="flex-1 py-4 text-lg"
            >
              В корзину за {totalPrice} ₽
            </Button>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold mb-6">Сделать еще вкуснее</h3>
            <div className="flex flex-col gap-2">
              {MOCK_ADDONS.map(addon => (
                 <label key={addon.id} className="flex justify-between items-center py-4 border-b border-gray-100 cursor-pointer group">
                   <div className="flex items-center gap-3">
                     <input 
                        type="checkbox" 
                        checked={addons.some(a => a.id === addon.id)}
                        onChange={() => handleAddonToggle(addon)}
                        className="accent-brand-accent w-5 h-5 cursor-pointer" 
                      />
                     <span className="text-gray-700 group-hover:text-black transition-colors">{addon.name}</span>
                   </div>
                   <span className="font-semibold">{addon.price} ₽</span>
                 </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};