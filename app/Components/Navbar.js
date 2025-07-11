"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function TerminalNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "~/Home" },
    { href: "https://github.com/Aniket-a14", label: "~/GitHub" },
    { href: "https://www.linkedin.com/in/aniketsaha2005/", label: "~/LinkedIn" },
    { href: "/https://www.geeksforgeeks.org/user/aniketsaha5353/", label: "~/GFG" },
    { href: "https://leetcode.com/u/Wizard_a14/", label: "~/LeetCode" },
  ]

  const closeSheet = () => setIsOpen(false)

  return (
    <nav className="w-full bg-black sticky top-0 z-50 max-h-[7vh] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-green-400" />
            <Link
              href="/"
              className="text-green-400 font-mono text-lg font-bold hover:text-green-300 transition-colors"
            >
              {"Wizard@portfolio:~$"}
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-green-300 hover:text-green-400 hover:bg-green-400/10 px-3 py-2 rounded-md text-sm font-mono font-medium transition-all duration-200  hover:border-green-400/30"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-green-400 hover:text-green-300 hover:bg-green-400/10 border border-green-400/30 hover:border-green-400"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-black border-l border-green-400 p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-green-400/30">
                    <div className="flex items-center space-x-2">
                      <Terminal className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-mono text-sm font-bold">{"terminal://menu"}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeSheet}
                      className="text-green-400 hover:text-green-300 hover:bg-green-400/10 h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex-1 px-4 py-6">
                    <div className="space-y-2">
                      {navLinks.map((link, index) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeSheet}
                          className="block text-green-300 hover:text-green-400 hover:bg-green-400/10 px-4 py-3 rounded-md font-mono text-sm border border-transparent hover:border-green-400/30 transition-all duration-200"
                        >
                          <span className="text-green-500 mr-2">{"$"}</span>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 border-t border-green-400/30">
                    <div className="text-green-500 font-mono text-xs">{"user@portfolio:~$ ls -la"}</div>
                    <div className="text-green-400/70 font-mono text-xs mt-1">{"total 5 directories"}</div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="h-0.5 bg-green-400/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      </div>
    </nav>
  )
}
