"use client"

import Link from "next/link"
import { useState } from "react"

export default function Register() {
      const [showPassword, setShowPassword] = useState(false)
      const [step, setStep] = useState(1)

      const handleSubmit = (e) => {
            e.preventDefault()
            if (step === 1) {
                  setStep(2)
            } else {
                  // Register API will be connected later
            }
      }

      return (
            <div className="flex min-h-screen w-full bg-white">
                  {/* Left Side - Image */}
                  <div className="hidden relative w-1/2 lg:block bg-gray-100">
                        <img
                              src="/images/aboutimage.webp"
                              alt="Background"
                              className="absolute inset-0 h-full w-full object-cover grayscale opacity-90"
                        />
                  </div>

                  {/* Right Side - Form */}
                  <div className="relative flex w-full items-center justify-center px-6 lg:w-1/2">
                        <div className="w-full max-w-md">
                              <Link href="/" className="mb-8 inline-flex items-center text-sm font-bold text-gray-500 transition hover:text-gray-900">
                                    &larr; Back to Home
                              </Link>

                              <div className="mb-8 text-center">
                                    <h1 className="text-3xl font-bold text-gray-900">
                                          {step === 1 ? "Create Account" : "Boat Documents"}
                                    </h1>
                                    <p className="mt-2 text-sm text-gray-600">
                                          {step === 1 ? "Join Boat Market today" : "Upload your required documents"}
                                    </p>
                              </div>

                              <form onSubmit={handleSubmit} className="space-y-4">
                                    {step === 1 ? (
                                          <>
                                                <div>
                                                      <label
                                                            htmlFor="name"
                                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                                      >
                                                            Full Name
                                                      </label>
                                                      <input
                                                            id="name"
                                                            type="text"
                                                            placeholder="Enter your full name"
                                                            required
                                                            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B]"
                                                      />
                                                </div>

                                                <div>
                                                      <label
                                                            htmlFor="email"
                                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                                      >
                                                            Email
                                                      </label>
                                                      <input
                                                            id="email"
                                                            type="email"
                                                            placeholder="Enter your email"
                                                            required
                                                            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B]"
                                                      />
                                                </div>

                                                <div>
                                                      <label
                                                            htmlFor="password"
                                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                                      >
                                                            Password
                                                      </label>
                                                      <div className="relative">
                                                            <input
                                                                  id="password"
                                                                  type={showPassword ? "text" : "password"}
                                                                  placeholder="Create a password"
                                                                  required
                                                                  className="w-full rounded-md border border-gray-200 px-4 py-3 pr-16 text-sm outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B]"
                                                            />
                                                            <button
                                                                  type="button"
                                                                  onClick={() => setShowPassword(!showPassword)}
                                                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500"
                                                            >
                                                                  {showPassword ? "Hide" : "Show"}
                                                            </button>
                                                      </div>
                                                </div>

                                                <div>
                                                      <label
                                                            htmlFor="confirmPassword"
                                                            className="mb-2 block text-sm font-semibold text-gray-700"
                                                      >
                                                            Confirm Password
                                                      </label>
                                                      <input
                                                            id="confirmPassword"
                                                            type="password"
                                                            placeholder="Confirm your password"
                                                            required
                                                            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B]"
                                                      />
                                                </div>
                                          </>
                                    ) : (
                                          <>
                                                <div>
                                                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                            Registration Certificate *
                                                      </label>
                                                      <input type="file" required className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none file:mr-4 file:rounded file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200" />
                                                </div>

                                                <div>
                                                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                            Insurance Document
                                                      </label>
                                                      <input type="file" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none file:mr-4 file:rounded file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200" />
                                                </div>

                                                <div>
                                                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                            Bill of Sale / Proof of Ownership *
                                                      </label>
                                                      <input type="file" required className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none file:mr-4 file:rounded file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200" />
                                                </div>

                                                <div>
                                                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                                                            Other Documents
                                                      </label>
                                                      <input type="file" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none file:mr-4 file:rounded file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200" />
                                                </div>
                                          </>
                                    )}

                                    <div className="flex justify-end gap-3 pt-2">
                                          {step === 2 && (
                                                <button
                                                      type="button"
                                                      onClick={() => setStep(1)}
                                                      className="rounded-md border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                                                >
                                                      Back
                                                </button>
                                          )}
                                          <button
                                                type={step === 1 ? "button" : "submit"}
                                                onClick={step === 1 ? () => setStep(2) : undefined}
                                                className="rounded-md bg-[#38543B] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#2d4530]"
                                          >
                                                {step === 1 ? "Next" : "Complete Registration"}
                                          </button>
                                    </div>
                              </form>

                              <p className="mt-6 text-center text-sm text-gray-600">
                                    Already have an account?{" "}
                                    <Link
                                          href="/login"
                                          className="font-bold text-[#38543B] hover:underline"
                                    >
                                          Sign In
                                    </Link>
                              </p>

                        </div>
                  </div>
            </div>
      )
}