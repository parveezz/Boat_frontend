"use client"

import { Toaster as SonnerToaster } from "sonner"

export default function CustomToaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        unstyled: false,
        duration: 4000,
        className: "custom-boat-toast",
      }}
      icons={{
        success: (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 ring-4 ring-emerald-500/10">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 shadow-sm">
              <svg
                className="h-3 w-3 text-slate-950"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>
        ),
        warning: (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/20 ring-4 ring-amber-500/10">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 shadow-sm">
              <span className="text-slate-950 font-black text-xs leading-none">!</span>
            </div>
          </div>
        ),
        info: (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500/20 ring-4 ring-sky-500/10">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 shadow-sm">
              <span className="text-slate-950 font-black text-xs leading-none">i</span>
            </div>
          </div>
        ),
        error: (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-500/20 ring-4 ring-rose-500/10">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 shadow-sm">
              <svg
                className="h-3 w-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3.5"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        ),
      }}
    />
  )
}
