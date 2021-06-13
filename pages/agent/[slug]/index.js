import styled from "styled-components";
import Head from "next/head";
import {useRouter} from "next/router";
import {request} from "../../../lib/datocms";

import {Container} from "../../../styles/GlobalStyle";
import device from "../../../styles/devices";

import OfferCard from "../../../components/OfferCard/OfferCard";
import AgentInfo from "../../../components/AgentInfo/AgentInfo";

const StyledTab = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  background: #fff;
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
                            <AgentInfo/>
                        </Container>
                    </section>
                </>
            }
        </>
    )
}

export const getStaticProps = async (ctx) => {
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

export const getStaticPaths = async () => {
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
