import Head from 'next/head'
import { Hero, AboutMe, Experience, Work, OtherWork, Contact } from '../components'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Bruno Bertoni</title>
        <meta name="description" content="Bruno Bertoni Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Work />
        <OtherWork />
        <Contact />
      </main>



    </div>
  )
}
