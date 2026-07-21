import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Solutions from './components/Solutions.jsx'
import Partners from './components/Partners.jsx'
import Objects from './components/Objects.jsx'
import Process from './components/Process.jsx'
import Portal from './components/Portal.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Partners />
        <Objects />
        <Process />
        <Portal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
