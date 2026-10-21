import MainNavbar from "@/components/Main/MainNavbar"
import Search from "@/components/Main/Search"

export const metadata = {
    title: "Marketplace | Boat Market",
    description: "Search and filter verified boats, yachts, and watercraft.",
}

export default function MainPage() {
    return (
        <div className="min-h-screen bg-[#f8faf7]">
            <MainNavbar />
            <main>
                <Search />
            </main>
        </div>
    )
}