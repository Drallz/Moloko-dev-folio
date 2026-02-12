const Skills = () => {
    const skillCategories = [
      {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML/CSS']
      },
      {
        title: 'Backend',
        skills: ['Node.js', 'Python', 'Java', 'Express', 'REST APIs', 'GraphQL']
      },
      {
        title: 'Database',
        skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis']
      },
      {
        title: 'Tools & Others',
        skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Figma', 'Agile']
      }
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-800/30">
        <div className="container-custom">
          <h2 className="section-title">
            <span className="gradient-text">Expertise</span>
          </h2>
          
          <p className="text-gray-400 text-center text-lg mb-12">
            Skills & Technologies — Technologies and tools I use to bring ideas to life
          </p>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold mb-6 text-purple-400">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-700/50 rounded-lg text-sm text-gray-300 hover:bg-purple-500/20 hover:text-purple-400 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills