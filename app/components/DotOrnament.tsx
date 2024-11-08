// First, create a new component for the dot ornament
export function DotOrnament() {
  // Create an 11x11 grid to match the pattern
  const dots = Array.from({ length: 11 * 11 }, (_, i) => {
    const row = Math.floor(i / 11)
    const col = i % 11
    // Define the pattern of visible dots
    const isVisible = (
      // Center rows (4-6)
      (row >= 4 && row <= 6) ||
      // Center columns (4-6)
      (col >= 4 && col <= 6) ||
      // Top pattern
      (row === 0 && col >= 3 && col <= 7) ||
      (row === 1 && col >= 2 && col <= 8) ||
      (row === 2 && col >= 1 && col <= 9) ||
      (row === 3 && col >= 0 && col <= 10) ||
      // Bottom pattern (mirror of top)
      (row === 10 && col >= 3 && col <= 7) ||
      (row === 9 && col >= 2 && col <= 8) ||
      (row === 8 && col >= 1 && col <= 9) ||
      (row === 7 && col >= 0 && col <= 10)
    )

    return isVisible ? 1 : 0
  })

  return (
    <div
      className="grid aspect-square w-[250px]"
      style={{
        gridTemplateColumns: 'repeat(11, 1fr)',
        gap: '8px',
        position: 'absolute',
        right: '-70px',
        bottom: '-30px',
        transform: 'translate(20%, 20%)',
        zIndex: -10,
      }}
    >
      {dots.map((isVisible, i) => (
        <div
          key={i}
          className={`aspect-square rounded-full ${
            isVisible ? 'bg-[#F04B4B]/50' : 'opacity-0'
          }`}
          style={{
            width: '8px',
            height: '8px',
          }}
        />
      ))}
    </div>
  )
} 