import MainNavbar from "@/components/Main/MainNavbar"

export const metadata = {
    title: "Seller Dashboard | Boat Market",
    description: "Manage your boat listings, inquiries, and sales.",
}

export default function SellerPage() {
    return (
        <div className="min-h-screen bg-[#f8faf7]">
            <MainNavbar />
            <main className="mx-auto max-w-7xl px-6 py-10">
                <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
                <p className="mt-2 text-gray-600">Manage your boat listings, inquiries, and sales.</p>
            </main>
        </div>
    )
}