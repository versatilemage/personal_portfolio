'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from "next/link"

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = "I'm YourName, a Full Stack Developer"

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 100)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="content-overlay">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="terminal-window max-w-2xl mx-auto"
          >
            <div className="terminal-header">
              <span className="font-bold">Welcome.exe</span>
            </div>
            <div className="terminal-body p-6">
              <p className="mb-4 text-primary">$ whoami</p>
              <p className="mb-4 cursor text-primary-foreground">{text}</p>
              <p className="mb-4 text-primary">$ skills</p>
              <p className="mb-4 text-primary-foreground">JavaScript, TypeScript, Python, React, Node.js, Express.js, SQL, PostgreSQL, MongoDB, AWS,</p>
              <p className="mb-4 text-primary">$ contact</p>
              <p className="text-primary-foreground">Email: msawadh06@gmail.com</p>
              <p className="text-primary-foreground">GitHub: <Link href={'https://github.com/versatilemage'}>https://github.com/versatilemage</Link></p>
              <p className="text-primary-foreground">LinkedIn: <Link href={'https://www.linkedin.com/in/ms-awadh'}>https://www.linkedin.com/in/ms-awadh/</Link></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

