import styled from "styled-components";

export const DivComment = styled.div`

width: 50em;
`

export const ContainerComment = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:flex-start;
padding: 28px;
gap: 8px;

width: 20em;
height: fit-content;


background: var(--grey10);
border-radius: 4px;
margin-bottom: 3em;

.userData {
        gap: 8px;
        width: 100%;
        height: 32px;
        display: flex;
        margin-bottom: 2em;
    }
    .userPhoto{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 32px;
        height: 32px;
        background: var(--brand1);
        border-radius: 150px; 
    }
    .userPhoto img {
        display: block;
        margin: 0 auto;
        width: 32px;
        height: 32px;
        border-radius: 150px; 
    }
    .date{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        color: var(--grey3);
    }
    .edit{
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
    .edit button {
        background: var(--grey10);

        border: none;
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 0px;

        color: var(--grey6);
        padding: 10px 5px;
    }
    .edit button:hover {
        background: var(--brand1);
        color: var(--whiteFixed);
        border: 1.5px solid var(--brand1);
    }
    @media (min-width: 800px) {
        width: 50em;
        height: fit-content;
        .userPerfil {
            width: 50%;
            background-color: var(--grey0);
        }
    }

`