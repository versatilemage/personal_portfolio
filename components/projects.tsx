'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Project Alpha',
    description: 'A cutting-edge web application built with React and Node.js',
    link: 'https://github.com/yourusername/project-alpha',
  },
  {
    name: 'Beta Bot',
    description: 'An AI-powered chatbot using Python and TensorFlow',
    link: 'https://github.com/yourusername/beta-bot',
  },
  {
    name: 'Gamma DB',
    description: 'A high-performance database solution with advanced querying capabilities',
    link: 'https://github.com/yourusername/gamma-db',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="content-overlay">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="terminal-window max-w-2xl mx-auto"
          >
            <div className="terminal-header">
              <span className="font-bold">Projects.exe</span>
            </div>
            <div className="terminal-body p-6">
              <p className="mb-4 text-primary">$ list_projects</p>
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <p className="text-primary">{project.name}</p>
                  <p className="ml-4 text-primary-foreground">{project.description}</p>
                  <p className="ml-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      View on GitHub
                    </a>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

