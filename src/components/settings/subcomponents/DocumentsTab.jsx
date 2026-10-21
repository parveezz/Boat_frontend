"use client"

import { toast } from "sonner"
import DocumentItem from "./DocumentItem"

export default function DocumentsTab({
    documents,
    accountType = "Dealer", // "Dealer" | "Broker" | "Private Seller"
    uploadingDocId = null,
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
                        isUploading={uploadingDocId === doc.id}
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
                    className="rounded-xl bg-gray-900 px-8 py-3.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-black active:scale-[0.99] shadow-xs"
                >
                    Submit for Verification
                </button>
            </div>
        </div>
    )
}