import styled from "styled-components";

export const NavBarStyle = styled.div`
position: absolute;
width: 375px;
height: 480px;
left: 0px;
top: 0px;
ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 44px;
    position: absolute;
    left: 0%;
    right: 0.27%;
    top: 16.67%;
    bottom: 0%;
}
.menu{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    gap: 690px;

    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 83.33%;

    background: var(--grey10);
    border-bottom: 2px solid var(--grey6);
}
    .menu img{
        width: 153.02px;
        height: 26.34px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    .menu div {
        width: 46px;
        height: 46px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
    .bars{
        position: absolute;
        left: 87.47%;
        right: 8.27%;
        top: 37.5%;
        bottom: 36.25%;
        font-family: 'Font Awesome 5 Free';
        font-style: normal;
        font-weight: 900;
        font-size: 18px;
        line-height: 21px;
        color: #2C2C2C;
    }
    .rectangle{
        
        position: absolute;
        left: 83.47%;
        right: 4.27%;
        top: 21.25%;
        bottom: 21.25%;

        background: var(--whiteFixed);
        border-radius: 8px;
    }
@media (min-width: 400px) {

    .menu{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 60px;
    gap: 690px;
    position: absolute;
    width: 1600px;
    height: 80px;
    left: 0px;
    top: 0px;
    background: var(--grey10);
    border-bottom: 2px solid var(--grey6);
    }
    .menu img{
        width: 153.02px;
        height: 26.34px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    .menu ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 44px;
        width: 592px;
        height: 79px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
}
`