import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--base-background, #071422); 
    font-family: 'Nunito', sans-serif;
  }
`