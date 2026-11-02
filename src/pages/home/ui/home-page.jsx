import { useOutletContext, Link } from 'react-router-dom';
import { Button } from '../../../shared/ui/button';
import { Contacts } from '../../../widgets/contacts/ui/contacts';
import { Header } from '../../../widgets/header/ui/header';

export const HomePage = () => {
  const { onOpenBooking } = useOutletContext();

  return (
    <div className="animate-fade-in w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-end">
        {/* Фоновое изображение на весь экран */}
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.png" alt="Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Хедер поверх картинки */}
        <Header onOpenBooking={onOpenBooking} />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] max-w-4xl">
            Видовой ресторан Food Exxe Relo<br />на Крестовском острове
          </h1>
        </div>
      </section>

      {/* Остальной контент оборачиваем в контейнер с хорошей шириной */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* About Section */}
        <section className="py-24">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-gray">О ресторане</span>
            <div className="h-[1px] w-12 bg-gray-300"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Food<br />Exxe<br />Relo
            </h2>
            <div className="text-brand-gray space-y-6 text-lg leading-relaxed">
              <p>Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.</p>
              <p>Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nulla sem vehicula. Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in viverra.</p>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-24 border-t border-gray-200">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-gray">Меню</span>
            <div className="h-[1px] w-12 bg-gray-300"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <h2 className="text-5xl font-bold">Меню</h2>
            <div className="text-brand-gray text-lg">
              <p>At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat fermentum pellentesque ac at.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/delivery" className="group">
              <div className="overflow-hidden mb-6 bg-gray-100">
                <img src="/images/menu-main.png" alt="Основное меню" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-4">
                <span className="uppercase tracking-widest text-sm font-bold">Основное меню</span>
                <div className="h-[1px] w-8 bg-brand-accent"></div>
              </div>
            </Link>
            
            <Link to="/delivery" className="group">
              <div className="overflow-hidden mb-6 bg-gray-100">
                <img src="/images/menu-bar.png" alt="Барная карта" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-4">
                <span className="uppercase tracking-widest text-sm font-bold">Барная карта</span>
                <div className="h-[1px] w-8 bg-brand-accent"></div>
              </div>
            </Link>
          </div>
        </section>

        {/* Delivery Section */}
        <section className="py-24 border-t border-gray-200">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs uppercase tracking-widest text-brand-gray">Доставка</span>
            <div className="h-[1px] w-12 bg-gray-300"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <h2 className="text-5xl font-bold leading-tight">Служба<br />доставки</h2>
             <div>
               <p className="text-brand-gray text-lg leading-relaxed mb-10 max-w-xl">
                 Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et in vitae pellentesque non, lectus orci natoque faucibus suspendisse.
               </p>
               <div className="flex gap-6 items-center">
                 <Link to="/delivery">
                   <Button className="px-8 py-3">Подробнее</Button>
                 </Link>
                 <a href="#" className="text-sm font-medium border-b border-brand-dark pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
                   Условия доставки
                 </a>
               </div>
             </div>
          </div>
        </section>
      </div>

      <Contacts onOpenBooking={onOpenBooking} />
    </div>
  );
};