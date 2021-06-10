import styled from "styled-components";
import Link from 'next/link'
import {useRouter} from "next/router";
import {Container} from "../../../styles/GlobalStyle";
import {request} from "../../../lib/datocms";
import SectionTab from "../../../components/SectionTab/SectionTab";
import device from "../../../styles/devices";

const PhotoWrapper = styled.div`
  position: relative;
  @media screen and ${device.lg} {
    margin-right: 2rem;
  }
`

const StyledImage = styled.img`
  width: 25rem;
  vertical-align: bottom;
`

const AgentInfo = styled.div``

const AgentDetailsPage = ({data}) => {

    const router = useRouter()

    return (
        <>
            {router.isFallback ?
                <h1>Wczytywanie ...</h1>
                :
                <section>
                    <Container>
                        <SectionTab>
                            <PhotoWrapper>
                                <StyledImage src={data.photo.url}/>
                            </PhotoWrapper>
                            <AgentInfo>
                                <h1>{data.name}</h1>
                            </AgentInfo>
                        </SectionTab>
                        <ul>
                            {data.offers.map(offer => (
                                <li key={offer.slug}>
                                    <Link href={`/oferty/${offer.slug}`}>
                                        {offer.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </section>
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
            title
            slug
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
