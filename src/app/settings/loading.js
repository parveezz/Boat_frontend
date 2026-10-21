import SettingsSkeleton from "@/components/settings/subcomponents/SettingsSkeleton"

export default function SettingsLoading() {
    return (
        <div className="flex min-h-screen w-full flex-col justify-between bg-white font-sans antialiased">
            <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
                {/* Breadcrumbs Skeleton */}
                <div className="mb-6 flex items-center gap-2 animate-pulse">
                    <div className="h-4 w-12 rounded bg-gray-200" />
                    <span className="text-gray-300 text-xs font-semibold">&gt;&gt;</span>
                    <div className="h-4 w-32 rounded bg-gray-200" />
                    <span className="text-gray-300 text-xs font-semibold">&gt;&gt;</span>
                    <div className="h-4 w-20 rounded bg-gray-200" />
                </div>

                {/* Header Title & Description Skeleton */}
                <div className="mb-6 w-full animate-pulse">
                    <div className="flex items-center justify-between">
                        <div className="h-8 w-64 rounded bg-gray-200" />
                        <div className="h-7 w-52 rounded-lg bg-gray-100 hidden sm:block" />
                    </div>
                    <div className="mt-2 h-4 w-full max-w-2xl rounded bg-gray-100" />
                </div>

                {/* Horizontal Navigation Links Skeleton */}
                <div className="mb-8 flex justify-start border-b border-gray-200 animate-pulse">
                    <div className="inline-flex items-center gap-6 py-3">
                        <div className="h-5 w-24 rounded bg-gray-200" />
                        <div className="h-5 w-28 rounded bg-gray-200" />
                        <div className="h-5 w-20 rounded bg-gray-200" />
                        <div className="h-5 w-32 rounded bg-gray-200" />
                    </div>
                </div>

                {/* Content Skeleton Area */}
                <div className="pt-2 pb-16 w-full">
                    <SettingsSkeleton activeTab="documents" />
                </div>
            </div>
        </div>
    )
}
