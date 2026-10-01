"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
      const router = useRouter()
      const [showPassword, setShowPassword] = useState(false)

      const handleSubmit = (e) => {
            e.preventDefault()
            router.push("/explore")
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
                                          Welcome Back
                                    </h1>

                                    <p className="mt-2 text-sm text-gray-600">
                                          Sign in to your Boat Market account
                                    </p>
                              </div>

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

                                    <div>
                                          <div className="mb-2 flex items-center justify-between">
                                                <label
                                                      htmlFor="password"
                                                      className="text-sm font-semibold text-gray-700"
                                                >
                                                      Password
                                                </label>

                                                <Link
                                                      href="/forgot-password"
                                                      className="text-xs font-semibold text-[#38543B] hover:underline"
                                                >
                                                      Forgot password?
                                                </Link>
                                          </div>

                                          <div className="relative">
                                                <input
                                                      id="password"
                                                      type={showPassword ? "text" : "password"}
                                                      placeholder="Enter your password"
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

                                    <button
                                          type="submit"
                                          className="w-full rounded-md bg-[#38543B] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2d4530]"
                                    >
                                          Sign In
                                    </button>
                              </form>

                              <p className="mt-6 text-center text-sm text-gray-600">
                                    Don&apos;t have an account?{" "}
                                    <Link
                                          href="/register"
                                          className="font-bold text-[#38543B] hover:underline"
                                    >
                                          Create Account
                                    </Link>
                              </p>

                        </div>
                  </div>
            </div>
      )
}