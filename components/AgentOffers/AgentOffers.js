import styled from "styled-components";
import OfferCard from "../OfferCard/OfferCard";
import device from "../../styles/devices";

const Wrapper = styled.div`
  padding: 2rem;
  display: grid;
  gap: 2rem;
  background: #fff;

  @media screen and ${device.md} {
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  }
`

const AgentOffers = ({offers}) => (
    <Wrapper>
        {offers.map(offer => <OfferCard bathrooms={offer.bathrooms} bedrooms={offer.bedrooms} category={offer.category}
                                        city={offer.city} garage={offer.garage} pictures={offer.pictures}
                                        price={offer.price} purpose={offer.purpose} size={offer.propertySize} slug={offer.slug}
                                        street={offer.street} title={offer.title}/>)}
    </Wrapper>
)

export default AgentOffers
