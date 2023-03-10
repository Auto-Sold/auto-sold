import NavBarStyle from "./styles"
import LogoSemFundo from "../../assets/logoSemFundo.png";
import bars from "../../assets/bars.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../pages/Login";
import { userContext } from "../../contexts/userContext";


// ===================================IMPORTS====================================

const NavBar = () => {
    const token = window.localStorage.getItem("@TOKEN" as string)
    const [displayUl, setDisplayUl] = useState<string>("none")
    const {objUser, setObjUser, setModalUpdateUser, close} = useContext(userContext)
    const nav= useNavigate()
    if (token){
        return (<NavBarStyle display={displayUl} >
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
                    <button className="login" onClick={()=>{
                        localStorage.clear()
                        nav("/login")
                        }}>Logout</button>
                    <button onClick={() => {
                        setModalUpdateUser(true)
                        close()
                    }}>Editar Perfil</button>
                </ul>

            </div>

        </NavBarStyle>
)
    }
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