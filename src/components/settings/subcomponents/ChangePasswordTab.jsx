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
        <div>
            <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                    Change Password
                </h2>
                <p className="mt-1 text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-3xl">
                    Ensure your account password is strong, secure, and not reused across other services.
                </p>
            </div>

            <hr className="my-6 border-gray-100" />

            <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
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
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white"
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
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white"
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
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white"
                    />
                </div>

                <div className="mt-8 flex justify-end gap-3 pt-4">
                    <button
                        type="button"
                        onClick={handleDiscard}
                        className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                    >
                        Discard Changes
                    </button>
                    <button
                        type="submit"
                        className="rounded-xl bg-[#38543B] px-8 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-[#2d4530] transition shadow-xs"
                    >
                        Save Updates
                    </button>
                </div>
            </form>
        </div>
    )
}
