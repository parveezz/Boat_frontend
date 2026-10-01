"use client"

import { useState } from "react"
import Link from "next/link"

import {
      FiBell,
      FiChevronDown,
      FiUser,
      FiLogOut,
      FiSettings,
      FiShoppingBag,
      FiBriefcase,
} from "react-icons/fi"

export default function AuthNavbar({
      user = {
            name: "Shaik Parveez",
            email: "shaikparveez290@gmail.com",
            initials: "SP",
      },
}) {
      const [showProfileMenu, setShowProfileMenu] = useState(false)
      const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true)
      const [activeRole, setActiveRole] = useState("buyer")
      const [isNotificationActive, setIsNotificationActive] = useState(false)

      return (
            <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
                  <div className="relative flex h-14 w-full items-center px-5 lg:px-8">

                        {/* =====================================================
            LOGO
        ===================================================== */}
                        <div className="flex items-center">
                              <Link
                                    href="/explore"
                                    className="flex flex-col leading-none"
                              >
                                    <span className="text-xl font-black tracking-tight text-[#38543B]">
                                          BOAT
                                    </span>

                                    <span className="mt-0.5 text-[6px] font-bold tracking-[0.25em] text-gray-800">
                                          MARKET
                                    </span>
                              </Link>
                        </div>

                        {/* =====================================================
            CENTER - BUYER / SELLER
        ===================================================== */}
                        <div className="absolute left-1/2 hidden -translate-x-1/2 sm:block">
                              <div className="flex items-center rounded-full border border-gray-200 bg-gray-100 p-0.5">

                                    {/* BUYER */}
                                    <button
                                          type="button"
                                          onClick={() => setActiveRole("buyer")}
                                          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition-all duration-200 ${activeRole === "buyer"
                                                ? "bg-[#38543B] text-white shadow-sm"
                                                : "text-gray-500 hover:bg-white hover:text-[#38543B]"
                                                }`}
                                    >
                                          <FiShoppingBag className="h-3.5 w-3.5" />
                                          Buyer
                                    </button>

                                    {/* SELLER */}
                                    <button
                                          type="button"
                                          onClick={() => setActiveRole("seller")}
                                          className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition-all duration-200 ${activeRole === "seller"
                                                ? "bg-[#38543B] text-white shadow-sm"
                                                : "text-gray-500 hover:bg-white hover:text-[#38543B]"
                                                }`}
                                    >
                                          <FiBriefcase className="h-3.5 w-3.5" />
                                          Seller
                                    </button>

                              </div>
                        </div>

                        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}
                        <div className="ml-auto flex items-center">

                              {/* =================================================
              USER PROFILE
          ================================================= */}
                              <div className="relative flex items-center">

                                    {/* USER INFO BUTTON */}
                                    <button
                                          type="button"
                                          onClick={() => setShowProfileMenu(!showProfileMenu)}
                                          className={`flex items-center gap-2 rounded-full border py-0.5 pl-0.5 pr-1.5 transition-all duration-200 focus:outline-none ${showProfileMenu
                                                ? "border-[#38543B]/30 bg-[#f2f6f2]"
                                                : "border-transparent hover:border-gray-200 hover:bg-gray-50"
                                                }`}
                                          aria-expanded={showProfileMenu}
                                    >

                                          {/* AVATAR */}
                                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#38543B] text-[10px] font-bold text-white shadow-sm">
                                                {user.initials}
                                          </div>

                                          {/* NAME + EMAIL */}
                                          <div className="hidden text-left sm:block">
                                                <div className="text-[11px] font-bold leading-tight text-gray-900">
                                                      {user.name}
                                                </div>

                                                <div className="text-[10px] leading-tight text-gray-500">
                                                      {user.email}
                                                </div>
                                          </div>

                                          {/* CHEVRON */}
                                          <FiChevronDown
                                                className={`h-3.5 w-3.5 text-gray-400 transition-transform duration-200 ${showProfileMenu
                                                      ? "rotate-180 text-[#38543B]"
                                                      : ""
                                                      }`}
                                          />
                                    </button>

                                    {/* =================================================
                PROFILE DROPDOWN
            ================================================= */}
                                    {showProfileMenu && (
                                          <div className="absolute right-0 top-full mt-2 w-60 rounded-xl border border-gray-100 bg-white p-1.5 shadow-xl ring-1 ring-black/5">

                                                {/* MOBILE USER INFO */}
                                                <div className="border-b border-gray-100 px-3 py-2 sm:hidden">
                                                      <p className="text-[11px] font-bold text-gray-900">
                                                            {user.name}
                                                      </p>

                                                      <p className="text-[10px] text-gray-500">
                                                            {user.email}
                                                      </p>
                                                </div>

                                                <div className="py-1">

                                                      {/* MY PROFILE */}
                                                      <button
                                                            type="button"
                                                            onClick={() => setShowProfileMenu(false)}
                                                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[11px] font-medium text-gray-700 transition hover:bg-[#f2f6f2] hover:text-[#38543B]"
                                                      >
                                                            <FiUser className="h-3.5 w-3.5 text-gray-500" />
                                                            My Profile
                                                      </button>

                                                      {/* ACCOUNT SETTINGS */}
                                                      <button
                                                            type="button"
                                                            onClick={() => setShowProfileMenu(false)}
                                                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[11px] font-medium text-gray-700 transition hover:bg-[#f2f6f2] hover:text-[#38543B]"
                                                      >
                                                            <FiSettings className="h-3.5 w-3.5 text-gray-500" />
                                                            Account Settings
                                                      </button>

                                                      {/* DIVIDER */}
                                                      <div className="my-1 border-t border-gray-100" />

                                                      {/* SIGN OUT */}
                                                      <Link
                                                            href="/login"
                                                            onClick={() => setShowProfileMenu(false)}
                                                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[11px] font-medium text-red-600 transition hover:bg-red-50"
                                                      >
                                                            <FiLogOut className="h-3.5 w-3.5 text-red-500" />
                                                            Sign Out
                                                      </Link>

                                                </div>
                                          </div>
                                    )}

                                    {/* =================================================
                NOTIFICATION BELL
                AFTER USER INFO
            ================================================= */}
                                    <button
                                          type="button"
                                          onClick={() => {
                                                setHasUnreadNotifications(false)
                                                setIsNotificationActive(!isNotificationActive)
                                          }}
                                          className={`group relative ml-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 focus:outline-none ${isNotificationActive
                                                ? "border-[#38543B] bg-[#38543B] text-white shadow-sm"
                                                : "border-gray-200 bg-white text-gray-500 hover:border-[#38543B]/40 hover:bg-[#eef4ee] hover:text-[#38543B]"
                                                }`}
                                          aria-label="View notifications"
                                    >
                                          <FiBell
                                                className={`h-4 w-4 transition-transform duration-200 ${isNotificationActive
                                                      ? "scale-105"
                                                      : "group-hover:rotate-[-8deg]"
                                                      }`}
                                          />

                                          {/* UNREAD INDICATOR */}
                                          {hasUnreadNotifications && (
                                                <span className="absolute right-[4px] top-[4px] h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                                          )}
                                    </button>

                              </div>
                        </div>
                  </div>

                  {/* =====================================================
          MOBILE BUYER / SELLER
      ===================================================== */}
                  <div className="flex justify-center border-t border-gray-100 px-4 py-2 sm:hidden">
                        <div className="flex items-center rounded-full border border-gray-200 bg-gray-100 p-0.5">

                              {/* BUYER */}
                              <button
                                    type="button"
                                    onClick={() => setActiveRole("buyer")}
                                    className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-semibold transition-all duration-200 ${activeRole === "buyer"
                                          ? "bg-[#38543B] text-white shadow-sm"
                                          : "text-gray-500 hover:bg-white hover:text-[#38543B]"
                                          }`}
                              >
                                    <FiShoppingBag className="h-3.5 w-3.5" />
                                    Buyer
                              </button>

                              {/* SELLER */}
                              <button
                                    type="button"
                                    onClick={() => setActiveRole("seller")}
                                    className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-semibold transition-all duration-200 ${activeRole === "seller"
                                          ? "bg-[#38543B] text-white shadow-sm"
                                          : "text-gray-500 hover:bg-white hover:text-[#38543B]"
                                          }`}
                              >
                                    <FiBriefcase className="h-3.5 w-3.5" />
                                    Seller
                              </button>

                        </div>
                  </div>
            </header>
      )
}