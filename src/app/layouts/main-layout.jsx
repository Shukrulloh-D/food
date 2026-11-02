import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from '../../widgets/sidebar/ui/sidebar';
import { Header } from '../../widgets/header/ui/header';
import { Footer } from '../../widgets/footer/ui/footer';
import { BookingModal } from '../../features/booking/ui/booking-modal';
import { MobileMenu } from '../../features/mobile-menu/ui/mobile-menu';

export const MainLayout = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Сайдбар слева */}
      <Sidebar />
      
      {/* Основной контент, сдвинутый вправо на десктопе (ml-24) */}
      <main className="flex-1 md:ml-24 flex flex-col min-h-screen w-full relative">
        <Header onOpenBooking={() => setIsBookingOpen(true)} />
        
        {/* Сюда рендерятся страницы (HomePage, DeliveryPage и т.д.) */}
        <div className="flex-1">
          {/* Передаем коллбэк открытия модалки через Outlet Context */}
          <Outlet context={{ onOpenBooking: () => setIsBookingOpen(true) }} />
        </div>

        <Footer />
      </main>

      {/* Глобальные поп-апы */}
      <MobileMenu />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};