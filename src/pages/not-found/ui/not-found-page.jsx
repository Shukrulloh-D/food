import { Link } from 'react-router-dom';
import { Button } from '../../../shared/ui/button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center animate-fade-in">
      <h1 className="text-8xl md:text-9xl font-bold text-brand-accent mb-6">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Страница не найдена</h2>
      <p className="text-brand-gray mb-10 max-w-md">
        Возможно, она была удалена, либо вы ввели неверный адрес. Но вы всегда можете вернуться на главную и заказать что-нибудь вкусное.
      </p>
      <Link to="/">
        <Button className="px-8 py-3">На главную</Button>
      </Link>
    </div>
  );
};