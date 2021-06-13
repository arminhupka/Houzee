import styled from "styled-components";
import Separator from "../Elements/Separator/Separator";
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import device from "../../styles/devices";
import LinkButton from "../Elements/LinkButton/LinkButton";

const Wrapper = styled.div`
  padding: 2rem;
  background: #fff;
  @media screen and ${device.lg} {
    display: flex;
  }
`

const AgentPhoto = styled.img`
  width: 100%;
  @media screen and ${device.lg} {
    max-width: 25rem;
  }
`

const InfoWrapper = styled.div`
  margin-top: 1rem;

  @media screen and ${device.lg} {
    flex: 1;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`

const StyledList = styled.ul`
  margin-top: 1rem;
  list-style: none;

  li {
    margin-bottom: .5rem;

    :last-child {
      margin-bottom: 0;
    }
  }
`

const SocialList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  display: flex;

  li {
    margin-right: 1rem;

    svg {
      font-size: 2rem;
      color: ${({theme}) => theme.secondary};

      :hover {
        color: ${({theme}) => theme.secondaryDark};
      }
    }
  }
`

const ButtonsWrapper = styled.div`
  
  margin-top: 1rem;
  
  ${LinkButton} {
    width: 100%;
    
    :first-child {
      margin-bottom: 1rem;
    }
  }
  
`

const AgentInfo = () => (
    <Wrapper>
        <AgentPhoto src="https://www.datocms-assets.com/44798/1616588676-10.jpeg"/>
        <InfoWrapper>
            <h1>Mariano Italiano</h1>
            <Separator/>
            <StyledList>
                <li><b>Numer licencji:</b> 123456789</li>
                <li><b>Specjalizacja:</b> test test test</li>
                <li><b>Teren:</b> Chorzów, Katowice, Świętochłowice</li>
            </StyledList>
            <ButtonsWrapper>
                <LinkButton>Zadzwoń</LinkButton>
                <LinkButton>Napisz Email</LinkButton>
            </ButtonsWrapper>
        </InfoWrapper>
    </Wrapper>
)

export default AgentInfo
