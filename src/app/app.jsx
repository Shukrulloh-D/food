import { QueryProvider } from './providers/query-provider';
import { AppRouter } from './router';
import './styles/index.css'; // tailwind

export const App = () => {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
};