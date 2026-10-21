"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { LogOut, Settings, Heart, ShoppingBag, ChevronDown, ChevronUp } from "lucide-react"

export default function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Close dropdown on Escape key
    useEffect(() => {
        function handleEscape(event) {
            if (event.key === "Escape") {
                setIsOpen(false)
            }
        }
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [])

    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face",
    }

    const menuItems = [
        { label: "My Orders", href: "/myOrders", icon: ShoppingBag },
        { label: "Wishlist", href: "/wishlist", icon: Heart },
        { label: "Settings", href: "/settings", icon: Settings },
    ]

    return (
        <div className="relative hidden md:block" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pl-1.5 pr-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/30"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span className="relative h-7 w-7 overflow-hidden rounded-full ring-1 ring-white/30">
                    <Image
                        src={user.avatar}
                        alt={user.name}
                        fill
                        sizes="28px"
                        className="object-cover"
                    />
                </span>
                <span className="max-w-[100px] truncate">{user.name}</span>
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-white/10 bg-[#2d4530] shadow-xl backdrop-blur-md transition-all duration-200 ease-out z-50 ${
                    isOpen
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                }`}
                role="menu"
                aria-orientation="vertical"
            >
                {/* Menu Items */}
                <div className="py-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
                            role="menuitem"
                        >
                            <item.icon size={16} className="text-[#A3D977]" />
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Logout */}
                <div className="border-t border-white/10 py-1.5">
                    <button
                        type="button"
                        onClick={() => {
                            setIsOpen(false)
                        }}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
                        role="menuitem"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>

                {/* Bottom Close Icon */}
                <div className="flex justify-center border-t border-white/10 py-2">
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="flex h-6 w-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Close menu"
                    >
                        <ChevronUp size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}