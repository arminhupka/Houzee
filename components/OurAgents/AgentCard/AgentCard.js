import styled from "styled-components";
import device from "../../../styles/devices";
import Link from "next/link";

const AgentCardWrapper = styled.div`
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

const AgentCard = ({agent}) => (
    <AgentCardWrapper>
        <AgentPhoto
            src={agent.photo.url}/>
        <h1>{agent.name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, vero.</p>
        <Link href={`/agent/${agent.slug}`}>
            <a>Zobacz profil</a>
        </Link>
    </AgentCardWrapper>
)

export default AgentCard
