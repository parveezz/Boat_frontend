import AuthNavbar from "@/components/shared/AuthNavbar"

export const metadata = {
  title: "Explore Marketplace | Boat Market",
  description: "Browse premium boats, yachts, and watercraft.",
}

export default function ExploreLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f8faf7]">
      <AuthNavbar />
      <main>{children}</main>
    </div>
  )
}
