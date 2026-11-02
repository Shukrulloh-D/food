import { useNavigate } from 'react-router-dom';
import { useUiStore } from '../../../shared/model/ui-store';
import { useEffect } from 'react';

export const MobileMenu = ({ onOpenBooking }) => {
  const { isMobileMenuOpen, closeMobileMenu } = useUiStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobileMenuOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [isMobileMenuOpen]);

  if (!isMobileMenuOpen) return null;

  const handleLink = (path) => {
    navigate(path);
    closeMobileMenu();
  };

  const handleBooking = () => {
    closeMobileMenu();
    onOpenBooking();
  };

  return (
    // Задний фон (затемнение)
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={closeMobileMenu} // Закрытие по клику на фон
    >
      {/* Само окно */}
      <div 
        className="bg-[#333333] text-white p-10 w-full max-w-sm relative shadow-2xl flex flex-col items-center animate-slide-up"
        onClick={(e) => e.stopPropagation()} // Останавливаем клик внутри окна
      >
        <button onClick={closeMobileMenu} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">
          ✕
        </button>

        <div className="text-2xl font-bold text-brand-accent tracking-widest mb-12">FOOD</div>

        <nav className="flex flex-col items-center gap-6 w-full">
          <button onClick={() => handleLink('/')} className="w-full text-center text-xl hover:text-brand-accent transition-colors">Меню</button>
          <button onClick={() => handleLink('/delivery')} className="w-full text-center text-xl hover:text-brand-accent transition-colors">Доставка</button>
          <button onClick={() => handleLink('/payment')} className="w-full text-center text-xl hover:text-brand-accent transition-colors">Оплата</button>
          
          <button 
            onClick={handleBooking}
            className="mt-6 w-full bg-brand-accent text-white py-3 text-sm uppercase tracking-widest hover:bg-[#9a8468] transition-colors"
          >
            Бронь столика
          </button>
        </nav>

        <div className="mt-12 flex gap-6">
          <a href="#" className="text-brand-accent hover:text-white transition-colors text-sm font-bold">VK</a>
          <a href="#" className="text-brand-accent hover:text-white transition-colors text-sm font-bold">TG</a>
        </div>
      </div>
    </div>
  );
};