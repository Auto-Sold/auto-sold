import styled from "styled-components";
interface NavBar {
    display: string;
}
const NavBarStyle = styled.div<NavBar>`

width:  100vw;
height: fit-content;
left: 0px;
top: 0px;

background: var(--grey10);

.menu{
    box-sizing: border-box;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    width: 100vw;
    height: 8vh;
    background: var(--grey10);
    border-bottom: 2px solid var(--grey6);
}
    .menu img{
        flex: none;
        order: 0;
        flex-grow: 0;

        width: 100px;
        height: auto;

        padding-left: 16px;
        
    }
    .menu .logo:hover{
        cursor: pointer;
    }

    .menu div .bars{
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
        width: auto;
        height: auto;
    }
    ul{
    display: ${(props) => props.display || 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    position: absolute;
    top: 3%;
    right: 3%;
    gap: 0.5em;
    padding: 0.5em;
    background-color: var(--grey10);
    // z-index: 1000;
    border-radius: 15px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    overflow: none;

    }
    ul p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;    
    }
    ul .line {
        background-color: #2C2C2C;
        width: 100%;
        height: 0.1em;
        border-radius: 5px;
        opacity: 25%;
    }
    .rectangle{
        background: var(--whiteFixed);
    }
    ul button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding: 1em;
        width: fit-content;
        height: fit-content;

        max-width: 60%;
        min-height:  fit-content;

        border: 1.5px solid var(--grey4);
        border-radius: 4px;
    }
@media (min-width: 800px) {

    .menu{
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 690px;
    position: absolute;
    // width: 1600px;
    height: 80px;
    left: 0px;
    top: 0px;
    background: var(--grey10);
    border-bottom: 2px solid var(--grey6);
    }
  
    .menu img{
        width: 100px;
        height: auto;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
    .menu ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.28754411188079987em;
        width:40%;
        height: auto;
        flex: none;
        order: 1;
        flex-grow: 0;
        background-color: transparent;
        box-shadow: none;
        position: absolute;
        top: 15%;
        right: 2%;
        overflow: hidden;
    }
    ul p{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
    }
    ul .login{
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 28px;
        width: 150%;
    }
    ul .line {
        background-color: #2C2C2C;
        width: 0.5em;
        height: 3em;
        border-right: 1px solid  #2C2C2C;
        border-radius: 5px;
        opacity: 25%;
;
    }
    ul button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 28px;
        gap: 10px;

        width: 50%;
        height: 60%;

        border: 1.5px solid var(--grey4);
        border-radius: 4px;
    }
    .rectangle{
        display: none;
    }
    .bars{
        display: none;
    }
    
}
`

export default NavBarStyle