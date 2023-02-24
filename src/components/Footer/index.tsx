import { FooterStyled, FooterButton } from "./styles";
import LogoBranca from "../../assets/logoBranca.png";


const Footer = () => {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <FooterStyled>
            <img src={LogoBranca} alt="Auto Sold"></img>
            <p>
                © 2023 - Todos os direitos reservados.
            </p>
            <FooterButton>
                <button onClick={() => topFunction()}><p>^</p></button>
            </FooterButton>
        </FooterStyled>
    )
}
export default Footer;