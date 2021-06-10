import styled, {css} from "styled-components";
import device from "../../../styles/devices";

const HeadingWrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({color}) => color ? color : 'initial'};
  
  ${({position}) => () => {
      switch(position) {
        case 'left':
            return position && css`
              align-items: flex-start;
              text-align: left;
            `
        case 'center':
          return position && css`
              align-items: center;
              text-align: center;
            `
        case 'right':
          return position && css`
              align-items: flex-end;
              text-align: right;
            `
      }
  }}
`

const Title = styled.h1`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 3.5rem;
  
  // ::before {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   height: .3rem;
  //   left: 0;
  //   bottom: 0;
  //   background: ${({theme}) => theme.primary};
  // }
`

const SubTitle = styled.p`
  width: 100%;
  max-width: 90%;
  font-size: 1.3em;
  font-weight: 300;
  @media screen and ${device.md} {
    max-width: 70%;
  }

  @media screen and ${device.lg} {
    max-width: 50%;
  }
`

const Heading = ({title, subtitle, position, color}) => (
    <HeadingWrapper position={position} color={color}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
    </HeadingWrapper>
)

export default Heading
