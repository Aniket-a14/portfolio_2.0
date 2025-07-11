"use client"

import { useState, useEffect, useRef } from "react"

export default function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState([
    { type: "command", content: "wiz@portfolio:~$ welcome" },
    { type: "output", content: "Hi, I'm Aniket Saha, a Software Engineer." },
    { type: "output", content: "" },
    { type: "output", content: "Welcome to my interactive portfolio terminal!" },
    { type: "output", content: "Type 'help' to see available commands." },
    { type: "prompt", content: "" },
  ])
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [currentTypingIndex, setCurrentTypingIndex] = useState(-1)
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  const navigationCommands = [
    "help",
    "about",
    "projects",
    "skills",
    "contact",
    "education",
    "resume",
    "sudo",
    "clear",
  ]

  const commands = {
    help: () => [
      "Available commands:",
      "",
      "about          - Learn about me",
      "projects       - View my projects",
      "skills         - See my technical skills",
      "contact        - How to reach me",
      "education      - My educational background",
      "resume         - Download my resume",
      "clear          - Clear the terminal",
      "",
      "Type any command to continue...",
      "",
    ],
    about: () => [
      "👋 Hello, I'm Aniket Saha!",
      "",
      "I'm a Software Engineer passionate about Full Stack Development, AI, and Developer Experience.",
      "",
      "Background:",
      "- Currently building projects in React, Next.js, and AI integrations",
      "- Freelancer with real-world project experience",
      "- Love blending design, functionality, and performance",
      "",
      "When not coding, I'm writing poetry or helping student communities.",
    ],

    projects: () => [
      "Featured Projects:",
      "",

      "🧠 PAQuiz",
      "   Tech: Next.js, React, GitHub",
      "   - Aims to raise social safety awareness among children",
      "   - Educates and protects kids from exploitation through interactive quizzes",
      `   Live: <a href="https://quiz-game-red-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">https://quiz-game-red-zeta.vercel.app/</a>`,

      "",

      "📊 Wizard-w1",
      "   Tech: Python",
      "   - An AI-powered agent that performs intelligent data analysis",
      "   - Supports interactive operations using NumPy, Pandas, Matplotlib, and Seaborn",
      `   GitHub: <a href="https://github.com/Aniket-a14/Wizard-w1" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">https://github.com/Aniket-a14/Wizard-w1</a>`,

      "",

      "🧘 Soulspace",
      "   Tech: Next.js, React",
      "   - A mental wellness platform offering a peaceful UI experience",
      "   - Encourages mindfulness, journaling, and emotional self-care",
      `   Live: <a href="https://soulspace-six.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">https://soulspace-six.vercel.app/</a>`,

      "",
    ],

    skills: () => [
      "Technical Skills:",
      "",

      "Programming Languages:",
      "- JavaScript/TypeScript (Advanced)",
      "- Python (Advanced)",
      "- C++ (Intermediate)",
      "- Java (Intermediate)",

      "",

      "Frontend Development:",
      "- React.js / Next.js (Advanced)",
      "- Tailwind CSS (Advanced)",
      "- HTML5/CSS3 (Advanced)",

      "",

      "Backend & API Development:",
      "- Node.js / Express.js (Intermediate)",
      "- FastAPI (Intermediate)",
      "- RESTful API Design (Advanced)",

      "",

      "AI / Data Science:",
      "- NumPy, Pandas, Matplotlib, Seaborn (Advanced)",
      "- Machine Learning with Scikit-learn (Intermediate)",
      "- TensorFlow (Beginner)",
      "- Real-world ML Projects (Facial Recognition, Gender Classification, etc.)",
      "- OpenAI API Integration (Advanced)",

      "",

      "Tools & Platforms:",
      "- Git & GitHub (Advanced)",
      "- Vercel / Netlify (Deployment)",
      "- VS Code, Jupyter Notebook",

      "",

      "Databases:",
      "- MongoDB (Intermediate)",
      "- MySQL / SQLite (Intermediate)",

      "",

      "Soft Skills & Strengths:",
      "- Problem Solving",
      "- UI/UX Awareness",
      "- Fast Learner & Self-Starter",
      "- Empathetic Communication & Storytelling",

      "",
    ],

    contact: () => [
      "Contact Information:",
      "",

      "📧 Email: aniketsahaworkspace@example.com",
      "🐙 GitHub: https://github.com/Aniket-a14",
      "💼 LinkedIn: https://www.linkedin.com/in/aniketsaha2005/",
      "🌐 Website: https://aniketdev.in",

      "",

      "📍 Location: Kolkata, IN",
      "🕒 Timezone: IST (UTC+5:30)",

      "",

      "Currently open to:",
      "- Internship opportunities",
      "- Consulting projects",
      "- Speaking engagements",

      "",

      "🕘 Response Time: Usually within 24 hours",

      "",

      "Feel free to reach out for collaborations, opportunities,",
      "or just to connect and chat about technology!",

      "",
    ],

    education: () => [
      "Educational Background:",
      "",

      "Bachelor of Technology in Computer Science and Engineering",
      "Lovely Professional University (2023 - Present)",
      "- Minor: Data Science",
      "- Key Projects: AI-Powered Quiz Game, Facial Recognition System, Soulspace Wellness Platform",

      "",

      "Certifications & Online Learning:",
      "- Google IT Support Certificate (Coursera)",
      "- Python for Data Science (Coursera)",
      "- Responsive Web Design (freeCodeCamp)",
      "- Bits and Bytes of Computer Networking (Coursera)",

      "",

      "Relevant Coursework:",
      "- Data Structures and Algorithms",
      "- Operating Systems & DBMS",
      "- Python for Data Science",
      "- Machine Learning and AI Foundations",
      "- Full Stack Web Development (React/Next.js)",

      "",
    ],

    resume: () => [
      "Downloading Resume...",
      "",
      `Click here to download: <a href="/aniket_cv.pdf" download target="_blank" rel="noopener noreferrer" download="Aniket_cv.pdf" class="text-blue-400 hover:underline">Aniket_cv.pdf</a>`,
      "",
      "Your browser may prompt you to save the file.",
      "",
    ],
    sudo: () => [
      "Access Granted: Admin Mode",
      "",

      "🔐 SECURITY CLEARANCE: LEVEL ∞",
      "☕ COFFEE LEVEL: UNBOUNDED",
      "",

      "Developer Stats:",
      "- Lines of Code Written: 438,000+",
      "- Bugs Fixed (intentionally): 404",
      "- Stack Overflow Tabs Open: 27",
      "- GitHub Repos Created: 45+",
      "- Projects with Real Users: ✅",
      "- Coffee Cups Consumed: ☕ x ∞",
      "",

      "Hidden Features Unlocked:",
      "✅ Builds full-stack apps in a single sitting",
      "✅ Talks to APIs like they’re old friends",
      "✅ Can make a terminal UI feel like home",
      "✅ Understands async better than most people understand time",
      "✅ Embeds emotion into AI like a digital poet",

      "",

      "Easter Eggs:",
      '🥚 "Code is love. Code is life."',
      '🥚 "I write code like I write poetry – with feeling."',
      '🥚 "Why did the dev break up with the compiler? Too many arguments."',
      "",

      "⚠️  WARNING: This user may overthink edge cases,",
      "    get emotionally attached to personal projects,",
      "    and dream of clean code, open APIs, and a bug-free world.",
      "",

      "💡 Pro Tip: Offer chai instead of coffee — they might go god mode.",
      "",
    ],

    clear: () => {
      setHistory([{ type: "prompt", content: "" }])
      return []
    },
  }

  const typewriterEffect = (lines, startIndex) => {
    setIsTyping(true)
    let currentLineIndex = 0
    let charIndex = 0
    const lineCount = lines.length

    const typeNextChar = () => {
      if (currentLineIndex >= lineCount) {
        setIsTyping(false)
        setCurrentTypingIndex(-1)
        setHistory((prev) => [...prev, { type: "prompt", content: "" }])
        return
      }

      const line = lines[currentLineIndex]
      const targetIndex = startIndex + currentLineIndex

      if (charIndex > line.length) {
        currentLineIndex++
        charIndex = 0
        setTimeout(typeNextChar, 100) 
        return
      }

      const textToShow = line.slice(0, charIndex)

      setCurrentTypingIndex(targetIndex)

      setHistory((prev) => {
        const updated = [...prev]
        if (updated[targetIndex]) {
          updated[targetIndex] = {
            ...updated[targetIndex],
            content: textToShow,
          }
        } else {
          updated.push({
            type: "output",
            content: textToShow,
          })
        }
        return updated
      })

      charIndex++
      setTimeout(typeNextChar, 16)
    }

    setHistory((prev) => {
      const updated = [...prev]
      lines.forEach(() => {
        updated.push({ type: "output", content: "" })
      })
      return updated
    })

    setTimeout(typeNextChar, 50)
  }


  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const executeCommand = (cmd) => {
    const command = cmd.toLowerCase().trim()
    if (command === "") return []
    if (commands[command]) {
      return commands[command]()
    } else {
      return [`Command not found: ${command}`, 'Type "help" for available commands.']
    }
  }

  const handleCommandClick = (command) => {
    if (isTyping) return 
    setInput(command)
    handleSubmit(null, command)
  }

  const handleSubmit = (e, directCommand = null) => {
    if (e) e.preventDefault()
    if (isTyping) return 

    const commandToExecute = directCommand || input
    if (commandToExecute.trim() === "") return

    const newHistory = [...history]

    newHistory[newHistory.length - 1] = {
      type: "command",
      content: `wiz@portfolio:~$ ${commandToExecute}`,
    }

    setHistory(newHistory)

    const output = executeCommand(commandToExecute)

    if (commandToExecute.toLowerCase().trim() === "clear") {
      return
    }

    
    setTimeout(() => {
      typewriterEffect(output, newHistory.length)
    }, 50)

    setCommandHistory((prev) => [...prev, commandToExecute])
    setInput("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (isTyping) return 

    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    if (inputRef.current && !isTyping) {
      inputRef.current.focus()
    }
  }, [isTyping])

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex-shrink-0 p-4 bg-black border-b border-green-800 w-full">
        <div className="flex flex-wrap text-sm gap-x-4">
          {navigationCommands.map((cmd, cmdIndex) => (
            <span key={cmd} className="flex items-center">
              <button
                onClick={() => handleCommandClick(cmd)}
                disabled={isTyping}
                className={`transition-colors ${isTyping
                  ? "text-green-600 cursor-not-allowed"
                  : "text-green-400 hover:text-green-300 hover:underline cursor-pointer"
                  }`}
              >
                {cmd}
              </button>
              {cmdIndex < navigationCommands.length - 1 && <span className="text-green-600 ml-2">|</span>}
            </span>
          ))}
        </div>
      </div>
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-6"
        onClick={() => !isTyping && inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index} className="mb-1">
            {item.type === "output" ? (
              <div className="text-white whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: item.content }} />
            ) : item.type === "command" ? (
              <div>
                <span className="text-blue-400">wiz@portfolio:~$</span>{" "}
                <span className="text-green-400">{item.content.replace(/^wiz@portfolio:~\$\s*/, "")}</span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">wiz@portfolio:~$</span>
                {index === history.length - 1 && !isTyping && (
                  <form onSubmit={handleSubmit} className="flex-1">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="bg-transparent text-green-400 outline-none flex-1 w-full"
                      autoComplete="off"
                      spellCheck="false"
                      disabled={isTyping}
                    />
                  </form>
                )}
                {index === history.length - 1 && !isTyping && (
                  <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}
