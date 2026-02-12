import { Github, Twitter, Linkedin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Moloko Sepahane
            </a>
            <p className="text-gray-500 text-sm mt-2">
              Software Developer based in South Africa
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Moloko Sepahane. Built with
            <Heart size={16} className="text-red-500 fill-current" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer