require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {

  it('Should be a function', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Should call fetch when called with the parameter "MLB1615760527".', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Should call fetch with the parameter "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    const expected = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(expected);
  });

  it('Should return an structure like "item" when use the parameter "MLB1615760527"', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });
  
  it('Should return an error when called without parameter.', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  });
  
});
