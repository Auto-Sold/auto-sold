import { NavBarStyle } from "./styles"
import LogoBranca from "../../assets/logoBranca.png";
import bars from "../../assets/bars.png";




const NavBar = () => {
    return (
        <NavBarStyle>
            <div className="menu">

                <img src={LogoBranca} alt="logo" />
                <div>
                    <div className="rectangle">
                        <img src={bars} className="bars" />
                        <ul>
                            <p>Carros</p>
                            <p>Motos</p>
                            <p>Leilões</p>
                            <div className="line"></div>
                            <p>Fazer Login</p>
                            <button>Cadastrar</button>

                        </ul>
                    </div>
                </div>
            </div>

        </NavBarStyle>


    )
}
export default NavBar