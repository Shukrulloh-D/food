import { useOutletContext, Link } from 'react-router-dom';
import { Button } from '../../../shared/ui/button';
import { Contacts } from '../../../widgets/contacts/ui/contacts';

export const HomePage = () => {
  const { onOpenBooking } = useOutletContext();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-end p-8 md:p-16">
        {/* Фоновое изображение */}
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.png" alt="Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight">
            Видовой ресторан Food Exxe Relo<br />на Крестовском острове
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm uppercase tracking-widest text-gray-500">О ресторане</span>
          <div className="h-[1px] w-12 bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <h2 className="text-5xl font-bold">
            Food<br />Exxe<br />Relo
          </h2>
          <div className="text-gray-600 space-y-4">
            <p>Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.</p>
            <p>Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nulla sem vehicula. Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in viverra.</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto bg-white">
         <div className="flex items-center gap-4 mb-8">
          <span className="text-sm uppercase tracking-widest text-gray-500">Меню</span>
          <div className="h-[1px] w-12 bg-gray-300"></div>
        </div>
        <h2 className="text-4xl font-bold mb-8">Меню</h2>
        {/* Карточки меню */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Link to="/delivery" className="group">
            <div className="overflow-hidden mb-4">
              <img src="/images/menu-main.png" alt="Основное меню" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex items-center gap-4">
              <span className="uppercase tracking-widest text-sm font-bold">Основное меню</span>
              <div className="h-[1px] w-8 bg-brand-accent"></div>
            </div>
          </Link>
          
          <Link to="/delivery" className="group">
            <div className="overflow-hidden mb-4">
              <img src="/images/menu-bar.png" alt="Барная карта" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="flex items-center gap-4">
              <span className="uppercase tracking-widest text-sm font-bold">Барная карта</span>
              <div className="h-[1px] w-8 bg-brand-accent"></div>
            </div>
          </Link>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm uppercase tracking-widest text-gray-500">Доставка</span>
          <div className="h-[1px] w-12 bg-gray-300"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <h2 className="text-4xl font-bold leading-tight">Служба<br />доставки</h2>
           <div>
             <p className="text-gray-600 mb-8">
               Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem.
             </p>
             <div className="flex gap-4 items-center">
               <Link to="/delivery">
                 <Button>Подробнее</Button>
               </Link>
               <a href="#" className="text-sm font-medium hover:text-brand-accent transition-colors border-b border-transparent hover:border-brand-accent pb-1">
                 Условия доставки
               </a>
             </div>
           </div>
        </div>
      </section>

      {/* Контакты (сквозной виджет) */}
      <Contacts onOpenBooking={onOpenBooking} />
    </div>
  );
};