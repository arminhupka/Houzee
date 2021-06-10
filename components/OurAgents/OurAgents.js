import styled from "styled-components";

import {Container} from "../../styles/GlobalStyle";
import device from "../../styles/devices";

import Heading from "../Elements/Heading/Heading";
import AgentCard from "./AgentCard/AgentCard";


const StyledSection = styled.section`
  background: #F7F8F9;
`

const StyledGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and ${device.md} {
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  }

  @media screen and ${device.lg} {
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
    gap: 0;
  }
`

const OurAgents = ({agents}) => (
    <StyledSection>
        <Container>
            <Heading title="Nasi Agenci" subtitle="Poznaj bliżej naszych pracowników" position="center"/>
            <StyledGrid>
                {agents.map(agent => <AgentCard key={agent.id} agent={agent}/>)}
            </StyledGrid>
        </Container>
    </StyledSection>
)

export default OurAgents
