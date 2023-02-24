import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <>
      <Head>
        <title>Joe Leahy Creative</title>
      </Head>

      <Header />
      {/* Hero */}
      <section id="hero">
        <Hero/>
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* About Me */}
      </>
  )
}

export default Home