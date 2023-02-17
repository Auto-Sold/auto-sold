import styled from "styled-components";
import global from "../../styles/global";
export const StyledLeilao = styled.div`


    width: 100vw;
    height: 35.8125em ;

    padding: 0.5em;
    margin: 0em;
   

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start
    
   
   
`
export const StyledTitle = styled.h3`

    width: 100%;

    color: black;

    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5em;
    text-align: left;

    margin-bottom: 2.3125em;

        
        
    `

export const StyledCardsLeilao = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3125em;

    margin: 0%;
    padding: 0%;
    
    li{
        height: 27.1875em;
        width: 20.5em;

    }

    @media only screen and (min-width: 800px){
        
        li{
            width:  45.9375em ;
            height: 20.375em;
        }
    }

`