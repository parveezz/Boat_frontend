"use client"

import { useState } from "react"
import { toast } from "sonner"

export default function NotificationSettingsTab() {
    const [notifications, setNotifications] = useState({
        // Marine & Marketplace Alerts
        platformAnnouncements: true,
        accountActivity: true,
        priceDropAlerts: true,
        newListingAlerts: true,
        messageAlerts: true,

        // Buyer Activity
        offerAccepted: true,
        counterOfferReceived: true,
        seaTrialConfirmed: true,
        vesselUpdated: true,
        escrowMilestones: true,
        kycStatusChanges: true,

        // Seller & Broker Activity
        offerReceived: true,
        viewingRequested: true,
        surveyUploaded: true,
        listingAboutToExpire: true,
        buyerQuestions: true,

        // Security & Vessel Protection
        suspiciousActivityAlerts: true,
        loginAlerts: true,
    })

    const toggle = (key) => {
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    const handleUpdate = () => {
        toast.success("Notification preferences updated successfully!")
    }

    return (
        <div>
            <div className="space-y-8">
                {/* 1. Marine & Marketplace Alerts */}
                <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3">
                        Marketplace &amp; Vessel Alerts
                    </h3>
                    <div className="divide-y divide-gray-100">
                        {[
                            {
                                key: "platformAnnouncements",
                                title: "Boat Market Updates & Maritime Regulatory News",
                                desc: "Get platform feature releases, maritime compliance advisories, and international boat show schedules.",
                            },
                            {
                                key: "accountActivity",
                                title: "Account & Escrow Security Alerts",
                                desc: "Receive critical notifications regarding login security, KYC identity approvals, and banking verification.",
                            },
                            {
                                key: "priceDropAlerts",
                                title: "Wishlist Boat Price Reductions",
                                desc: "Instant alert whenever a yacht or boat on your saved list has a price drop.",
                            },
                            {
                                key: "newListingAlerts",
                                title: "New Boat Match Digest",
                                desc: "Daily notifications when new boats matching your saved search criteria (make, model, length, location) are listed.",
                            },
                            {
                                key: "messageAlerts",
                                title: "Direct Inquiries & Chat Messages",
                                desc: "Instant alerts when buyers, sellers, or marine brokers message you regarding listings.",
                            },
                        ].map((item) => (
                            <label
                                key={item.key}
                                className="flex items-start gap-3 py-3.5 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    checked={notifications[item.key]}
                                    onChange={() => toggle(item.key)}
                                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer accent-gray-900"
                                />
                                <div>
                                    <p className="text-xs sm:text-[13px] font-semibold text-gray-900 group-hover:text-black transition-colors">
                                        {item.title}
                                    </p>
                                    <p className="text-[11px] text-gray-400 font-normal mt-0.5 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* 2. Buyer Activity */}
                <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3">
                        Buyer Activity &amp; Purchase Milestones
                    </h3>
                    <div className="divide-y divide-gray-100">
                        {[
                            {
                                key: "offerAccepted",
                                title: "Seller Accepts Purchase Offer",
                                desc: "Immediate contract execution notice with escrow deposit instructions and survey timeline.",
                            },
                            {
                                key: "counterOfferReceived",
                                title: "Counter-Offer Received",
                                desc: "Real-time alert when a boat seller or yacht broker responds with a counter-offer.",
                            },
                            {
                                key: "seaTrialConfirmed",
                                title: "Sea Trial & Marine Survey Confirmed",
                                desc: "Alerts when a seller confirms your haul-out date, mechanical inspection, or sea trial run.",
                            },
                            {
                                key: "vesselUpdated",
                                title: "Saved Vessel Specification Updates",
                                desc: "Notifications when a followed boat updates engine hours, maintenance logs, or uploaded survey certificates.",
                            },
                            {
                                key: "escrowMilestones",
                                title: "Marine Escrow Milestones",
                                desc: "Real-time tracking of deposit receipt, survey contingency sign-off, and final title transfer wire release.",
                            },
                            {
                                key: "kycStatusChanges",
                                title: "KYC & Vessel Buyer Verification",
                                desc: "Updates regarding your government ID verification and proof of funds clearance status.",
                            },
                        ].map((item) => (
                            <label
                                key={item.key}
                                className="flex items-start gap-3 py-3.5 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    checked={notifications[item.key]}
                                    onChange={() => toggle(item.key)}
                                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer accent-gray-900"
                                />
                                <div>
                                    <p className="text-xs sm:text-[13px] font-semibold text-gray-900 group-hover:text-black transition-colors">
                                        {item.title}
                                    </p>
                                    <p className="text-[11px] text-gray-400 font-normal mt-0.5 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* 3. Seller & Broker Activity */}
                <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3">
                        Seller &amp; Broker Listing Activity
                    </h3>
                    <div className="divide-y divide-gray-100">
                        {[
                            {
                                key: "offerReceived",
                                title: "Formal Purchase Offer Received",
                                desc: "Instant alert when a verified buyer submits a binding offer with earnest escrow deposit.",
                            },
                            {
                                key: "viewingRequested",
                                title: "Viewing & Sea Trial Request",
                                desc: "Alerts when an interested buyer requests an on-dock inspection, walk-through, or sea trial.",
                            },
                            {
                                key: "surveyUploaded",
                                title: "Marine Surveyor Report Uploaded",
                                desc: "Notifications when an accredited marine surveyor uploads condition and valuation inspection reports.",
                            },
                            {
                                key: "listingAboutToExpire",
                                title: "Boat Listing Expiry Warning",
                                desc: "Reminders 7 days and 48 hours before an active boat listing expires to renew or feature.",
                            },
                            {
                                key: "buyerQuestions",
                                title: "Technical Questions & Inquiries",
                                desc: "Prompt alerts when buyers submit questions regarding vessel equipment, engine hours, or trailer inclusion.",
                            },
                        ].map((item) => (
                            <label
                                key={item.key}
                                className="flex items-start gap-3 py-3.5 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    checked={notifications[item.key]}
                                    onChange={() => toggle(item.key)}
                                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer accent-gray-900"
                                />
                                <div>
                                    <p className="text-xs sm:text-[13px] font-semibold text-gray-900 group-hover:text-black transition-colors">
                                        {item.title}
                                    </p>
                                    <p className="text-[11px] text-gray-400 font-normal mt-0.5 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* 4. Security & Vessel Title Protection */}
                <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-3">
                        Security &amp; Vessel Protection
                    </h3>
                    <div className="divide-y divide-gray-100">
                        {[
                            {
                                key: "suspiciousActivityAlerts",
                                title: "Unusual Account & Escrow Alerts",
                                desc: "Immediate SMS and email notifications if wire transfer coordinates or account payout settings are modified.",
                            },
                            {
                                key: "loginAlerts",
                                title: "Unrecognized Device Sign-in",
                                desc: "Instant security notice every time your account is accessed from an unfamiliar browser, IP address, or location.",
                            },
                        ].map((item) => (
                            <label
                                key={item.key}
                                className="flex items-start gap-3 py-3.5 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    checked={notifications[item.key]}
                                    onChange={() => toggle(item.key)}
                                    className="mt-0.5 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer accent-gray-900"
                                />
                                <div>
                                    <p className="text-xs sm:text-[13px] font-semibold text-gray-900 group-hover:text-black transition-colors">
                                        {item.title}
                                    </p>
                                    <p className="text-[11px] text-gray-400 font-normal mt-0.5 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-10 flex justify-end">
                <button
                    type="button"
                    onClick={handleUpdate}
                    className="rounded-xl bg-gray-900 px-8 py-3.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-black active:scale-[0.99] shadow-xs"
                >
                    Update Notification
                </button>
            </div>
        </div>
    )
}
