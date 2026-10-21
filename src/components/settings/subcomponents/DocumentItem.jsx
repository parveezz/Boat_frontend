import Image from "next/image"
import PdfIcon from "./PdfIcon"

export default function DocumentItem({ doc, onReplace, onDownload, onDelete, isUploading = false }) {
    if (isUploading) {
        return (
            <div className="space-y-1.5 animate-pulse">
                <div className="h-3.5 w-44 rounded bg-gray-200" />
                <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50/70 px-4 py-3.5 shadow-xs">
                    <div className="flex items-center gap-3.5 min-w-0">
                        <div className="h-8 w-8 rounded-lg bg-gray-200 shrink-0" />
                        <div className="space-y-2">
                            <div className="h-3.5 w-48 rounded bg-gray-200" />
                            <div className="h-2.5 w-24 rounded bg-gray-100" />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                        <div className="h-8 w-8 rounded-lg bg-gray-200" />
                        <div className="h-8 w-8 rounded-lg bg-gray-200" />
                        <div className="h-8 w-8 rounded-lg bg-gray-200" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="space-y-1.5">
            {/* Label with Red Asterisk */}
            <label className="block text-xs sm:text-[13px] font-semibold text-gray-800">
                {doc.label} {doc.required && <span className="text-red-500 font-bold">*</span>}
            </label>

            {/* Document Card Container */}
            <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition hover:border-gray-300 shadow-xs">
                {/* Left: Red PDF Icon & Title / Meta */}
                <div className="flex items-center gap-3.5 min-w-0">
                    <PdfIcon />

                    <div className="min-w-0">
                        <h3 className="truncate text-xs sm:text-[13px] font-bold text-gray-900 leading-snug">
                            {doc.title}
                        </h3>
                        <p className="text-[11px] text-gray-400 font-normal mt-0.5">
                            {doc.meta}
                        </p>
                    </div>
                </div>

                {/* Right: Action Buttons (Replace / Download / Trash) */}
                <div className="flex items-center gap-2 shrink-0 ml-3">
                    {/* Replace / Upload */}
                    <button
                        type="button"
                        onClick={() => onReplace(doc.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300"
                        title="Replace document"
                        aria-label="Replace document"
                    >
                        <Image src="/icons/rotate.svg" alt="Replace" width={14} height={14} className="h-3.5 w-3.5 opacity-70" />
                    </button>

                    {/* Download */}
                    <button
                        type="button"
                        disabled={!doc.hasFile}
                        onClick={() => onDownload(doc)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 transition ${
                            doc.hasFile
                                ? "text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300"
                                : "text-gray-300 cursor-not-allowed opacity-40"
                        }`}
                        title="Download document"
                        aria-label="Download document"
                    >
                        <Image src="/icons/download.svg" alt="Download" width={14} height={14} className="h-3.5 w-3.5 opacity-70" />
                    </button>

                    {/* Trash */}
                    <button
                        type="button"
                        disabled={!doc.hasFile}
                        onClick={() => onDelete(doc.id)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 transition ${
                            doc.hasFile
                                ? "text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                                : "text-gray-300 cursor-not-allowed opacity-40"
                        }`}
                        title="Remove document"
                        aria-label="Remove document"
                    >
                        <Image src="/icons/trash.svg" alt="Delete" width={14} height={14} className="h-3.5 w-3.5 opacity-70" />
                    </button>
                </div>
            </div>
        </div>
    )
}