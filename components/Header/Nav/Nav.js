import {useEffect, useRef} from "react";
import styled, {css} from "styled-components";
import Link from 'next/link'
import devices from "../../../styles/devices";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100%;
  background: ${({theme}) => theme.primaryDark};
  transform: translateX(${({isOpen}) => isOpen ? 0 : '-100%'});
  transition: transform .6s;
  z-index: 10;

  @media screen and ${devices.lg} {
    position: initial;
    width: unset;
    height: 100%;
    background: transparent;
    transform: none;
    transition: none;
  }
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  @media screen and ${devices.lg} {
    height: 100%;
    flex-direction: row;
  }
`

const StyledItem = styled.li`
  padding: 2rem;
  font-size: 1.7rem;
  border-bottom: 1px solid ${({theme}) => theme.primary};
  @media screen and ${devices.lg} {
    position: relative;
    height: 100%;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    font-size: unset;
    border-bottom: none;

    a {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
    }

    :hover a::before {
      content: "";
      position: absolute;
      width: 100%;
      height: .5rem;
      bottom: 0;
      left: 0;
      background: #fff;
    }
  }
`

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .2);
  opacity: 0;
  visibility: hidden;
  transition: opacity .6s, visibility .6s;
  z-index: 9;

  ${({isOpen}) => isOpen && css`
    opacity: 1;
    visibility: visible;
  `}
`

const Nav = ({isOpen, onToggle, onClose}) => {

    const listRef = useRef(null)

    useEffect(() => {
        const navArr = Array.from(listRef.current.children)
        navArr.forEach(item => item.addEventListener('click', () => {
            onClose()
        }))

        return () => navArr.forEach(item => item.removeEventListener('click', () => {
            onClose()
        }))
    }, [])

    return (
        <>
            <StyledNav isOpen={isOpen}>
                <StyledList ref={listRef}>
                    <StyledItem>
                        <Link href="/">
                            <a>
                                Strona Główna
                            </a>
                        </Link>
                    </StyledItem>
                    <StyledItem>
                        <Link href="/oferty">
                            Oferty
                        </Link>
                    </StyledItem>
                    <StyledItem>
                        <Link href="/agent">
                            Agenci
                        </Link>
                    </StyledItem>
                    <StyledItem>
                        <Link href="/">
                            Usługi
                        </Link>
                    </StyledItem>
                    <StyledItem>
                        <Link href="/kontakt">
                            Kontakt
                        </Link>
                    </StyledItem>
                </StyledList>
            </StyledNav>
            <Overlay onClick={onToggle} isOpen={isOpen}/>
        </>
    )
}

export default Nav
