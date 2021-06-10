import styled from "styled-components";
import {FaBed, FaBath, FaCar, FaRuler} from "react-icons/fa";
import Link from "next/link";
import priceFormatter from "../../lib/priceFormatter";

import Label from "../Elements/Label/Label";

const CardWrapper = styled.div`
  background: #fff;
  border-radius: .3rem;
  overflow: hidden;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, .4), transparent);
  z-index: 1;
  transition: opacity .3s;
`

const TopWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  background: url(${({featuredImage}) => featuredImage.url}) center no-repeat;
  background-size: cover;

  :hover ${Overlay} {
    opacity: 0;
  }
`

const LabelsWrapper = styled.div`
  position: relative;
  align-self: flex-end;
  display: flex;
  z-index: 2;
`

const PricingWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
`

const Price = styled.p`
  font-size: 1.5em;
  font-weight: 500;
`

const PricePerM = styled.p``

const InfoWrapper = styled.div`
  padding: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
`
const Title = styled.h1`
  margin-bottom: .5rem;
`

const Address = styled.address`
  font-style: normal;
`

const DetailsWrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    font-size: 1.8rem;
    color: ${({theme}) => theme.secondary};
  }
`

const DetailsInfo = styled.span`
  display: flex;
  svg {
    margin-right: 1rem;
  }
`

const OfferCard = ({category, city, pictures, price, purpose, slug, street, title, size, bathrooms, bedrooms, garage}) => {


    return (
        <CardWrapper>
            <Link href={`/oferty/${slug}`}>
                <a>
                    <TopWrapper featuredImage={pictures[0]}>
                        <LabelsWrapper>
                            <Label>{category}</Label>
                            <Label>{purpose}</Label>
                        </LabelsWrapper>
                        <PricingWrapper>
                            <Price>{priceFormatter(price)}</Price>
                            <PricePerM>{priceFormatter(price / size)} m<sup>2</sup></PricePerM>
                        </PricingWrapper>
                        <Overlay/>
                    </TopWrapper>
                </a>
            </Link>
            <InfoWrapper>
                <Title>{title}</Title>
                <Address>{street}, {city}</Address>
            </InfoWrapper>
            <DetailsWrapper>
                <DetailsInfo>
                    <FaBed/>
                    {bedrooms}
                </DetailsInfo>
                <DetailsInfo>
                    <FaBath/>
                    {bathrooms}
                </DetailsInfo>
                <DetailsInfo>
                    <FaCar/>
                    {garage}
                </DetailsInfo>
                <DetailsInfo>
                    <FaRuler/>
                    {size} m<sup>2</sup>
                </DetailsInfo>
            </DetailsWrapper>
        </CardWrapper>
    )
}


export default OfferCard
