import { RotateCw, Download, Trash2 } from "lucide-react"
import PdfIcon from "./PdfIcon"

export default function DocumentItem({ doc, onReplace, onDownload, onDelete }) {
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
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-[#f0f7f1] hover:text-[#38543B] hover:border-[#38543B]/30"
                        title="Replace document"
                        aria-label="Replace document"
                    >
                        <RotateCw size={14} />
                    </button>

                    {/* Download */}
                    <button
                        type="button"
                        disabled={!doc.hasFile}
                        onClick={() => onDownload(doc)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 transition ${doc.hasFile
                                ? "text-gray-600 hover:bg-[#f0f7f1] hover:text-[#38543B] hover:border-[#38543B]/30"
                                : "text-gray-300 cursor-not-allowed"
                            }`}
                        title="Download document"
                        aria-label="Download document"
                    >
                        <Download size={14} />
                    </button>

                    {/* Trash */}
                    <button
                        type="button"
                        disabled={!doc.hasFile}
                        onClick={() => onDelete(doc.id)}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 transition ${doc.hasFile
                                ? "text-gray-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                                : "text-gray-300 cursor-not-allowed"
                            }`}
                        title="Remove document"
                        aria-label="Remove document"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            </div>
        </div>
    )
}