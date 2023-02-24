import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
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
      </div>
  )
}

export default Home