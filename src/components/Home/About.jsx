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
                  className="w-full bg-[#f5f7f4] px-6 py-12 lg:px-10 lg:py-16"
            >
                  <div className="mx-auto max-w-7xl">

                        {/* Heading */}
                        <div className="mb-8 max-w-3xl">
                              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#38543B]">
                                    About Us
                              </p>

                              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                                    Find the boat that fits
                                    <span className="text-[#38543B]"> your journey.</span>
                              </h2>

                              <p className="mt-4 text-base leading-7 text-gray-600">
                                    We make buying and selling boats simple, transparent, and
                                    convenient. Whether you are looking for your first boat or
                                    upgrading to your next one, our marketplace brings boats and
                                    buyers together in one place.
                              </p>
                        </div>

                        {/* Content */}
                        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

                              {/* Image */}
                              <div className="relative overflow-hidden rounded-2xl">
                                    <Image
                                          src="/images/aboutimage.webp"
                                          alt="Boat on the water"
                                          width={1200}
                                          height={800}
                                          className="h-[320px] w-full object-cover md:h-[380px]"
                                    />

                                    <div className="absolute inset-0 bg-black/10" />
                              </div>

                              {/* Text */}
                              <div>
                                    <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                          Built for people who love being on the water.
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-gray-600">
                                          Our goal is to create a trusted marketplace where boat owners
                                          can showcase their boats and buyers can discover the right
                                          vessel with confidence.
                                    </p>

                                    <p className="mt-3 text-sm leading-7 text-gray-600">
                                          From fishing boats and family cruisers to performance and
                                          recreational boats, we bring different types of boats together
                                          so you can explore your options easily.
                                    </p>

                                    {/* Features */}
                                    <div className="mt-6 grid gap-5 sm:grid-cols-2">

                                          {/* Trusted Listings */}
                                          <div className="flex items-start gap-3">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white">
                                                      <FiCheckCircle size={17} />
                                                </div>

                                                <div>
                                                      <h4 className="text-sm font-bold text-gray-900">
                                                            Trusted Listings
                                                      </h4>

                                                      <p className="mt-1 text-xs leading-5 text-gray-600">
                                                            Discover detailed boat listings with the information you need.
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Wide Selection */}
                                          <div className="flex items-start gap-3">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white">
                                                      <FiAnchor size={17} />
                                                </div>

                                                <div>
                                                      <h4 className="text-sm font-bold text-gray-900">
                                                            Wide Selection
                                                      </h4>

                                                      <p className="mt-1 text-xs leading-5 text-gray-600">
                                                            Explore boats for different lifestyles, needs, and budgets.
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Easy to Explore */}
                                          <div className="flex items-start gap-3">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white">
                                                      <FiArrowUpRight size={17} />
                                                </div>

                                                <div>
                                                      <h4 className="text-sm font-bold text-gray-900">
                                                            Easy to Explore
                                                      </h4>

                                                      <p className="mt-1 text-xs leading-5 text-gray-600">
                                                            Browse listings and find the boat you are looking for.
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Made for Boaters */}
                                          <div className="flex items-start gap-3">
                                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white">
                                                      <FiHeart size={17} />
                                                </div>

                                                <div>
                                                      <h4 className="text-sm font-bold text-gray-900">
                                                            Made for Boaters
                                                      </h4>

                                                      <p className="mt-1 text-xs leading-5 text-gray-600">
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