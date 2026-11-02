import { MOCK_DISHES } from '../../entities/dish/model/dishes';

export const fetchDishes = async () => {
  // Имитация задержки сети
  await new Promise(resolve => setTimeout(resolve, 500));
  return MOCK_DISHES;
};

export const fetchDishById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_DISHES.find(d => d.id === id);
};