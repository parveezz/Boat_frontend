import MainNavbar from "@/components/Main/MainNavbar"
import DocumentsPage from "@/components/settings/documentsPage"

export const metadata = {
    title: "Account's Settings | Documents | Boat Market",
    description: "Manage account settings, credentials, and verification documents.",
}

export default function Settings() {
    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
            <MainNavbar />
            <DocumentsPage />
        </div>
    )
}
