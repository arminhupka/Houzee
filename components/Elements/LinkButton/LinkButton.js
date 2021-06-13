import styled from "styled-components";

const LinkButton = styled.a`
  padding: 1.5rem 4rem;
  display: inline-block;
  color: #fff;
  font-weight: 700;
  text-align: center;
  background: ${({theme}) => theme.primary};
  border-radius: .3rem;
  border: none;
  cursor: pointer;

  :hover {
    color: #fff;
    background: ${({theme}) => theme.primaryDark};
  }
`

export default LinkButton
