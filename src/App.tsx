import { Route, Routes } from 'react-router-dom';
import './App.css'
import EditModal from './components/editModal';
import AnnounceProvider from './contexts/AnnounceContext';
import Dashboard from './pages/Dashboard';
import Global from "./styles/global";

function App() {
  return (
    <div className="App">
      <AnnounceProvider>
        <Global />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </AnnounceProvider>
      <EditModal/>
    </div>
  )
}

export default App
