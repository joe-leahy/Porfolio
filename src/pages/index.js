import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'

const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen sanp-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Joe Leahy Creative</title>
      </Head>

      <Header />
      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      <About id='about' className='snap-center'/>
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* About Me */}
      </div>
  )
}

export default Home