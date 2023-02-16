import styled from "styled-components";

export const FooterStyled = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 45px 59px;
gap: 60px;
position: absolute;
width: 376px;
height: 310.34px;
left: 0px;
top: 3361px;
background: var(--grey0);

    img {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        background: var(--whiteFixed);
    }
    p {
        width: 265px;
        height: 24px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--whiteFixed);
        flex: none;
        order: 1;
        flex-grow: 0;
    }
@media (max-width:400px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 45px 59px;
    gap: 10px;
    width: 1600px;
    height: 140px;
    background: var(--grey0);
    flex: none;
    order: 2;
    flex-grow: 0;
}
`
export const FooterButton = styled.div`

width: 53px;
height: 50px;
flex: none;
order: 2;
flex-grow: 0;
    p{
        position: absolute;
        width: 10px;
        height: 18px;
        left: 1510px;
        top: 61px;
        font-family: 'Font Awesome 5 Free';
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 18px;
        color: var(--whiteFixed);
    }
    button {
        position: absolute;
        width: 53px;
        height: 50px;
        left: 1488px;
        top: 45px;
        background: var(--grey1);
        border-radius: 4px;

    }

`