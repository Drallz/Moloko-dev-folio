import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
      
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block mb-2">Hi, I'm</span>
            <span className="gradient-text text-5xl md:text-7xl lg:text-8xl">Moloko Sepahane</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto px-4">
            Software Developer based in South Africa, turning ideas into elegant digital solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-gray-800 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 text-center"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-400" size={32} />
      </a>
    </section>
  )
}

export default Hero