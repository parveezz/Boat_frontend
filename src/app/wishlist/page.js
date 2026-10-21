import MainNavbar from "@/components/Main/MainNavbar"

export const metadata = {
    title: "Wishlist | Boat Market",
    description: "View saved boats and watercraft.",
}

export default function WishlistPage() {
    return (
        <div className="min-h-screen bg-[#f8faf7]">
            <MainNavbar />
            <main className="mx-auto max-w-7xl px-6 py-10">
                <h1 className="text-3xl font-bold text-gray-900">Wishlist</h1>
                <p className="mt-2 text-gray-600">Boats and yachts you have saved for later.</p>
            </main>
        </div>
    )
}
