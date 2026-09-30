"use client"

export default function Hero() {
      return (
            <section className="relative h-screen w-full overflow-hidden">

                  {/* Background Video */}
                  <video
                        className="absolute inset-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                  >
                        <source src="/videos/boat-hero.mp4" type="video/mp4" />
                  </video>

                  {/* Gradient Overlay for text readability at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                  {/* Hero Content anchored at the bottom */}
                  <div className="relative z-10 flex h-full w-full flex-col justify-end px-6 pb-10 sm:px-10 md:pb-14 lg:px-16 lg:pb-16">
                        <div className="mx-auto w-full max-w-7xl">
                              <div className="max-w-4xl text-white">
                                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                          Find Your Perfect Boat
                                    </h1>

                                    <p className="mt-3 text-base text-gray-200 sm:text-xl">
                                          Discover boats made for your next adventure. Browse trusted listings, connect with sellers, and start your journey on the water.
                                    </p>
                              </div>
                        </div>
                  </div>

            </section>
      )
}
