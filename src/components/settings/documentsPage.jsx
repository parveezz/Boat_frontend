"use client"

import { useState, useRef, useEffect } from "react"
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
import SettingsSkeleton from "./subcomponents/SettingsSkeleton"
import { documents as initialDocuments } from "./subcomponents/documents"

export default function DocumentsPage({ initialAccountType = "Dealer", initialLoading = true }) {
    // Current active tab
    const [activeTab, setActiveTab] = useState("documents")

    // Skeleton loader state
    const [isLoading, setIsLoading] = useState(initialLoading)

    // Current user account type: "Dealer" | "Broker" | "Private Seller" | "Buyer"
    const [accountType, setAccountType] = useState(initialAccountType)

    // Hidden input ref for native file replacement
    const fileInputRef = useRef(null)
    const [selectedDocId, setSelectedDocId] = useState(null)
    const [uploadingDocId, setUploadingDocId] = useState(null)

    // Initial mount skeleton effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 450)
        return () => clearTimeout(timer)
    }, [])

    // Documents state initialized from subcomponents/documents.js
    const [documents, setDocuments] = useState(initialDocuments)

    // Smooth tab change with skeleton shimmer transition
    const handleTabChange = (tabId) => {
        if (tabId === activeTab) return
        setIsLoading(true)
        setActiveTab(tabId)
        setTimeout(() => {
            setIsLoading(false)
        }, 200)
    }

    // Role switcher with quick skeleton transition
    const handleRoleChange = (role) => {
        if (role === accountType) return
        setIsLoading(true)
        setAccountType(role)
        setTimeout(() => {
            setIsLoading(false)
        }, 180)
    }

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

        const currentId = selectedDocId
        setUploadingDocId(currentId)

        const sizeKb = Math.round(file.size / 1024)
        const metaStr = sizeKb > 1024 ? `PDF . ${(sizeKb / 1024).toFixed(1)}mb` : `PDF . ${sizeKb}kb`

        setTimeout(() => {
            setDocuments((prev) => ({
                ...prev,
                [currentId]: {
                    ...prev[currentId],
                    title: file.name.replace(/\.[^/.]+$/, ""),
                    fileName: file.name,
                    meta: metaStr,
                    hasFile: true,
                },
            }))
            setUploadingDocId(null)
            toast.success(`Updated ${documents[currentId]?.label}`)
            setSelectedDocId(null)
        }, 600)
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

    // Dynamic descriptive text for each page placed directly above the links bar
    const tabHeaders = {
        profile: {
            title: "Profile Details",
            description: "Manage how buyers and sellers see you on the platform. A complete, verified profile builds trust and increases engagement on your listings.",
        },
        password: {
            title: "Change Password",
            description: "Ensure your account password is strong, secure, and not reused across other services.",
        },
        documents: {
            title: accountType === "Buyer"
                ? "Buyer Verification Documents"
                : accountType === "Private Seller"
                ? "Vessel Ownership & Seller Documents"
                : "Business Documents",
            description: `Upload the documents below for your ${accountType} registration to complete identity verification. Verified accounts receive a trust badge, which increases buyer and seller confidence. Documents are used for verification only and are never shown publicly.`,
        },
        notifications: {
            title: "Notification Settings",
            description: "Configure your marine alerts, purchase offer notifications, sea trial updates, and boat listing reminders.",
        },
    }

    const currentHeader = tabHeaders[activeTab] || tabHeaders.profile

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

            {/* Main Settings Container */}
            <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
                {/* Breadcrumb Navigation Subcomponent */}
                <Breadcrumbs activeTab={activeTab} />

                {/* Page Descriptive Text placed directly on top of the horizontal links */}
                <div className="mb-6 w-full">
                    <div className="flex items-center gap-2.5">
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                            {currentHeader.title}
                        </h1>
                        {activeTab === "documents" && (
                            <span className="inline-flex items-center rounded-md bg-gray-100 border border-gray-200 px-2.5 py-0.5 text-xs sm:text-sm font-semibold text-gray-800">
                                ({accountType})
                            </span>
                        )}
                    </div>

                    <p className="mt-1 text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-3xl">
                        {currentHeader.description}
                    </p>
                </div>

                {/* Horizontal Navigation Bar (Links) & Role Selector on the same row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                    <SettingsSidebar
                        activeTab={activeTab}
                        onSelectTab={handleTabChange}
                    />

                    {/* Role Preview Selector Pill after the horizontal links */}
                    {activeTab === "documents" && (
                        <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50/80 p-1 shrink-0 self-start sm:self-auto sm:ml-auto">
                            {["Dealer", "Broker", "Private Seller", "Buyer"].map((role) => (
                                <button
                                    key={role}
                                    type="button"
                                    onClick={() => handleRoleChange(role)}
                                    className={`rounded-md px-3.5 py-1.5 text-xs font-semibold transition ${
                                        accountType === role
                                            ? "bg-gray-900 text-white shadow-xs"
                                            : "text-gray-600 hover:text-gray-900 hover:bg-white/80"
                                    }`}
                                >
                                    {role}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Tab Content Area (Switches between Skeleton Shimmer and Loaded Content) */}
                <div className="pt-8 pb-16 w-full min-h-[460px]">
                    {isLoading ? (
                        <SettingsSkeleton activeTab={activeTab} />
                    ) : (
                        <>
                            {activeTab === "documents" && (
                                <DocumentsTab
                                    documents={documents}
                                    accountType={accountType}
                                    uploadingDocId={uploadingDocId}
                                    onReplace={handleTriggerReplace}
                                    onDownload={handleDownload}
                                    onDelete={handleDelete}
                                />
                            )}

                            {activeTab === "profile" && <ProfileDetailsTab />}

                            {activeTab === "password" && <ChangePasswordTab />}

                            {activeTab === "notifications" && <NotificationSettingsTab />}
                        </>
                    )}
                </div>
            </div>

            {/* 100% Full-Width Footer spanning screen edge-to-edge */}
            <div className="w-full mt-auto">
                <Footer />
            </div>
        </div>
    )
}
