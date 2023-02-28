import styled from "styled-components";
import "../../../styles/global"



export const StyledModal = styled.div`

    background: #FFFFFF;
    border-radius: 8px;

    padding: 0.3125em 1em;

    height: 24.1875em;
    width: clamp(50%, 32.5em, 97.5%);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;

    .headerModal{
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-family: 'Lexend';
            font-style: normal;
            font-weight: 500;
            font-size: 1em;

            color: var(--grey1);
        }
        button{
            height: 3em;
            width: 1.5em;
            color: var(--grey4);
            border: none;
            background: transparent;

            font-style: normal;
            font-weight: 500;
            font-size: 1.5em;
        }

    }
    .descriptionModal{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;

        gap:1.875em;
    }
    .descriptionModal .paragraphBoldModal{
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 1em;
        color: var(--grey0);
        }
    .descriptionModal .paragraphNormalModal{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: var(--grey2);

    }
    .buttonsModal{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5625em;
    }


`

