import { redirect } from "next/navigation"

// Profile is now integrated directly inside Settings (/settings).
// Automatically redirect any navigation from /profile to /settings.
export default function ProfileRedirectPage() {
    redirect("/settings")
}
