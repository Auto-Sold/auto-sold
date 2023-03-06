import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
        font-size: 1.5em;
    }
    .button {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    
    }
`
const AnnounceFormStyle = styled.form`
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    // justify-content: flex-start;
  
    div{
        display: flex;
        flex-direction: column;
    }


    input{
        width: 314px;
        height: 48px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        padding: 0px 16px;
        border: 1.5px solid #E9ECEF;
        border-radius: 4px;
    }


    .announce-type{
        display: flex;
        flex-direction: row;
        gap: 8px;
        min-width: 50vw;
        justify-content: center;

        .sale{
            input{
                display: none;
            }

            label{
                border: 1.5px solid #ADB5BD;
                cursor: pointer;
                transition: all 0.3s;
                width: 152.5px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
            }

            input:checked + label{
                background-color: #4529E6;
                border: 1.5px solid #4529E6;
                color: #FFFFFF;
            }
        }


        .auction{
            input{
                display: none;
            }
            
            label{
                border: 1.5px solid #ADB5BD;
                cursor: pointer;
                transition: all 0.3s;
                width: 152.5px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
            }

            input:checked + label{
                background-color: #4529E6;
                border: 1.5px solid #4529E6;
                color: #FFFFFF;
            }
        }

        .car{
            input{
                display: none;
            }

            label{
                border: 1.5px solid #ADB5BD;
                cursor: pointer;
                transition: all 0.3s;
                width: 152.5px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
            }

            input:checked + label{
                background-color: #4529E6;
                border: 1.5px solid #4529E6;
                color: #FFFFFF;
            }
        }

        .bike{
            input{
                display: none;
            }
            
            label{
                border: 1.5px solid #ADB5BD;
                cursor: pointer;
                transition: all 0.3s;
                width: 152.5px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
            }

            input:checked + label{
                background-color: #4529E6;
                border: 1.5px solid #4529E6;
                color: #FFFFFF;
            }
        }
    }


    .foot{
        // background-color: pink;
        width: 314px;
        height: 48px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        gap: 8px;
       
        .cancel{
            width: 146.1px;
            height: 48px;
            font-weight: 600;
            font-size: 16px;
            font-family: 'Inter';
            font-style: normal;
            color:  #495057;
            border: 1.5px solid #DEE2E6;
            border-radius: 4px;
            background-color: #DEE2E6;
        }

        .create{
            width: 159.54px;
            height: 48px;
            font-weight: 600;
            font-size: 16px;
            font-family: 'Inter';
            font-style: normal;
            color: #EDEAFD;
            background-color: #B0A6F0;
            border: 1.5px solid #B0A6F0;
            border-radius: 4px;
        }
        .create:hover{
            background-color: var(--brand1);
            border: 1.5px solid var(--brand1);
        }
    }
`

export default AnnounceFormStyle