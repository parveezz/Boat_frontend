import Image from "next/image";
import {
      FiCheckCircle,
      FiAnchor,
      FiArrowUpRight,
      FiHeart,
} from "react-icons/fi"

export default function About() {
      return (
            <section
                  id="about"
                  className="flex min-h-screen w-full flex-col justify-center bg-[#f5f7f4] px-6 py-12 lg:px-10 lg:py-12"
            >
                  {/* Removed max-w-7xl to allow full width */}
                  <div className="w-full">
                        {/* Content Grid */}
                        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">

                              {/* Image */}
                              <div className="relative w-full overflow-hidden rounded-2xl shadow-md">
                                    <Image
                                          src="/images/aboutimage.webp"
                                          alt="Boat on the water"
                                          width={1200}
                                          height={800}
                                          // Removed fixed heights so it scales with full width
                                          className="h-auto w-full object-cover"
                                    />
                              </div>

                              {/* Text Content */}
                              <div className="w-full">
                                    {/* Eyebrow */}
                                    <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#38543B]">
                                          About Us
                                    </p>

                                    {/* Main Heading */}
                                    <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                                          Built for people who love <br />
                                          <span className="text-[#38543B]">being on the water.</span>
                                    </h2>

                                    {/* Brighter body text */}
                                    <p className="mt-5 text-base leading-7 text-gray-700">
                                          Our goal is to create a trusted marketplace where boat owners
                                          can showcase their boats and buyers can discover the right
                                          vessel with confidence.
                                    </p>

                                    <p className="mt-3 text-base leading-7 text-gray-700">
                                          From fishing boats and family cruisers to performance and
                                          recreational boats, we bring different types of boats together
                                          so you can explore your options easily.
                                    </p>

                                    {/* Features */}
                                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                                          {/* Trusted Listings */}
                                          <div className="flex items-start gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white shadow-sm">
                                                      <FiCheckCircle size={18} />
                                                </div>
                                                <div>
                                                      <h4 className="text-sm font-bold text-gray-900">
                                                            Trusted Listings
                                                      </h4>
                                                      <p className="mt-1 text-sm leading-6 text-gray-700">
                                                            Discover detailed boat listings with the information you need.
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Wide Selection */}
                                          <div className="flex items-start gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white shadow-sm">
                                                      <FiAnchor size={18} />
                                                </div>
                                                <div>
                                                      <h4 className="text-sm font-bold text-gray-900">
                                                            Wide Selection
                                                      </h4>
                                                      <p className="mt-1 text-sm leading-6 text-gray-700">
                                                            Explore boats for different lifestyles, needs, and budgets.
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Easy to Explore */}
                                          <div className="flex items-start gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white shadow-sm">
                                                      <FiArrowUpRight size={18} />
                                                </div>
                                                <div>
                                                      <h4 className="text-sm font-bold text-gray-900">
                                                            Easy to Explore
                                                      </h4>
                                                      <p className="mt-1 text-sm leading-6 text-gray-700">
                                                            Browse listings and find the boat you are looking for.
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Made for Boaters */}
                                          <div className="flex items-start gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white shadow-sm">
                                                      <FiHeart size={18} />
                                                </div>
                                                <div>
                                                      <h4 className="text-sm font-bold text-gray-900">
                                                            Made for Boaters
                                                      </h4>
                                                      <p className="mt-1 text-sm leading-6 text-gray-700">
                                                            Designed around the needs of people who enjoy life on the water.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      )
}