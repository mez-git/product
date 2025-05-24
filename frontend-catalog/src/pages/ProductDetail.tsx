import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { type Product } from '../types';
import "../styles/ProductDetail.css"
export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load product');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="container">{error}</div>;

  return (
    <div className="detail-container">
      <div className='back-link'>
             <Link to="/">← Back to Products</Link>
      </div>
 
      {product && (
        <div className="card" style={{ marginTop: '1rem' }}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <small>{product.category}</small>
        </div>
      )}
    </div>
  );
}
