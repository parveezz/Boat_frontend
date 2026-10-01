"use client"

import Link from "next/link"
import { useState } from "react"

export default function ResetPassword() {
      const [showPassword, setShowPassword] = useState(false)
      const [showConfirmPassword, setShowConfirmPassword] = useState(false)

      const handleSubmit = (e) => {
            e.preventDefault()

            // Reset password API will be connected later
      }

      return (
            <div className="flex min-h-screen w-full bg-white">

                  {/* Left Side - Image */}
                  <div className="relative hidden w-1/2 bg-gray-100 lg:block">
                        <img
                              src="/images/aboutimage.webp"
                              alt="Boat on the water"
                              className="absolute inset-0 h-full w-full object-cover grayscale opacity-90"
                        />
                  </div>

                  {/* Right Side - Form */}
                  <div className="relative flex w-full items-center justify-center px-6 lg:w-1/2">

                        {/* Back to Home */}
                        <Link
                              href="/"
                              className="absolute right-8 top-8 text-sm font-bold text-gray-500 transition hover:text-gray-900 md:right-12"
                        >
                              &larr; Back to Home
                        </Link>

                        <div className="w-full max-w-md">

                              {/* Heading */}
                              <div className="mb-8 text-center">

                                    <h1 className="text-3xl font-bold text-gray-900">
                                          Reset Password
                                    </h1>

                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                          Create a new password for your account.
                                    </p>

                              </div>

                              {/* Form */}
                              <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                              >

                                    {/* New Password */}
                                    <div>

                                          <label
                                                htmlFor="password"
                                                className="mb-2 block text-sm font-semibold text-gray-700"
                                          >
                                                New Password
                                          </label>

                                          <div className="relative">

                                                <input
                                                      id="password"
                                                      type={showPassword ? "text" : "password"}
                                                      placeholder="Enter your new password"
                                                      required
                                                      className="w-full rounded-md border border-gray-200 px-4 py-3 pr-16 text-sm outline-none transition focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B]"
                                                />

                                                <button
                                                      type="button"
                                                      onClick={() => setShowPassword(!showPassword)}
                                                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 transition hover:text-[#38543B]"
                                                >
                                                      {showPassword ? "Hide" : "Show"}
                                                </button>

                                          </div>

                                    </div>

                                    {/* Confirm Password */}
                                    <div>

                                          <label
                                                htmlFor="confirmPassword"
                                                className="mb-2 block text-sm font-semibold text-gray-700"
                                          >
                                                Confirm Password
                                          </label>

                                          <div className="relative">

                                                <input
                                                      id="confirmPassword"
                                                      type={showConfirmPassword ? "text" : "password"}
                                                      placeholder="Confirm your new password"
                                                      required
                                                      className="w-full rounded-md border border-gray-200 px-4 py-3 pr-16 text-sm outline-none transition focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B]"
                                                />

                                                <button
                                                      type="button"
                                                      onClick={() =>
                                                            setShowConfirmPassword(!showConfirmPassword)
                                                      }
                                                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 transition hover:text-[#38543B]"
                                                >
                                                      {showConfirmPassword ? "Hide" : "Show"}
                                                </button>

                                          </div>

                                    </div>

                                    {/* Reset Button */}
                                    <button
                                          type="submit"
                                          className="w-full rounded-md bg-[#38543B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2d4530]"
                                    >
                                          Reset Password
                                    </button>

                              </form>

                              {/* Back to Login */}
                              <div className="mt-6 text-center">

                                    <p className="text-sm text-gray-600">
                                          Remember your password?{" "}

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

            </div>
      )
}