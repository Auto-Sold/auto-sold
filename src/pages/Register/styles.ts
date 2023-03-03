import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Lexend';
    font-style: normal;

    background: var(--grey8);
`
export const StyledForm = styled.form`
    margin-top: 72px;
    width: clamp( 25.6875em, 21.4375em, 80%);
    height: 101.875em;
   
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2.75em 2.6875em ;
    

    background: var(--grey10);
    border-radius: 4px;

    div{
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    input{
        width: 314px;
        height: 48px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1em;
        padding: 0em 1em;
        border: 1.5px solid #E9ECEF;
        border-radius: 4px;
    }
    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 0.875em;
    }

    .title_StyledForm{
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 1.5em;
       
    }
    .subtitle_StyledForm{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 0.875em;

        margin-top: 1.5em;
        margin-bottom: 1.5em;
    }
    .containerButton{
        display: flex;
        flex-direction: row;

    }
    .containerButton > input{
        width: 9.5em;
        
    }
    .containerButton > input:hover{
       background-color: var(--brand1);
       color: white;
        
    }
    .buttonRegister{
        width: 100%;
        height: 48px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1em;
        padding: 0em 1em;
        border: 1.5px solid #E9ECEF;
        border-radius: 4px;

        margin-top: 1em;;
        color: white;
        background-color: var(--brand1);
    }
    .containerEstate_StyledForm{
        display: flex;
        flex-direction: row;
    }
    .containerEstate_StyledForm input{
        width: 9.5em;
    }
    .containerNumber_StyledForm{
        display: flex;
        flex-direction: row;
    }
    .containerNumber_StyledForm input{
        width: 9.5em;
        
    }

    @media screen {
        
    }

`