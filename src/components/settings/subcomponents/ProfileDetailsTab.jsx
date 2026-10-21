"use client"

import { useState } from "react"
import Image from "next/image"
import { toast } from "sonner"

export default function ProfileDetailsTab() {
    const [profile, setProfile] = useState({
        displayName: "GreenForge Marine",
        accountType: "Dealer",
        profilePhoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop&crop=face",
        businessEmail: "brokerage@greenforge-marine.com",
        phoneCode: "+966",
        phone: "55 842 1934",
        serviceRegion: "Jeddah & Red Sea",
        boatSpecialties: "Used Yachts, Sport Boats",
        bio: "Specializing in pre-owned yacht brokerage in the Red Sea region. Over 10 years of experience connecting buyers with quality vessels.",
        deliveryAvailable: "Yes",
        website: "https://greenforge-marine.com",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Profile details saved successfully!")
    }

    const handleDiscard = () => {
        toast.info("Changes discarded")
    }

    const handlePhotoChange = () => {
        toast.info("Select profile photo or company logo")
    }

    const handlePhotoDelete = () => {
        toast.info("Profile photo deleted")
    }

    return (
        <div>
            {/* Avatar Section */}
            <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 text-white font-bold text-xl shadow-xs overflow-hidden shrink-0">
                    <Image
                        src={profile.profilePhoto}
                        alt={profile.displayName}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                        unoptimized
                    />
                </div>
                <div className="flex items-center gap-2.5">
                    <button
                        type="button"
                        onClick={handlePhotoChange}
                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition"
                    >
                        Change Photo / Logo
                    </button>
                    <button
                        type="button"
                        onClick={handlePhotoDelete}
                        className="rounded-lg bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200 transition"
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* Profile Form (2-Column Grid Layout) */}
            <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    {/* Column 1: Display Name */}
                    <div>
                        <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                            Display Name / Store Name <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                            type="text"
                            value={profile.displayName}
                            onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                            required
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
                        />
                    </div>

                    {/* Column 2: Business Email */}
                    <div>
                        <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                            Business Email <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                            type="email"
                            value={profile.businessEmail}
                            onChange={(e) => setProfile({ ...profile, businessEmail: e.target.value })}
                            required
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
                        />
                    </div>

                    {/* Column 1: Account Type */}
                    <div>
                        <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                            Account Type <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                            <select
                                value={profile.accountType}
                                onChange={(e) => setProfile({ ...profile, accountType: e.target.value })}
                                className="w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white pr-10"
                            >
                                <option value="Dealer">Dealer</option>
                                <option value="Broker">Broker</option>
                                <option value="Private Seller">Private Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>
                            <Image src="/icons/chevron-down.svg" alt="" width={16} height={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
                        </div>
                    </div>

                    {/* Column 2: Phone Number */}
                    <div>
                        <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                            Phone Number <span className="text-red-500 font-bold">*</span>
                        </label>
                        <div className="flex rounded-xl border border-gray-200 bg-white overflow-hidden transition focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900">
                            <div className="flex items-center px-4 bg-gray-50/50 border-r border-gray-200 text-xs sm:text-[13px] font-medium text-gray-600">
                                {profile.phoneCode}
                            </div>
                            <input
                                type="tel"
                                value={profile.phone}
                                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                required
                                className="w-full px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none bg-transparent"
                            />
                        </div>
                    </div>

                    {/* Column 1: Service Region */}
                    <div>
                        <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                            Service Region <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                            type="text"
                            value={profile.serviceRegion}
                            onChange={(e) => setProfile({ ...profile, serviceRegion: e.target.value })}
                            required
                            placeholder="e.g. Jeddah & Red Sea"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
                        />
                    </div>

                    {/* Column 2: Company Website */}
                    <div>
                        <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                            Company Website <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <input
                            type="url"
                            value={profile.website}
                            onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                            placeholder="https://example.com"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
                        />
                    </div>

                    {/* Column 1: Delivery Availability */}
                    <div>
                        <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                            Delivery Availability
                        </label>
                        <div className="relative">
                            <select
                                value={profile.deliveryAvailable}
                                onChange={(e) => setProfile({ ...profile, deliveryAvailable: e.target.value })}
                                className="w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white pr-10"
                            >
                                <option value="Yes">Yes — I can arrange delivery</option>
                                <option value="No">No — Buyer arranges transport</option>
                                <option value="Local Only">Local delivery only</option>
                            </select>
                            <Image src="/icons/chevron-down.svg" alt="" width={16} height={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
                        </div>
                    </div>

                    {/* Column 2: Boat Specialties */}
                    <div>
                        <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                            Boat Specialties <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <input
                            type="text"
                            value={profile.boatSpecialties}
                            onChange={(e) => setProfile({ ...profile, boatSpecialties: e.target.value })}
                            placeholder="e.g. Used Yachts, Sport Boats"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white"
                        />
                    </div>

                    {/* Full Width Across Both Columns: About / Bio */}
                    <div className="md:col-span-2">
                        <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                            About / Bio <span className="text-gray-400 font-normal">(Optional)</span>
                        </label>
                        <textarea
                            rows={4}
                            value={profile.bio}
                            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                            placeholder="Briefly describe your experience, specialties, and what makes you a trusted seller."
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none transition focus:border-gray-900 focus:ring-1 focus:ring-gray-900 bg-white resize-none"
                        />
                    </div>
                </div>

                {/* Form Buttons */}
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