"use client"

import { useEffect } from "react"
import { X, Bell, MessageSquare, Tag, ShieldCheck, CheckCheck } from "lucide-react"

export default function NotificationSidebar({ isOpen, onClose }) {
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

    const notifications = [
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

    return (
        <>
            {/* Backdrop Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden="true"
            />

            {/* Notification Drawer (h-screen, w-[35%] on desktop, clean mono white theme) */}
            <aside
                className={`fixed top-0 right-0 z-50 h-screen w-full sm:w-[420px] md:w-[35%] min-w-[320px] bg-white border-l border-gray-200 text-gray-900 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                aria-label="Notifications Panel"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800">
                            <Bell size={20} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-lg font-bold text-gray-900 tracking-tight">
                                    Notifications
                                </h2>
                                <span className="rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                                    2 new
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">Stay updated with your activities</p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 active:scale-95"
                        aria-label="Close notifications"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Subheader / Quick Actions */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-gray-50/80 text-xs">
                    <span className="text-gray-500 font-medium">Recent Notifications</span>
                    <button
                        type="button"
                        className="flex items-center gap-1.5 font-semibold text-[#2d4530] hover:text-[#426446] transition-colors"
                    >
                        <CheckCheck size={14} />
                        Mark all as read
                    </button>
                </div>

                {/* Notification Items List */}
                <div className="flex-1 overflow-y-auto divide-y divide-gray-100 px-3 py-2">
                    {notifications.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative flex gap-4 p-4 rounded-xl transition-all cursor-pointer ${
                                item.unread
                                    ? "bg-emerald-50/30 hover:bg-emerald-50/60"
                                    : "hover:bg-gray-50"
                            }`}
                        >
                            {/* Icon Badge */}
                            <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                                    item.unread
                                        ? "bg-emerald-100/70 text-[#2d4530]"
                                        : "bg-gray-100 text-gray-500"
                                }`}
                            >
                                <item.icon size={18} />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <h3
                                        className={`text-sm font-semibold truncate ${
                                            item.unread ? "text-gray-900 font-bold" : "text-gray-700"
                                        }`}
                                    >
                                        {item.title}
                                    </h3>
                                    <span className="shrink-0 text-[11px] text-gray-400">
                                        {item.time}
                                    </span>
                                </div>
                                <p className="mt-1 text-xs text-gray-600 leading-relaxed line-clamp-2">
                                    {item.description}
                                </p>
                            </div>

                            {/* Unread indicator dot */}
                            {item.unread && (
                                <span className="absolute top-4 right-3 h-2 w-2 rounded-full bg-[#2d4530]" />
                            )}
                        </div>
                    ))}
                </div>

            </aside>
        </>
    )
}
