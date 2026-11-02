import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema } from '../model/scheme';
import { Button } from '../../../shared/ui/button';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

export const BookingModal = ({ isOpen, onClose }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm({
    resolver: zodResolver(bookingSchema),
  });
  
  const modalRef = useRef(null);

  // Закрытие по клику вне окна
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Закрытие по Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const onSubmit = async (data) => {
    console.log('Данные формы:', data);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Имитация запроса
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
      <div ref={modalRef} className="bg-brand-dark text-white p-8 md:p-10 w-full max-w-md relative shadow-2xl rounded-sm">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-bold text-center mb-8 uppercase tracking-widest">Забронировать столик</h2>
        
        {isSubmitSuccessful ? (
          <div className="text-center text-brand-accent text-lg py-10">
            Спасибо! Мы свяжемся с вами для подтверждения.
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400 uppercase tracking-wider">Имя</label>
              <input 
                placeholder="Введите ваше имя" 
                {...register('name')} 
                className={`bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-gray-600'} py-2 outline-none focus:border-brand-accent transition-colors`} 
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400 uppercase tracking-wider">Телефон</label>
              <input 
                placeholder="+992 (___) ___-__-__" 
                {...register('phone')} 
                className={`bg-transparent border-b ${errors.phone ? 'border-red-500' : 'border-gray-600'} py-2 outline-none focus:border-brand-accent transition-colors`} 
              />
              {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone.message}</span>}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Дата</label>
                <input 
                  type="date" 
                  {...register('date')} 
                  className={`bg-transparent border-b ${errors.date ? 'border-red-500' : 'border-gray-600'} py-2 outline-none focus:border-brand-accent transition-colors text-white [color-scheme:dark]`} 
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-gray-400 uppercase tracking-wider">Время</label>
                <input 
                  type="time" 
                  {...register('time')} 
                  className={`bg-transparent border-b ${errors.time ? 'border-red-500' : 'border-gray-600'} py-2 outline-none focus:border-brand-accent transition-colors text-white [color-scheme:dark]`} 
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-400 uppercase tracking-wider">Гостей</label>
              <input 
                type="number" 
                placeholder="2" 
                {...register('guests')} 
                className={`bg-transparent border-b ${errors.guests ? 'border-red-500' : 'border-gray-600'} py-2 outline-none focus:border-brand-accent transition-colors`} 
              />
              {errors.guests && <span className="text-red-500 text-xs mt-1">{errors.guests.message}</span>}
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-6 w-full py-3">
              {isSubmitting ? 'Отправка...' : 'Забронировать'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};