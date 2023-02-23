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