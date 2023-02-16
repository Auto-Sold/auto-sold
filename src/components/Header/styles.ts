import styled from "styled-components";

export const HeaderStyle = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 188px 425px 160px;
gap: 10px;
position: absolute;
width: 375px;
height: 703px;
left: 0px;
top: 0px;
background: var(--brand2);

    .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 52px;
        width: 372px;
        height: 396px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    h1{
        width: 372px;
        height: 119px;
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
    }
    h2{
        width: 340px;
        height: 56px;
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
        align-items: flex-start;
        padding: 0px;
        gap: 21px;
        width: 351px;
        height: 117px;
        flex: none;
        order: 2;
        flex-grow: 0;
    }
    button{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 28px;
        gap: 10px;
        width: 351px;
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
@media (min-width:400px) {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 160px 425px;
gap: 10px;
width: 1598px;
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
        position: absolute;
        width: 748px;
        height: 167px;
        left: 425px;
        top: 160px;
    }
    h1{
        position: absolute;
        width: 748px;
        height: 119px;
        left: 425px;
        top: 160px;
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 56px;
        text-align: center;
        color: var(--grey10);
    }
    h2{
        position: absolute;
        width: 388px;
        height: 28px;
        left: 607px;
        top: 299px;
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
        align-items: flex-start;
        padding: 0px;
        gap: 21px;

        position: absolute;
        width: 381.04px;
        height: 48px;
        left: 607px;
        top: 373px;
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
