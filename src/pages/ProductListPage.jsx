import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductListPage.css";
import { Link } from "react-router-dom";

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>

      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/product/details/${product.id}`}>
                <img src={product.image} alt={product.image} />
                <strong>{product.title}</strong>
                <p>{product.category}</p>
                <p>${product.price}</p>
                <p>{product.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductListPage;
