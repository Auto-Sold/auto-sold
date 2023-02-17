import styled from "styled-components";

export const FooterStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 45px 59px;
    gap: 60px;
    width: 100vw;
    background: var(--grey0);

    img {
        height: 180px;
        margin-bottom: -30px;
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

@media (min-width:800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 45px 59px;
    gap: 10px;
    width: 100vw;
    height: 140px;
    background: var(--grey0);
    flex: none;
    order: 2;
    flex-grow: 0;

    img{
        height: 110px;
        margin-top: -30px;
    }
}
`
export const FooterButton = styled.div`
    width: 53px;
    height: 50px;
    flex: none;
    order: 2;
    flex-grow: 0;

    p{
        width: 10px;
        height: 18px;
        font-family: 'Font Awesome 5 Free';
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        color: var(--whiteFixed);
    }
    button {
        width: 53px;
        height: 50px;
        background: var(--grey1);
        border: 1px solid var(--grey1);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`