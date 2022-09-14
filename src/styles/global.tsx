import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-family: 'Nunito Sans', sans-serif;
  }
`

export default GlobalStyle
