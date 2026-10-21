"use client"

import { useState, useRef, useEffect } from "react"
import { Search as SearchIcon, MapPin, Anchor, Tag, X, Sparkles, Loader2, ChevronDown } from "lucide-react"

export default function Search() {
    const [keyword, setKeyword] = useState("")
    const [location, setLocation] = useState("")
    const [boatType, setBoatType] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    // Dropdown states
    const [openDropdown, setOpenDropdown] = useState(null)
    const dropdownRef = useRef(null)

    // Dropdown data
    const locations = ["Goa", "Mumbai", "Chennai", "Kochi", "Hyderabad"]
    const boatTypes = ["Luxury Yacht", "Motorboat", "Sailboat", "Speedboat", "Fishing Boat"]

    const filteredLocations = location
        ? locations.filter((loc) => loc.toLowerCase().includes(location.toLowerCase()))
        : locations

    const filteredBoatTypes = boatType
        ? boatTypes.filter((type) => type.toLowerCase().includes(boatType.toLowerCase()))
        : boatTypes

    const popularTags = [
        { label: "Luxury Yacht", type: "type" },
        { label: "Goa", type: "location" },
        { label: "Sailboat", type: "type" },
        { label: "Mumbai", type: "location" },
        { label: "Under ₹50L", type: "price" },
    ]

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleQuickFill = (tag) => {
        if (tag.type === "location") setLocation(tag.label)
        else if (tag.type === "type") setBoatType(tag.label)
        else if (tag.type === "price") setMaxPrice(tag.label)
        else setKeyword(tag.label)
    }

    const handleReset = () => {
        setKeyword("")
        setLocation("")
        setBoatType("")
        setMaxPrice("")
        setOpenDropdown(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSearching(true)
        console.log("Searching with:", { keyword, location, boatType, maxPrice })

        // Simulate API call
        setTimeout(() => {
            setIsSearching(false)
            alert(`Searching for: ${boatType || 'Any boat'} in ${location || 'Any location'}`)
        }, 1000)
    }

    // Format price as user types (e.g., 50000 -> 50,000)
    const handlePriceChange = (e) => {
        const rawValue = e.target.value.replace(/[^0-9]/g, "")
        if (!rawValue) {
            setMaxPrice("")
            return
        }
        const formatted = new Intl.NumberFormat('en-IN').format(Number(rawValue))
        setMaxPrice(formatted)
    }

    const hasValues = keyword || location || boatType || maxPrice

    return (
        <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">

                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#38543B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#38543B]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Explore The Marketplace
                </div>

                {/* Heading */}
                <h1 className="mt-5 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    Find Your <span className="text-[#38543B]">Perfect Boat</span>
                </h1>

                {/* Subheading */}
                <p className="mx-auto mt-5 max-w-2xl text-base text-gray-500 sm:text-lg leading-relaxed font-medium">
                    Search thousands of verified yachts, motorboats, and sailboats from trusted sellers across top coastal destinations.
                </p>

                {/* Search Bar Container */}
                <form
                    ref={dropdownRef}
                    onSubmit={handleSubmit}
                    className="mt-10 mx-auto w-full max-w-5xl rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row items-center gap-2 relative z-20"
                >

                    {/* 1. Keyword Input */}
                    <div className="flex flex-1 items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-50 focus-within:bg-gray-50 transition-colors w-full border-b md:border-b-0 md:border-r border-gray-100">
                        <SearchIcon className="h-5 w-5 text-gray-400 shrink-0" />
                        <input
                            type="text"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder="Search by name, brand..."
                            className="w-full bg-transparent text-sm font-bold text-gray-800 placeholder:text-gray-400 placeholder:font-medium outline-none truncate"
                        />
                        {keyword && (
                            <button
                                type="button"
                                onClick={() => setKeyword("")}
                                className="text-gray-400 hover:text-gray-600 shrink-0"
                                aria-label="Clear keyword"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>

                    {/* 2. Location Input & Dropdown */}
                    <div className="relative flex-1 w-full border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="flex w-full items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-50 focus-within:bg-gray-50 transition-colors">
                            <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => {
                                    setLocation(e.target.value)
                                    setOpenDropdown("location")
                                }}
                                onFocus={() => setOpenDropdown("location")}
                                placeholder="Location"
                                className="w-full bg-transparent text-sm font-bold text-gray-800 placeholder:text-gray-400 placeholder:font-medium outline-none truncate"
                            />
                            <div className="flex items-center gap-1 shrink-0">
                                {location && (
                                    <button
                                        type="button"
                                        onClick={() => setLocation("")}
                                        className="text-gray-400 hover:text-gray-600 p-0.5"
                                        aria-label="Clear location"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={() => setOpenDropdown(openDropdown === "location" ? null : "location")}
                                    className="text-gray-400 hover:text-gray-600 p-0.5"
                                    aria-label="Toggle location options"
                                >
                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "location" ? 'rotate-180 text-[#38543B]' : ''}`} />
                                </button>
                            </div>
                        </div>

                        {openDropdown === "location" && (
                            <div className="absolute top-[calc(100%+8px)] left-0 w-full min-w-[200px] rounded-xl bg-white shadow-xl border border-gray-100 z-50 py-2 max-h-60 overflow-y-auto">
                                <div className="px-3 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                    Suggested Locations
                                </div>
                                {filteredLocations.length > 0 ? (
                                    filteredLocations.map((loc) => (
                                        <button
                                            key={loc}
                                            type="button"
                                            onClick={() => {
                                                setLocation(loc)
                                                setOpenDropdown(null)
                                            }}
                                            className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-[#38543B]/5 hover:text-[#38543B] transition-colors"
                                        >
                                            <span>{loc}</span>
                                            {location.toLowerCase() === loc.toLowerCase() && (
                                                <span className="text-xs text-[#38543B] font-semibold">Selected</span>
                                            )}
                                        </button>
                                    ))
                                ) : (
                                    <div className="px-4 py-2 text-xs text-gray-500 font-medium">
                                        Custom: &ldquo;{location}&rdquo;
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* 3. Boat Type Input & Dropdown */}
                    <div className="relative flex-1 w-full border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="flex w-full items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-50 focus-within:bg-gray-50 transition-colors">
                            <Anchor className="h-5 w-5 text-gray-400 shrink-0" />
                            <input
                                type="text"
                                value={boatType}
                                onChange={(e) => {
                                    setBoatType(e.target.value)
                                    setOpenDropdown("type")
                                }}
                                onFocus={() => setOpenDropdown("type")}
                                placeholder="Boat Type"
                                className="w-full bg-transparent text-sm font-bold text-gray-800 placeholder:text-gray-400 placeholder:font-medium outline-none truncate"
                            />
                            <div className="flex items-center gap-1 shrink-0">
                                {boatType && (
                                    <button
                                        type="button"
                                        onClick={() => setBoatType("")}
                                        className="text-gray-400 hover:text-gray-600 p-0.5"
                                        aria-label="Clear boat type"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={() => setOpenDropdown(openDropdown === "type" ? null : "type")}
                                    className="text-gray-400 hover:text-gray-600 p-0.5"
                                    aria-label="Toggle boat type options"
                                >
                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openDropdown === "type" ? 'rotate-180 text-[#38543B]' : ''}`} />
                                </button>
                            </div>
                        </div>

                        {openDropdown === "type" && (
                            <div className="absolute top-[calc(100%+8px)] left-0 w-full min-w-[200px] rounded-xl bg-white shadow-xl border border-gray-100 z-50 py-2 max-h-60 overflow-y-auto">
                                <div className="px-3 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                                    Suggested Types
                                </div>
                                {filteredBoatTypes.length > 0 ? (
                                    filteredBoatTypes.map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => {
                                                setBoatType(type)
                                                setOpenDropdown(null)
                                            }}
                                            className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-bold text-gray-700 hover:bg-[#38543B]/5 hover:text-[#38543B] transition-colors"
                                        >
                                            <span>{type}</span>
                                            {boatType.toLowerCase() === type.toLowerCase() && (
                                                <span className="text-xs text-[#38543B] font-semibold">Selected</span>
                                            )}
                                        </button>
                                    ))
                                ) : (
                                    <div className="px-4 py-2 text-xs text-gray-500 font-medium">
                                        Custom: &ldquo;{boatType}&rdquo;
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* 4. Price Range Input (With Auto Formatting) */}
                    <div className="flex flex-1 items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-50 focus-within:bg-gray-50 transition-colors w-full">
                        <Tag className="h-5 w-5 text-gray-400 shrink-0" />
                        <input
                            type="text"
                            value={maxPrice}
                            onChange={handlePriceChange}
                            placeholder="Max budget (₹)"
                            className="w-full bg-transparent text-sm font-bold text-gray-800 placeholder:text-gray-400 placeholder:font-medium outline-none truncate"
                        />
                        {maxPrice && (
                            <button
                                type="button"
                                onClick={() => setMaxPrice("")}
                                className="text-gray-400 hover:text-gray-600 shrink-0"
                                aria-label="Clear price"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>

                    {/* 5. Search Button */}
                    <button
                        type="submit"
                        disabled={isSearching}
                        className="flex w-full md:w-auto items-center justify-center gap-2 h-12 md:h-11 px-6 rounded-xl bg-[#38543B] text-white hover:bg-[#2d4530] transition shadow-md disabled:opacity-70 disabled:cursor-not-allowed mt-2 md:mt-0 shrink-0"
                    >
                        {isSearching ? (
                            <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                            <SearchIcon className="h-5 w-5" />
                        )}
                        <span className="md:hidden lg:inline font-bold text-sm">
                            {isSearching ? "Searching..." : "Search Boats"}
                        </span>
                    </button>
                </form>

                {/* Reset indicator & Popular Search Suggestions */}
                <div className="mt-6 flex flex-col items-center gap-4">
                    {hasValues && (
                        <button
                            type="button"
                            onClick={handleReset}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#38543B] transition-colors"
                        >
                            <X className="h-3.5 w-3.5" />
                            Clear all filters
                        </button>
                    )}

                    <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                        <span className="font-bold text-gray-500 mr-1">Popular Searches:</span>
                        {popularTags.map((tag) => (
                            <button
                                type="button"
                                key={tag.label}
                                onClick={() => handleQuickFill(tag)}
                                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 font-bold text-gray-600 shadow-sm transition-all hover:border-[#38543B] hover:text-[#38543B] hover:shadow-md cursor-pointer"
                            >
                                {tag.label}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}