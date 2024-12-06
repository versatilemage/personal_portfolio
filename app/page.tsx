'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { motion, AnimatePresence, MotionValue } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const commands = {
  help: 'Available commands: about, skills, projects, contact, clear',
  about: "Hi I am Mohammed Awadh, I'm a full-stack developer with a passion for creating efficient and user-friendly applications.",
  skills: 'JavaScript, TypeScript, Python, React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, SQL, Git, AWS',
  projects: [
    {
      name: 'Akontz',
      description: 'A LMS application built using Next.js and PostgreSQL',
      link: 'https://github.com/versatilemage/Akontz_sample-Nextjs',
      image: "/akontz.png",
    },
    {
      name: 'Ecommerce using Medusa JS',
      description: 'An customisable JS framework with built-in admin dashboard for warehousing with SSR and DB using PostgreSQL',
      link: 'https://github.com/versatilemage/medusa',
      image: '/medusa.png',
    },
    {
      name: 'Gemini-ai-chatbot',
      description: 'Chatbot with fine tuned Gemini AI integration using Next.js',
      link: 'https://github.com/versatilemage/gemini-ai-chatbot',
      image: '/gemini.png',
    },
  ],
  contact: <div className='flex flex-col items-start gap-3'>
    <p>Email: <Link target="_blank" href={'mailto:msawadh06@gmail.com'}>msawadh06@gmail.com</Link></p>
    <p>GitHub: <Link target="_blank" href={'https://github.com/versatilemage'}>github.com/versatilemage</Link></p>
    <p>LinkedIn: <Link target="_blank" href={'https://www.linkedin.com/in/ms-awadh/'}>linkedin.com/in/ms-awadh</Link></p>
  </div>,
}

export default function Home() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<(string | JSX.Element | { name: string; description: string; link: string; image: string; }[])[]>(['Welcome to my portfolio. Type "help" for a list of commands.'])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCommand = (cmd: string) => {
    setOutput(prev => [...prev, `PS C:\\Users\\YourName> ${cmd}`])
    setCommandHistory(prev => [cmd, ...prev])
    setHistoryIndex(-1)

    const lowercaseCmd = cmd.toLowerCase().trim()

    if (lowercaseCmd === 'clear') {
      setOutput(['Welcome to my portfolio. Type "help" for a list of commands.'])
    } else if (lowercaseCmd in commands) {
      if (lowercaseCmd === 'projects') {
        setOutput(prev => [
          ...prev,
          ...commands.projects.map(project => (
            <div key={project.name} className="mb-4">
              <p className="text-primary">{project.name}</p>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                View on GitHub
              </a>
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={500}
                objectFit="contain"
                className="mt-2 rounded contain sm:max-h-[220px] sm:min-h-[220px]"
              />
            </div>
          ))
        ])
      } else {
        setOutput(prev => [...prev, commands[lowercaseCmd as keyof typeof commands]])
      }
    } else {
      setOutput(prev => [...prev, `'${cmd}' is not recognized as an internal or external command.`])
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex(prevIndex => prevIndex + 1)
        setInput(commandHistory[historyIndex + 1])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        setHistoryIndex(prevIndex => prevIndex - 1)
        setInput(commandHistory[historyIndex - 1])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  useEffect(() => {
    const terminal = document.getElementById('terminal-output')
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight
    }
  }, [output])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('a') && inputRef.current) {
        inputRef.current.focus()
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <div className="terminal-window min-h-screen" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <span className="font-bold">Portfolio.exe</span>
      </div>
      <div className="terminal-body p-4">
        <div id="terminal-output" className="h-[calc(100vh-150px)] overflow-y-auto mb-4">
          <AnimatePresence>
            {output.map((line, index) => {
              const modifiedLine = line as ReactNode | MotionValue<number> | MotionValue<string>
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-2 whitespace-pre-wrap"
                >
                  {modifiedLine}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-primary mr-2">PS C:\Users\YourName&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent focus:outline-none"
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}

