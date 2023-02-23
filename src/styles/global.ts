import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
    border: none;      /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: none;  /* creates padding around scroll thumb */
  }

  :root {
    // Brand
    --brand1: #4529E6;
    --brand2: #5126EA;
    --brand3: #B0A6F0;
    --brand4: #EDEAFD;

    // Grey
    --grey0: #0B0D0D;
    --grey1: #212529;
    --grey2: #495057;
    --grey3: #868E96;
    --grey4: #ADB5BD;
    --grey5: #CED4DA;
    --grey6: #DEE2E6;
    --grey7: #E9ECEF;
    --grey8: #F1F3F5;
    --grey9: #F8F9FA;
    --grey10: #FDFDFD;
    --whiteFixed: #FFFFFF;

    // Feedback
    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;
    --suecess1: #18794E;
    --suecess2: #CCEBD7;
    --suecess3: #DDF3E4;

    // Colors Random Profile
    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    --random5: #6200E3;
    --random6: #36007D;
    --random7: #349974;
    --random8: #2A7D5F;
    --random9: #153D2E;
    --random10: #6100FF;
    --random11: #5700E3;
    --random12: #30007D;

    --input-font: 'Inter';
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  
  body,html {
    width: 100vw;
    // height: 100vh;
    font-family: var(--input-font);
    overflow-x: hidden;
    background: var(--whiteFixed);
  }

  header{
    height: 5em;
    width: 5vw;
  }

  /* banner de inicio do site */
  .bannerHome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 160px 425px;
    gap: 10px;
    width: 0.05006257822277847em;
    height:  0.13769363166953527em;
    background: var(--brand2);
    flex: none;
    order: 0;
    flex-grow: 0;
  }


  button {
    cursor: pointer;
  }
`
export const SeassonTitle = styled.h1`
  position: absolute;
    width: 73px;
    height: 30px;
    left: 60px;
    top: 100px;
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: var(--grey0);
`
// Card dos produtos
export const previewImage = styled.div`

/* Title */
h3{
position: absolute;
width: 312px;
height: 22px;
left: 0px;
top: 0px;
font-family: 'Lexend';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: var(--grey1)
}
/* Imagem */
figure {
  box-sizing: border-box;
  position: absolute;
  width: 312px;
  height: 152px;
  left: 0px;
  top: 0px;
  background: var(--grey7);
  border: 2px solid #E9ECEF;
  }

img {
  position: absolute;
  width: 262px;
  height: 150.28px;
  left: 25px;
  top: 1px;
  background: var(--grey7);
/* Description */
p{
width: 312px;
height: 48px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: var(--grey2);
flex: none;
order: 2;
flex-grow: 0;
}
/* Contetn data sallers */
.imgSaller {
  width: 17px;
  height: 0px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 0px;
  color: var(--whiteFixed);
  flex: none;
  order: 0;
  flex-grow: 0;

}
.nameSaller {
  width: 86px;
  height: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--grey2);
  flex: none;
  order: 1;
  flex-grow: 0;
}

}
`