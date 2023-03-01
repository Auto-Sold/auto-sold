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
        height: 100%;
        width: 100vw;
        background:  rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-y: scroll;
        overflow-x: hidden;
       
        ::-webkit-scrollbar {
            width: 0px;
          }
    }

    .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 18px;
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #212529;

        button{
            background-color: var(--whiteFixed);
            border: 1px solid var(--whiteFixed);
            width: 24px;
            height: 24px;
            color: #ADB5BD;
            font-size: 20px;
        }
    }

    .announce-modal{
        max-width: 346px;
        // width: clamp(50%, 520px, 93%);
        margin: auto;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        // align-items: center;
        padding: 0px 16px 31px;
        gap: 37px;
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