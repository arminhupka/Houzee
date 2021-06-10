import styled from "styled-components";
import Head from "next/head";
import {useRouter} from "next/router";
import {request} from "../../../lib/datocms";

import {Container} from "../../../styles/GlobalStyle";
import device from "../../../styles/devices";

import OfferCard from "../../../components/OfferCard/OfferCard";
import Separator from "../../../components/Elements/Separator/Separator";

const PhotoWrapper = styled.div`
  position: relative;

  @media screen and ${device.lg} {
    margin-right: 2rem;
  }
`

const StyledImage = styled.img`
  width: 100%;
  vertical-align: bottom;
`

const AgentInfo = styled.div`
  margin-top: 2rem;

  h1 {
    margin-bottom: 2rem;
  }
`

const StyledTab = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  background: #fff;

  :nth-child(1) {
    display: flex;
    flex-direction: column;
  }

  :nth-child(2) {
    display: grid;
    gap: 2rem;

    @media screen and ${device.md} {
      grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    }
  }
`


const AgentDetailsPage = ({data}) => {

    const router = useRouter()

    return (
        <>
            {router.isFallback ?
                <h1>Wczytywanie ...</h1>
                :
                <>
                    <Head>
                        <title>{`Agent ${data.name} | Houzee Agencja Nieruchomości`}</title>
                    </Head>
                    <section>
                        <Container>
                            <StyledTab>
                                <PhotoWrapper>
                                    <StyledImage src={data.photo.url}/>
                                </PhotoWrapper>
                                <AgentInfo>
                                    <h1>{data.name}</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos
                                        dolorem dolores eius libero obcaecati odio quam quibusdam saepe ut?</p>
                                    <Separator/>
                                    <ul>
                                        <li>Numer licencji: 000-222-333</li>
                                        <li>Specjalizacja: Zarządzanie nieruchomościami, obsługa wynajmów</li>
                                        <li>Obszar działania: Katowice, Chorzów, Siemianowice Śląskie</li>
                                    </ul>
                                </AgentInfo>
                            </StyledTab>
                            <StyledTab>
                                {data.offers.map(offer => <OfferCard key={offer.id} title={offer.title}
                                                                     category={offer.category}
                                                                     city={offer.city} pictures={offer.pictures}
                                                                     price={offer.price} purpose={offer.purpose}
                                                                     slug={offer.slug} street={offer.street}
                                                                     size={offer.size} bathrooms={offer.bathrooms}
                                                                     garage={offer.garage} bedrooms={offer.bedrooms}/>
                                )}
                            </StyledTab>
                        </Container>
                    </section>
                </>
            }
        </>
    )
}

export const getStaticProps = async (ctx) =>
{
    const {slug} = ctx.params

    const getAgentQuery = `
    query getAgentBySlug ($slug: String) {
      agent(filter: {slug: {eq: $slug}}) {
        name
        photo {
            url
        }
        offers {
             id
        title
        slug
        pictures {
          url
        }
        street
        city
        category
        purpose
        price
        propertySize
        bedrooms
        bathrooms
        garage
        }
      }
    }
    `

    const agentData = await request({
        query: getAgentQuery,
        variables: {
            slug
        }
    })

    if (!agentData.agent) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data: agentData.agent
        },
        revalidate: 10
    }
}

export const getStaticPaths = async () =>
{
    const getAgentsQuery = `
    {
      allAgents {
        id
        name
        photo {
          url
        }
        slug
      }
    }
    `

    const agentsData = await request({
        query: getAgentsQuery
    })

    const paths = agentsData.allAgents.map(agent => ({
        params: {slug: agent.slug}
    }))

    return {
        paths: paths,
        fallback: true
    }
}

export default AgentDetailsPage
