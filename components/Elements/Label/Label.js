import styled from "styled-components";

const Label = styled.span`
  display: block;
  padding: 1rem;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 700;
  background: ${({theme}) => theme.secondary};
  border-radius: .3rem;
  
  :first-child {
    margin-left: 0;
  }
  
  :hover {
    background: ${({theme}) => theme.secondaryDark};

  }
`

export default Label
