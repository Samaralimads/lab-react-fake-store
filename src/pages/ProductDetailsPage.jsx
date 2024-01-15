import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = response.data;
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error.message);
      }
    };

    fetchProductDetails();
  }, [productId]);
  return (
    <div className="ProductDetailsPage">
      <h1>Product Details</h1>

      <div>
        <img src={product.image} alt={product.image} />
        <h2>{product.title}</h2>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
