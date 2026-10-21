"use client"

import { ShieldCheck, MessageSquare, Lock } from "lucide-react"

export default function Hero() {
      return (
            <section id="home" className="relative h-screen w-full overflow-hidden flex flex-col justify-between">

                  {/* Background Video */}
                  <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
                        <source src="/videos/boat-hero.mp4" type="video/mp4" />
                  </video>

                  {/* Brightened Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />

                  {/* Top Navigation */}
                  <nav className="relative z-10 flex w-full items-center justify-between px-6 py-6 sm:px-10 lg:px-16 text-white">
                        <div className="flex items-center gap-2">
                              <span className="text-2xl font-extrabold tracking-widest">BOAT</span>
                              <span className="text-xs font-bold tracking-wider text-gray-300 uppercase leading-tight">Market</span>
                        </div>
                        <div className="hidden md:flex items-center gap-8 text-sm font-bold">
                              <a href="#home" className="hover:text-gray-300">Home</a>
                              <a href="#about" className="hover:text-gray-300">About</a>
                              <a href="#how-it-works" className="hover:text-gray-300">How it Works</a>
                              <a href="#contact" className="hover:text-gray-300">Contact</a>
                        </div>
                        <div className="flex items-center gap-4">
                              <a href="/login" className="text-sm font-bold hover:text-gray-300">Sign In</a>
                              <a href="/register" className="rounded bg-[#6B8E4E] px-4 py-2 text-sm font-bold text-white hover:bg-[#5a7a41] transition-colors">
                                    Join Now
                              </a>
                        </div>
                  </nav>

                  {/* Main Hero Content */}
                  <div className="relative z-10 flex flex-1 w-full flex-col justify-center px-6 py-12 sm:px-10 lg:px-16 overflow-visible">
                        <div className="mx-auto w-full max-w-7xl">
                              <div className="max-w-2xl text-white">
                                    <p className="mb-2 text-sm font-bold tracking-wider text-gray-200 uppercase drop-shadow-md">
                                          Your Boating Journey Starts Here
                                    </p>
                                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg">
                                          Find Your <br />
                                          <span className="text-[#A3D977]">Perfect Boat</span>
                                    </h1>

                                    <p className="mt-4 text-base font-bold text-gray-100 sm:text-lg max-w-lg drop-shadow-md leading-relaxed">
                                          Discover boats made for your next adventure. Browse trusted listings, connect with sellers, and start your journey on the water.
                                    </p>
                              </div>

                              {/* Trust Badges */}
                              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-bold text-gray-200 drop-shadow-md">
                                    <div className="flex items-center gap-2">
                                          <ShieldCheck className="h-5 w-5 text-[#A3D977]" />
                                          <span>Verified Listings</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <MessageSquare className="h-5 w-5 text-[#A3D977]" />
                                          <span>Direct Communication</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <Lock className="h-5 w-5 text-[#A3D977]" />
                                          <span>Safe & Secure</span>
                                    </div>
                              </div>

                        </div>
                  </div>
            </section>
      )
}