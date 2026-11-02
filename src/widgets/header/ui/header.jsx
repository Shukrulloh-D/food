import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useCartStore } from '../../../features/cart/model/cart-store';
import { useUiStore } from '../../../shared/model/ui-store';
import { Button } from '../../../shared/ui/button';

export const Header = ({ onOpenBooking }) => {
  const cartCount = useCartStore(state => state.totalItems());
  const toggleMobileMenu = useUiStore(state => state.toggleMobileMenu);

  return (
    <header className="flex justify-between md:justify-end items-center p-6 gap-6 bg-white sticky top-0 z-30 shadow-sm">
      {/* Бургер для мобилок */}
      <button onClick={toggleMobileMenu} className="md:hidden block">
        <Menu size={24} />
      </button>

      <div className="flex items-center gap-6">
        <Link to="/delivery" className="flex items-center gap-2 hover:text-brand-accent transition-colors relative">
          <ShoppingCart size={20} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </Link>
        <button className="flex items-center gap-2 hover:text-brand-accent transition-colors">
          <User size={20} />
        </button>
        <Button 
          onClick={onOpenBooking}
          className="hidden md:block px-4 py-2 text-sm"
        >
          Забронировать столик
        </Button>
      </div>
    </header>
  );
};