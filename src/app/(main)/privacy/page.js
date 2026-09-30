import Link from "next/link"

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#f5f7f4] px-6 pt-28 pb-16 lg:px-10 lg:pt-36 lg:pb-20">
            <div className="mx-auto max-w-4xl">

                {/* Header */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="text-sm font-bold text-[#38543B] hover:underline"
                    >
                        ← Back to Home
                    </Link>

                    <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#38543B]">
                        Privacy Policy
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
                        Your privacy matters to us.
                    </h1>

                    <p className="mt-4 text-sm text-gray-500">
                        Last updated: September 2026
                    </p>
                </div>

                {/* Content */}
                <div className="rounded-2xl bg-white p-7 shadow-sm md:p-10">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900">
                            1. Introduction
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Boat Market respects your privacy and is committed to protecting
                            the information you provide when using our website and
                            marketplace services. This Privacy Policy explains what
                            information we collect, how we use it, and how we protect it.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            2. Information We Collect
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            When you create an account or use our services, we may collect
                            information such as your name, email address, phone number,
                            location, and account credentials.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            If you list a boat for sale, we may also collect information
                            related to the boat, including its make, model, year, condition,
                            specifications, location, price, photographs, and description.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            Where required for marketplace verification, we may also collect
                            documents relating to the boat, such as registration documents,
                            proof of ownership, bill of sale, or insurance information.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            3. How We Use Your Information
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            We may use collected information to create and manage accounts,
                            provide marketplace services, display boat listings, communicate
                            with users, verify listings or documents, improve our services,
                            prevent fraud and abuse, and provide customer support.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            4. Boat Listings
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Information that you choose to publish as part of a boat
                            listing may be visible to other visitors or users of the
                            marketplace. This may include photographs, boat specifications,
                            descriptions, asking price, and general location.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            Do not publish sensitive personal information in a public boat
                            listing.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            5. Documents
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Documents submitted for boat verification may contain personal
                            or ownership information. Access to such documents should be
                            limited to authorized personnel and systems that require the
                            information for verification or marketplace operations.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            6. Communications
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            We may use your contact information to respond to enquiries,
                            provide account notifications, assist with marketplace activity,
                            and communicate important service information.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            7. Data Security
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            We take reasonable technical and organizational measures to
                            protect information against unauthorized access, alteration,
                            disclosure, or destruction. However, no internet-based service
                            can guarantee absolute security.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            8. Third-Party Services
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            We may use third-party services for hosting, analytics,
                            authentication, communications, payments, storage, or other
                            operational purposes. Such services may process information
                            according to their own privacy policies.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            9. Your Choices
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Depending on applicable law, you may have rights relating to
                            accessing, correcting, updating, or deleting your personal
                            information. You may also contact us regarding questions about
                            how your information is handled.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            10. Contact Us
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            If you have questions about this Privacy Policy or how Boat
                            Market handles your information, contact us at:
                        </p>

                        <p className="mt-4 font-semibold text-[#38543B]">
                            info@boatmarket.com
                        </p>
                    </section>

                </div>
            </div>
        </main>
    )
}