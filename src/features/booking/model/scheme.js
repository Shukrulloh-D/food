import { z } from 'zod';

export const bookingSchema = z.object({
  name: z.string().min(2, 'Введите ваше имя'),
  phone: z.string().min(10, 'Введите корректный телефон').regex(/^\+?[0-9\s\-()]+$/, 'Неверный формат телефона'),
  date: z.string().min(1, 'Выберите дату'),
  time: z.string().min(1, 'Выберите время'),
  guests: z.string().min(1, 'Укажите количество гостей'),
});