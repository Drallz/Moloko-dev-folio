const Experience = () => {
    const experiences = [
      {
        period: '2022 - Present',
        title: 'Senior Software Developer',
        company: 'Tech Innovators Ltd',
        description: 'Leading development of enterprise web applications using React and Node.js. Mentoring junior developers and implementing best practices for code quality and testing.',
        current: true
      },
      {
        period: '2020 - 2022',
        title: 'Full Stack Developer',
        company: 'Digital Solutions SA',
        description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
        current: false
      },
      {
        period: '2018 - 2020',
        title: 'Junior Developer',
        company: 'StartUp Hub',
        description: 'Built responsive web applications and gained hands-on experience with agile methodologies. Contributed to the development of mobile-first user interfaces.',
        current: false
      }
    ]
  
    return (
      <section id="experience" className="py-20">
        <div className="container-custom">
          <h2 className="section-title">
            <span className="gradient-text">Career</span>
          </h2>
          
          <p className="text-gray-400 text-center text-lg mb-12">
            Experience — My professional journey and the companies I've had the pleasure to work with
          </p>
  
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-3 w-6 h-6 bg-gray-900 border-2 border-purple-500 rounded-full"></div>
                
                <div className="card">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      {exp.current && (
                        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full mb-2">
                          Current
                        </span>
                      )}
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-purple-400">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm bg-gray-800 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Experience