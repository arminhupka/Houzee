import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #333;
    background: #F7F8F9;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
  }
  
  section {
    padding: 6rem 0;
  }
  
  a {
    font-weight: 500;
    color: ${({theme}) => theme.secondary};
    text-decoration: none;
    :hover {
      color: ${({theme}) => theme.secondaryDark};
    }
  }
  
  button {
    cursor: pointer;
  }
  
  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 2.4rem;
  margin: 0 auto;
`

export default GlobalStyle
