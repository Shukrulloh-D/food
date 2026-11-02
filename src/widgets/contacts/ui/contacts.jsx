import { MapPin, Phone } from 'lucide-react';
import { Button } from '../../../shared/ui/button';

export const Contacts = ({ onOpenBooking }) => {
  return (
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-sm uppercase tracking-widest text-gray-500">Контакты</span>
        <div className="h-[1px] w-12 bg-gray-300"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
        {/* Сетка цифр */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-5xl text-brand-accent mb-2">2 <span className="text-xl">мин</span></div>
            <p className="text-sm text-gray-500">из центра<br/>Санкт-Петербурга</p>
          </div>
          <div>
            <div className="text-5xl text-brand-accent mb-2">12 <span className="text-xl">мин</span></div>
            <p className="text-sm text-gray-500">из города<br/>Зеленогорск</p>
          </div>
          <div>
            <div className="text-5xl text-brand-accent mb-2">42 <span className="text-xl">мин</span></div>
            <p className="text-sm text-gray-500">из аэропорта<br/>Пулково</p>
          </div>
          <div>
            <div className="text-5xl text-brand-accent mb-2">52 <span className="text-xl">мин</span></div>
            <p className="text-sm text-gray-500">из города<br/>Павловск</p>
          </div>
        </div>

        {/* Карта и плашка */}
        <div className="relative h-[400px] bg-gray-200 rounded overflow-hidden">
          {/* Заглушка вместо карты. В реальности здесь iframe Яндекс.Карт */}
          <img src="/images/map-placeholder.png" alt="Map" className="w-full h-full object-cover opacity-50 grayscale" />
          
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-brand-dark/95 text-white p-8 rounded-md w-full max-w-sm">
              <div className="flex items-center gap-3 mb-3 text-sm">
                <MapPin size={18} className="text-brand-accent" />
                <span>Санкт-Петербург, Северная дорога, 11</span>
              </div>
              <div className="flex items-center gap-3 mb-6 text-sm">
                <Phone size={18} className="text-brand-accent" />
                <a href="tel:+79217777777" className="hover:text-brand-accent">+7 (921) 777-77-77</a>
              </div>
              
              <h4 className="font-bold mb-2">Время работы</h4>
              <p className="text-sm text-gray-300 mb-1">Вс-Чт с 12:00 до 23:00</p>
              <p className="text-sm text-gray-300 mb-6">Пт-Сб с 12:00 до 03:00</p>
              
              <div className="flex gap-4">
                <Button onClick={onOpenBooking} className="flex-1 py-2 text-sm">Забронировать</Button>
                <Button variant="outline" className="flex-1 py-2 text-sm">Как добраться</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};