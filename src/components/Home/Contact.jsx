import {
      FiUser,
      FiMail,
      FiTag,
      FiMessageSquare,
      FiPhone,
      FiMapPin,
} from "react-icons/fi"


export default function Contact() {
      return (
            <section
                  id="contact"
                  className="w-full bg-white px-6 py-12 lg:px-10 lg:py-16"
            >
                  <div className="mx-auto max-w-7xl">

                        {/* Heading */}
                        <div className="mb-10 max-w-2xl">
                              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#38543B]">
                                    Contact Us
                              </p>

                              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                                    Let&apos;s talk about
                                    <span className="text-[#38543B]"> your next boat.</span>
                              </h2>
                        </div>

                        {/* Contact Content */}
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">

                              {/* Contact Form */}
                              <div className="rounded-xl border border-gray-200 bg-[#f5f7f4] p-7 md:p-8">

                                    <h3 className="text-2xl font-bold text-gray-900">
                                          Send us a message
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                          Have a question or need help? Fill out the form and we&apos;ll
                                          get back to you.
                                    </p>

                                    <form className="mt-6 space-y-4">

                                          {/* Name */}
                                          <div>
                                                <label
                                                      htmlFor="name"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      Name
                                                </label>

                                                <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white transition focus-within:border-[#38543B] focus-within:ring-2 focus-within:ring-[#38543B]/10">
                                                      <div className="flex w-12 shrink-0 items-center justify-center border-r border-gray-200 text-gray-500">
                                                            <FiUser size={18} />
                                                      </div>

                                                      <input
                                                            id="name"
                                                            type="text"
                                                            placeholder="Enter your name"
                                                            className="w-full bg-transparent px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                                                      />
                                                </div>
                                          </div>

                                          {/* Email */}
                                          <div>
                                                <label
                                                      htmlFor="email"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      Email
                                                </label>

                                                <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white transition focus-within:border-[#38543B] focus-within:ring-2 focus-within:ring-[#38543B]/10">
                                                      <div className="flex w-12 shrink-0 items-center justify-center border-r border-gray-200 text-gray-500">
                                                            <FiMail size={18} />
                                                      </div>

                                                      <input
                                                            id="email"
                                                            type="email"
                                                            placeholder="Enter your email"
                                                            className="w-full bg-transparent px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                                                      />
                                                </div>
                                          </div>

                                          {/* Subject */}
                                          <div>
                                                <label
                                                      htmlFor="subject"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      Subject
                                                </label>

                                                <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white transition focus-within:border-[#38543B] focus-within:ring-2 focus-within:ring-[#38543B]/10">
                                                      <div className="flex w-12 shrink-0 items-center justify-center border-r border-gray-200 text-gray-500">
                                                            <FiTag size={18} />
                                                      </div>

                                                      <input
                                                            id="subject"
                                                            type="text"
                                                            placeholder="What can we help you with?"
                                                            className="w-full bg-transparent px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                                                      />
                                                </div>
                                          </div>

                                          {/* Message */}
                                          <div>
                                                <label
                                                      htmlFor="message"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      Message
                                                </label>

                                                <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white transition focus-within:border-[#38543B] focus-within:ring-2 focus-within:ring-[#38543B]/10">
                                                      <textarea
                                                            id="message"
                                                            rows={4}
                                                            placeholder="Write your message..."
                                                            className="w-full resize-none pl-3 bg-transparent  py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
                                                      />
                                                </div>
                                          </div>

                                          {/* Submit */}
                                          <button
                                                type="submit"
                                                className="w-full rounded-lg bg-[#38543B] px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-[#2d4530] hover:shadow-md"
                                          >
                                                Send Message
                                          </button>

                                    </form>
                              </div>

                              {/* Right Side Text */}
                              <div className="flex flex-col justify-center">

                                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#38543B]">
                                          We&apos;re Here To Help
                                    </p>

                                    <h3 className="mt-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                                          Have questions?
                                          <br />
                                          We&apos;d love to hear from you.
                                    </h3>

                                    <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">
                                          Whether you&apos;re looking for your first boat, searching for a
                                          specific model, or interested in selling your boat, our team is
                                          here to help you through the process.
                                    </p>

                                    <p className="mt-4 max-w-lg text-base leading-7 text-gray-600">
                                          Reach out to us and let&apos;s find the right solution for your
                                          boating journey.
                                    </p>

                                    {/* Contact Details */}
                                    <div className="mt-8 space-y-5">

                                          {/* Email */}
                                          <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white">
                                                      <FiMail size={18} />
                                                </div>

                                                <div>
                                                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                            Email
                                                      </p>

                                                      <p className="mt-1 text-sm font-semibold text-gray-900">
                                                            info@boatmarket.com
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Phone */}
                                          <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white">
                                                      <FiPhone size={18} />
                                                </div>

                                                <div>
                                                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                            Phone
                                                      </p>

                                                      <p className="mt-1 text-sm font-semibold text-gray-900">
                                                            +91 98765 43210
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Location */}
                                          <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#38543B] text-white">
                                                      <FiMapPin size={18} />
                                                </div>

                                                <div>
                                                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                                            Location
                                                      </p>

                                                      <p className="mt-1 text-sm font-semibold text-gray-900">
                                                            Hyderabad, India
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