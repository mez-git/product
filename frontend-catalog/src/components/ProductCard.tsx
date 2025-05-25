import { Link } from 'react-router-dom';
import { type Product } from '../types';
import "../styles/ProductCard.css"
interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link to={`/product/${product.id}`} className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <small>{product.category}</small>
    </Link>
  );
}
