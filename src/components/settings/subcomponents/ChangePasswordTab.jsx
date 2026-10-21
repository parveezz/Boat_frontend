import { useState } from "react"
import { toast } from "sonner"

export default function ChangePasswordTab() {
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error("New password and confirmation do not match")
            return
        }
        toast.success("Password changed successfully!")
        setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
    }

    const handleDiscard = () => {
        setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
        toast.info("Changes discarded")
    }

    return (
        <div className="w-full flex justify-center">
            <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-xl">
                <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                        Current Password <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                        type="password"
                        required
                        value={passwordData.currentPassword}
                        onChange={(e) =>
                            setPasswordData({ ...passwordData, currentPassword: e.target.value })
                        }
                        placeholder="Enter current password"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
                    />
                </div>

                <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                        New Password <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                        type="password"
                        required
                        value={passwordData.newPassword}
                        onChange={(e) =>
                            setPasswordData({ ...passwordData, newPassword: e.target.value })
                        }
                        placeholder="Minimum 8 characters"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
                    />
                </div>

                <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                        Confirm New Password <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                        type="password"
                        required
                        value={passwordData.confirmPassword}
                        onChange={(e) =>
                            setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                        }
                        placeholder="Repeat new password"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
                    />
                </div>

                <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-gray-100">
                    <button
                        type="button"
                        onClick={handleDiscard}
                        className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                    >
                        Discard Changes
                    </button>
                    <button
                        type="submit"
                        className="rounded-xl bg-gray-900 px-8 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-black transition shadow-xs"
                    >
                        Save Updates
                    </button>
                </div>
            </form>
        </div>
    )
}
