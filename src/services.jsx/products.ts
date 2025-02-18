import apiClient from './apiClient';

export const getAllProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

export const getFavoriteProducts = async () => {
  const response = await apiClient.get('/products/featured');
  return response.data;
};

export const addFavoriteProduct = async (product_id: any) => {
  const response = await apiClient.post(`/products/${product_id}/feature`);
  return response;
};

export const createProduct = async (product: any) => {
  const response = await apiClient.post('/products', product);
  return response;
};
