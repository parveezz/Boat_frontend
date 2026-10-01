
"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

export default function VerifyOTP() {
      const router = useRouter()

      const [otp, setOtp] = useState(["", "", "", "", "", ""])
      const [error, setError] = useState("")
      const [resending, setResending] = useState(false)

      const inputRefs = useRef([])

      const handleChange = (value, index) => {
            // Allow only numbers
            if (!/^\d?$/.test(value)) return

            const newOtp = [...otp]
            newOtp[index] = value

            setOtp(newOtp)
            setError("")

            // Move to next input
            if (value && index < 5) {
                  inputRefs.current[index + 1]?.focus()
            }
      }

      const handleKeyDown = (e, index) => {
            // Move to previous input on backspace
            if (
                  e.key === "Backspace" &&
                  !otp[index] &&
                  index > 0
            ) {
                  inputRefs.current[index - 1]?.focus()
            }
      }

      const handlePaste = (e) => {
            e.preventDefault()

            const pastedData = e.clipboardData
                  .getData("text")
                  .replace(/\D/g, "")
                  .slice(0, 6)

            if (!pastedData) return

            const newOtp = [...otp]

            pastedData.split("").forEach((digit, index) => {
                  newOtp[index] = digit
            })

            setOtp(newOtp)
            setError("")

            const nextIndex = Math.min(pastedData.length, 5)

            inputRefs.current[nextIndex]?.focus()
      }

      const handleSubmit = (e) => {
            e.preventDefault()

            const enteredOtp = otp.join("")

            if (enteredOtp.length !== 6) {
                  setError("Please enter the complete 6-digit OTP.")
                  return
            }

            // OTP verification API will be connected later
            console.log("OTP:", enteredOtp)

            router.push("/explore")
      }

      const handleResend = () => {
            setResending(true)
            setError("")

            // Resend OTP API will be connected later
            console.log("Resending OTP...")

            setTimeout(() => {
                  setResending(false)
            }, 1500)
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

                  {/* Right Side - OTP Form */}
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
                                          Verify OTP
                                    </h1>

                                    <p className="mt-2 text-sm text-gray-600">
                                          Enter the 6-digit verification code
                                          sent to your email
                                    </p>
                              </div>

                              {/* OTP Form */}
                              <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                              >

                                    {/* OTP Inputs */}
                                    <div>
                                          <label className="mb-3 block text-center text-sm font-semibold text-gray-700">
                                                Enter OTP
                                          </label>

                                          <div className="flex justify-center gap-2 sm:gap-3">
                                                {otp.map((digit, index) => (
                                                      <input
                                                            key={index}
                                                            ref={(element) => {
                                                                  inputRefs.current[index] =
                                                                        element
                                                            }}
                                                            type="text"
                                                            inputMode="numeric"
                                                            maxLength={1}
                                                            value={digit}
                                                            onChange={(e) =>
                                                                  handleChange(
                                                                        e.target.value,
                                                                        index
                                                                  )
                                                            }
                                                            onKeyDown={(e) =>
                                                                  handleKeyDown(
                                                                        e,
                                                                        index
                                                                  )
                                                            }
                                                            onPaste={handlePaste}
                                                            className="h-12 w-11 rounded-md border border-gray-200 text-center text-xl font-bold text-gray-900 outline-none transition focus:border-[#38543B] focus:ring-1 focus:ring-[#38543B] sm:h-14 sm:w-14"
                                                            aria-label={`OTP digit ${index + 1
                                                                  } `}
                                                      />
                                                ))}
                                          </div>

                                          {error && (
                                                <p className="mt-3 text-center text-sm font-medium text-red-500">
                                                      {error}
                                                </p>
                                          )}
                                    </div>

                                    {/* Verify Button */}
                                    <button
                                          type="submit"
                                          className="w-full rounded-md bg-[#38543B] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#2d4530]"
                                    >
                                          Verify OTP
                                    </button>

                                    {/* Resend OTP */}
                                    <div className="text-center">
                                          <p className="text-sm text-gray-600">
                                                Didn't receive the code?{" "}

                                                <button
                                                      type="button"
                                                      onClick={handleResend}
                                                      disabled={resending}
                                                      className="font-bold text-[#38543B] hover:underline disabled:cursor-not-allowed disabled:opacity-50"
                                                >
                                                      {resending
                                                            ? "Sending..."
                                                            : "Resend OTP"}
                                                </button>
                                          </p>
                                    </div>

                                    {/* Back to Login */}
                                    <div className="text-center">
                                          <Link
                                                href="/login"
                                                className="text-sm font-semibold text-gray-500 hover:text-gray-900"
                                          >
                                                &larr; Back to Login
                                          </Link>
                                    </div>

                              </form>
                        </div>
                  </div>
            </div>
      )
}
