import styled from "styled-components";
import Link from 'next/link'

import {Container} from "../../styles/GlobalStyle";

import Heading from "../Elements/Heading/Heading";
import device from "../../styles/devices";

const StyledSection = styled.section`
  background: #F7F8F9;
`

const StyledGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and ${device.md} {
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  }

  @media screen and ${device.lg} {
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    gap: 0;
  }
`

const AgentCard = styled.div`
  position: relative;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  text-align: center;
  transition: transform .3s, box-shadow .3s ease-in-out;

  :last-child {
    border-right: none;
  }

  h1 {
    margin: 1rem 0;
    color: ${({theme}) => theme.primary};
  }

  p {
    width: 80%;
    margin: 1rem 0 2rem 0;
  }

  @media screen and ${device.lg} {
    border-right: .1rem solid rgba(0, 0, 0, .02);

    :hover {
      border: .1rem solid rgba(0, 0, 0, .02);
      box-shadow: 0 0 6rem rgba(0, 0, 0, .2);
      transform: translateY(-1rem);
      z-index: 10;
    }
  }
`

const AgentPhoto = styled.img`
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  object-fit: cover;
`

const OurAgents = ({agents}) => (
    <StyledSection>
        <Container>
            <Heading title="Nasi Agenci" subtitle="Poznaj bliżej naszych pracowników" position="center"/>
            <StyledGrid>
                {agents.map(agent => (
                    <>
                        <AgentCard>
                            <AgentPhoto
                                src={agent.photo.url}/>
                            <h1>{agent.name}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero.</p>
                            <Link href={`/agent/${agent.slug}`}>
                                <a>Zobacz profil</a>
                            </Link>
                        </AgentCard>
                    </>
                ))}

            </StyledGrid>
        </Container>
    </StyledSection>
)

export default OurAgents
