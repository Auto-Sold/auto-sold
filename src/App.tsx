import { Route, Routes } from 'react-router-dom';
import './App.css'
import VehiclesList from './components/ProductCard';
import AnnounceProvider from './contexts/AnnounceContext';
import ProductDash from './pages/Product';
import Dashboard from './pages/Dashboard';
import Global from "./styles/global";
import SellerDash from './pages/Seller';
ProductDash
function App() {
  return (
    <div className="App">
      <AnnounceProvider>
        <Global />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/announce" element={<ProductDash/>} />
          <Route path="/seller" element={<SellerDash/>} />

        </Routes>
      </AnnounceProvider>
    </div>
  )
}

export default App
