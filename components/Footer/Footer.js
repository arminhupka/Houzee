import styled from "styled-components";
import {FaFacebook, FaInstagram, FaGithub} from "react-icons/fa";
import {FiPhoneCall, FiHome, FiMail} from "react-icons/fi";
import {Container} from "../../styles/GlobalStyle";
import device from "../../styles/devices";

const StyledFooter = styled.footer`
  color: #fff;
  background: ${({theme}) => theme.primary};

  & > ${Container} {
    padding: 10rem 2.4rem;
    display: grid;
    gap: 2rem;

    @media screen and ${device.lg} {
      grid-template-columns: 1fr 1fr 1fr
    }
  }
`

const FooterWidget = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
  
  ul {
    list-style: none;
    li {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      
      svg {
        margin-right: 1rem;
      }
    }
  }
`

const Copyright = styled.div`
  padding: 2rem 0;
  background: ${({theme}) => theme.primaryDark};

  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-bottom: 1rem;
    }

    @media screen and ${device.md} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      p {
        margin-bottom: 0;
      }
    }
  }
`

const Socials = styled.div`
  svg {
    font-size: 1.5rem;
  }
`

const SocialLink = styled.a`
  margin-left: 1rem;
`

const Footer = () => (
    <StyledFooter>
        <Container>
            <FooterWidget>
                <h1>O Houzee</h1>
                <p>Houzez is a premium WordPress theme for real estate where modern aesthetics are combined with
                    tasteful simplicity.</p>
            </FooterWidget>
            <FooterWidget>
                <h1>Kontakt</h1>
                <ul>
                    <li>
                        <FiHome/>
                        774 NE 84th St Miami, FL 33879
                    </li>
                    <li>
                        <FiPhoneCall/>
                        987 654 9875
                    </li>
                    <li>
                        <FiPhoneCall/>
                        879 456 1349
                    </li>
                    <li>
                        <FiMail/>
                        email@houzez.co
                    </li>
                </ul>
            </FooterWidget>
            <FooterWidget>
                <h1>O Houzee</h1>
                <p>Houzez is a premium WordPress theme for real estate where modern aesthetics are combined with
                    tasteful simplicity.</p>
            </FooterWidget>
        </Container>
        <Copyright>
            <Container>
                <p>created with love by hupka.dev</p>
                <Socials>
                    <SocialLink href="/">
                        <FaFacebook/>
                    </SocialLink>
                    <SocialLink href="/">
                        <FaInstagram/>
                    </SocialLink>
                    <SocialLink href="/">
                        <FaGithub/>
                    </SocialLink>
                </Socials>
            </Container>
        </Copyright>
    </StyledFooter>
)

export default Footer
