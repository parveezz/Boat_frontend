import Link from "next/link"

export default function Footer() {
      return (
            <footer className="w-full bg-[#f5f7f4] px-6 py-10 lg:px-10">
                  <div className="mx-auto max-w-7xl">

                        {/* Main Footer */}
                        <div className="grid gap-8 border-b border-gray-200 pb-8 md:grid-cols-2 lg:grid-cols-4">

                              {/* Brand */}
                              <div className="lg:col-span-2">
                                    <Link href="/" className="flex flex-col leading-none">
                                          <span className="text-2xl font-black tracking-tight text-[#38543B]">
                                                BOAT
                                          </span>

                                          <span className="mt-1 text-[7px] font-bold tracking-[0.25em] text-black">
                                                MARKET
                                          </span>
                                    </Link>

                                    <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
                                          Discover the right boat for your next adventure. Explore boats,
                                          connect with sellers, and make your journey on the water
                                          unforgettable.
                                    </p>
                              </div>

                              {/* Quick Links */}
                              <div>
                                    <h3 className="text-sm font-bold text-gray-900">
                                          Quick Links
                                    </h3>

                                    <nav className="mt-4 flex flex-col gap-3">
                                          <Link
                                                href="/"
                                                className="text-sm text-gray-600 transition hover:text-[#38543B]"
                                          >
                                                Home
                                          </Link>

                                          <Link
                                                href="/#about"
                                                className="text-sm text-gray-600 transition hover:text-[#38543B]"
                                          >
                                                About
                                          </Link>

                                          <Link
                                                href="/#how-it-works"
                                                className="text-sm text-gray-600 transition hover:text-[#38543B]"
                                          >
                                                How It Works
                                          </Link>
                                    </nav>
                              </div>

                              {/* Company */}
                              <div>
                                    <h3 className="text-sm font-bold text-gray-900">
                                          Company
                                    </h3>

                                    <nav className="mt-4 flex flex-col gap-3">
                                          <Link
                                                href="/#contact"
                                                className="text-sm text-gray-600 transition hover:text-[#38543B]"
                                          >
                                                Contact
                                          </Link>

                                          <Link
                                                href="/login"
                                                className="text-sm text-gray-600 transition hover:text-[#38543B]"
                                          >
                                                Sign In
                                          </Link>

                                          <Link
                                                href="/register"
                                                className="text-sm text-gray-600 transition hover:text-[#38543B]"
                                          >
                                                Join Now
                                          </Link>
                                    </nav>
                              </div>
                        </div>

                        {/* Bottom */}
                        <div className="flex flex-col gap-3 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
                              <p>
                                    © {new Date().getFullYear()} Boat Market. All rights reserved.
                              </p>

                              <div className="flex gap-5">
                                    <Link
                                          href="/privacy"
                                          className="transition hover:text-[#38543B]"
                                    >
                                          Privacy Policy
                                    </Link>

                                    <Link
                                          href="/terms"
                                          className="transition hover:text-[#38543B]"
                                    >
                                          Terms & Conditions
                                    </Link>
                              </div>
                        </div>

                  </div>
            </footer>
      )
}