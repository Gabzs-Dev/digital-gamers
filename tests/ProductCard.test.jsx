import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductCard from '../src/components/ProductCard';

describe('Integração do catálogo', () => {

  it('deve exibir corretamente os dados do produto', () => {

    const produto = {
      id: 1,
      name: 'GeForce RTX 4060',
      category: 'Placas de vídeo',
      price: 1899.90,
      description: 'Placa de vídeo para jogos.',
      icon: '🎮',
      tag: 'Destaque'
    };

    render(<ProductCard product={produto} />);

    expect(
      screen.getByText('GeForce RTX 4060')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Placas de vídeo')
    ).toBeInTheDocument();

    expect(
  screen.getByText(/1\.899,90/)
).toBeInTheDocument();

  });

});