import styled, {css} from "styled-components";

const Label = styled.span`
  display: block;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: ${({theme}) => theme.secondary};
  border-radius: .3rem;
  
  :first-child {
    margin-left: 0;
  }
  
  :hover {
    background: ${({theme}) => theme.secondaryDark};
  }
  
  ${({large}) => large && css`
    font-size: 1.3rem;
  `}
`

export default Label
