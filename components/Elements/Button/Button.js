import styled from "styled-components";

const Button = styled.button`
  padding: 2rem 1rem;
  color: #fff;
  font-weight: 700;
  background: ${({theme}) => theme.primary};
  border-radius: .3rem;
  border: none;
  
  :hover {
    background: ${({theme}) => theme.primaryDark};
  }
`

export default Button
