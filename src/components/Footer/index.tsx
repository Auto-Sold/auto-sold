import { FooterStyled, FooterButton } from "./styles";
import LogoBranca from "../../assets/logoBranca.png";
 

const Footer = () =>{

    return(
        <FooterStyled>
            <img src={LogoBranca} alt = "Auto Sold"></img>
            <p>
            © 2023 - Todos os direitos reservados Auto Sold.
            </p>
            <FooterButton>
            <button><p>^</p></button>

            </FooterButton>
        </FooterStyled>
    )
}
export default Footer;