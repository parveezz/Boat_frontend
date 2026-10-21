"use client"

import { useState, useEffect } from "react"
import { X, Bell, MessageSquare, Tag, ShieldCheck, CheckCheck, RotateCw } from "lucide-react"

export default function NotificationSidebar({ isOpen, onClose }) {
    const [isLoading, setIsLoading] = useState(false)
    const [filter, setFilter] = useState("all") // "all" | "unread"

    const initialNotifications = [
        {
            id: 1,
            type: "inquiry",
            icon: MessageSquare,
            title: "New Buyer Inquiry",
            description: "Michael sent an inquiry regarding your Sunseeker 74 Yacht.",
            time: "5m ago",
            unread: true,
        },
        {
            id: 2,
            type: "price",
            icon: Tag,
            title: "Price Alert Dropped",
            description: "Sea Ray Sundancer 320 dropped by $15,000 from list price.",
            time: "2h ago",
            unread: true,
        },
        {
            id: 3,
            type: "verified",
            icon: ShieldCheck,
            title: "Listing Approved",
            description: "Your listing for Boston Whaler 330 Outrage is now live.",
            time: "1d ago",
            unread: false,
        },
        {
            id: 4,
            type: "inquiry",
            icon: MessageSquare,
            title: "Inspection Scheduled",
            description: "Marine surveyor confirmed inspection for Azimut 60 on Friday.",
            time: "2d ago",
            unread: false,
        },
    ]

    const [notifications, setNotifications] = useState(initialNotifications)

    // Trigger skeleton shimmer animation on opening the drawer
    useEffect(() => {
        if (isOpen) {
            setIsLoading(true)
            const timer = setTimeout(() => {
                setIsLoading(false)
            }, 350)
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    // Close on Escape key
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape" && isOpen) {
                onClose()
            }
        }
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, onClose])

    // Prevent background scrolling when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    const handleRefresh = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 400)
    }

    const handleMarkAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
    }

    const handleItemClick = (id) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
        )
    }

    const unreadCount = notifications.filter((n) => n.unread).length
    const displayedNotifications =
        filter === "unread" ? notifications.filter((n) => n.unread) : notifications

    return (
        <>
            {/* Backdrop Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden="true"
            />

            {/* Notification Drawer (Reduced compact padding & sleek modern layout) */}
            <aside
                className={`fixed top-0 right-0 z-50 h-screen w-full sm:w-[400px] md:w-[32%] min-w-[320px] bg-white border-l border-gray-200 text-gray-900 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                aria-label="Notifications Panel"
            >
                {/* Header with tighter padding */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-gray-100 bg-white">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-gray-800">
                            <Bell size={18} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-base font-bold text-gray-900 tracking-tight">
                                    Notifications
                                </h2>
                                {unreadCount > 0 && (
                                    <span className="rounded-full bg-slate-900 px-2 py-0.5 text-[10px] font-bold text-white leading-none">
                                        {unreadCount} new
                                    </span>
                                )}
                            </div>
                            <p className="text-[11px] text-gray-400 mt-0.5">Stay updated with your activities</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            onClick={handleRefresh}
                            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 active:scale-95"
                            title="Refresh notifications"
                            aria-label="Refresh notifications"
                        >
                            <RotateCw size={16} className={isLoading ? "animate-spin text-gray-600" : ""} />
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 active:scale-95"
                            aria-label="Close notifications"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Subheader / Quick Actions & Filter Tabs */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-b border-gray-100 bg-gray-50/70 text-xs">
                    <div className="flex items-center gap-1.5">
                        <button
                            type="button"
                            onClick={() => setFilter("all")}
                            className={`rounded-md px-2.5 py-1 font-semibold transition ${
                                filter === "all"
                                    ? "bg-white text-gray-900 shadow-xs border border-gray-200/80"
                                    : "text-gray-500 hover:text-gray-800"
                            }`}
                        >
                            All ({notifications.length})
                        </button>
                        <button
                            type="button"
                            onClick={() => setFilter("unread")}
                            className={`rounded-md px-2.5 py-1 font-semibold transition ${
                                filter === "unread"
                                    ? "bg-white text-gray-900 shadow-xs border border-gray-200/80"
                                    : "text-gray-500 hover:text-gray-800"
                            }`}
                        >
                            Unread ({unreadCount})
                        </button>
                    </div>

                    {unreadCount > 0 && (
                        <button
                            type="button"
                            onClick={handleMarkAllAsRead}
                            className="flex items-center gap-1 font-medium text-slate-700 hover:text-slate-950 transition-colors text-[11px]"
                        >
                            <CheckCheck size={13} />
                            Mark all read
                        </button>
                    )}
                </div>

                {/* Content Area: Skeleton Loader State OR Notifications List */}
                {isLoading ? (
                    <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 animate-pulse">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/80 border border-gray-100"
                            >
                                {/* Icon Skeleton */}
                                <div className="h-9 w-9 rounded-full bg-gray-200 shrink-0 mt-0.5" />

                                {/* Text Skeleton */}
                                <div className="flex-1 min-w-0 space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="h-3.5 w-32 rounded bg-gray-200" />
                                        <div className="h-2.5 w-10 rounded bg-gray-200" />
                                    </div>
                                    <div className="h-2.5 w-full rounded bg-gray-100" />
                                    <div className="h-2.5 w-4/5 rounded bg-gray-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : displayedNotifications.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400 mb-3">
                            <Bell size={22} />
                        </div>
                        <h4 className="text-sm font-bold text-gray-800">No notifications found</h4>
                        <p className="text-xs text-gray-400 mt-1 max-w-[200px]">
                            {filter === "unread" ? "You're all caught up with your unread alerts." : "No new activities to show right now."}
                        </p>
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto divide-y divide-gray-100/80 px-2.5 py-1.5">
                        {displayedNotifications.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => handleItemClick(item.id)}
                                className={`group relative flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                                    item.unread
                                        ? "bg-slate-50/80 hover:bg-slate-100/70"
                                        : "hover:bg-gray-50"
                                }`}
                            >
                                {/* Icon Badge */}
                                <div
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                                        item.unread
                                            ? "bg-slate-900 text-white shadow-xs"
                                            : "bg-gray-100 text-gray-500"
                                    }`}
                                >
                                    <item.icon size={16} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0 pr-2">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3
                                            className={`text-xs sm:text-[13px] truncate ${
                                                item.unread ? "text-gray-900 font-bold" : "text-gray-700 font-medium"
                                            }`}
                                        >
                                            {item.title}
                                        </h3>
                                        <span className="shrink-0 text-[10px] text-gray-400">
                                            {item.time}
                                        </span>
                                    </div>
                                    <p className="mt-0.5 text-xs text-gray-500 leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Unread indicator dot */}
                                {item.unread && (
                                    <span className="absolute top-3.5 right-2.5 h-2 w-2 rounded-full bg-blue-600" />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </aside>
        </>
    )
}
