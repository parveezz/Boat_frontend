"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false)

      const navItems = [
            { label: "Home", href: "/#home" },
            { label: "About", href: "/#about" },
            { label: "How It Works", href: "/#how-it-works" },
            { label: "Contact", href: "/#contact" },
      ]

      const handleNavClick = () => {
            setIsOpen(false)
      }

      return (
            <header className="absolute left-0 top-0 z-50 w-full bg-black/20 backdrop-blur-md border-b border-white/10">
                  <div className="flex w-full items-center justify-between px-6 py-4 lg:px-16">

                        {/* Logo */}
                        <Link
                              href="/"
                              onClick={handleNavClick}
                              className="flex items-center gap-2 text-white"
                        >
                              <span className="text-2xl font-extrabold tracking-widest">BOAT</span>
                              <span className="text-xs font-bold tracking-wider text-gray-300 uppercase leading-tight mt-1">
                                    Market
                              </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
                              {navItems.map((item) => (
                                    <Link
                                          key={item.label}
                                          href={item.href}
                                          className="text-sm font-bold text-gray-200 transition-colors hover:text-white"
                                    >
                                          {item.label}
                                    </Link>
                              ))}
                        </nav>

                        {/* Desktop Authentication */}
                        <div className="hidden items-center gap-4 md:flex">
                              <Link
                                    href="/login"
                                    className="text-sm font-bold text-white transition-colors hover:text-gray-300"
                              >
                                    Sign In
                              </Link>

                              <Link
                                    href="/register"
                                    className="rounded-lg bg-[#6B8E4E] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#5a7a41]"
                              >
                                    Join Now
                              </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                              type="button"
                              onClick={() => setIsOpen(!isOpen)}
                              className="flex items-center justify-center p-2 text-white md:hidden"
                              aria-label="Toggle navigation menu"
                              aria-expanded={isOpen}
                        >
                              <span className="text-2xl">{isOpen ? "×" : "☰"}</span>
                        </button>
                  </div>

                  {/* Mobile Navigation */}
                  {isOpen && (
                        <div className="border-t border-white/10 bg-[#111827]/95 backdrop-blur-lg px-6 py-6 md:hidden shadow-2xl">
                              <nav className="flex flex-col items-center gap-5">
                                    {navItems.map((item) => (
                                          <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={handleNavClick}
                                                className="text-sm font-bold text-gray-200 transition-colors hover:text-white"
                                          >
                                                {item.label}
                                          </Link>
                                    ))}
                              </nav>

                              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5">
                                    <Link
                                          href="/login"
                                          onClick={handleNavClick}
                                          className="w-full rounded-lg border border-white/20 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
                                    >
                                          Sign In
                                    </Link>

                                    <Link
                                          href="/register"
                                          onClick={handleNavClick}
                                          className="w-full rounded-lg bg-[#6B8E4E] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#5a7a41]"
                                    >
                                          Join Now
                                    </Link>
                              </div>
                        </div>
                  )}
            </header>
      )
}