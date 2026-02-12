import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App