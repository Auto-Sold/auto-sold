import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Auction from "../../components/Leilao"
import NavBar from "../../components/NavBar"
import Main from "./styles"

function Dashboard() {
    return (
        <Main>
            <NavBar/>
            <Header />
            <section>
                <h3>Leilão</h3>
                {/* <Auction /> */}
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
