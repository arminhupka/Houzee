import {ThemeProvider} from "styled-components";
import Head from "next/head";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import MainLayout from "../layouts/MainLayout";


function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
                      rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&family=Work+Sans&display=swap"
                    rel="stylesheet"/>
            </Head>
            <GlobalStyle/>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </ThemeProvider>
    )
}

export default MyApp
