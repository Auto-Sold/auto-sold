import { SeassonTitle } from "../../styles/global"
import { StyledAcessarLeilao, StyledCardLeilao, StyledInfo, StyledInfoCountTime, StyledInfoDescricao, StyledInfoTitle, StyledPrice, StyledProfileUser } from "./styles"
import seta from "../../assets/seta.png"
import relogio from "../../assets/relogio.png"
import perfil from "../../assets/perfil.png"
export const CardLeilao = () => {
    return (
        <>
            <StyledCardLeilao>
                <StyledInfo>
                    <StyledInfoCountTime>
                        <figure>
                            <img src={relogio} alt="Time" />
                        </figure>
                        <p>01:58:00</p>
                    </StyledInfoCountTime>
                    <StyledInfoTitle>Mercedes Bens A 200 CGI ADVANCED SEDAN MERCEDES</StyledInfoTitle>
                    <StyledInfoDescricao>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...</StyledInfoDescricao>
                    <StyledProfileUser>
                        <figure>
                            <img src={perfil} alt="Profile" />
                            <p>Rodrigo Tavares</p>
                        </figure>
                        <StyledPrice>R$ 78.500,00</StyledPrice>
                    </StyledProfileUser>
                </StyledInfo>
                <StyledAcessarLeilao>
                    Acessar página do leilão
                    <figure>
                        <img src={seta} alt="" />
                    </figure>
                </StyledAcessarLeilao>
            </StyledCardLeilao>
        </>
    )
}