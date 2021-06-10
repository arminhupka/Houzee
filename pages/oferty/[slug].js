import styled from "styled-components";
import Image from "next/image";

import {Container} from "../../styles/GlobalStyle";
import devices from "../../styles/devices";

import Button from "../../components/Elements/Button/Button";
import Input from "../../components/Elements/Input/Input";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "main" "sidebar";
  gap: 2rem;

  @media screen and ${devices.lg} {
    grid-template-columns: 3fr 30rem;
    grid-template-areas: "main sidebar";
  }
`

const Main = styled.div`
  grid-area: main;
`

const Sidebar = styled.aside`
  grid-area: sidebar;
`

const AgentContact = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: #fff;

  & > * {
    margin-bottom: 1rem;
  }
`

const AgentInfo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  background: red;
`

const AgentPhotoWrapper = styled.div`
  position: relative;

  ::before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`

const AgentName = styled.div`
  flex: 1 auto;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 2rem;
    font-weight: 500;
  }
`

const ButtonsWrapper = styled.div`
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;

  ${Button} {
    flex-basis: calc(50% - .5rem);
  }
`

const Slide = styled.div`
  position: relative;
  height: 20rem;

  @media screen and ${devices.md} {
    height: 40rem;
  }
`

const DetailsWrapper = styled.div`
  padding: 2rem 0;

  @media screen and ${devices.lg} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const InfoWrapper = styled.div`
  h1 {
    font-size: 3rem;
  }
`

const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  p:first-child {
    font-size: 3rem;
    font-weight: 500;
  }

`

const Tab = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  
  :last-child {
    margin-bottom: 0;
  }

  hr {
    margin: 1rem 0;
    border: .1rem solid rgba(0, 0, 0, .05);
  }
`

const TabList = styled.ul`
  list-style: none;
`

const TabItem = styled.li`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: .1rem solid rgba(0, 0, 0, .05);

  :last-child {
    border-bottom: none;
  }

  span {
    :first-child {
      font-weight: 500;
      color: ${({theme}) => theme.primary};
    }
  }
`

const OfferPage = () => (
    <Container>
        <section>
            <Layout>
                <Main>
                    <Slide>
                        <Image src='/images/slide1.jpeg' layout="fill" objectFit="cover" priority/>
                    </Slide>
                    <DetailsWrapper>
                        <InfoWrapper>
                            <h1>Offer Page</h1>
                            <address>ul. Jakas, Gdzieś</address>
                        </InfoWrapper>
                        <PricingWrapper>
                            <p>222,000 PLN</p>
                            <p>123 zł / m<sup>2</sup></p>
                        </PricingWrapper>
                    </DetailsWrapper>
                    <Tab>
                        <h1>Opis</h1>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab magni neque veritatis! Ab amet
                            beatae cumque deserunt dicta dolor dolores ducimus eaque earum, illo incidunt ipsam iste
                            labore nisi nobis nulla numquam odit officia pariatur placeat porro quae quasi qui quia quod
                            reiciendis sint vel vitae voluptatibus voluptatum! Accusantium aliquid animi blanditiis
                            dolore dolorem dolorum, eligendi est incidunt itaque magnam maiores mollitia non officiis
                            optio ratione velit voluptate.</p>
                    </Tab>
                    <Tab>
                        <h1>Lokalizacja</h1>
                        <hr/>
                        <TabList>
                            <TabItem>
                                <span>Adres</span>
                                <span>Ulica</span>
                            </TabItem>
                            <TabItem>
                                <span>Adres</span>
                                <span>Ulica</span>
                            </TabItem>
                            <TabItem>
                                <span>Adres</span>
                                <span>Ulica</span>
                            </TabItem>
                            <TabItem>
                                <span>Adres</span>
                                <span>Ulica</span>
                            </TabItem>
                        </TabList>
                        <Button>Zobacz w Google Maps</Button>
                    </Tab>
                    <Tab>
                        <h1>Mapa</h1>
                        <hr/>
                    </Tab>
                </Main>
                <Sidebar>
                    <AgentContact>
                        <h1>Skontaktuj się z agentem</h1>
                        <AgentInfo>
                            <AgentPhotoWrapper>
                                <Image src="/images/user.jpeg" layout="fill"/>
                            </AgentPhotoWrapper>
                            <AgentName>
                                <p>Ava</p>
                                <p>Silva</p>
                            </AgentName>
                        </AgentInfo>
                        <Input placeholder="Imię i nazwisko"/>
                        <Input placeholder="Telefon"/>
                        <Input placeholder="Adres Email"/>
                        <ButtonsWrapper>
                            <Button>Wyślij</Button>
                            <Button>Zadzwoń</Button>
                        </ButtonsWrapper>
                    </AgentContact>
                </Sidebar>
            </Layout>
        </section>
    </Container>
)

export default OfferPage
