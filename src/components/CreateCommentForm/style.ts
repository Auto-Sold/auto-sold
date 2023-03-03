import styled from "styled-components"

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    padding: 10px;
    gap: 8px;

    width: 100%;
    height: fit-content;


    background: var(--grey10);
    border-radius: 4px;
    margin-bottom: 3em;

  
    label {
        font-weight: 500;
        color: rgb(50,50,50);
        font-size: 0.9rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 0.2rem;
        height: 5rem;
        }
    input{
        height: 100%;
        width: 100%;
        
    }
        input::placeholder { 
            color: grey;
            opacity: 50%;
            font-size: smaller;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            }
    p{
        font-size: 0.7rem;
        margin: 0;
        opacity: 50%;
    }
    span {
        color: red;
        opacity: 80%;
        font-size: smaller;
        margin: 0;
    }
    @media (min-width: 800px) {
        input{
        height: 100%;
        width: 470%;
        
    }
    }
`
