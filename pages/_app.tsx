import '../styles/global.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";

type AppProps = {
    Component: any
    pageProps: any
}

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App