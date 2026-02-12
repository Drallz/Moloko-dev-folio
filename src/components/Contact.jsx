import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! This is a demo form.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800/30">
      <div className="container-custom">
        <h2 className="section-title">
          <span className="gradient-text">Contact</span>
        </h2>
        
        <p className="text-gray-400 text-center text-lg mb-12 max-w-3xl mx-auto">
          Let's Work Together — Have a project in mind or want to collaborate? 
          I'd love to hear from you. Drop me a message and let's create something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Location</h4>
                  <p className="font-semibold">South Africa</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Phone</h4>
                  <p className="font-semibold">+27 XX XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Email</h4>
                  <p className="font-semibold">moloko@example.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact