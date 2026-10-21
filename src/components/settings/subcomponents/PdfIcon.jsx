// Exact PDF Icon from Screenshot
export default function PdfIcon() {
    return (
        <div className="relative flex h-9 w-8 shrink-0 items-center justify-center">
            <svg
                viewBox="0 0 32 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
            >
                {/* Paper sheet */}
                <path
                    d="M2 3.5C2 2.67157 2.67157 2 3.5 2H21L30 11V34.5C30 35.3284 29.3284 36 28.5 36H3.5C2.67157 36 2 35.3284 2 34.5V3.5Z"
                    fill="#FFFFFF"
                    stroke="#D1D5DB"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                {/* Folded corner */}
                <path
                    d="M21 2V9.5C21 10.3284 21.6716 11 22.5 11H30"
                    fill="#F3F4F6"
                    stroke="#D1D5DB"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                {/* Red PDF banner tag */}
                <rect x="0" y="20" width="20" height="12" rx="2" fill="#E11D48" />
                <text
                    x="10"
                    y="29"
                    fill="#FFFFFF"
                    fontSize="6.5"
                    fontWeight="800"
                    textAnchor="middle"
                    fontFamily="Inter, system-ui, sans-serif"
                    letterSpacing="0.2px"
                >
                    PDF
                </text>
            </svg>
        </div>
    )
}
