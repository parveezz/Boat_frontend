"use client"

import { useEffect, useState } from "react"
import {
      FiCompass,
      FiSearch,
      FiMessageSquare,
      FiCheckCircle,
} from "react-icons/fi"
import { TbSailboat, TbFileCertificate } from "react-icons/tb"

export default function Works() {
      const steps = [
            {
                  number: "01",
                  title: "Explore Fleet",
                  icon: FiCompass,
                  description:
                        "Browse our curated collection of verified vessels. Filter by category, length, hull style, fuel capacity, and budget to find your match.",
            },
            {
                  number: "02",
                  title: "Review Details",
                  icon: FiSearch,
                  description:
                        "Inspect engine run hours, onboard avionics, maintenance history logs, and full-resolution deck layouts before deciding.",
            },
            {
                  number: "03",
                  title: "Connect With Seller",
                  icon: FiMessageSquare,
                  description:
                        "Directly message certified vessel owners or licensed yacht brokers to ask questions, request logbooks, and negotiate terms.",
            },
            {
                  number: "04",
                  title: "Book Sea Trial",
                  icon: TbSailboat,
                  description:
                        "Coordinate an on-dock marine inspection and an open-water trial run to verify hull integrity, propulsion, and real handling.",
            },
            {
                  number: "05",
                  title: "Transfer & Title",
                  icon: TbFileCertificate,
                  description:
                        "Complete secure digital escrow transactions, finalize closing documentation, and legally transfer marine registration and title.",
            },
            {
                  number: "06",
                  title: "Cast Off",
                  icon: FiCheckCircle,
                  description:
                        "Take delivery at your local marina or coordinate long-distance hauling, stock your gear, and set sail on the open water.",
            },
      ]

      // Track the automatically active box
      const [activeStep, setActiveStep] = useState(0)

      useEffect(() => {
            // Unstoppable 1.5s automatic loop
            const timer = setInterval(() => {
                  setActiveStep((prev) => (prev + 1) % steps.length)
            }, 1500)

            return () => clearInterval(timer)
      }, [steps.length])

      return (
            <section
                  id="how-it-works"
                  className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-white px-6 py-12 lg:px-10 lg:py-20"
            >
                  <div className="mx-auto max-w-7xl">
                        {/* Heading */}
                        <div className="mx-auto mb-14 max-w-2xl text-center">
                              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#38543B]">
                                    How It Works
                              </p>

                              <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                                    Finding your boat is
                                    <span className="text-[#38543B]"> simple.</span>
                              </h2>

                              <p className="mt-4 text-base leading-7 text-gray-600">
                                    From initial search to open-water handover, our streamlined 6-step
                                    process keeps your journey clear, secure, and hassle-free.
                              </p>
                        </div>

                        {/* 6-Card Grid: Purely automatic progression */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                              {steps.map((step, index) => {
                                    const Icon = step.icon
                                    const isActive = activeStep === index

                                    return (
                                          <div
                                                key={step.number}
                                                className={`relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 transition-all duration-700 ${isActive
                                                      ? "-translate-y-2 border-[#38543B] bg-white shadow-xl ring-2 ring-[#38543B]/20"
                                                      : "border-gray-200 bg-[#f5f7f4] shadow-sm"
                                                      }`}
                                          >
                                                {/* 1. Diagonal Light Shine Beam (Sweeps across when active) */}
                                                <span
                                                      className={`pointer-events-none absolute -inset-full top-0 block h-[200%] w-1/2 -rotate-45 transform bg-gradient-to-r from-transparent via-white/80 to-transparent transition-all duration-1000 ${isActive ? "left-[150%]" : "-left-full"
                                                            }`}
                                                />

                                                {/* 2. Top Edge Accent Line */}
                                                <span
                                                      className={`absolute inset-x-0 top-0 h-1 origin-left bg-[#38543B] transition-transform duration-500 ease-out ${isActive ? "scale-x-100" : "scale-x-0"
                                                            }`}
                                                />

                                                <div>
                                                      {/* Top Bar: Number Badge + Title */}
                                                      <div className="flex items-center gap-3">
                                                            <div
                                                                  className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-all duration-500 ${isActive
                                                                        ? "scale-110 bg-[#2d4530] shadow-md ring-4 ring-[#38543B]/25"
                                                                        : "bg-[#38543B]"
                                                                        }`}
                                                            >
                                                                  <span className="relative z-10">{step.number}</span>
                                                            </div>

                                                            <h3
                                                                  className={`text-lg font-bold transition-colors duration-500 ${isActive ? "text-[#38543B]" : "text-gray-900"
                                                                        }`}
                                                            >
                                                                  {step.title}
                                                            </h3>
                                                      </div>

                                                      {/* Description */}
                                                      <p className="mt-4 text-sm leading-6 text-gray-600">
                                                            {step.description}
                                                      </p>
                                                </div>

                                                {/* Bottom Bar: Step Tag + Floating Icon */}
                                                <div className="mt-6 flex items-center justify-between border-t border-gray-200/70 pt-4">
                                                      <span
                                                            className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-500 ${isActive ? "text-[#38543B]" : "text-gray-400"
                                                                  }`}
                                                      >
                                                            Step {step.number}
                                                      </span>

                                                      {/* Nautical Icon Auto Tilts & Floats */}
                                                      <div
                                                            className={`transition-all duration-500 ease-out ${isActive
                                                                  ? "-translate-y-1.5 rotate-12 scale-125 text-[#38543B]"
                                                                  : "text-gray-400"
                                                                  }`}
                                                      >
                                                            <Icon className="h-5 w-5" />
                                                      </div>
                                                </div>
                                          </div>
                                    )
                              })}
                        </div>
                  </div>
            </section>
      )
}