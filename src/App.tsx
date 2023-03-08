import { Route, Routes, useParams } from 'react-router-dom';
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
import { SendResetPassword } from './pages/SendResetPassword';
import { ResetPassword } from './pages/Reset Password';
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
              <Route path="/announce/:idAnnounce" element={<ProductDash/>} />
              <Route path="/seller/:idSeller" element={<SellerDash/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/sendReset" element={<SendResetPassword/>} />
              <Route path="/resetpass/:token" element={<ResetPassword/>}/>

            </Routes>
            
        </AnnounceProvider>
        </UserProvider>
      

    </div>
  )
}

export default App
