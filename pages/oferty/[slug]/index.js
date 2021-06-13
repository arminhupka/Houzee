import styled from "styled-components";
import Head from "next/head";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";

import {Container} from "../../../styles/GlobalStyle";
import devices from "../../../styles/devices";

import Button from "../../../components/Elements/Button/Button";
import Input from "../../../components/Elements/Input/Input";
import Separator from "../../../components/Elements/Separator/Separator";
import Label from "../../../components/Elements/Label/Label";
import LinkButton from "../../../components/Elements/LinkButton/LinkButton";

import {request} from "../../../lib/datocms";
import priceFormatter from "../../../lib/priceFormatter";

const Map = dynamic(() => import('../../../components/Map/Map'), {ssr: false})

import img1 from '../../../assets/img/slide1.jpeg'
import img2 from '../../../assets/img/slide2.jpeg'
import img3 from '../../../assets/img/slide3.jpeg'
import Slider from "../../../components/Slider/Slider";

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

const Main = styled.main`
  grid-area: main;

  & > img {
    width: 100%;
    height: auto;
  }
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

  @media screen and ${devices.lg} {
    position: sticky;
    top: 2rem;
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

const DetailsWrapper = styled.div`
  padding: 2rem 0;

  @media screen and ${devices.lg} {
    display: flex;
    flex-direction: column;
  }
`

const LabelsWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;

  ${Label} {
    margin-right: 1rem;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and ${devices.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`


const InfoWrapper = styled.div`
  margin-bottom: 1rem;

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


const OfferPage = ({data}) => {

    const router = useRouter();

    const images = [img1, img2, img3]

    return (
        <Container>
            <Head>
                <title>{router.isFallback ? 'Wczytywanie oferty | Houzee Agencja Nieruchomości' : `${data.title} | Houzee Agencja Nieruchomości`}</title>
            </Head>
            <section>
                <Layout>
                    {router.isFallback ?
                        <h1>Wczytywanie ...</h1>
                        :
                        <>
                            <Main>
                                <Slider images={images}/>
                                {/*<img src={data.pictures[0].url}/>*/}
                                <DetailsWrapper>
                                    <LabelsWrapper>
                                        <Label large>{data.category}</Label>
                                        <Label large>{data.purpose}</Label>
                                    </LabelsWrapper>
                                    <Row>
                                        <InfoWrapper>
                                            <h1>{data.title}</h1>
                                            <address>{data.street}, {data.city}</address>
                                        </InfoWrapper>
                                        <PricingWrapper>
                                            <p>{priceFormatter(data.price)}</p>
                                            <p>{priceFormatter(data.price / data.propertySize)} / m<sup>2</sup></p>
                                        </PricingWrapper>
                                    </Row>
                                </DetailsWrapper>
                                <Tab>
                                    <h1>Opis</h1>
                                    <Separator/>
                                    <p>{data.description}</p>
                                </Tab>
                                <Tab>
                                    <h1>Lokalizacja</h1>
                                    <Separator/>
                                    <TabList>
                                        <TabItem>
                                            <span>Ulica</span>
                                            <span>{data.street}</span>
                                        </TabItem>
                                        <TabItem>
                                            <span>Miasto</span>
                                            <span>{data.city}</span>
                                        </TabItem>
                                        <TabItem>
                                            <span>Kod pocztowy</span>
                                            <span>{data.postalCode}</span>
                                        </TabItem>
                                        <TabItem>
                                            <span>Województwo</span>
                                            <span>{data.voivodeship}</span>
                                        </TabItem>
                                    </TabList>
                                    <LinkButton href={`https://maps.google.com/?q=${data.street} ${data.city}`}>Zobacz w
                                        Google Maps</LinkButton>
                                </Tab>
                                <Tab>
                                    <h1>Mapa</h1>
                                    <Separator/>
                                    <Map lat={data.localization.latitude} lng={data.localization.longitude} />
                                </Tab>
                            </Main>
                            <Sidebar>
                                <AgentContact>
                                    <h1>Skontaktuj się z agentem</h1>
                                    <AgentInfo>
                                        <AgentPhotoWrapper>
                                            <img src={data.agent.photo.url}/>
                                        </AgentPhotoWrapper>
                                        <AgentName>
                                            <p>{data.agent.name.split(" ")[0]}</p>
                                            <p>{data.agent.name.split(" ")[1]}</p>
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
                        </>
                    }
                </Layout>
            </section>
        </Container>
    )
}


export const getStaticProps = async (ctx) => {
    const {slug} = ctx.params

    const offerQuery = `
    query getOfferBySlug($slug: String) {
      offer(filter: {slug: {eq: $slug}}) {
        title
        city
        street
        price
        propertySize
        postalCode
        description
        voivodeship
        category
        purpose
        pictures {
            url
        }
        localization {
            latitude
            longitude
        }
        agent {
            name
            photo {
                url
            }
        }
      }
    }
    `

    const data = await request({
        query: offerQuery,
        variables: {
            slug
        }
    })

    if (!data.offer) {
        return {
            notFound: true
        }
    }


    return ({
        props: {
            data: data.offer
        }
    })
}

export const getStaticPaths = async () => {
    const offersQuery = `
    query getOffers {
      allOffers {
        slug
      }
    }
    `

    const {allOffers} = await request({
        query: offersQuery
    })

    const paths = allOffers.map(offer => ({params: {slug: offer.slug}}))

    return {
        paths,
        fallback: true
    }
}

export default OfferPage
