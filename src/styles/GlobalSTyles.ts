import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

   * {
        font-family: 'Roboto', sans-serif; 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

   html, body, #root {
    height: 100%;
   }
   *, button, input {
        border: 0;
        outline: 0;
   }

   button {
       cursor: pointer;
   }
`;