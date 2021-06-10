import styled from "styled-components";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Content = styled.div`
  flex: 1;
`

const MainLayout = ({children}) => (
    <>
        <Header/>
        <Content>
            {children}
        </Content>
        <Footer/>
    </>
)

export default MainLayout
