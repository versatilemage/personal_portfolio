'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-90"
    >
      <div className="terminal-window max-w-3xl mx-auto">
        <div className="terminal-header">
          <span className="font-bold">Portfolio.exe</span>
        </div>
        <div className="terminal-body">
          <nav>
            <ul className="flex space-x-4">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-primary hover:text-primary-foreground transition-colors"
                  >
                    {item.toLowerCase()}.exe
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

