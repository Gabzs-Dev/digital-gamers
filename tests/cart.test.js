import { describe, it, expect } from 'vitest';
import { getCartTotal } from '../src/utils/cart.js';

describe('Carrinho de compras', () => {
  it('deve calcular o valor total dos produtos', () => {
    const cart = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 1 }
    ];

    expect(getCartTotal(cart)).toBe(250);
  });
});