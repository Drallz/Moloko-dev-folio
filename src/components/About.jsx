import { Code, Brain, Users, Rocket } from 'lucide-react'

const About = () => {
  const qualities = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Problem Solver',
      description: 'Finding creative solutions to complex challenges'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Team Player',
      description: 'Collaborating effectively in agile environments'
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-800/30">
      <div className="container-custom">
        <h2 className="section-title">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Passionate About Creating
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a software developer with a passion for building beautiful, functional applications. 
              With expertise in modern web technologies, I transform ideas into elegant digital solutions that users love.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My journey in tech started with curiosity and has evolved into a full-fledged passion for 
              crafting digital experiences. I believe in writing clean, maintainable code and always 
              staying up-to-date with the latest technologies.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 h-fit">
            <h4 className="text-xl font-semibold mb-4">Turning Vision Into Reality</h4>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Hi, I'm Moloko Sepahane, a dedicated software developer based in South Africa. 
              I specialize in creating modern web applications and mobile solutions that combine 
              beautiful design with powerful functionality.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {qualities.map((quality, index) => (
            <div key={index} className="card text-center h-full">
              <div className="flex justify-center mb-4">{quality.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{quality.title}</h4>
              <p className="text-gray-400 text-sm">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About