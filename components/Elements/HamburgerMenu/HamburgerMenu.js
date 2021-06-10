import styled from "styled-components";
import device from "../../../styles/devices";

const StyledButton = styled.button`
  height: 2.5rem;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background: transparent;
  border: none;
  
  :hover span {
    width: 100%;
  }
  
  @media screen and ${device.lg} {
    display: none;
  }
`

const StyledBar = styled.span`
  display: block;
  width: 100%;
  height: .3rem;
  background: #fff;
  transition: width .3s;
  
  :nth-child(1) {
    width: 100%;
  }

  :nth-child(2) {
    width: 50%;
  }

  :nth-child(3) {
    width: 25%;
  }
`

const HamburgerMenu = ({onToggle}) => (
    <StyledButton onClick={onToggle}>
        <StyledBar/>
        <StyledBar/>
        <StyledBar/>
    </StyledButton>
)

export default HamburgerMenu
