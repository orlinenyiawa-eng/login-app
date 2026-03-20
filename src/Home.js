import React from "react";

const products = [
  { id: 1, name: "Smartphone X1", price: 499, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop Pro 15", price: 999, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Casque Audio", price: 79, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Montre Connectée", price: 199, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Tablette 10\"", price: 299, image: "https://via.placeholder.com/150" },
];

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ padding: "20px", background: "#667eea", color: "#fff", textAlign: "center" }}>
        <h1>Bienvenue sur ElectroShop</h1>
        <p>Les meilleurs produits électroniques à portée de main</p>
      </header>

      {/* Produits */}
      <main style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", padding: "20px" }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
            <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
            <p style={{ fontWeight: "bold", color: "#667eea" }}>${product.price}</p>
            <button style={{
              padding: "10px 15px",
              background: "#667eea",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}>
              Ajouter au panier
            </button>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer style={{ padding: "20px", textAlign: "center", background: "#f1f1f1" }}>
        &copy; 2026 ElectroShop. Tous droits réservés.
      </footer>
    </div>
  );
}

export default Home;