export default function Works() {
      const steps = [
            {
                  number: "01",
                  title: "Explore Boats",
                  description:
                        "Browse our collection of boats and discover options that match your needs, lifestyle, and budget.",
            },
            {
                  number: "02",
                  title: "Choose Your Boat",
                  description:
                        "View the boat details, specifications, images, and other information before making your decision.",
            },
            {
                  number: "03",
                  title: "Connect With Seller",
                  description:
                        "Get in touch with the seller to ask questions, discuss the boat, and arrange the next steps.",
            },
            {
                  number: "04",
                  title: "Make It Yours",
                  description:
                        "Complete the process with the seller and get ready to enjoy your new boat on the water.",
            },
      ]

      return (
            <section
                  id="how-it-works"
                  className="flex min-h-screen w-full flex-col justify-center bg-white px-6 py-12 lg:px-10 lg:py-16"
            >
                  <div className="mx-auto max-w-7xl">

                        {/* Heading */}
                        <div className="mx-auto mb-10 max-w-2xl text-center">
                              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#38543B]">
                                    How It Works
                              </p>

                              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                                    Finding your boat is
                                    <span className="text-[#38543B]"> simple.</span>
                              </h2>

                              <p className="mt-4 text-base leading-7 text-gray-600">
                                    From discovering the right boat to connecting with the seller,
                                    we make the process simple and straightforward.
                              </p>
                        </div>

                        {/* Steps */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                              {steps.map((step) => (
                                    <div
                                          key={step.number}
                                          className="rounded-xl border border-gray-200 bg-[#f5f7f4] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                    >
                                          {/* Number */}
                                          <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#38543B] text-sm font-bold text-white">
                                                {step.number}
                                          </div>

                                          <h3 className="text-lg font-bold text-gray-900">
                                                {step.title}
                                          </h3>

                                          <p className="mt-3 text-sm leading-6 text-gray-600">
                                                {step.description}
                                          </p>
                                    </div>
                              ))}
                        </div>

                  </div>
            </section>
      )
}