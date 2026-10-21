"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { toast } from "sonner"

export default function ProfileDetailsTab() {
    const [profile, setProfile] = useState({
        displayName: "GreenForge Marine",
        accountType: "Dealer",
        profilePhoto: "/avatar.jpg",
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
            {/* Header */}
            <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                    Profile Details
                </h2>
                <p className="mt-1 text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-3xl">
                    Manage how buyers and sellers see you on the platform. A complete, verified profile builds trust and increases engagement on your listings.
                </p>
            </div>

            <hr className="my-6 border-gray-100" />

            {/* Avatar Section */}
            <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white font-bold text-xl shadow-xs overflow-hidden">
                    <img
                        src={profile.profilePhoto}
                        alt={profile.displayName}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                            // Fallback if image fails
                            e.currentTarget.style.display = "none"
                        }}
                    />
                </div>
                <div className="flex items-center gap-3">
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

            {/* Profile Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Display Name */}
                <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                        Display Name / Store Name <span className="text-red-500 font-bold">*</span>
                    </label>
                    <input
                        type="text"
                        value={profile.displayName}
                        onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white"
                    />
                </div>

                {/* Account Type */}
                <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                        Account Type <span className="text-red-500 font-bold">*</span>
                    </label>
                    <div className="relative">
                        <select
                            value={profile.accountType}
                            onChange={(e) => setProfile({ ...profile, accountType: e.target.value })}
                            className="w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white pr-10"
                        >
                            <option value="Dealer">Dealer</option>
                            <option value="Broker">Broker</option>
                            <option value="Private Seller">Private Seller</option>
                            <option value="Buyer">Buyer</option>
                        </select>
                        <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Service Region */}
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
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white"
                    />
                </div>

                {/* Boat Specialties */}
                <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                        Boat Specialties <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        value={profile.boatSpecialties}
                        onChange={(e) => setProfile({ ...profile, boatSpecialties: e.target.value })}
                        placeholder="e.g. Used Yachts, Sport Boats"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white"
                    />
                </div>

                {/* Bio */}
                <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                        About / Bio <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                        rows={4}
                        value={profile.bio}
                        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                        placeholder="Briefly describe your experience, specialties, and what makes you a trusted seller."
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white resize-none"
                    />
                </div>

                {/* Delivery Availability */}
                <div>
                    <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                        Delivery Availability
                    </label>
                    <div className="relative">
                        <select
                            value={profile.deliveryAvailable}
                            onChange={(e) => setProfile({ ...profile, deliveryAvailable: e.target.value })}
                            className="w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white pr-10"
                        >
                            <option value="Yes">Yes — I can arrange delivery</option>
                            <option value="No">No — Buyer arranges transport</option>
                            <option value="Local Only">Local delivery only</option>
                        </select>
                        <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Contact Details */}
                <div className="pt-4">
                    <h3 className="text-base font-bold text-gray-900 mb-4">
                        Contact Details
                    </h3>

                    <div className="space-y-4">
                        {/* Business Email */}
                        <div>
                            <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                                Business Email <span className="text-red-500 font-bold">*</span>
                            </label>
                            <input
                                type="email"
                                value={profile.businessEmail}
                                onChange={(e) => setProfile({ ...profile, businessEmail: e.target.value })}
                                required
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                                Phone Number <span className="text-red-500 font-bold">*</span>
                            </label>
                            <div className="flex rounded-xl border border-gray-200 bg-white overflow-hidden focus-within:border-black focus-within:ring-1 focus-within:ring-black">
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

                        {/* Company Website */}
                        <div>
                            <label className="block text-xs sm:text-[13px] font-semibold text-gray-800 mb-1.5">
                                Company Website <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <input
                                type="url"
                                value={profile.website}
                                onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-xs sm:text-[13px] text-gray-800 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] bg-white"
                            />
                        </div>
                    </div>
                </div>

                {/* Form Buttons */}
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