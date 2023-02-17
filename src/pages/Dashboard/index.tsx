import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Main from "./styles"

function Dashboard() {
    return (
        <Main>
            <Header />
            <section>
                <h3>Leilão</h3>
                <ul className="auction">
                    <li>Leilão 1</li>
                    <li>Leilão 2</li>
                    <li>Leilão 3</li>
                </ul>

                <h3>Carros</h3>
                <ul>
                    <li>Carro 1</li>
                    <li>Carro 2</li>
                    <li>Carro 3</li>
                </ul>

                <h3>Motos</h3>
                <ul>
                    <li>Moto 1</li>
                    <li>Moto 2</li>
                    <li>Moto 3</li>
                </ul>
            </section>
            <Footer />
        </Main>
    )
}

export default Dashboard
