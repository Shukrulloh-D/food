import { useNavigate } from 'react-router-dom'; // Убрали Link
import { X } from 'lucide-react';
import { useUiStore } from '../../../shared/model/ui-store';
import { useEffect } from 'react';

export const MobileMenu = () => {
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


  return (
    <div className="fixed inset-0 bg-[#333333] z-[100] flex flex-col items-center py-10 px-6 animate-fade-in">
      {/* Логотип и крестик */}
      <div className="relative w-full flex justify-center items-center mb-16">
        <span className="text-3xl font-bold text-brand-accent tracking-widest">FOOD</span>
        <button onClick={closeMobileMenu} className="absolute right-0 text-gray-400 hover:text-white transition-colors">
          <X size={32} />
        </button>
      </div>

      {/* Меню */}
      <nav className="flex flex-col items-center gap-8 w-full max-w-[237px]">
        <button onClick={() => handleLink('/')} className="w-full text-center text-2xl font-medium text-white hover:text-brand-accent transition-colors">Меню</button>
        <button onClick={() => handleLink('/delivery')} className="w-full text-center text-2xl font-medium text-white hover:text-brand-accent transition-colors">Доставка</button>
        <button onClick={() => handleLink('/payment')} className="w-full text-center text-2xl font-medium text-white hover:text-brand-accent transition-colors">Оплата</button>
        
        <button 
          onClick={() => { closeMobileMenu(); /* Логика открытия бронирования, можно прокинуть коллбэк */ }}
          className="mt-6 w-full bg-brand-accent text-white py-4 text-sm uppercase tracking-widest hover:bg-[#9a8468] transition-colors"
        >
          Бронь столика
        </button>
      </nav>

      {/* Соцсети внизу */}
      <div className="mt-auto flex gap-6 pb-4">
        <a href="#" className="text-brand-accent hover:text-white transition-colors text-sm">VK</a>
        <a href="#" className="text-brand-accent hover:text-white transition-colors text-sm">TG</a>
      </div>
    </div>
  );
};