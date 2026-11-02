import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts/main-layout';
import { HomePage } from '../../pages/home/ui/home-page';
import { DeliveryPage } from '../../pages/delivery/ui/delivery-page';
import { DishCardPage } from '../../pages/dish-card/ui/dish-card-page';
import { NotFoundPage } from '../../pages/not-found/ui/not-found-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'delivery', element: <DeliveryPage /> },
      { path: 'dish/:id', element: <DishCardPage /> },
      { path: '*', element: <NotFoundPage /> }, // 404
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;