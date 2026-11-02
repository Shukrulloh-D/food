import { Button } from '../../../shared/ui/button';

export const Contacts = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-white border-t border-gray-200 w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-brand-gray">Контакты</span>
          <div className="h-[1px] w-12 bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Сетка цифр (Занимает 5 колонок из 12) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="text-6xl text-brand-accent mb-4 flex items-baseline gap-2">
                2 <span className="text-lg uppercase tracking-wider">мин</span>
              </div>
              <p className="text-sm text-brand-gray leading-relaxed">из центра<br/>Санкт-Петербурга</p>
            </div>
            <div>
              <div className="text-6xl text-brand-accent mb-4 flex items-baseline gap-2">
                12 <span className="text-lg uppercase tracking-wider">мин</span>
              </div>
              <p className="text-sm text-brand-gray leading-relaxed">из города<br/>Зеленогорск</p>
            </div>
            <div>
              <div className="text-6xl text-brand-accent mb-4 flex items-baseline gap-2">
                42 <span className="text-lg uppercase tracking-wider">мин</span>
              </div>
              <p className="text-sm text-brand-gray leading-relaxed">из аэропорта<br/>Пулково</p>
            </div>
            <div>
              <div className="text-6xl text-brand-accent mb-4 flex items-baseline gap-2">
                52 <span className="text-lg uppercase tracking-wider">мин</span>
              </div>
              <p className="text-sm text-brand-gray leading-relaxed">из города<br/>Павловск</p>
            </div>
          </div>

          {/* Карта и плашка (Занимает 7 колонок из 12) */}
          <div className="lg:col-span-7 relative h-[500px] w-full bg-gray-200 rounded-sm">
            <img src="/images/map.png" alt="Map" className="w-full h-full object-cover grayscale opacity-60" />
            
            {/* Темная плашка поверх карты, сдвинута влево */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:-left-24 bg-[#333333] text-white p-8 md:p-10 w-full md:w-[480px] shadow-2xl z-10">
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-brand-accent mt-1">📍</span>
                  <span className="text-sm leading-relaxed">Санкт-Петербург, Северная дорога, 11</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-brand-accent">📞</span>
                  <a href="tel:+79217777777" className="text-sm hover:text-brand-accent transition-colors">+7 (921) 777-77-77</a>
                </div>
              </div>
              
              <h4 className="font-bold text-lg mb-4">Время работы</h4>
              <div className="text-sm text-gray-300 space-y-2 mb-8">
                <p>Вс-Чт <span className="text-white ml-4">с 12:00 до 23:00</span></p>
                <p>Пт-Сб <span className="text-white ml-4">с 12:00 до 03:00</span></p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={onOpenBooking} className="flex-1 py-3 text-sm">Забронировать</Button>
                <Button variant="outline" className="flex-1 py-3 text-sm border-white text-white hover:bg-white hover:text-brand-dark">Как добраться</Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};