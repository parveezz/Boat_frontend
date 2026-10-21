export default function SettingsSidebar({ activeTab, onSelectTab }) {
    const navItems = [
        { id: "profile", label: "Profile Details" },
        { id: "password", label: "Change Password" },
        { id: "documents", label: "Documents" },
        { id: "notifications", label: "Notification Settings" },
    ]

    return (
        <aside className="lg:col-span-3">
            <nav className="flex flex-col space-y-1">
                {navItems.map((item) => {
                    const isActive = activeTab === item.id
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onSelectTab(item.id)}
                            className={`w-full text-left px-4 py-2.5 text-xs sm:text-[13px] rounded-lg transition-all ${
                                isActive
                                    ? "bg-[#f0f7f1] font-semibold text-[#38543B]"
                                    : "text-gray-600 hover:text-[#38543B] hover:bg-gray-50 font-normal"
                            }`}
                        >
                            {item.label}
                        </button>
                    )
                })}
            </nav>
        </aside>
    )
}
