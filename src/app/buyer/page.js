import MainNavbar from "@/components/Main/MainNavbar"

export const metadata = {
    title: "Buyer Dashboard | Boat Market",
    description: "Explore saved boats, pending offers, and purchase history.",
}

export default function BuyerPage() {
    return (
        <div className="min-h-screen bg-[#f8faf7]">
            <MainNavbar />
            <main className="mx-auto max-w-7xl px-6 py-10">
                <h1 className="text-3xl font-bold text-gray-900">Buyer Dashboard</h1>
                <p className="mt-2 text-gray-600">Explore saved boats, pending offers, and purchase history.</p>
            </main>
        </div>
    )
}