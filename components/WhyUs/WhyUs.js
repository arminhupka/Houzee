import styled from "styled-components";

import image from '../../assets/img/slide3.jpeg'

import {Container} from "../../styles/GlobalStyle";
import device from "../../styles/devices";

import Heading from "../Elements/Heading/Heading";

const StyledSection = styled.section`
  position: relative;
  background: ${({theme}) => theme.primary};
  counter-reset: section;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${image}) center no-repeat fixed;
  background-size: cover;
  opacity: .3;
`

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and ${device.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and ${device.lg} {
    flex: 1 0 50%
  }

`

const Card = styled.div`
  position: relative;
  padding: 1rem 0 2rem;
  color: #fff;

  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: .1rem;
    width: 40%;
    display: block;
    background: rgba(255, 255, 255, .4);
  }
`


const Counter = styled.div`
  position: relative;
  height: 7rem;
  width: 7rem;
  margin-bottom: 2rem;
  background: ${({theme}) => theme.secondary};

  ::before {
    counter-increment: section;
    content: counter(section);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 4rem;
    color: #fff;
  }
`

const TextWrapper = styled.div`
    h2 {
      margin-bottom: .5rem;
    }
`

const WhyUs = () => {

    return (
        <StyledSection>
            <Overlay/>
            <Container>
                <Heading title="Dlaczego warto nas wybrać" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, fugiat." position="left" color="#fff"/>
                <CardsWrapper>
                    <Card>
                        <Counter/>
                        <TextWrapper>
                            <h2>Titlte</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est exercitationem harum in
                                ipsum laudantium officiis omnis ratione repellat saepe sequi.</p>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <Counter/>
                        <TextWrapper>
                            <h2>Titlte</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est exercitationem harum in
                                ipsum laudantium officiis omnis ratione repellat saepe sequi.</p>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <Counter/>
                        <TextWrapper>
                            <h2>Titlte</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est exercitationem harum in
                                ipsum laudantium officiis omnis ratione repellat saepe sequi.</p>
                        </TextWrapper>
                    </Card>
                    <Card>
                        <Counter/>
                        <TextWrapper>
                            <h2>Titlte</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est exercitationem harum in
                                ipsum laudantium officiis omnis ratione repellat saepe sequi.</p>
                        </TextWrapper>
                    </Card>
                </CardsWrapper>
            </Container>
        </StyledSection>
    )
}

export default WhyUs
