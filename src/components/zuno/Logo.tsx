export function Logo({ size = 28 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="zg" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0" stopColor="oklch(0.88 0.16 80)" />
            <stop offset="1" stopColor="oklch(0.7 0.18 60)" />
          </linearGradient>
        </defs>
        <path d="M20 3 a17 17 0 1 1 -12 29" stroke="url(#zg)" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M13 12 L27 12 L13 28 L27 28" stroke="url(#zg)" strokeWidth="3.2" strokeLinejoin="round" strokeLinecap="round" fill="none" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight">ZUNO</span>
    </div>
  );
}
