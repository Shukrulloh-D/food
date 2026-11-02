import { Link } from 'react-router-dom';
import { useUiStore } from '../../../shared/model/ui-store';

export const Sidebar = () => {
  const toggleMenu = useUiStore(state => state.toggleMobileMenu);

  return (
    <aside className="hidden md:flex flex-col w-[100px] bg-brand-dark text-brand-accent items-center py-8 fixed h-full z-50">
      {/* Место под логотип */}
      <Link to="/" className="mb-12 flex items-center justify-center w-16 h-20">
        <img src="/logo.png" alt="Logo" />
      </Link>

      {/* Бургер-меню */}
      <button onClick={toggleMenu} className="hover:text-white transition-colors flex flex-col gap-1.5 p-2">
        <span className="block w-6 h-[2px] bg-brand-accent"></span>
        <span className="block w-6 h-[2px] bg-brand-accent"></span>
        <span className="block w-6 h-[2px] bg-brand-accent"></span>
      </button>
      
      {/* Соцсети внизу */}
      <div className="mt-auto flex flex-col gap-6 mb-8 text-xs font-bold">
        <a href="#" className="hover:text-white transition-colors"><img src="/images/yt.png" alt="YT" /></a>
        <a href="#" className="hover:text-white transition-colors"><img src="/images/vk.png" alt="VK" /></a>
        <a href="#" className="hover:text-white transition-colors"><img src="/images/tg.png" alt="TG" /></a>
      </div>
    </aside>
  );
};