import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts/main-layout';
import { HomePage } from '../../pages/home/ui/home-page';
import { DeliveryPage } from '../../pages/delivery/ui/delivery-page';
import { DishCardPage } from '../../pages/dish-card/ui/dish-card-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Наш каркас
    children: [
      { index: true, element: <HomePage /> }, // index: true = главная страница
      { path: 'delivery', element: <DeliveryPage /> },
      { path: 'dish/:id', element: <DishCardPage /> },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;