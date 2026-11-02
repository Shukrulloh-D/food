import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useUiStore } from '../../../shared/model/ui-store';

export const Sidebar = () => {
  const toggleMenu = useUiStore(state => state.toggleMobileMenu);

  return (
    <aside className="hidden md:flex flex-col w-24 bg-brand-dark text-brand-accent items-center py-8 fixed h-full z-40">
      <Link to="/" className="text-3xl font-bold tracking-widest mb-10 [writing-mode:vertical-lr] rotate-180">FOOD</Link>
      <button onClick={toggleMenu} className="hover:text-white transition-colors">
        <Menu size={28} />
      </button>
      
      <div className="mt-auto flex flex-col gap-6 mb-8">
        <a href="#" className="w-8 h-8 border border-brand-accent rounded-full flex items-center justify-center text-xs hover:bg-brand-accent hover:text-white transition-colors">VK</a>
        <a href="#" className="w-8 h-8 border border-brand-accent rounded-full flex items-center justify-center text-xs hover:bg-brand-accent hover:text-white transition-colors">TG</a>
      </div>
    </aside>
  );
};