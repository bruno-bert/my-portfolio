import Head from 'next/head'
import { Hero, AboutMe, Experience, Work, OtherWork, Contact } from '../components'
export default function Blog() {
    return (
        <div>
            <Head>
                <title>Bruno Bertoni</title>
                <meta name="description" content="Bruno Bertoni Personal Portfolio" />
                <meta name="description" content="Web Development Backend FrontEnd Blog" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                This is the Blog Page
            </main>



        </div>
    )
}
