import global from "../../styles/global"
import { CardLeilao } from "../cardLeilao"
import { StyledCardsLeilao, StyledLeilao, StyledTitle } from "./styles"
const Leilao = () => {
    return (
        <StyledLeilao>
            <StyledTitle>Leilão</StyledTitle>
            <StyledCardsLeilao>
                <li>
                    <CardLeilao />
                </li>
                <li>
                    <CardLeilao />
                </li>
            </StyledCardsLeilao>
        </StyledLeilao>
    )
}
export default Leilao