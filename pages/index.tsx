import Head from 'next/head'
import { Hero, AboutMe, Experience, Work, Contact } from '../components'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Bruno Bertoni</title>
        <meta name="description" content="Bruno Bertoni Personal Portfolio" />
        <link rel="icon" href="/sfavicon.ico" />
      </Head>

      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Work />
        <Contact />
      </main>



    </div>
  )
}
