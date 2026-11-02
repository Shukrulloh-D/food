import { Link, useLocation } from 'react-router-dom';
import { useCartStore } from '../../../features/cart/model/cart-store';
import { useUiStore } from '../../../shared/model/ui-store';
import { Button } from '../../../shared/ui/button';

export const Header = ({ onOpenBooking }) => {
  const cartCount = useCartStore(state => state.totalItems());
  const toggleMobileMenu = useUiStore(state => state.toggleMobileMenu);
  const location = useLocation();
  
  // Проверяем, находимся ли мы на главной странице
  const isHomePage = location.pathname === '/';

  return (
    <header className={`w-full z-40 transition-all duration-300 ${
      isHomePage 
        ? 'absolute top-0 left-0 bg-transparent text-white pt-8' 
        : 'sticky top-0 bg-white text-brand-dark shadow-sm py-4'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between md:justify-end items-center gap-8">
        
        {/* Бургер для мобилок (только на не-главной или всегда) */}
        <button onClick={toggleMobileMenu} className="md:hidden block p-2">
           <span className="block w-6 h-[2px] bg-current mb-1.5"></span>
           <span className="block w-6 h-[2px] bg-current mb-1.5"></span>
           <span className="block w-6 h-[2px] bg-current"></span>
        </button>

        {/* Навигация */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-brand-accent transition-colors">Меню</Link>
          <Link to="/delivery" className="hover:text-brand-accent transition-colors relative flex items-center gap-2">
            Доставка
            {cartCount > 0 && (
              <span className="bg-brand-accent text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/payment" className="hover:text-brand-accent transition-colors">Оплата</Link>
          
          <Button 
            onClick={onOpenBooking}
            className={`px-6 py-2.5 text-xs uppercase tracking-wider ${
              isHomePage ? 'border border-brand-accent bg-transparent hover:bg-brand-accent' : ''
            }`}
          >
            Бронь столика
          </Button>
        </nav>
      </div>
    </header>
  );
};