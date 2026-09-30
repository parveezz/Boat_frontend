"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

function NavLink({ href, children, isActive, onClick, isMobile = false }) {
      return (
            <Link
                  href={href}
                  onClick={onClick}
                  className={`text-sm font-bold transition-colors duration-200 ${isMobile
                        ? isActive
                              ? "text-[#38543B]"
                              : "text-gray-700 hover:text-[#38543B]"
                        : isActive
                              ? "text-white"
                              : "text-white/75 hover:text-white"
                        }`}
            >
                  {children}

                  {isActive && (
                        <span className={`mt-1 block h-0.5 w-full rounded-full ${isMobile ? "bg-[#38543B]" : "bg-white shadow-sm"}`} />
                  )}
            </Link>
      )
}

export default function Navbar() {
      const [isOpen, setIsOpen] = useState(false)
      const pathname = usePathname()
      const [activeHref, setActiveHref] = useState("/")

      const navItems = [
            { label: "Home", href: "/" },
            { label: "About", href: "/#about" },
            { label: "How It Works", href: "/#how-it-works" },
            { label: "Contact", href: "/#contact" },
      ]

      return (
            <header className="absolute left-0 top-0 z-50 w-full border-b border-white/20 bg-black/10 backdrop-blur-md">
                  <div className="flex w-full items-center justify-between px-6 py-4 lg:px-10">

                        {/* Logo */}
                        <Link
                              href="/"
                              onClick={() => setActiveHref("/")}
                              className="flex flex-col leading-none"
                        >
                              <span className="text-2xl font-black tracking-tight text-white">
                                    BOAT
                              </span>

                              <span className="mt-1 text-[7px] font-bold tracking-[0.25em] text-white/80">
                                    MARKET
                              </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
                              {navItems.map((item) => (
                                    <NavLink
                                          key={item.href}
                                          href={item.href}
                                          isActive={activeHref === item.href}
                                          onClick={() => setActiveHref(item.href)}
                                    >
                                          {item.label}
                                    </NavLink>
                              ))}
                        </nav>

                        {/* Authentication */}
                        <div className="hidden items-center gap-3 md:flex">
                              <Link
                                    href="/login"
                                    className="rounded-sm border border-white bg-white px-5 py-2.5 text-sm font-bold text-[#38543B] shadow-sm transition hover:bg-white/90"
                              >
                                    Sign In
                              </Link>

                              <Link
                                    href="/register"
                                    className="rounded-sm bg-[#38543B] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#2d4530]"
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
                        >
                              {isOpen ? (
                                    <span className="text-2xl">×</span>
                              ) : (
                                    <span className="text-2xl">☰</span>
                              )}
                        </button>
                  </div>

                  {/* Mobile Menu */}
                  {isOpen && (
                        <div className="w-full border-b border-gray-200 bg-white px-6 py-6 md:hidden">
                              <nav className="flex w-full flex-col items-center gap-5">
                                    {navItems.map((item) => (
                                          <NavLink
                                                key={item.href}
                                                href={item.href}
                                                isActive={activeHref === item.href}
                                                isMobile={true}
                                                onClick={() => {
                                                      setActiveHref(item.href)
                                                      setIsOpen(false)
                                                }}
                                          >
                                                {item.label}
                                          </NavLink>
                                    ))}
                              </nav>

                              {/* Mobile Authentication */}
                              <div className="mt-6 flex w-full flex-col gap-3 border-t border-gray-100 pt-5">
                                    <Link
                                          href="/login"
                                          onClick={() => setIsOpen(false)}
                                          className="w-full rounded-sm border border-[#38543B]/50 px-5 py-3 text-center text-sm font-bold text-[#38543B]"
                                    >
                                          Sign In
                                    </Link>

                                    <Link
                                          href="/register"
                                          onClick={() => setIsOpen(false)}
                                          className="w-full rounded-sm bg-green-500 px-5 py-3 text-center text-sm font-bold text-white"
                                    >
                                          Join Now
                                    </Link>
                              </div>
                        </div>
                  )}
            </header>
      )
}