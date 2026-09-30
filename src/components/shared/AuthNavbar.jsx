"use client"

import { useState } from "react"
import Link from "next/link"
import { FiBell, FiChevronDown, FiUser, FiLogOut, FiSettings } from "react-icons/fi"

export default function AuthNavbar({ 
      user = {
            name: "Shaik Parveez",
            email: "shaikparveez290@gmail.com",
            initials: "SP"
      } 
}) {
      const [showProfileMenu, setShowProfileMenu] = useState(false)
      const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true)

      return (
            <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
                  <div className="flex h-16 w-full items-center justify-between px-6 lg:px-10">
                        
                        {/* Left Side - Logo */}
                        <div className="flex items-center">
                              <Link
                                    href="/explore"
                                    className="flex flex-col leading-none"
                              >
                                    <span className="text-2xl font-black tracking-tight text-[#38543B]">
                                          BOAT
                                    </span>
                                    <span className="mt-0.5 text-[7px] font-bold tracking-[0.25em] text-gray-800">
                                          MARKET
                                    </span>
                              </Link>
                        </div>

                        {/* Middle - Reserved for future discussion */}
                        <div className="hidden flex-1 items-center justify-center md:flex">
                              {/* Middle section will be designed here */}
                        </div>

                        {/* Right Side - Notifications & Profile */}
                        <div className="flex items-center gap-4">
                              
                              {/* Notification Icon */}
                              <button
                                    type="button"
                                    onClick={() => setHasUnreadNotifications(false)}
                                    className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
                                    aria-label="View notifications"
                              >
                                    <FiBell className="h-5 w-5" />
                                    {hasUnreadNotifications && (
                                          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" />
                                    )}
                              </button>

                              {/* Profile Section */}
                              <div className="relative">
                                    <button
                                          type="button"
                                          onClick={() => setShowProfileMenu(!showProfileMenu)}
                                          className="flex items-center gap-3 rounded-full py-1 pl-1 pr-2 transition hover:bg-gray-100/80 focus:outline-none"
                                          aria-expanded={showProfileMenu}
                                    >
                                          {/* Avatar Circle */}
                                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#38543B] text-xs font-bold text-white shadow-sm">
                                                {user.initials}
                                          </div>

                                          {/* Name & Email */}
                                          <div className="hidden text-left sm:block">
                                                <div className="text-xs font-bold leading-tight text-gray-900">
                                                      {user.name}
                                                </div>
                                                <div className="text-[11px] leading-tight text-gray-500">
                                                      {user.email}
                                                </div>
                                          </div>

                                          <FiChevronDown className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${showProfileMenu ? "rotate-180" : ""}`} />
                                    </button>

                                    {/* Profile Dropdown Menu */}
                                    {showProfileMenu && (
                                          <div className="absolute right-0 mt-2 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-100">
                                                {/* Mobile User Info */}
                                                <div className="border-b border-gray-100 px-3 py-2.5 sm:hidden">
                                                      <p className="text-xs font-bold text-gray-900">{user.name}</p>
                                                      <p className="text-[11px] text-gray-500">{user.email}</p>
                                                </div>

                                                <div className="py-1 text-sm text-gray-700">
                                                      <button 
                                                            type="button"
                                                            onClick={() => setShowProfileMenu(false)}
                                                            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50"
                                                      >
                                                            <FiUser className="h-4 w-4 text-gray-500" />
                                                            My Profile
                                                      </button>

                                                      <button 
                                                            type="button"
                                                            onClick={() => setShowProfileMenu(false)}
                                                            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50"
                                                      >
                                                            <FiSettings className="h-4 w-4 text-gray-500" />
                                                            Account Settings
                                                      </button>

                                                      <div className="my-1 border-t border-gray-100" />

                                                      <Link
                                                            href="/login"
                                                            onClick={() => setShowProfileMenu(false)}
                                                            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs font-medium text-red-600 hover:bg-red-50"
                                                      >
                                                            <FiLogOut className="h-4 w-4 text-red-500" />
                                                            Sign Out
                                                      </Link>
                                                </div>
                                          </div>
                                    )}
                              </div>

                        </div>

                  </div>
            </header>
      )
}
