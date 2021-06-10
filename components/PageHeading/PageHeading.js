import styled from "styled-components";
import {Container} from "../../styles/GlobalStyle";

import bgImg from '../../assets/img/slide2.jpeg'

const HeadingWrapper = styled.div`
  position: relative;
  height: 12rem;
  background: url(${bgImg}) center no-repeat;
  background-size: cover;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(to top, ${({theme}) => theme.primary}, ${({theme}) => theme.primaryDark});
    opacity: .4;
  }
  
  ${Container} {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    color: #fff;
  }
`

const PageHeading = ({title}) => (
    <HeadingWrapper>
        <Container>
            <h1>{title}</h1>
        </Container>
    </HeadingWrapper>
)

export default PageHeading
