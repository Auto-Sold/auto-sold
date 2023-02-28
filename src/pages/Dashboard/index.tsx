import { useContext } from "react"
import AnnounceModal from "../../components/AnnounceModal"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Auction from "../../components/Leilao"
import NavBar from "../../components/NavBar"
import { AnnounceContext } from "../../contexts/AnnounceContext"
import Main from "./styles"
import { AnimatePresence } from "framer-motion"
import VehiclesList from "../../components/ProductCard"

function ProductDash() {
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
            <VehiclesList/>
        </section>
        <Footer />
    </Main>
    )
}

export default ProductDash
