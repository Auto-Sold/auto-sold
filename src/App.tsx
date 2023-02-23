import './App.css'
import { useState } from "react"
import Leilao from './components/Leilao';
import { ModalBase } from './components/ModalBase'
import CarList from './components/ProductCard';
import Global from "./styles/global";

import { motion, AnimatePresence } from "framer-motion"



function App() {
  const [ modalOpen, setModalOpen ] = useState(false)
  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  

  
  return (
    <div className="App">
     
      <Global />
      <button onClick={() => (modalOpen ? close() : open() )}>Abrir</button>
      {
        modalOpen && <ModalBase handClose={close()}  titleHeader="olá word">
        <button>confia</button>
        </ModalBase>
      }
     
      
      
    </div>
  )
}

export default App
