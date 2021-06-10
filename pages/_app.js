import {ThemeProvider} from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import MainLayout from "../layouts/MainLayout";
import 'swiper/swiper.scss';


function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    )
}

export default MyApp
