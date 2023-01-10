const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Should call the "localStorage.setItem" when executed with the parameter "<ol><li>Item</li></ol>"', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Should call "localStorage.setItem" with two parameter when executed with the parameter "<ol><li>Item</li></ol>"', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems','<ol><li>Item</li></ol>');
  });
});
