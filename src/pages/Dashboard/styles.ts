import styled from "styled-components";

const Main = styled.main`
    // color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    // width: 100vw;
    font-family: 'Lexend';
    font-style: normal;

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

    section{
        // width: 100vw;
        // position: absolute;
        // top: 700px; 
        // background-color: blue;
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
`

export default Main