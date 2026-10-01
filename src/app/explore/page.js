"use client"

import { useState } from "react"
import { FiSearch, FiChevronDown, FiCheck, FiHeart, FiMapPin, FiAnchor, FiShield, FiTag } from "react-icons/fi"

export default function ExplorePage() {
      const [searchQuery, setSearchQuery] = useState("")
      const [selectedCategory, setSelectedCategory] = useState("All Categories")
      const [isCategoryOpen, setIsCategoryOpen] = useState(false)

      const categories = [
            "All Categories",
            "Luxury Yachts",
            "Speedboats & Bowriders",
            "Fishing Boats",
            "Sailboats & Catamarans",
            "Pontoon & Deck Boats",
            "Jet Skis & PWC",
      ]

      const popularTags = [
            "Yachts",
            "Center Console",
            "Bowrider",
            "Sailboats",
            "Fishing Boats",
            "Pontoon",
            "Jet Skis",
      ]






      return (
            <div className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-[#fafbfa]">

                  {/* Subtle Background Watermark Shapes (like screenshot) */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
                        {/* Large organic background circles */}
                        <div className="absolute -right-24 -top-24 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-emerald-100/50 via-gray-100/40 to-transparent blur-3xl" />
                        <div className="absolute -left-32 top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#38543B]/5 via-gray-100/50 to-transparent blur-3xl" />
                        <div className="absolute right-1/4 top-1/2 h-[450px] w-[450px] rounded-full bg-gradient-to-b from-gray-100/80 to-transparent blur-2xl" />

                        {/* Subtle watercraft contour vector shapes */}
                        <svg
                              className="absolute inset-0 h-full w-full opacity-[0.035]"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                        >
                              <defs>
                                    <pattern id="circle-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                                          <circle cx="40" cy="40" r="28" fill="none" stroke="#38543B" strokeWidth="1" />
                                          <circle cx="40" cy="40" r="14" fill="none" stroke="#38543B" strokeWidth="0.5" />
                                    </pattern>
                              </defs>
                              <rect width="100%" height="100%" fill="url(#circle-grid)" />
                        </svg>
                  </div>

                  {/* Main Hero Container */}
                  <div className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-12 text-center sm:pt-20 sm:pb-16 lg:pt-24">

                        {/* Main Title */}
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.15]">
                              Explore Verified Boats Across <br className="hidden sm:inline" />
                              All Watercraft Categories
                        </h1>

                        {/* Subtitle */}
                        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-gray-500 sm:text-sm">
                              Find document-verified boats and yachts from trusted sellers across key marine sectors. Every vessel includes essential details, inspection reports, and pricing for fast, confident decision-making.
                        </p>

                        {/* Search Bar (Screenshot Pill Design with Website Theme Color) */}
                        <div className="mx-auto mt-8 max-w-3xl">
                              <div className="relative flex items-center rounded-full border border-gray-200/90 bg-white p-1.5 shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)]">

                                    {/* Category Dropdown Button */}
                                    <div className="relative">
                                          <button
                                                type="button"
                                                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                                                className="flex items-center gap-2 rounded-full py-2 pl-4 pr-3 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none"
                                          >
                                                <span>{selectedCategory}</span>
                                                <FiChevronDown
                                                      className={`h-3.5 w-3.5 text-gray-400 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""
                                                            }`}
                                                />
                                          </button>

                                          {/* Dropdown Menu */}
                                          {isCategoryOpen && (
                                                <div className="absolute left-0 top-full z-30 mt-2 w-56 rounded-xl border border-gray-100 bg-white p-1.5 text-left shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-100">
                                                      {categories.map((cat) => (
                                                            <button
                                                                  key={cat}
                                                                  type="button"
                                                                  onClick={() => {
                                                                        setSelectedCategory(cat)
                                                                        setIsCategoryOpen(false)
                                                                  }}
                                                                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition ${selectedCategory === cat
                                                                        ? "bg-[#f2f6f2] font-bold text-[#38543B]"
                                                                        : "text-gray-700 hover:bg-gray-50"
                                                                        }`}
                                                            >
                                                                  <span>{cat}</span>
                                                                  {selectedCategory === cat && (
                                                                        <FiCheck className="h-3.5 w-3.5 text-[#38543B]" />
                                                                  )}
                                                            </button>
                                                      ))}
                                                </div>
                                          )}
                                    </div>

                                    {/* Vertical Divider */}
                                    <div className="h-6 w-px bg-gray-200" />

                                    {/* Text Search Input */}
                                    <input
                                          type="text"
                                          value={searchQuery}
                                          onChange={(e) => setSearchQuery(e.target.value)}
                                          placeholder="Search make, model, or boat type..."
                                          className="w-full flex-1 bg-transparent px-4 py-2 text-xs text-gray-900 placeholder-gray-400 outline-none sm:text-sm"
                                    />

                                    {/* Search Circular Button (Theme Color #38543B) */}
                                    <button
                                          type="button"
                                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white shadow-md transition-all duration-200 hover:bg-[#2d4530] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#38543B]/30"
                                          aria-label="Search boats"
                                    >
                                          <FiSearch className="h-4 w-4" />
                                    </button>

                              </div>
                        </div>

                        {/* Popular Tags Row (Matching Screenshot Pill Tags) */}
                        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                              <span className="text-xs font-semibold text-gray-700">
                                    Popular:
                              </span>
                              {popularTags.map((tag) => (
                                    <button
                                          key={tag}
                                          type="button"
                                          onClick={() => {
                                                setSearchQuery(tag)
                                          }}
                                          className={`rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 ${searchQuery.toLowerCase() === tag.toLowerCase()
                                                ? "border-[#38543B] bg-[#38543B] text-white shadow-sm"
                                                : "border-gray-200 bg-white text-gray-600 hover:border-[#38543B]/60 hover:bg-[#f2f6f2] hover:text-[#38543B]"
                                                }`}
                                    >
                                          {tag}
                                    </button>
                              ))}
                              {searchQuery && (
                                    <button
                                          type="button"
                                          onClick={() => {
                                                setSearchQuery("")
                                                setSelectedCategory("All Categories")
                                          }}
                                          className="text-xs font-semibold text-gray-400 hover:text-red-500"
                                    >
                                          Clear filter
                                    </button>
                              )}
                        </div>

                  </div>



            </div>
      )
}
