import styled from "styled-components";

import {Container} from "../../styles/GlobalStyle";
import device from "../../styles/devices";

// Components
import OfferCard from "../OfferCard/OfferCard";
import Heading from "../Elements/Heading/Heading";


const StyledSection = styled.section`
  background: #F7F8F9;
`

const StyledContainer = styled(Container)`
`

const StyledGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media screen and ${device.md} {
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  }
`


const LastAdded = ({offers}) => (
    <StyledSection>
        <StyledContainer>
            <Heading title="Ostatnio dodane oferty"
                     subtitle="With the features and filters provided with the Houzez widgets you can turn your visitors attention to the latest listings or the ones that are most profitable to buy at the moment." position="center"/>
            <StyledGrid>
                {offers.map(offer => <OfferCard title={offer.title} category={offer.category} city={offer.city} pictures={offer.pictures} price={offer.price} purpose={offer.purpose} slug={offer.slug} street={offer.street} size={offer.propertySize} bedrooms={offer.bedrooms} bathrooms={offer.bathrooms} garage={offer.garage}/> )}
            </StyledGrid>
        </StyledContainer>
    </StyledSection>
)

export default LastAdded
