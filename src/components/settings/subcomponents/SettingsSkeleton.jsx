"use client"

export default function SettingsSkeleton({ activeTab = "documents" }) {
    return (
        <div className="w-full animate-pulse">
            {/* Tab Content Skeleton Structure */}
            {activeTab === "profile" && (
                <div className="space-y-8 w-full">
                    {/* Avatar Skeleton */}
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-gray-200 shrink-0" />
                        <div className="flex items-center gap-2.5">
                            <div className="h-8 w-32 rounded-lg bg-gray-200" />
                            <div className="h-8 w-16 rounded-lg bg-gray-100" />
                        </div>
                    </div>

                    {/* 2-Column Form Grid Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="space-y-2">
                                <div className="h-3.5 w-28 rounded bg-gray-200" />
                                <div className="h-11 w-full rounded-xl bg-gray-100 border border-gray-200/60" />
                            </div>
                        ))}

                        {/* Full Width Bio Textarea Skeleton */}
                        <div className="md:col-span-2 space-y-2 pt-1">
                            <div className="h-3.5 w-24 rounded bg-gray-200" />
                            <div className="h-28 w-full rounded-xl bg-gray-100 border border-gray-200/60" />
                        </div>
                    </div>

                    {/* Bottom Buttons Skeleton */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                        <div className="h-11 w-28 rounded-xl bg-gray-100" />
                        <div className="h-11 w-32 rounded-xl bg-gray-300" />
                    </div>
                </div>
            )}

            {activeTab === "documents" && (
                <div className="space-y-6 w-full">
                    {/* Status Banner Skeleton */}
                    <div className="h-12 w-full rounded-xl bg-gray-100 border border-gray-200/60 flex items-center px-4 gap-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                        <div className="h-4 w-72 rounded bg-gray-200" />
                    </div>

                    {/* Document Cards Skeleton List */}
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="space-y-2">
                                <div className="h-3.5 w-48 rounded bg-gray-200" />
                                <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">
                                    <div className="flex items-center gap-3.5">
                                        <div className="h-9 w-8 rounded bg-gray-200" />
                                        <div className="space-y-1.5">
                                            <div className="h-4 w-44 rounded bg-gray-200" />
                                            <div className="h-3 w-20 rounded bg-gray-100" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-8 w-8 rounded-lg bg-gray-100" />
                                        <div className="h-8 w-8 rounded-lg bg-gray-100" />
                                        <div className="h-8 w-8 rounded-lg bg-gray-100" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Submit Button Skeleton */}
                    <div className="flex justify-end pt-4">
                        <div className="h-11 w-44 rounded-xl bg-gray-300" />
                    </div>
                </div>
            )}

            {activeTab === "password" && (
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-xl space-y-5">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="space-y-2">
                                <div className="h-3.5 w-32 rounded bg-gray-200" />
                                <div className="h-11 w-full rounded-xl bg-gray-100 border border-gray-200/60" />
                            </div>
                        ))}
                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                            <div className="h-11 w-28 rounded-xl bg-gray-100" />
                            <div className="h-11 w-32 rounded-xl bg-gray-300" />
                        </div>
                    </div>
                </div>
            )}

            {activeTab === "notifications" && (
                <div className="space-y-8 w-full">
                    {[1, 2, 3].map((group) => (
                        <div key={group} className="space-y-4">
                            <div className="h-4 w-40 rounded bg-gray-300" />
                            <div className="divide-y divide-gray-100">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-center justify-between py-3.5">
                                        <div className="space-y-1.5 flex-1 pr-6">
                                            <div className="h-3.5 w-52 rounded bg-gray-200" />
                                            <div className="h-3 w-full max-w-md rounded bg-gray-100" />
                                        </div>
                                        <div className="h-5 w-9 rounded-full bg-gray-200 shrink-0" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-end pt-4">
                        <div className="h-11 w-40 rounded-xl bg-gray-300" />
                    </div>
                </div>
            )}
        </div>
    )
}
