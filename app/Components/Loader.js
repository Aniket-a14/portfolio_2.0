"use client"

import { useState, useEffect } from "react"

export default function Loader({ onLoadingComplete }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [systemInfo, setSystemInfo] = useState({
    memory: 0,
    cpu: 0,
    disk: 0,
  })

  const bootSequence = [
    { message: "BIOS POST completed successfully", delay: 1000, category: "system" },
    { message: "Initializing portfolio kernel...", delay: 800, category: "kernel" },
    { message: "Loading device drivers", delay: 600, category: "drivers" },
    { message: "Mounting root filesystem", delay: 700, category: "filesystem" },
    { message: "Starting system services", delay: 500, category: "services" },
    { message: "Initializing network interfaces", delay: 600, category: "network" },
    { message: "Loading user profile data", delay: 800, category: "user" },
    { message: "Starting terminal interface", delay: 400, category: "terminal" },
    { message: "Initializing AI components", delay: 500, category: "ai" },
    { message: "Loading interactive features", delay: 300, category: "features" },
    { message: "Checking system integrity", delay: 400, category: "security" },
    { message: "Portfolio system ready!", delay: 800, category: "complete" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemInfo((prev) => ({
        memory: Math.min(prev.memory + Math.random() * 15, 100),
        cpu: Math.min(prev.cpu + Math.random() * 12, 100),
        disk: Math.min(prev.disk + Math.random() * 8, 100),
      }))
    }, 200)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentStep < bootSequence.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
        setProgress((prev) => prev + 100 / bootSequence.length)
      }, bootSequence[currentStep]?.delay || 500)

      return () => clearTimeout(timer)
    } else {
      const finalTimer = setTimeout(() => {
        onLoadingComplete()
      }, 1500)
      return () => clearTimeout(finalTimer)
    }
  }, [currentStep, onLoadingComplete])

  const getCategoryIcon = (category) => {
    const icons = {
      system: "⚡",
      kernel: "🔧",
      drivers: "🔌",
      filesystem: "📁",
      services: "⚙️",
      network: "🌐",
      user: "👤",
      terminal: "💻",
      ai: "🤖",
      features: "✨",
      security: "🔒",
      complete: "✅",
    }
    return icons[category] || "●"
  }

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-green-500"></div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M0,20 L20,0" stroke="rgb(34, 197, 94)" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-shrink-0 p-4 md:p-8 border-b border-green-800">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-2 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-wider">
                WIZARD<span className="text-green-300">&nbsp;OS</span>
              </div>
              <div className="text-sm md:text-lg text-green-300">Version 3.1.4 LTS</div>
              <div className="text-xs md:text-sm text-green-600 mt-1">
                <span className="hidden sm:inline">Copyright (c) 2025 Aniket Saha Designs. All rights reserved.</span>
                <span className="sm:hidden">© 2025 Aniket Saha Designs</span>
              </div>
            </div>
            <div className="text-center md:text-right text-xs md:text-sm text-green-600">
              <div>Build: 20241210-1534</div>
              <div className="hidden sm:block">Kernel: 6.8.0-portfolio</div>
              <div>Arch: x86_64</div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <div className="hidden lg:block flex-1 p-4 md:p-8 overflow-y-auto">
            <div className="mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-bold text-green-300 mb-3 md:mb-4">System Boot Log</h2>
              <div className="space-y-1 md:space-y-2">
                {bootSequence.slice(0, currentStep + 1).map((step, index) => (
                  <div key={index} className="flex items-start space-x-2 md:space-x-3">
                    <span className="text-sm md:text-lg flex-shrink-0 mt-0.5">
                      {index < currentStep ? "✓" : getCategoryIcon(step.category)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                        <span className="text-green-600 text-xs uppercase flex-shrink-0 mb-1 sm:mb-0">
                          [{step.category}]
                        </span>
                        <span
                          className={`text-sm md:text-base break-words ${
                            index < currentStep ? "text-green-300" : "text-green-400"
                          }`}
                        >
                          {step.message}
                        </span>
                      </div>
                    </div>
                    {index === currentStep && (
                      <span className={`ml-1 flex-shrink-0 ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
                    )}
                  </div>
                ))}
              </div>

              {currentStep < bootSequence.length && (
                <div className="mt-4 md:mt-6 flex items-center text-green-400">
                  <span className="text-sm md:text-base">Processing</span>
                  <div className="ml-2 md:ml-3 flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-80 p-4 md:p-8 border-t lg:border-t-0 lg:border-l border-green-800 bg-black/50 lg:bg-transparent">
            <h2 className="text-lg md:text-xl font-bold text-green-300 mb-3 md:mb-4">System Status</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4 mb-4 md:mb-6">
              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span>Memory</span>
                  <span>{Math.round(systemInfo.memory)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-green-500 h-1.5 md:h-2 rounded-full transition-all duration-300"
                    style={{ width: `${systemInfo.memory}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span>CPU Usage</span>
                  <span>{Math.round(systemInfo.cpu)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-yellow-500 h-1.5 md:h-2 rounded-full transition-all duration-300"
                    style={{ width: `${systemInfo.cpu}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs md:text-sm mb-1">
                  <span>Disk I/O</span>
                  <span>{Math.round(systemInfo.disk)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-blue-500 h-1.5 md:h-2 rounded-full transition-all duration-300"
                    style={{ width: `${systemInfo.disk}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              <div className="text-xs text-green-600 space-y-1">
                <div className="text-green-300 font-semibold mb-2">Hardware</div>
                <div className="space-y-0.5">
                  <div>CPU: AMD Ryzen 5600g</div>
                  <div>Memory: 32GB DDR5</div>
                  <div className="hidden sm:block">GPU: RTX 2060 Super</div>
                  <div>Storage: 1TB NVMe</div>
                  <div className="hidden sm:block">Network: Gigabit</div>
                </div>
              </div>

              <div className="text-xs text-green-600 space-y-1">
                <div className="text-green-300 font-semibold mb-2">Network</div>
                <div className="space-y-0.5">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-green-400">Connected</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IP:</span>
                    <span>192.168.1.100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gateway:</span>
                    <span>192.168.1.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 p-4 md:p-8 border-t border-green-800">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
            <div className="flex-1">
              <div className="text-xs md:text-sm text-green-300 mb-2">Boot Progress</div>
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-gray-800 rounded-full h-2 md:h-3">
                <div
                  className="bg-gradient-to-r from-green-600 to-green-400 h-2 md:h-3 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="text-center sm:text-right sm:ml-4">
              <div className="text-xl md:text-2xl font-bold text-green-400">{Math.round(progress)}%</div>
              <div className="text-xs md:text-sm text-green-600">
                {currentStep >= bootSequence.length ? "System Ready" : "Loading..."}
              </div>
            </div>
          </div>

          {currentStep >= bootSequence.length && (
            <div className="mt-4 text-center">
              <div className="text-green-400 animate-pulse text-base md:text-lg">
                🚀 Launching Portfolio Terminal...
              </div>
              <div className="text-green-600 text-xs md:text-sm mt-1">
                <span className="hidden sm:inline">Press any key to continue or wait for auto-launch</span>
                <span className="sm:hidden">Auto-launching...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
