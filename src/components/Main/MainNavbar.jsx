"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import {
    Menu,
    X,
    LogOut,
    Settings,
    Heart,
    ShoppingBag,
    ChevronDown,
    ChevronUp,
    Store,
    Compass,
    Bell,
} from "lucide-react"
import NotificationSidebar from "../shared/NotificationSidebar"

export default function MainNavbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isNotificationOpen, setIsNotificationOpen] = useState(false)
    const profileRef = useRef(null)

    // Close profile dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Close profile dropdown on Escape key
    useEffect(() => {
        function handleEscape(event) {
            if (event.key === "Escape") {
                setIsProfileOpen(false)
            }
        }
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [])

    // ---- Replace these with real session data ----
    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face",
    }

    const profileMenuItems = [
        { label: "My Orders", href: "/myOrders", icon: ShoppingBag },
        { label: "Wishlist", href: "/wishlist", icon: Heart },
        { label: "Settings", href: "/settings", icon: Settings },
    ]

    const navItems = [
        { label: "Buyer", href: "/buyer", icon: Compass },
        { label: "Seller", href: "/seller", icon: Store },
    ]

    return (
        <header
            className="sticky top-0 z-50 w-full bg-[#2d4530] border-b border-white/10 shadow-lg"
            suppressHydrationWarning
        >
            <div className="mx-auto flex h-15 w-full max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 group"
                    suppressHydrationWarning
                >
                    <span className="text-2xl font-serif font-black tracking-widest text-white transition-colors group-hover:text-[#A3D977]">
                        BOAT
                    </span>
                    <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#A3D977]">
                        Market
                    </span>
                </Link>

                {/* Center Links with icons */}
                <nav className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-2 text-sm font-bold transition-all relative group py-1 ${isActive
                                    ? "text-white"
                                    : "text-gray-300 hover:text-white"
                                    }`}
                                suppressHydrationWarning
                            >
                                <item.icon
                                    size={16}
                                    className={`transition-colors ${isActive ? "text-[#A3D977]" : "text-gray-400 group-hover:text-[#A3D977]"
                                        }`}
                                />
                                {item.label}
                                <span
                                    className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#A3D977] transition-all duration-300 ${isActive ? "w-full shadow-[0_0_8px_#A3D977]" : "w-0 group-hover:w-full"
                                        }`}
                                />
                            </Link>
                        )
                    })}
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    {/* Profile Dropdown (desktop) */}
                    <div className="relative hidden md:block" ref={profileRef}>
                        <button
                            type="button"
                            onClick={() => {
                                setIsProfileOpen(!isProfileOpen)
                            }}
                            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pl-1.5 pr-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/30"
                            aria-expanded={isProfileOpen}
                            aria-haspopup="true"
                        >
                            {/* Avatar */}
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
                                className={`transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        <div
                            className={`absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-white/10 bg-[#2d4530] shadow-xl backdrop-blur-md transition-all duration-200 ease-out z-50 ${isProfileOpen
                                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                                }`}
                            role="menu"
                            aria-orientation="vertical"
                        >
                            {/* Menu Items */}
                            <div className="py-2">
                                {profileMenuItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsProfileOpen(false)}
                                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
                                        role="menuitem"
                                        suppressHydrationWarning
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
                                        setIsProfileOpen(false)
                                    }}
                                    className="flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
                                    role="menuitem"
                                >
                                    <LogOut size={16} />
                                    Logout
                                </button>
                            </div>

                            {/* Bottom dropdown icon */}
                            <div className="flex justify-center border-t border-white/10 py-2">
                                <button
                                    type="button"
                                    onClick={() => setIsProfileOpen(false)}
                                    className="flex h-6 w-10 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                                    aria-label="Close menu"
                                >
                                    <ChevronUp size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Notification Icon (Right of Profile) */}
                    <button
                        type="button"
                        onClick={() => {
                            setIsNotificationOpen(true)
                            setIsProfileOpen(false)
                        }}
                        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/30 active:scale-95"
                        aria-label="Open notifications"
                    >
                        <Bell size={18} />
                        {/* Animated Unread Notification Dot */}
                        <span className="absolute top-2 right-2 flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A3D977] opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A3D977]"></span>
                        </span>
                    </button>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white transition-transform active:scale-95"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-72 border-t border-white/10" : "max-h-0"
                    } bg-[#2d4530]`}
            >
                <div className="px-6 py-4 space-y-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-2 text-sm font-bold transition-all px-3 py-2 rounded-lg ${isActive
                                    ? "text-white bg-white/15 border-l-2 border-[#A3D977]"
                                    : "text-gray-200 hover:text-[#A3D977] hover:bg-white/5"
                                    }`}
                                onClick={() => setIsOpen(false)}
                                suppressHydrationWarning
                            >
                                <item.icon
                                    size={16}
                                    className={isActive ? "text-[#A3D977]" : "text-gray-400"}
                                />
                                {item.label}
                            </Link>
                        )
                    })}
                    <div className="h-px w-full bg-white/10 my-2" />
                    <Link
                        href="/settings"
                        className="flex items-center gap-2 text-sm font-bold text-[#A3D977] hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                        suppressHydrationWarning
                    >
                        <Settings size={16} />
                        Settings
                    </Link>
                </div>
            </div>

            {/* Notification Drawer (h-screen, w-[35%] at right side) */}
            <NotificationSidebar
                isOpen={isNotificationOpen}
                onClose={() => setIsNotificationOpen(false)}
            />
        </header>
    )
}