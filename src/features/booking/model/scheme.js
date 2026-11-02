import { z } from 'zod';

export const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Имя должно содержать минимум 2 буквы')
    .max(50, 'Имя слишком длинное')
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, 'Имя может содержать только буквы, пробелы и дефисы'),

  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s\-()]+$/, 'Введите корректный номер (например, +7 999 123-45-67)'),

  date: z
    .string()
    .min(1, 'Выберите дату')
    .refine((val) => {
      const selectedDate = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Дата не может быть в прошлом'),

  time: z
    .string()
    .min(1, 'Выберите время')
    .refine((val) => {
      const hour = parseInt(val.split(':')[0], 10);
      return hour >= 9 && hour <= 23;
    }, 'Мы работаем с 9:00 до 23:00'),

  guests: z
    .coerce // Автоматически конвертирует строку из инпута в число
    .number({ invalid_type_error: 'Введите число' })
    .min(1, 'Минимум 1 гость')
    .max(10, 'Для компании больше 10 человек свяжитесь с нами по телефону'),
});
