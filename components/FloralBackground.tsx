/**
 * Decorative botanical branches rendered along both sides of the page.
 * Uses inline SVGs positioned on each side with varying rotations for an organic feel.
 */

const LeafBranch = () => (
  <svg viewBox="0 0 150 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main stem */}
    <path
      d="M75 0 C72 60, 78 120, 75 200 C72 280, 78 340, 75 400"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    {/* Leaves left */}
    <path d="M75 50 C55 30, 25 35, 18 55 C14 70, 45 62, 75 50" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.6" />
    <path d="M75 120 C50 95, 10 105, 8 130 C6 150, 48 140, 75 120" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.6" />
    <path d="M75 200 C58 180, 30 185, 26 205 C24 220, 52 212, 75 200" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.6" />
    <path d="M75 280 C55 260, 20 268, 16 290 C14 308, 50 298, 75 280" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.6" />
    <path d="M75 350 C60 335, 38 338, 35 355 C33 365, 55 362, 75 350" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.6" />
    {/* Leaves right */}
    <path d="M75 80 C95 60, 125 65, 130 85 C133 100, 102 92, 75 80" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.6" />
    <path d="M75 160 C100 140, 135 148, 138 170 C140 188, 105 178, 75 160" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.6" />
    <path d="M75 240 C92 222, 118 228, 122 248 C124 262, 98 255, 75 240" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.6" />
    <path d="M75 320 C98 302, 130 310, 132 330 C134 345, 105 338, 75 320" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.6" />
  </svg>
)

const SmallLeaf = () => (
  <svg viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M50 0 C52 50, 48 100, 50 150 C52 200, 49 230, 50 250"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path d="M50 40 C35 25, 12 32, 10 50 C8 62, 32 55, 50 40" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 100 C68 82, 90 88, 92 108 C94 122, 70 115, 50 100" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 155 C32 140, 8 146, 6 165 C4 180, 34 172, 50 155" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 210 C70 195, 92 200, 94 218 C95 228, 68 224, 50 210" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.5" />
  </svg>
)

const leftBranches = [
  { top: '2%', rotate: '15deg', size: 100, Component: SmallLeaf },
  { top: '25%', rotate: '-5deg', size: 120, Component: LeafBranch },
  { top: '50%', rotate: '12deg', size: 90, Component: SmallLeaf },
  { top: '75%', rotate: '-8deg', size: 110, Component: LeafBranch },
]

const rightBranches = [
  { top: '12%', rotate: '-12deg', size: 110, Component: LeafBranch },
  { top: '38%', rotate: '8deg', size: 90, Component: SmallLeaf },
  { top: '62%', rotate: '-6deg', size: 120, Component: LeafBranch },
  { top: '85%', rotate: '10deg', size: 95, Component: SmallLeaf },
]

export default function FloralBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Left side */}
      {leftBranches.map((b, i) => (
        <div
          key={`left-${i}`}
          className="absolute text-brown-light/25"
          style={{
            top: b.top,
            left: 0,
            transform: `rotate(${b.rotate})`,
            width: `${b.size}px`,
            transformOrigin: 'top left',
          }}
        >
          <b.Component />
        </div>
      ))}

      {/* Right side */}
      {rightBranches.map((b, i) => (
        <div
          key={`right-${i}`}
          className="absolute text-brown-light/25"
          style={{
            top: b.top,
            right: 0,
            transform: `scaleX(-1) rotate(${b.rotate})`,
            width: `${b.size}px`,
            transformOrigin: 'top right',
          }}
        >
          <b.Component />
        </div>
      ))}
    </div>
  )
}
