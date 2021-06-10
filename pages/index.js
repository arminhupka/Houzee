import Head from 'next/head'

import Hero from "../components/Hero/Hero";
import LastAdded from "../components/LastAdded/LastAdded";
import OurAgents from "../components/OurAgents/OurAgents";
import WhyUs from "../components/WhyUs/WhyUs";
import {request} from "../lib/datocms";

const HomePage = ({agents, offers}) => {

    return (
        <>
            <Head>
                <title>Houzee | Agencja Nieruchomości</title>
            </Head>
            <Hero/>
            <LastAdded offers={offers}/>
            <WhyUs/>
            <OurAgents agents={agents}/>
        </>
    )
}

export const getStaticProps = async () => {
    const agentsQuery = `
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

    const offersQuery = `
    {
      allOffers {
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
    `

    const agentsData = await request({
        query: agentsQuery
    })

    const offersData = await request({
        query: offersQuery
    })

    return {
        props: {
            agents: agentsData.allAgents,
            offers: offersData.allOffers
        },
        revalidate: 10
    }
}

export default HomePage
