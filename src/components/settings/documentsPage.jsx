"use client"

import { useState, useRef } from "react"
import { toast } from "sonner"

// Shared Layout Component
import Footer from "@/components/shared/Footer"

// Subcomponents
import Breadcrumbs from "./subcomponents/Breadcrumbs"
import SettingsSidebar from "./subcomponents/SettingsSidebar"
import DocumentsTab from "./subcomponents/DocumentsTab"
import ProfileDetailsTab from "./subcomponents/ProfileDetailsTab"
import ChangePasswordTab from "./subcomponents/ChangePasswordTab"
import NotificationSettingsTab from "./subcomponents/NotificationSettingsTab"
import { documents as initialDocuments } from "./subcomponents/documents"

export default function DocumentsPage({ initialAccountType = "Dealer" }) {
    // Current active sidebar tab
    const [activeTab, setActiveTab] = useState("documents")

    // Current user account type: "Dealer" | "Broker" | "Private Seller" | "Buyer"
    const [accountType, setAccountType] = useState(initialAccountType)

    // Hidden input ref for native file replacement
    const fileInputRef = useRef(null)
    const [selectedDocId, setSelectedDocId] = useState(null)

    // Documents state initialized from subcomponents/documents.js
    const [documents, setDocuments] = useState(initialDocuments)

    // Handle replace file trigger
    const handleTriggerReplace = (docId) => {
        setSelectedDocId(docId)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
            fileInputRef.current.click()
        }
    }

    // Handle file selected from file picker
    const handleFileSelected = (e) => {
        const file = e.target.files?.[0]
        if (!file || !selectedDocId) return

        const sizeKb = Math.round(file.size / 1024)
        const metaStr = sizeKb > 1024 ? `PDF . ${(sizeKb / 1024).toFixed(1)}mb` : `PDF . ${sizeKb}kb`

        setDocuments((prev) => ({
            ...prev,
            [selectedDocId]: {
                ...prev[selectedDocId],
                title: file.name.replace(/\.[^/.]+$/, ""),
                fileName: file.name,
                meta: metaStr,
                hasFile: true,
            },
        }))

        toast.success(`Updated ${documents[selectedDocId]?.label}`)
        setSelectedDocId(null)
    }

    // Handle download
    const handleDownload = (doc) => {
        if (!doc.hasFile) {
            toast.error("No file uploaded to download.")
            return
        }
        toast.success(`Downloading ${doc.fileName}...`)
    }

    // Handle delete document
    const handleDelete = (docId) => {
        setDocuments((prev) => ({
            ...prev,
            [docId]: {
                ...prev[docId],
                title: "No document uploaded",
                meta: "Required file missing",
                hasFile: false,
            },
        }))
        toast.info("Document removed.")
    }

    return (
        <div className="flex min-h-screen w-full flex-col justify-between bg-white font-sans text-gray-900 antialiased">
            {/* Hidden native file input for replacing documents */}
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                className="hidden"
                onChange={handleFileSelected}
            />

            {/* Main Settings Container (Constrained Max-Width) */}
            <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
                {/* Breadcrumb Navigation Subcomponent */}
                <Breadcrumbs activeTab={activeTab} />

                {/* Header: Title and Description with Role Pills on the same row justified end */}
                <div className="mb-10 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-[34px]">
                            Account&apos;s Settings
                        </h1>

                        {/* Role Preview Selector Pill (Only visible on Documents tab, justified end) */}
                        {activeTab === "documents" && (
                            <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50/80 p-1 shrink-0 self-start sm:self-auto sm:ml-auto">
                                {["Dealer", "Broker", "Private Seller", "Buyer"].map((role) => (
                                    <button
                                        key={role}
                                        type="button"
                                        onClick={() => setAccountType(role)}
                                        className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition ${
                                            accountType === role
                                                ? "bg-[#38543B] text-white shadow-xs"
                                                : "text-gray-600 hover:text-[#38543B] hover:bg-white/80"
                                        }`}
                                    >
                                        {role}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <p className="mt-2 text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-3xl">
                        Manage your account settings to update personal information, adjust preferences, enhance security, and customize your overall user experience across the platform.
                    </p>
                </div>

                {/* Two-Column Grid: Left Navigation & Right Content */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 pb-16">
                    {/* Left Sidebar Subcomponent */}
                    <SettingsSidebar
                        activeTab={activeTab}
                        onSelectTab={(tabId) => setActiveTab(tabId)}
                    />

                    {/* Right Content Tab Subcomponents */}
                    <div className="lg:col-span-9">
                        {activeTab === "documents" && (
                            <DocumentsTab
                                documents={documents}
                                accountType={accountType}
                                onReplace={handleTriggerReplace}
                                onDownload={handleDownload}
                                onDelete={handleDelete}
                            />
                        )}

                        {activeTab === "profile" && <ProfileDetailsTab />}

                        {activeTab === "password" && <ChangePasswordTab />}

                        {activeTab === "notifications" && <NotificationSettingsTab />}
                    </div>
                </div>
            </div>

            {/* 100% Full-Width Footer spanning screen edge-to-edge */}
            <div className="w-full mt-auto">
                <Footer />
            </div>
        </div>
    )
}
