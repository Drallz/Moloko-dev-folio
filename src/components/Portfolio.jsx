const Portfolio = () => {
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking. Built for scalability and performance.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        featured: true
      },
      {
        title: 'Task Management App',
        description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
        tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
        featured: true
      },
      {
        title: 'Weather Dashboard',
        description: 'A beautiful weather application that displays current conditions and forecasts with stunning visualizations and location-based services.',
        tags: ['React', 'OpenWeather API', 'Chart.js'],
        featured: false
      },
      {
        title: 'Social Media Analytics',
        description: 'An analytics dashboard for tracking social media performance metrics, engagement rates, and audience insights across multiple platforms.',
        tags: ['Python', 'React', 'PostgreSQL', 'AWS'],
        featured: false
      }
    ]
  
    return (
      <section id="portfolio" className="py-20">
        <div className="container-custom">
          <h2 className="section-title">
            <span className="gradient-text">Portfolio</span>
          </h2>
          
          <p className="text-gray-400 text-center text-lg mb-12 max-w-3xl mx-auto">
            Featured Projects — A selection of projects I've worked on, showcasing my skills in 
            web development, mobile apps, and software engineering.
          </p>
  
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group hover:scale-[1.02] transition-all duration-300">
                {project.featured && (
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full mb-4">
                    Featured
                  </span>
                )}
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                    >
                      {tag}
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
  
  export default Portfolio