require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Should be a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Should called fetch when used', async () => {
    const urlApi = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts(urlApi);
    expect(fetch).toHaveBeenCalled();
  });

  it('Should receive "https://api.mercadolibre.com/sites/MLB/search?q=computador" as a parameter in the fetch.', async () => {
    const urlApi = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts(urlApi);
    expect(fetch).toHaveBeenCalledWith(expected);
  });

  it('Should return an structure like computadorSearch when called', async () => {
    const urlApi = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const response = await fetchProducts(urlApi);
    expect(response).toEqual(computadorSearch);
  });

  it('Should return an error when called without parameter', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'));
  });
  
});
