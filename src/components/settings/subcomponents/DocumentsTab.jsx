"use client"

import { toast } from "sonner"
import DocumentItem from "./DocumentItem"

export default function DocumentsTab({
    documents,
    accountType = "Dealer", // "Dealer" | "Broker" | "Private Seller"
    onReplace,
    onDownload,
    onDelete,
}) {
    const handleSaveUpdates = () => {
        toast.success("Business documents submitted for verification!")
    }

    // Show only documents relevant to the user's account type
    const visibleDocs = Object.values(documents).filter((doc) => {
        if (!doc.roles) return true
        return doc.roles.includes(accountType)
    })

    const requiredDocs = visibleDocs.filter((d) => d.required)
    const completedRequired = requiredDocs.filter((d) => d.hasFile)
    const isVerified =
        requiredDocs.length > 0 && completedRequired.length === requiredDocs.length

    return (
        <div>
            {/* Section Header */}
            <div>
                <div className="flex flex-wrap items-center gap-2.5">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
                        {accountType === "Buyer"
                            ? "Buyer Verification Documents"
                            : accountType === "Private Seller"
                            ? "Vessel Ownership & Seller Documents"
                            : "Business Documents"}
                    </h2>
                    <span className="inline-flex items-center rounded-md bg-[#f0f7f1] border border-[#38543B]/20 px-2.5 py-0.5 text-xs sm:text-sm font-semibold text-[#38543B]">
                        ({accountType})
                    </span>
                </div>
                <p className="mt-1 text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-3xl">
                    Upload the documents below for your <span className="font-semibold text-gray-800">{accountType}</span> registration to complete identity verification. Verified accounts receive a trust badge, which increases buyer and seller confidence. Documents are used for verification only and are <span className="font-semibold text-gray-700">never shown publicly</span>.
                </p>
            </div>

            {/* Verification Status Banner */}
            <div
                className={`mt-6 flex items-center gap-3 rounded-xl border px-4 py-3 ${isVerified
                        ? "border-green-200 bg-green-50"
                        : "border-amber-200 bg-amber-50"
                    }`}
            >
                <span
                    className={`flex h-2.5 w-2.5 shrink-0 rounded-full ${isVerified ? "bg-green-500" : "bg-amber-500"
                        }`}
                />
                <p
                    className={`text-xs sm:text-[13px] font-medium ${isVerified ? "text-green-800" : "text-amber-800"
                        }`}
                >
                    {isVerified
                        ? "All required documents submitted. Your account is under review."
                        : `${completedRequired.length} of ${requiredDocs.length} required documents uploaded. Complete all required documents to get verified.`}
                </p>
            </div>

            {/* Document Cards List */}
            <div className="mt-8 space-y-6">
                {visibleDocs.map((doc) => (
                    <DocumentItem
                        key={doc.id}
                        doc={doc}
                        onReplace={onReplace}
                        onDownload={onDownload}
                        onDelete={onDelete}
                    />
                ))}
            </div>

            {/* Save Updates Button */}
            <div className="mt-10 flex justify-end">
                <button
                    type="button"
                    onClick={handleSaveUpdates}
                    className="rounded-xl bg-[#38543B] px-8 py-3.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#2d4530] active:scale-[0.99] shadow-xs"
                >
                    Submit for Verification
                </button>
            </div>
        </div>
    )
}