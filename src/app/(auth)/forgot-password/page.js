"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ForgotPassword() {
      const [submitted, setSubmitted] = useState(false)

      const handleSubmit = (e) => {
            e.preventDefault()
            setSubmitted(true)

            // Forgot password API will be connected later
      }

      return (
            <div className="flex min-h-screen w-full bg-white">
                  {/* Left Side - Image */}
                  <div className="hidden relative w-1/2 lg:block bg-gray-100">
                        <Image
                              src="/images/aboutimage.webp"
                              alt="Background"
                              fill
                              priority
                              sizes="50vw"
                              className="object-cover grayscale opacity-90"
                        />
                  </div>

                  {/* Right Side - Form */}
                  <div className="relative flex w-full items-center justify-center px-6 lg:w-1/2">
                        <Link href="/" className="absolute top-8 right-12 text-sm font-bold text-gray-500 transition hover:text-gray-900 md:right-12">
                              &larr; Back to Home
                        </Link>
                        <div className="w-full max-w-md">

                              <div className="mb-8 text-center">
                                    <h1 className="text-3xl font-bold text-gray-900">
                                          Forgot Password?
                                    </h1>

                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                          Enter your email address and we&apos;ll send you a link to reset
                                          your password.
                                    </p>
                              </div>

                              {submitted && (
                                    <div className="mb-5 rounded-md bg-green-50 px-4 py-3 text-sm text-green-700">
                                          If an account exists with this email, a reset link will be sent.
                                    </div>
                              )}

                              <form onSubmit={handleSubmit} className="space-y-5">

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

                                    <button
                                          type="submit"
                                          className="w-full rounded-md bg-[#38543B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2d4530]"
                                    >
                                          Send Reset Link
                                    </button>

                              </form>

                              <div className="mt-6 text-center">
                                    <Link
                                          href="/login"
                                          className="text-sm font-bold text-[#38543B] hover:underline"
                                    >
                                          ← Back to Sign In
                                    </Link>
                              </div>

                        </div>
                  </div>
            </div>
      )
}