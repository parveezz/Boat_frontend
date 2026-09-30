"use client"

import { useState } from "react"
import { FiSearch, FiChevronDown, FiCheck, FiHeart, FiMapPin, FiAnchor, FiShield, FiTag } from "react-icons/fi"

export default function ExplorePage() {
      const [searchQuery, setSearchQuery] = useState("")
      const [selectedCategory, setSelectedCategory] = useState("All Categories")
      const [isCategoryOpen, setIsCategoryOpen] = useState(false)
      const [likedBoats, setLikedBoats] = useState({})

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

      // Curated sample verified boats
      const sampleBoats = [
            {
                  id: "1",
                  title: "2024 Sunseeker Predator 55",
                  category: "Luxury Yachts",
                  type: "Yachts",
                  price: "$1,280,000",
                  location: "Miami, Florida",
                  length: "55 ft",
                  year: "2024",
                  verified: true,
                  tag: "Featured",
                  image: "/images/aboutimage.webp",
            },
            {
                  id: "2",
                  title: "Boston Whaler 280 Outrage",
                  category: "Fishing Boats",
                  type: "Fishing Boats",
                  price: "$245,000",
                  location: "Fort Lauderdale, FL",
                  length: "28 ft",
                  year: "2023",
                  verified: true,
                  tag: "Verified Seller",
                  image: "/images/aboutimage.webp",
            },
            {
                  id: "3",
                  title: "Yamaha 252XD Premium Bowrider",
                  category: "Speedboats & Bowriders",
                  type: "Bowrider",
                  price: "$98,500",
                  location: "San Diego, California",
                  length: "25 ft",
                  year: "2024",
                  verified: true,
                  tag: "New Listing",
                  image: "/images/aboutimage.webp",
            },
            {
                  id: "4",
                  title: "Lagoon 42 Cruising Catamaran",
                  category: "Sailboats & Catamarans",
                  type: "Sailboats",
                  price: "$620,000",
                  location: "Annapolis, Maryland",
                  length: "42 ft",
                  year: "2022",
                  verified: true,
                  tag: "Document Verified",
                  image: "/images/aboutimage.webp",
            },
            {
                  id: "5",
                  title: "SeaVee 340Z Center Console",
                  category: "Fishing Boats",
                  type: "Center Console",
                  price: "$380,000",
                  location: "Tampa Bay, Florida",
                  length: "34 ft",
                  year: "2023",
                  verified: true,
                  tag: "Verified Seller",
                  image: "/images/aboutimage.webp",
            },
            {
                  id: "6",
                  title: "Barletta Corsa 23UC Pontoon",
                  category: "Pontoon & Deck Boats",
                  type: "Pontoon",
                  price: "$84,000",
                  location: "Lake Ozark, Missouri",
                  length: "23 ft",
                  year: "2024",
                  verified: true,
                  tag: "Single Owner",
                  image: "/images/aboutimage.webp",
            },
      ]

      const toggleLike = (id) => {
            setLikedBoats((prev) => ({
                  ...prev,
                  [id]: !prev[id],
            }))
      }

      // Filtered boats based on selected category and search input
      const filteredBoats = sampleBoats.filter((boat) => {
            const matchesCategory =
                  selectedCategory === "All Categories" ||
                  boat.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
                  selectedCategory.toLowerCase().includes(boat.type.toLowerCase())
            const matchesSearch =
                  searchQuery.trim() === "" ||
                  boat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  boat.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  boat.type.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesCategory && matchesSearch
      })

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
                                                      className={`h-3.5 w-3.5 text-gray-400 transition-transform duration-200 ${
                                                            isCategoryOpen ? "rotate-180" : ""
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
                                                                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition ${
                                                                        selectedCategory === cat
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
                                          className={`rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 ${
                                                searchQuery.toLowerCase() === tag.toLowerCase()
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

                  {/* Verified Listings Section Below Search */}
                  <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-10">
                        
                        <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
                              <div>
                                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                                          {selectedCategory === "All Categories" ? "Verified Watercraft Listings" : selectedCategory}
                                    </h2>
                                    <p className="text-xs text-gray-500">
                                          Showing {filteredBoats.length} verified vessels ready for inspection
                                    </p>
                              </div>

                              <div className="flex items-center gap-2 text-xs font-semibold text-[#38543B]">
                                    <FiShield className="h-4 w-4" />
                                    <span>All sellers identity-verified</span>
                              </div>
                        </div>

                        {/* Boats Grid */}
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                              {filteredBoats.map((boat) => (
                                    <div
                                          key={boat.id}
                                          className="group overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38543B]/30 hover:shadow-xl"
                                    >
                                          {/* Image Container */}
                                          <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                                <img
                                                      src={boat.image}
                                                      alt={boat.title}
                                                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                                {/* Top Badges */}
                                                <div className="absolute left-3 top-3 flex items-center gap-2">
                                                      <span className="rounded-full bg-[#38543B] px-2.5 py-1 text-[11px] font-bold tracking-wide text-white shadow-sm">
                                                            {boat.tag}
                                                      </span>
                                                </div>

                                                {/* Like Button */}
                                                <button
                                                      type="button"
                                                      onClick={() => toggleLike(boat.id)}
                                                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-700 backdrop-blur-sm transition hover:bg-white hover:text-red-500"
                                                      aria-label="Save boat"
                                                >
                                                      <FiHeart
                                                            className={`h-4 w-4 ${
                                                                  likedBoats[boat.id] ? "fill-red-500 text-red-500" : ""
                                                            }`}
                                                      />
                                                </button>

                                                {/* Bottom Overlay Price */}
                                                <div className="absolute bottom-3 left-3 text-white">
                                                      <p className="text-xl font-extrabold tracking-tight drop-shadow">
                                                            {boat.price}
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Card Content */}
                                          <div className="p-5">
                                                <h3 className="text-base font-bold text-gray-900 transition group-hover:text-[#38543B]">
                                                      {boat.title}
                                                </h3>

                                                {/* Location */}
                                                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-500">
                                                      <FiMapPin className="h-3.5 w-3.5 text-gray-400" />
                                                      <span>{boat.location}</span>
                                                </div>

                                                {/* Specs Pills */}
                                                <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-3 text-xs text-gray-600">
                                                      <span className="rounded-md bg-gray-50 px-2 py-1 font-semibold text-gray-700">
                                                            {boat.length}
                                                      </span>
                                                      <span className="rounded-md bg-gray-50 px-2 py-1 font-semibold text-gray-700">
                                                            Year {boat.year}
                                                      </span>
                                                      <span className="rounded-md bg-gray-50 px-2 py-1 font-semibold text-gray-700">
                                                            {boat.type}
                                                      </span>
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="mt-4 flex items-center gap-2 pt-1">
                                                      <button
                                                            type="button"
                                                            className="w-full rounded-lg bg-[#38543B] py-2.5 text-center text-xs font-bold text-white transition hover:bg-[#2d4530]"
                                                      >
                                                            View Details
                                                      </button>
                                                      <button
                                                            type="button"
                                                            className="rounded-lg border border-gray-200 px-3 py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50"
                                                      >
                                                            Contact
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>

                        {filteredBoats.length === 0 && (
                              <div className="rounded-2xl border border-gray-200 bg-white py-16 text-center">
                                    <FiAnchor className="mx-auto h-10 w-10 text-gray-300" />
                                    <h3 className="mt-3 text-base font-bold text-gray-800">
                                          No boats match your search
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-500">
                                          Try clearing the search query or selecting "All Categories".
                                    </p>
                                    <button
                                          type="button"
                                          onClick={() => {
                                                setSearchQuery("")
                                                setSelectedCategory("All Categories")
                                          }}
                                          className="mt-4 rounded-lg bg-[#38543B] px-4 py-2 text-xs font-bold text-white"
                                    >
                                          Reset Filters
                                    </button>
                              </div>
                        )}

                  </div>

            </div>
      )
}
