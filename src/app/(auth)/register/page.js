"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Register() {
      const router = useRouter()
      const [showPassword, setShowPassword] = useState(false)
      const [step, setStep] = useState(1)
      const [accountType, setAccountType] = useState("")

      const handleNext = (e) => {
            e.preventDefault()

            if (accountType === "seller") {
                  setStep(2)
            } else {
                  router.push("/explore")
            }
      }

      const handleCompleteRegistration = (e) => {
            e.preventDefault()

            // Seller registration API will be connected later
            console.log("Seller registration completed")
      }

      return (
            <div className="flex min-h-screen w-full bg-white">

                  {/* Left Side - Image */}
                  <div className="relative hidden w-1/2 bg-gray-100 lg:block">
                        <img
                              src="/images/aboutimage.webp"
                              alt="Boat Market"
                              className="absolute inset-0 h-full w-full object-cover grayscale opacity-90"
                        />
                  </div>

                  {/* Right Side - Form */}
                  <div className="relative flex w-full items-center justify-center px-6 lg:w-1/2">
                        <div className="w-full max-w-md">

                              {/* Back to Home */}
                              <Link
                                    href="/"
                                    className="mb-8 inline-flex items-center text-sm font-bold text-gray-500 transition hover:text-gray-900"
                              >
                                    &larr; Back to Home
                              </Link>

                              {/* Heading */}
                              <div className="mb-8 text-center">
                                    <h1 className="text-3xl font-bold text-gray-900">
                                          {step === 1
                                                ? "Create Account"
                                                : "Boat Documents"}
                                    </h1>

                                    <p className="mt-2 text-sm text-gray-600">
                                          {step === 1
                                                ? "Join Boat Market today"
                                                : "Upload your required documents"}
                                    </p>
                              </div>

                              {/* Registration Form */}
                              {step === 1 ? (
                                    <form
                                          onSubmit={handleNext}
                                          className="space-y-4"
                                    >

                                          {/* Full Name */}
                                          <div>
                                                <label
                                                      htmlFor="name"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      Full Name
                                                </label>

                                                <input
                                                      id="name"
                                                      name="name"
                                                      type="text"
                                                      placeholder="Enter your full name"
                                                      required
                                                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B]"
                                                />
                                          </div>

                                          {/* Email */}
                                          <div>
                                                <label
                                                      htmlFor="email"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      Email
                                                </label>

                                                <input
                                                      id="email"
                                                      name="email"
                                                      type="email"
                                                      placeholder="Enter your email"
                                                      required
                                                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B]"
                                                />
                                          </div>

                                          {/* Password */}
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
                                                            name="password"
                                                            type={
                                                                  showPassword
                                                                        ? "text"
                                                                        : "password"
                                                            }
                                                            placeholder="Create a password"
                                                            required
                                                            className="w-full rounded-md border border-gray-200 px-4 py-3 pr-16 text-sm outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B]"
                                                      />

                                                      <button
                                                            type="button"
                                                            onClick={() =>
                                                                  setShowPassword(
                                                                        !showPassword
                                                                  )
                                                            }
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500"
                                                      >
                                                            {showPassword
                                                                  ? "Hide"
                                                                  : "Show"}
                                                      </button>
                                                </div>
                                          </div>

                                          {/* Account Type */}
                                          <div>
                                                <label
                                                      htmlFor="accountType"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      How will you use Boat Market?
                                                </label>

                                                <select
                                                      id="accountType"
                                                      name="accountType"
                                                      value={accountType}
                                                      onChange={(e) =>
                                                            setAccountType(
                                                                  e.target.value
                                                            )
                                                      }
                                                      required
                                                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B]"
                                                >
                                                      <option value="" disabled>
                                                            Select an option
                                                      </option>

                                                      <option value="buyer">
                                                            Buy Boats
                                                      </option>

                                                      <option value="seller">
                                                            Sell Boats
                                                      </option>
                                                </select>

                                                <p className="mt-2 text-xs text-gray-500">
                                                      You can change your account preferences
                                                      later from Settings.
                                                </p>
                                          </div>

                                          {/* Next / Create Account */}
                                          <div className="flex justify-end pt-2">
                                                <button
                                                      type="submit"
                                                      className="rounded-md bg-[#38543B] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#2d4530]"
                                                >
                                                      {accountType === "seller"
                                                            ? "Next"
                                                            : "Create Account"}
                                                </button>
                                          </div>

                                    </form>
                              ) : (
                                    <form
                                          onSubmit={handleCompleteRegistration}
                                          className="space-y-4"
                                    >

                                          {/* Registration Certificate */}
                                          <div>
                                                <label
                                                      htmlFor="registrationCertificate"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      Registration Certificate *
                                                </label>

                                                <input
                                                      id="registrationCertificate"
                                                      name="registrationCertificate"
                                                      type="file"
                                                      required
                                                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none file:mr-4 file:rounded file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200"
                                                />
                                          </div>

                                          {/* Insurance */}
                                          <div>
                                                <label
                                                      htmlFor="insurance"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      Insurance Document
                                                </label>

                                                <input
                                                      id="insurance"
                                                      name="insurance"
                                                      type="file"
                                                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none file:mr-4 file:rounded file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200"
                                                />
                                          </div>

                                          {/* Proof of Ownership */}
                                          <div>
                                                <label
                                                      htmlFor="proofOfOwnership"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      Bill of Sale / Proof of Ownership *
                                                </label>

                                                <input
                                                      id="proofOfOwnership"
                                                      name="proofOfOwnership"
                                                      type="file"
                                                      required
                                                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none file:mr-4 file:rounded file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200"
                                                />
                                          </div>

                                          {/* Other Documents */}
                                          <div>
                                                <label
                                                      htmlFor="otherDocuments"
                                                      className="mb-2 block text-sm font-semibold text-gray-700"
                                                >
                                                      Other Documents
                                                </label>

                                                <input
                                                      id="otherDocuments"
                                                      name="otherDocuments"
                                                      type="file"
                                                      className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm outline-none file:mr-4 file:rounded file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200"
                                                />
                                          </div>

                                          {/* Buttons */}
                                          <div className="flex justify-end gap-3 pt-2">

                                                {/* Back */}
                                                <button
                                                      type="button"
                                                      onClick={() => setStep(1)}
                                                      className="rounded-md border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                                                >
                                                      Back
                                                </button>

                                                {/* Complete Registration */}
                                                <button
                                                      type="submit"
                                                      className="rounded-md bg-[#38543B] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#2d4530]"
                                                >
                                                      Complete Registration
                                                </button>

                                          </div>

                                    </form>
                              )}

                              {/* Sign In */}
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

This version has no Confirm Password, and importantly, buyers don't get the Boat Documents step. Only users who select Sell Boats go to the document step.