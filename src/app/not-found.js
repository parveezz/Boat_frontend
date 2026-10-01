import Link from "next/link"
import {
  FiAnchor,
  FiArrowLeft,
  FiCompass,
  FiMapPin,
} from "react-icons/fi"
import { TbSailboat } from "react-icons/tb"

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f5f7f4]">
      {/* Hydration-safe inline keyframes without styled-jsx hash injection */}
      <style>{`
        @keyframes heroBoatFloat {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes moveTides {
          0% { transform: translate3d(-90px, 0, 0); }
          100% { transform: translate3d(85px, 0, 0); }
        }
        @keyframes sailAcross {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 140px)); }
        }
        @keyframes bobWave {
          0% { transform: translateY(2px) rotate(-4deg); }
          50% { transform: translateY(-3px) rotate(1deg); }
          100% { transform: translateY(3px) rotate(5deg); }
        }

        .hero-boat {
          animation: heroBoatFloat 4s ease-in-out infinite;
        }

        .tide-use-1 {
          animation: moveTides 9s cubic-bezier(0.55, 0.5, 0.45, 0.5) -2s infinite;
        }
        .tide-use-2 {
          animation: moveTides 14s cubic-bezier(0.55, 0.5, 0.45, 0.5) -4s infinite;
        }
        .tide-use-3 {
          animation: moveTides 20s cubic-bezier(0.55, 0.5, 0.45, 0.5) -5s infinite;
        }

        .sailing-boat {
          left: -80px;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .boat-front {
          animation-name: sailAcross;
          animation-duration: 18s;
          animation-delay: 0s;
        }
        .boat-mid-1 {
          animation-name: sailAcross;
          animation-duration: 24s;
          animation-delay: 5s;
        }
        .boat-far {
          animation-name: sailAcross;
          animation-duration: 32s;
          animation-delay: 10s;
        }
        .boat-mid-2 {
          animation-name: sailAcross;
          animation-duration: 22s;
          animation-delay: 15s;
        }

        .boat-bob {
          animation: bobWave 3s ease-in-out infinite alternate;
        }
        .boat-bob-light {
          animation: bobWave 2.2s ease-in-out infinite alternate;
        }
        .boat-bob-heavy {
          animation: bobWave 3.8s ease-in-out infinite alternate;
        }

        .boat-wake {
          position: absolute;
          left: -10px;
          bottom: 1px;
          height: 2px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.45);
          filter: blur(0.6px);
        }

        @media (prefers-reduced-motion: reduce) {
          .sailing-boat, .boat-bob, .boat-bob-light, .boat-bob-heavy, .hero-boat, .tide-use-1, .tide-use-2, .tide-use-3 {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          BACKGROUND DECORATIONS
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#38543B]/5 blur-3xl" />
        <div className="absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-emerald-100/40 blur-3xl" />

        <div className="absolute left-[8%] top-[18%] hidden rotate-12 text-[#38543B]/10 md:block">
          <FiCompass className="h-24 w-24" />
        </div>

        <div className="absolute right-[10%] top-[20%] hidden text-[#38543B]/10 md:block">
          <TbSailboat className="h-16 w-16 rotate-12" />
        </div>

        <div className="absolute bottom-[40%] left-[12%] hidden text-[#38543B]/10 lg:block">
          <FiMapPin className="h-10 w-10" />
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="relative z-10 flex w-full flex-col items-center px-6 pb-48 text-center">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-[#38543B]/10 bg-white px-3 py-1.5 shadow-sm">
          <FiAnchor className="h-3.5 w-3.5 text-[#38543B]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#38543B]">
            Lost at Sea
          </span>
        </div>

        {/* 404 + Floater Boat */}
        <div className="relative">
          <h1 className="select-none text-[44px] font-semibold leading-none tracking-[-0.1em] text-[#38543B] sm:text-[160px] md:text-[200px]">
            404
          </h1>

          <div className="absolute left-1/2 -top-7 -translate-x-1/2 sm:-top-11">
            <div className="hero-boat">
              <div className="relative flex flex-col items-center">
                <TbSailboat className="h-14 w-14 text-[#38543B] sm:h-18 sm:w-18" />
                <div className="mt-[-2px] h-2 w-20 rounded-full bg-[#38543B]/20 blur-sm sm:w-28" />
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="mt-3 max-w-lg">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Looks like you drifted off course.
          </h2>
          <p className="mt-2 text-xs leading-6 text-gray-500 sm:text-sm">
            {"The page you're looking for doesn't exist or may have been carried away by the tides."}
          </p>
        </div>

        {/* Back Link */}
        <Link
          href="/"
          className="mt-6 flex items-center gap-2 rounded-full bg-[#38543B] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-200 hover:bg-[#2d4530] hover:shadow-lg hover:-translate-y-0.5"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Safe Harbors
        </Link>
      </div>

      {/* =====================================================
          BOTTOM OCEAN & MOVING WATER WITH BOATS
      ===================================================== */}
      <div className="absolute bottom-0 left-0 h-44 w-full overflow-hidden">
        {/* Animated Tide SVG Layer */}
        <svg
          className="absolute -top-7 left-0 h-28 w-[200vw]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="tide-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g>
            <use href="#tide-path" x="48" y="0" fill="rgba(159, 200, 192, 0.45)" className="tide-use-1" />
            <use href="#tide-path" x="48" y="2" fill="rgba(121, 175, 167, 0.65)" className="tide-use-2" />
            <use href="#tide-path" x="48" y="4" fill="#58988e" className="tide-use-3" />
          </g>
        </svg>

        {/* Deep Ocean Base */}
        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-b from-[#58988e] to-[#305851]" />

        {/* Sailing Boats */}
        <div className="sailing-boat boat-far absolute top-[6px] z-10 opacity-70">
          <div className="boat-bob-light">
            <TbSailboat className="h-5 w-5 text-white/80" />
            <div className="boat-wake w-4" />
          </div>
        </div>

        <div className="sailing-boat boat-mid-1 absolute top-[14px] z-20">
          <div className="boat-bob">
            <TbSailboat className="h-7 w-7 text-white drop-shadow" />
            <div className="boat-wake w-6" />
          </div>
        </div>

        <div className="sailing-boat boat-front absolute top-[18px] z-30">
          <div className="boat-bob-heavy">
            <TbSailboat className="h-9 w-9 text-emerald-50 drop-shadow-md" />
            <div className="boat-wake w-8" />
          </div>
        </div>

        <div className="sailing-boat boat-mid-2 absolute top-[24px] z-20">
          <div className="boat-bob">
            <TbSailboat className="h-6 w-6 text-white/90 drop-shadow" />
            <div className="boat-wake w-5" />
          </div>
        </div>

        {/* Water Surface Glints */}
        <div className="absolute bottom-6 left-[18%] h-1 w-20 rounded-full bg-white/20 blur-[0.5px]" />
        <div className="absolute bottom-14 left-[46%] h-1 w-28 rounded-full bg-white/25 blur-[0.5px]" />
        <div className="absolute bottom-8 right-[24%] h-1 w-24 rounded-full bg-white/20 blur-[0.5px]" />
      </div>
    </main>
  )
}