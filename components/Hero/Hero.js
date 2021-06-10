import styled from "styled-components";

import {Container} from "../../styles/GlobalStyle";

import slide1 from '../../assets/img/slide3.jpeg'
import devices from "../../styles/devices";

const HeroWrapper = styled.div`
  position: relative;
  height: 40rem;
  background: url(${slide1}) center no-repeat;
  background-size: cover;

  ${Container} {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 1;

    h1 {
      margin-bottom: 2rem;
    }
    
    p {
      text-align: center;
    }
    
    @media screen and ${devices.md} {
      p {
        width: 70%;
      }
    }
    
    @media screen and ${devices.lg} {
      h1 {
        font-size: 5rem;
      }

      p {
        width: 50%;
      }
    }
    
  }

  @media screen and ${devices.lg} {
    height: 60rem;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, ${({theme}) => theme.primary}, transparent);
`

const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
                <h1>Witaj w Houzee</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id pretium magna, condimentum
                    viverra mauris. Proin venenatis ipsum non nisl consectetur, a facilisis ex condimentum.</p>
            </Container>
            <Overlay/>
        </HeroWrapper>
    )
}

export default Hero
