"use client"

import { useState, useEffect, useRef } from "react"
import { Search, ShieldCheck, MessageSquare, Lock, ChevronDown, Check } from "lucide-react"

export default function Hero() {
      const [openDropdown, setOpenDropdown] = useState(null)

      // State for values
      const [location, setLocation] = useState("Location")
      const [boatType, setBoatType] = useState("Boat Type")
      const [priceRange, setPriceRange] = useState("Price Range")

      const dropdownRef = useRef(null)

      // Close dropdown when clicking outside
      useEffect(() => {
            function handleClickOutside(event) {
                  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setOpenDropdown(null)
                  }
            }
            document.addEventListener("mousedown", handleClickOutside)
            return () => document.removeEventListener("mousedown", handleClickOutside)
      }, [])

      const toggleDropdown = (name) => {
            setOpenDropdown((prev) => (prev === name ? null : name))
      }

      const handleSelect = (setter, value) => {
            setter(value)
            setOpenDropdown(null)
      }

      // Helper to render a modern dropdown menu
      const renderDropdownMenu = (items, currentValue, setter) => {
            return (
                  <div className="absolute top-full mt-2 left-0 w-full min-w-[220px] rounded-xl bg-white shadow-2xl border border-gray-200 z-50 py-2 max-h-60 overflow-y-auto
                      [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                        {items.map((item) => {
                              const isSelected = currentValue === item;
                              return (
                                    <button
                                          type="button"
                                          key={item}
                                          onClick={(e) => {
                                                e.stopPropagation()
                                                handleSelect(setter, item)
                                          }}
                                          className={`group flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors
                ${isSelected ? "bg-[#6B8E4E]/10 text-[#6B8E4E] font-bold" : "text-gray-700 font-medium hover:bg-gray-50"}`}
                                    >
                                          <span>{item}</span>
                                          {/* Show checkmark if selected */}
                                          {isSelected && <Check className="h-4 w-4 text-[#6B8E4E]" />}
                                    </button>
                              )
                        })}
                  </div>
            )
      }

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
                              <a href="#" className="hover:text-gray-300">Home</a>
                              <a href="#" className="hover:text-gray-300">Boats</a>
                              <a href="#" className="hover:text-gray-300">About</a>
                              <a href="#" className="hover:text-gray-300">How it Works</a>
                              <a href="#" className="hover:text-gray-300">Contact</a>
                        </div>
                        <div className="flex items-center gap-4">
                              <button className="text-sm font-bold hover:text-gray-300">Sign In</button>
                              <button className="rounded bg-[#6B8E4E] px-4 py-2 text-sm font-bold text-white hover:bg-[#5a7a41] transition-colors">
                                    Join Now
                              </button>
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

                              {/* Search / Filter Bar */}
                              <div ref={dropdownRef} className="mt-8 flex flex-col md:flex-row items-center gap-2 rounded-lg bg-white p-2 shadow-lg max-w-4xl relative z-20">

                                    {/* Location */}
                                    <div className={`relative flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 ${openDropdown === "location" ? "z-30" : "z-10"}`}>
                                          <button
                                                type="button"
                                                onClick={(e) => {
                                                      e.stopPropagation()
                                                      toggleDropdown("location")
                                                }}
                                                className="flex w-full items-center justify-between px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                          >
                                                {location}
                                                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${openDropdown === "location" ? "rotate-180" : ""}`} />
                                          </button>
                                          {openDropdown === "location" && renderDropdownMenu(["Mumbai", "Goa", "Chennai", "Kochi"], location, setLocation)}
                                    </div>

                                    {/* Boat Type */}
                                    <div className={`relative flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 ${openDropdown === "type" ? "z-30" : "z-10"}`}>
                                          <button
                                                type="button"
                                                onClick={(e) => {
                                                      e.stopPropagation()
                                                      toggleDropdown("type")
                                                }}
                                                className="flex w-full items-center justify-between px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                          >
                                                {boatType}
                                                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${openDropdown === "type" ? "rotate-180" : ""}`} />
                                          </button>
                                          {openDropdown === "type" && renderDropdownMenu(["Yacht", "Sailboat", "Motorboat", "Fishing Boat"], boatType, setBoatType)}
                                    </div>

                                    {/* Price Range */}
                                    <div className={`relative flex-1 w-full border-b md:border-b-0 ${openDropdown === "price" ? "z-30" : "z-10"}`}>
                                          <button
                                                type="button"
                                                onClick={(e) => {
                                                      e.stopPropagation()
                                                      toggleDropdown("price")
                                                }}
                                                className="flex w-full items-center justify-between px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                                          >
                                                {priceRange}
                                                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${openDropdown === "price" ? "rotate-180" : ""}`} />
                                          </button>
                                          {openDropdown === "price" && renderDropdownMenu(["Under ₹50L", "₹50L - ₹1Cr", "₹1Cr - ₹5Cr", "Above ₹5Cr"], priceRange, setPriceRange)}
                                    </div>

                                    {/* Search Button */}
                                    <button
                                          type="button"
                                          className="flex w-full md:w-auto items-center justify-center gap-2 rounded-lg bg-[#6B8E4E] px-6 py-3 text-sm font-bold text-white hover:bg-[#5a7a41] transition-colors whitespace-nowrap mt-2 md:mt-0"
                                    >
                                          <Search className="h-4 w-4" />
                                          Search Boats
                                    </button>
                              </div>

                              {/* Trust Badges */}
                              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-bold text-gray-200 drop-shadow-md">
                                    <div className="flex items-center gap-2">
                                          <ShieldCheck className="h-5 w-5" />
                                          <span>Verified Listings</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <MessageSquare className="h-5 w-5" />
                                          <span>Direct Communication</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                          <Lock className="h-5 w-5" />
                                          <span>Safe & Secure</span>
                                    </div>
                              </div>

                        </div>
                  </div>
            </section>
      )
}