import MainNavbar from "@/components/Main/MainNavbar"

export const metadata = {
    title: "My Orders | Boat Market",
    description: "Track your vessel purchases and orders.",
}

export default function MyOrdersPage() {
    return (
        <div className="min-h-screen bg-[#f8faf7]">
            <MainNavbar />
            <main className="mx-auto max-w-7xl px-6 py-10">
                <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
                <p className="mt-2 text-gray-600">Track and review your active and past orders.</p>
            </main>
        </div>
    )
}
