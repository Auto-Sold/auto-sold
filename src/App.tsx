import { Route, Routes } from 'react-router-dom';
import './App.css'
import VehiclesList from './components/ProductCard';
import AnnounceProvider from './contexts/AnnounceContext';
import ProductDash from './pages/Product';
import Dashboard from './pages/Dashboard';
import Global from "./styles/global";
import SellerDash from './pages/Seller';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { UserProvider } from './contexts/userContext';
ProductDash
function App() {
  return (
    <div className="App">

        <Global />
        <UserProvider>
        <AnnounceProvider> 

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/announce" element={<ProductDash/>} />
            <Route path="/seller" element={<SellerDash/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
          
        </AnnounceProvider>
        </UserProvider>
      

    </div>
  )
}

export default App
