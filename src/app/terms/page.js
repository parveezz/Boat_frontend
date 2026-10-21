import Link from "next/link"

export default function TermsPage() {
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
                        Terms & Conditions
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
                        Terms for using Boat Market.
                    </h1>

                    <p className="mt-4 text-sm text-gray-500">
                        Last updated: September 2026
                    </p>
                </div>

                {/* Content */}
                <div className="rounded-2xl bg-white p-7 shadow-sm md:p-10">

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900">
                            1. Acceptance of Terms
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            By accessing or using Boat Market, you agree to comply with
                            these Terms & Conditions. If you do not agree with these terms,
                            you should not use the marketplace.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            2. About Boat Market
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Boat Market is an online marketplace designed to allow users to
                            discover, list, and communicate about boats. Unless expressly
                            stated otherwise, Boat Market is not the owner or seller of boats
                            listed by users.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            3. User Accounts
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Users are responsible for providing accurate information when
                            creating an account and for keeping their account credentials
                            secure.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            You must not create an account using false information,
                            impersonate another person, or use another person's account
                            without authorization.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            4. Boat Listings
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Sellers are responsible for ensuring that information provided
                            in their boat listings is accurate and not misleading.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            Listings may include information such as boat type, manufacturer,
                            model, year, condition, dimensions, engine information, price,
                            location, photographs, and description.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            5. Ownership and Documents
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Sellers may be required to provide documents relating to a boat
                            before a listing can be approved or published.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            These documents may include registration certificates, proof of
                            ownership, bills of sale, insurance documents, or other
                            supporting documents depending on the marketplace requirements.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            Users must not upload forged, altered, stolen, or fraudulent
                            documents.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            6. Buyers
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Buyers are responsible for conducting appropriate checks before
                            purchasing a boat. This may include inspecting the boat,
                            verifying ownership and registration information, reviewing
                            available documentation, and obtaining professional or legal
                            advice where appropriate.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            7. Transactions
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Unless specifically stated otherwise, Boat Market does not
                            guarantee the completion of transactions between buyers and
                            sellers.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            Buyers and sellers are responsible for agreeing on price,
                            payment method, inspection, delivery, ownership transfer, and
                            other transaction terms.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            8. Prohibited Activities
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Users must not use Boat Market to publish fraudulent listings,
                            provide misleading information, upload unlawful content, attempt
                            to obtain another person's information without authorization, or
                            use the service for unlawful activities.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            9. Listing Removal
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Boat Market may remove, restrict, or suspend listings or accounts
                            where there is a suspected violation of these terms, fraudulent
                            activity, inaccurate information, or other activity that may
                            create risk for users or the platform.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            10. Boat Condition and Inspection
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Information contained in a listing should not be treated as a
                            substitute for an independent inspection. Buyers should evaluate
                            the boat's physical condition, mechanical systems, documentation,
                            and suitability before completing a purchase.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            11. Safety and Legal Requirements
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Boat owners and operators are responsible for complying with
                            applicable laws, registration requirements, insurance requirements,
                            safety requirements, licensing requirements, and local waterway
                            regulations.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            12. Intellectual Property
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            The Boat Market website, branding, design, text, software, and
                            other platform materials may be protected by applicable
                            intellectual-property laws. Users may not copy or reproduce
                            platform materials without appropriate authorization.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            13. Limitation of Responsibility
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Boat Market provides a marketplace for users to discover and
                            communicate about boats. Users should independently verify
                            information provided by other users before entering into a
                            transaction.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            14. Changes to These Terms
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            We may update these Terms & Conditions from time to time. Updated
                            terms will be published on this page with a revised effective
                            date.
                        </p>
                    </section>

                    <section className="mt-10">
                        <h2 className="text-2xl font-bold text-gray-900">
                            15. Contact Us
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            If you have questions about these Terms & Conditions, contact us
                            at:
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