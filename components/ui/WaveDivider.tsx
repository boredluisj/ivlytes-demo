export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 block md:h-20 lg:h-28">
        <path d="M0,30 C300,60 900,0 1200,30 L1200,60 L0,60 Z" fill="var(--color-neutral-light, #f8fafc)" />
      </svg>
    </div>
  )
}
