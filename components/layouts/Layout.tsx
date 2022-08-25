import Head from 'next/head';
import { Navbar } from '../ui/index';
interface AppProps {

    children: React.ReactNode,
    title?: string,
}
const origin = (typeof window === 'undefined' ? '' : window.location.origin);
export const Layout = ({ children, title }: AppProps) => {




    return (
        <>

            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Fausto Ortiz' />
                <meta name='description' content={`Información sobre el pokemon ${title}`} />
                <meta name='keywords' content={`${title}, pokemon`} />
                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina de  ${title}`} />
                <meta property="og:image" content={`${origin}/image/banner.png`} />
            </Head>
            <Navbar />
            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>


        </>
    )
}
