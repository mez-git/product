import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
