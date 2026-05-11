import { Navbar } from './layout/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from '@/sections/Experience'
import { Project } from './sections/Project'
import { Testimonials } from './sections/Testimonials'
import { Footer } from './layout/Footer'



function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Project />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
