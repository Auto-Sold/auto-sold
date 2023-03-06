import NavBarStyle from "./styles"
import LogoSemFundo from "../../assets/logoSemFundo.png";
import bars from "../../assets/bars.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../pages/Login";


// ===================================IMPORTS====================================

const NavBar = () => {

    const [displayUl, setDisplayUl] = useState<string>("none")
    const nav= useNavigate()

    return (
        <NavBarStyle display={displayUl} >
            <div className="menu">
                <img src={LogoSemFundo} alt="logo" className="logo" onClick={()=>nav("/")}/>

                <div onClick={(event) => {
                    event.preventDefault();
                    setDisplayUl("flex")
                }}
                    className="rectangle">
                    <img src={bars} className="bars" />
                </div>
                <ul onClick={(event) => {
                    event.preventDefault
                    setDisplayUl("none")
                }}>
                    <p>Carros</p>
                    <p>Motos</p>
                    <p>Leilões</p>

                    <p className="line"></p>
                    <button className="login" onClick={()=>nav("/login")}>Fazer Login</button>
                    <button onClick={()=>nav("/register")}>Cadastrar</button>
                </ul>

            </div>

        </NavBarStyle>


    )
}
export default NavBar