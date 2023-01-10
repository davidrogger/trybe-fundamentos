const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Should call localStorage.getItem when executed', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Should call "localStorage.getItem with "cartItems" as a parameter when executed', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
