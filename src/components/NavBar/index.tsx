import { NavBarStyle } from "./style"
import LogoBranca from "../../assets/logoBranca.png";
import bars from "../../assets/bars.png";




const NavBar = () => {
    return (
        <NavBarStyle>
            <div className="menu">

            <img src={LogoBranca} alt="logo"/>
            <div>
                <div className="rectangle">
            <img src={bars} className = "bars"/>
                </div>
            </div>
            </div>

        </NavBarStyle>
     
        
    )
}
export default NavBar