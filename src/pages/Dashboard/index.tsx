import { useContext, useState } from "react"
import AnnounceModal from "../../components/AnnounceModal"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Auction from "../../components/Leilao"
import NavBar from "../../components/NavBar"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import Main from "./styles"
import { AnimatePresence } from "framer-motion"
import VehiclesList from "../../components/ProductCard"
import { ModalDeleteAd } from "../../components/Modals/ModalDeleteAd"
import { StyledButtonCancel, StyledDeletdAd } from "../../components/Modals/StyleButtonModal/styles"
import Leilao from "../../components/Leilao"
import { userContext } from "../../contexts/userContext"
import { EditPerfil } from "../../components/Modals/ModalEditPerfil"
import { ModalDeleteUser } from "../../components/Modals/ModalDeleteUser"


function ProductDash() {
    
    const { modalDeleteAdOpen, setModalDeleteAdOpen,  open, announceModal, setAnnounceModal, vehicles } = useContext(AnnounceContext)
    const { objUser,  modalUpdateUser, setModalUpdateUser, modalDeleteUserOpen, close } = useContext(userContext)  

    return (
        <Main>

            <NavBar />
            <Header />
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}>
                {announceModal && <AnnounceModal />}              

            </AnimatePresence>

            
            <section>
                <Leilao />
                <VehiclesList  vehicles ={vehicles}/>
                {/* <h3 className="title">Carros</h3>
                <ul>
                    <li className="card">Carro 1</li>
                    <li className="card">Carro 2</li>
                    <li className="card">Carro 3</li>
                </ul>

                <h3>Motos</h3>
                <ul>
                    <li className="card">Moto 1</li>
                    <li className="card">Moto 2</li>
                    <li className="card">Moto 3</li>
                </ul> */}
            </section>
            {modalUpdateUser && <EditPerfil />}
        
            <Footer />
        </Main>

    )
}

export default ProductDash
