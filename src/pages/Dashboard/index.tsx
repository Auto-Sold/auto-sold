import { useContext } from "react"
import AnnounceModal from "../../components/AnnounceModal"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Auction from "../../components/Leilao"
import NavBar from "../../components/NavBar"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import Main from "./styles"
import { AnimatePresence } from "framer-motion"

function Dashboard() {
    const { announceModal, setAnnounceModal } = useContext(AnnounceContext)

    return (
        <Main>
            <NavBar/>
            <Header />
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}>
                {announceModal && <AnnounceModal />}
            </AnimatePresence>
            <section>
                <h3>Leilão</h3>
                <h3 className="title">Carros</h3>
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
                </ul>
            </section>
            <Footer />
        </Main>
    )
}

export default Dashboard
