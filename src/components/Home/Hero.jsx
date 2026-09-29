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

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Hero Content */}
                  <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
                        <div className="max-w-4xl text-white">

                              <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">
                                    Find Your Perfect Boat
                              </h1>

                              <p className="mt-6 text-lg md:text-xl">
                                    Discover boats made for your next adventure.
                              </p>

                        </div>
                  </div>

            </section>
      )
}