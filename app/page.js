const products = [
  { id: 1, name: 'Tomato', type: 'Vegetable', pricePerKg: 2.2, image: '🍅' },
  { id: 2, name: 'Carrot', type: 'Vegetable', pricePerKg: 1.8, image: '🥕' },
  { id: 3, name: 'Spinach', type: 'Vegetable', pricePerKg: 2.9, image: '🥬' },
  { id: 4, name: 'Apple', type: 'Fruit', pricePerKg: 3.1, image: '🍎' },
  { id: 5, name: 'Banana', type: 'Fruit', pricePerKg: 1.5, image: '🍌' },
  { id: 6, name: 'Orange', type: 'Fruit', pricePerKg: 2.4, image: '🍊' },
];

const storeName = process.env.NEXT_PUBLIC_STORE_NAME || 'Fresh Basket';

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <h1>{storeName}</h1>
        <p>Fresh vegetables and fruits, delivered daily.</p>
      </header>

      <section className="grid" aria-label="Product list">
        {products.map((product) => (
          <article className="card" key={product.id}>
            <div className="emoji" aria-hidden="true">
              {product.image}
            </div>
            <h2>{product.name}</h2>
            <p className="type">{product.type}</p>
            <p className="price">${product.pricePerKg.toFixed(2)} / kg</p>
          </article>
        ))}
      </section>
    </main>
  );
}
