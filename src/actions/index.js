import sampleData from './sampleData';

/**
 * Makes the mock "API request"
 */
const fetchProducts = () => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(sampleData.products);
    }, 1000);
  });
}

/**
 * Retrieves product list from mock API
 */
export const fetchProductsFromAPI = () => {
  return async (dispatch) => {
    const products = await fetchProducts();
    return dispatch({
      type: 'UPDATE_PRODUCTS',
      products
    });
  };
}
