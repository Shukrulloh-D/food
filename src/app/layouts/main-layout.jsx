import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from '../../widgets/sidebar/ui/sidebar';
import { Footer } from '../../widgets/footer/ui/footer';
import { BookingModal } from '../../features/booking/ui/booking-modal';
import { MobileMenu } from '../../features/mobile-menu/ui/mobile-menu';

export const MainLayout = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-brand-light">
      <Sidebar />
      
      <main className="flex-1 md:ml-[100px] flex flex-col min-h-screen w-full relative overflow-x-hidden">
        <div className="flex-1 w-full">
          <Outlet context={{ onOpenBooking: () => setIsBookingOpen(true) }} />
        </div>

        <Footer />
      </main>

      <MobileMenu onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};