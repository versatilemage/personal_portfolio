'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', level: '████████░░' },
  { name: 'React', level: '███████░░░' },
  { name: 'Node.js', level: '██████░░░░' },
  { name: 'Python', level: '████████░░' },
  { name: 'SQL', level: '███████░░░' },
  { name: 'Git', level: '████████░░' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="content-overlay">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="terminal-window max-w-2xl mx-auto"
          >
            <div className="terminal-header">
              <span className="font-bold">Skills.exe</span>
            </div>
            <div className="terminal-body p-6">
              <p className="mb-4 text-primary">$ list_skills</p>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-2"
                >
                  <span className="mr-4 text-primary-foreground">{skill.name}</span>
                  <span className="text-primary">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

