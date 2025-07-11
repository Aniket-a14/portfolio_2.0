"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "./Components/Loader"
import Navbar from "./Components/Navbar"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [booted, setBooted] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      const bootTimer = setTimeout(() => {
        setBooted(true)
      }, 500) 
      return () => clearTimeout(bootTimer)
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}

      <AnimatePresence>
        {booted && (
          <motion.div
            key="booted-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.77, 0, 0.175, 1], 
            }}
            className="bg-black text-green-400 min-h-screen"
          >
            <Navbar />
            <Body />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
