import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen sanp-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Joe Leahy Creative</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section  id='about' className='snap-center'>
      <About />
      </section>

      <section id='experience' className='snap-center'>
        <Experience />
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>
      {/* Projects */}
      {/* About Me */}
      </div>
  )
}

export default Home