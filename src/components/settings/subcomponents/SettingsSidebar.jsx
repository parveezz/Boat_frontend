"use client"

import Image from "next/image"

export default function SettingsSidebar({ activeTab, onSelectTab }) {
    const navItems = [
        { id: "profile", label: "Profile Details", iconSrc: "/icons/user.svg" },
        { id: "password", label: "Change Password", iconSrc: "/icons/lock.svg" },
        { id: "documents", label: "Documents", iconSrc: "/icons/documents.svg" },
        { id: "notifications", label: "Notification Settings", iconSrc: "/icons/bell.svg" },
    ]

    return (
        <div className="flex justify-start">
            {/* Tab navigation aligned to the left with border-b ending at the last tab */}
            <nav className="inline-flex items-center gap-1 sm:gap-6 border-b border-gray-200 overflow-x-auto no-scrollbar">
                {navItems.map((item) => {
                    const isActive = activeTab === item.id
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelectTab(item.id)}
                            className={`group relative flex items-center gap-2 whitespace-nowrap py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold transition-all duration-150 border-b-2 -mb-px ${
                                isActive
                                    ? "border-gray-900 text-gray-900 font-bold"
                                    : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300 font-medium"
                            }`}
                        >
                            <Image
                                src={item.iconSrc}
                                alt=""
                                width={16}
                                height={16}
                                className={`h-4 w-4 shrink-0 transition-opacity ${
                                    isActive ? "opacity-100" : "opacity-60 group-hover:opacity-90"
                                }`}
                            />
                            <span>{item.label}</span>
                        </button>
                    )
                })}
            </nav>
        </div>
    )
}
