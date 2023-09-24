import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from './themes/default'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: white;
    color: black;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
  }

  // lower font size on small devices
  @media (max-width: 800px) {
    html {
      font-size: 90%; // 14px
    }
  }

  // remove arrows from number input
  // Chrome, Safari, Edge, Opera 
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  // Firefox 
  input[type=number] {
    -moz-appearance: textfield;
  }

  ::selection {
    background: ${defaultTheme.yellowDark};
    color: ${defaultTheme.white};
  }
`
