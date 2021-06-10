import styled, {keyframes} from "styled-components";
import Link from 'next/link'
import {FaPhone} from "react-icons/fa";
import {Container} from "../../styles/GlobalStyle";

// Hooks
import useModalState from "../../hooks/useModalState";

// Components
import HamburgerMenu from "../Elements/HamburgerMenu/HamburgerMenu";
import Nav from "./Nav/Nav";
import device from "../../styles/devices";

const Wiggle = keyframes`
  0% {
    transform: rotate(-20deg);
  }
  
  50% {
    transform: rotate(10deg);
  }
  
  100% {
    transform: rotate(-20deg);
  }
`

const StyledHeader = styled.header`
  position: relative;
  height: 8rem;
  background: ${({theme}) => theme.primary};
  
  a {
    color: #fff;
  }

  ${Container} {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  // @media screen and ${device.lg} {
  //   position: absolute;
  //   width: 100%;
  //   background: transparent;
  //   border-bottom: .1rem solid rgba(255, 255, 255, .2);
  //   z-index: 10;
  // }

  @media screen and ${device.lg} {
    width: 100%;
    z-index: 10;
  }
`

const PhoneLink = styled.a`
  display: none;
  
  svg {
    margin-right: 1rem;
    animation: ${Wiggle} 1s infinite;
  }
  
  @media screen and ${device.lg} {
    display: flex;
  }
`

const Header = () => {

    const {isOpen, onToggle, onClose} = useModalState(false)


    return (
        <StyledHeader>
            <Container>
                <Link href="/">
                    <a>
                        <h1>Houzee</h1>
                    </a>
                </Link>
                <Nav isOpen={isOpen} onToggle={onToggle} onClose={onClose}/>
                <PhoneLink href="tel:+48332223232"><FaPhone/> +48 332 223 232</PhoneLink>
                <HamburgerMenu onToggle={onToggle}/>
            </Container>
        </StyledHeader>
    )
}

export default Header
