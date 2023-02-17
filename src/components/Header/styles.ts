import styled from "styled-components";

export const HeaderStyle = styled.header`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 188px 425px 160px;
gap: 10px;
width: 100vw;
height: 703px;
background: var(--brand2);

.box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0px;
        gap: 52px;
        width: 100vw;
        height: 396px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    h1{
        width: 100vw;
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        color: var(--grey10);
        flex: none;
        order: 0;
        flex-grow: 0;
        margin-bottom: 52px;
    }
    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: var(--grey9);
        flex: none;
        order: 1;
        flex-grow: 0;
    }
    .divButton{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 21px;
        width: 95vw;
        height: 117px;
        flex: none;
        order: 2;
        flex-grow: 0;
    }
    button{
        background: var(--brand2);

        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 28px;
        gap: 10px;
        width: 100%;
        height: 48px;
        border: 1.5px solid var(--grey10);
        border-radius: 4px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }
    button p {
        width: 52px;
        height: 0px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 0px;
        color: var(--grey10);
        flex: none;
        order: 0;
        flex-grow: 0;
    }

@media (min-width:800px) {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 160px 425px;
gap: 10px;
height: 581px;
background: var(--brand2);
flex: none;
order: 0;
flex-grow: 0;
    .box {
        width: 748px;
        height: 261px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 56px;
        text-align: center;
        color: var(--grey10);
    }
    h2{
        width: 388px;
        height: 28px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: var(--grey9);
    }
    .divButton{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        padding: 0px;
        gap: 21px;

        width: 38px;
        height: 48px;
    }
    button{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 28px;
        gap: 10px;
        width: 182.51px;
        margin: 1px;
        height: 48px;
        border: 1.5px solid var(--grey10);
        border-radius: 4px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    button p {
        width: 52px;
        height: 0px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 0px;
        color: var(--grey10);
        flex: none;
        order: 0;
        flex-grow: 0;
    }
}
`
