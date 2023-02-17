import styled from "styled-components";
import car from "../../assets/car.svg"
export const StyledCardLeilao = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px 4px 0px 0px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.29),rgba(0, 0, 0, 1));
`
export const StyledInfo = styled.div`
    height: 100%;
    width: 100%;
    padding: 2.0625em;
    display: flex;
    flex-direction: column;
    justify-content:  space-between;
    align-items: flex-start;
    background-image: url("${car}");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
`
export const StyledInfoCountTime = styled.div`
    width: 123px;
    height: 36px;
    background: #FFFFFF;
    border-radius: 32px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #212529;
    }
    figure{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const StyledInfoTitle = styled.h3`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5em;
    text-align: left;
    color: var(--whiteFixed);
`
export const StyledInfoDescricao = styled.p`
    text-align: justify;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
`
export const StyledProfileUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0%;
    padding: 0%;
    gap: 0.3125em;
    figure{
        margin: 0%;
        padding: 0%;
        display: flex;
        justify-content: center;
        gap: 0.3125em;
        align-items: center;
    }
    @media only screen and (min-width: 800px){
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
    }
`
export const StyledPrice = styled.p`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`
export const StyledAcessarLeilao = styled.button`
    width: 100%;
    height: 3.8125em;
    background: #4529E6;
    border-radius: 0px 0px 4px 4px;
    padding: 1.375em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
`