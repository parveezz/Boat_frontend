import Link from "next/link"

export default function Breadcrumbs({ activeTab }) {
    const tabLabels = {
        profile: "Profile Details",
        password: "Change Password",
        documents: "Documents",
        notifications: "Notification Settings",
    }

    return (
        <nav className="mb-6 flex items-center text-[13px] text-gray-500">
            <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
            </Link>
            <span className="mx-2 text-gray-400 text-xs font-semibold select-none">&gt;&gt;</span>
            <Link href="/settings" className="hover:text-gray-900 transition-colors">
                Account&apos;s Settings
            </Link>
            <span className="mx-2 text-gray-400 text-xs font-semibold select-none">&gt;&gt;</span>
            <span className="text-gray-600 font-normal">
                {tabLabels[activeTab] || "Documents"}
            </span>
        </nav>
    )
}
