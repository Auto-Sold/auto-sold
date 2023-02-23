import styled from "styled-components";


export const CardVehicle = styled.div`
    gap: 16px;
    
    width: 312px;
    height: 350px;

    margin-left: 1em;

    figure{
        width: 312px;
        height: 152px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--grey2);
    }
    figure img{
        width: 312px;
        height: 152px;         
    }
    .textInformation {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0.5em;
        height: 60%;

    }
    .title {
        width: 312px;
        height: 22px;
        
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: var(--grey1);
        
        margin: 0;
        margin-bottom: 0.5em;
      
    }
    .description {
        width: 100%;
        height: 6em;
        max-height: 6em;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        
        color: var(--grey2);

    }
    .userData {
        gap: 8px;
        width: 100%;
        height: 32px;
        display: flex;
    }
    .userPhoto{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        width: 32px;
        height: 32px;
        background: var(--brand1);
        border-radius: 150px; 
    }
    .userPhoto img {
        display: block;
        margin: 0 auto;
        width: 32px;
        height: 32px;
        border-radius: 150px; 
    }
    .userName {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        /* Text/body-2-500 */

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--grey2);
        margin-left: 10px;
    }
    .footerCard{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;

        margin-top: 0.5em;
    }
    .footerCard p {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 8px;
        gap: 10px;

        width: fit-content;
        height: 32px;

        
        background: var(--brand4);
        border-radius: 4px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--brand1);
    }
`