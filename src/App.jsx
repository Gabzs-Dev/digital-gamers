import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [categoria, setCategoria] = useState("Todos");

  const categorias = [
    "Todos",
    "Placas de vídeo",
    "Processadores",
    "Memórias",
    "Armazenamento",
    "Periféricos"
  ];

  const produtosFiltrados =
    categoria === "Todos"
      ? products
      : products.filter(
          (product) => product.category === categoria
        );

  return (
    <div className="app">

      <header className="header">
        <div className="container header-content">

          <h1 className="logo">
            DIGITAL<span>GAMERS</span>
          </h1>

          <nav>
            <a href="#inicio">Início</a>
            <a href="#produtos">Produtos</a>
            <a href="#sobre">Sobre</a>
          </nav>

          <div className="header-label">
            <span>🎮</span> Universo Gamer
          </div>

        </div>
      </header>

      <main>

        <section className="hero" id="inicio">
          <div className="container hero-content">

            <div>
              <span className="hero-label">
                SEU SETUP COMEÇA AQUI
              </span>

              <h2>
                ELEVE SEU JOGO.
                <br />
                <span>DOMINE O UNIVERSO GAMER.</span>
              </h2>

              <p>
                Encontre os melhores componentes e acessórios
                para montar o setup dos seus sonhos.
              </p>

              <a href="#produtos" className="hero-button">
                Explorar produtos →
              </a>
            </div>

            <div className="hero-graphic">
              <span>🎮</span>
            </div>

          </div>
        </section>

        <section className="catalog container" id="produtos">

          <div className="section-heading">
            <span>TECNOLOGIA E PERFORMANCE</span>
            <h2>Nosso catálogo</h2>
            <p>Confira alguns dos nossos produtos.</p>
          </div>

          <div className="filters">
            {categorias.map((item) => (
              <button
                key={item}
                className={
                  categoria === item ? "filter active" : "filter"
                }
                onClick={() => setCategoria(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {produtosFiltrados.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {produtosFiltrados.length === 0 && (
            <p>Nenhum produto encontrado.</p>
          )}

        </section>

        <section className="about" id="sobre">
          <div className="container about-content">
            <h2>MAIS QUE UMA LOJA. UMA EXPERIÊNCIA GAMER.</h2>
            <p>
              A Digital Gamers nasceu para conectar tecnologia,
              desempenho e paixão pelo universo dos games.
              Aqui você encontra componentes para levar seu setup
              a outro nível.
            </p>
          </div>
        </section>

      </main>

      <footer>
        <p>© 2026 Digital Gamers. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;