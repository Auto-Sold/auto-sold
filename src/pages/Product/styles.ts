import styled from "styled-components";

export const Main = styled.main`
    // color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // width: 100vw;
    font-family: 'Lexend';
    font-style: normal;
    padding-top: 100px;

    .backdrop{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: #000000e1;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .announce-modal{
        // width: clamp(50%, 700px, 90%);
        // height: min(50%, 300px);
        margin: auto;
        padding: 0 2rem;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--whiteFixed);
    }


   
    h3{
        margin-top: 38px;
        margin-bottom: 37px;
        margin-left: 12px;
        max-width: 80px;
        height: 30px;
        font-weight: 600;
        font-size: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    ul{
        // background-color: blue;
        list-style: none;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        width: 100vw;
        margin-bottom: 67px;
    }

    .auction>li{
        background-color: var(--brand1);
        // width: 328px;
        height: 496px;
    }

    .card{
        background-color: var(--grey4);
        font-size: 0;
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        margin:10px;
        min-width: 312px;
        height: 350px;
    }

    .title{
        color: black;
    }
    figure {
    width: 20em;
    min-width: none;
    }

    figure img {
        width: 100%;
        height: auto;
    }
    .section {
            /* position: fixed;
            top: 25%; */
            display: flex;
            flex-direction:column;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            height: 60%;
            width: 80%;
            gap: 20px;
            // position: absolute;
            // top: 700px; 
            // background-color: blue;
        }
    @media (min-width: 800px) {
        .section {
            /* position: fixed;
            top: 25%; */
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
            height: 60%;
            width: 100%;
            gap: 20px;
            // position: absolute;
            // top: 700px; 
            // background-color: blue;
        }
        .section figure {
        width: 600px;
        height: 100%;
        }
        .section figure img {
        width: 100%;
        height: 100%;
        }
        
        
    }
`


export const HeaderStyle = styled.header`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 188px 425px 40px;
gap: 10px;
width: 100vw;
height: fit-content;

background: var(--brand2);


@media (min-width: 800px) {
    
height: 703px;


    }
`
interface Content {
    justify: string;
    align: string;
    alignDescription:string;
}
export const Content = styled.div<Content>`
display: flex;
flex-direction: column;
justify-content: ${(props)=> props.justify || "flex-start"};
align-items:${(props)=> props.align || "flex-start"};
padding: 28px;
gap: 8px;

width: 350px ;
height: 326.91px;


background: var(--grey10);
border-radius: 4px;
margin-bottom: 3em;
    .title {
        width: 312px;
        height: 22px;
        
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey1);
        
        margin: 0;
        margin-bottom: 0.5em;
      
    }
    .description {
        width: 100%;
        height: 6em;
        max-height: 6em;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        display: flex;
        flex-direction: column;
        align-items: ${(props)=> props.alignDescription || "flex-start"};
        
        color: var(--grey2);

    }
    .userData {
        gap: 8px;
        width: 100%;
        height: 32px;
        display: flex;
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
    .userName {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey2);
        margin-left: 10px;
    }
    .footerCard{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 0.5em;
        gap: 1em;
    }
    .footerCard p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 8px;
        gap: 10px;

        width: fit-content;
        height: 32px;

        margin: 0.2em;

        
        background: var(--brand4);
        border-radius: 4px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--brand1);
    }
    .footerCard .price {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey1);
    }
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 20px;
        gap: 10px;

        width: 100px;
        height: 38px;

        background: var(--brand1);

        border: 1.5px solid var(--brand1);
        border-radius: 4px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 0px;

        color: var(--whiteFixed);
    }
    .userPerfil {
        width: 50%;
        background-color: var(--grey0);
    }
    @media (min-width: 800px) {
        width: 50em;
        height: 326.91px;
      }
      .footerCard{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 0.5em;
        gap: 1em;
        }
        .footerCard .price {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey1);
        margin-left: 15em;

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
`

export const Content2 = styled.div<Content>`
display: flex;
flex-direction: column;
justify-content: ${(props)=> props.justify || "flex-start"};
align-items:${(props)=> props.align || "flex-start"};
padding: 28px;
gap: 8px;

width: 350px !important;
height: 326.91px;


background: var(--grey10);
border-radius: 4px;
margin-bottom: 3em;
    .title {
        width: 312px;
        height: 22px;
        
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey1);
        
        margin: 0;
        margin-bottom: 0.5em;
      
    }
    .description {
        width: 100%;
        height: 6em;
        max-height: 6em;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        display: flex;
        flex-direction: column;
        align-items: ${(props)=> props.alignDescription || "flex-start"};
        
        color: var(--grey2);

    }
    .userData {
        gap: 8px;
        width: 100%;
        height: 32px;
        display: flex;
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
        width: 32px ;
        height: 32px ;
        border-radius: 150px; 
    }
    .userName {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey2);
        margin-left: 10px;
    }
    .footerCard{
        display: flex;
        align-items: center;
        width: 80%;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 0.5em;
        gap: 1em;
    }
    .footerCard p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 8px;
        gap: 10px;

        width: fit-content;
        height: 32px;

        margin: 0.2em;

        
        background: var(--brand4);
        border-radius: 4px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--brand1);
    }
    .footerCard .price {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey1);
    }
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 20px;
        gap: 10px;

        width: 100px;
        height: 38px;

        background: var(--brand1);

        border: 1.5px solid var(--brand1);
        border-radius: 4px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 0px;

        color: var(--whiteFixed);
    }
    .userPerfil {
        width: 50%;
        background-color: var(--grey0);
    }
    @media (min-width: 800px) {
        width: 50em;
        height: 326.91px;
      }
      .footerCard{
        display: flex;
        align-items: center;
        width: 30%;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 0.5em;
        gap: 1em;
        }
        .userPhoto{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 100px !important;
        height: 100px !important;
        background: var(--brand1);
        border-radius: 150px; 
    }
    .userPhoto img {
        display: block;
        margin: 0 auto;
        width: 100% !important;
        height: 100% !important;
        border-radius: 150px; 
    }
`