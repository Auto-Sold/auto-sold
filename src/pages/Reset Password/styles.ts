import styled from "styled-components";
import global from "../../styles/global";

export const StyledMain = styled.main`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Lexend';
    font-style: normal;
    margin: 10vh;

    background: var(--grey8);


`

export const StyledLogin = styled.div`
    margin-top: 72px;
    width: clamp( 21em, 25em, 80%);
    height: 33.875em;
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2.75em 2.6875em;
    

    background: var(--grey10);
    border-radius: 4px;
    // justify-content: flex-start;
    h1 {
        text-align: center;
    }

`
export const StyledForm = styled.form`
    width: 100%;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const StyledContainerInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.625em;

    input{

        width: 100%;
        height: 3em;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        padding: 0px 16px;
        border: 1.5px solid #E9ECEF;
        border-radius: 4px;
    }
`
export const StyledContainerButton = styled.div`
    
    width: 100%;
    height: 5em;
    gap: 1.5em;
    margin-top: 0.3125em;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: flex-end;

   
    .buttonForgotPassword{
        border: none;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        background-color: transparent;

        color: var(--grey2);
        
    }
    .buttonOpen{
        width: 100%;
        height: 3em;

        background-color: var(--brand1);
        border: 1.5px solid var(--brand1);
        border-radius: 4px;
        
        font-weight: 600;
        font-size: 16px;
        color: white;
        
    }

    

`
export const StyledRegisterUser = styled.div`
    height: 10.5em;
    width: 100%;

    margin-top: 1.3125em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;

    button{
        width: 100%;
        height: 3em;
        

        background-color: var(--gray10);
        border-radius: 4px;
        border: 1.5px solid #ADB5BD;
        
        font-weight: 600;
        font-size: 16px;
        color: black;
    }

`