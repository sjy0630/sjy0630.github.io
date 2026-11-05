// Decorative line drawing of a chip die: package, pins, and a few routed traces.
export default function ChipMark({ className = "" }) {
  const pins = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 240 240" fill="none" aria-hidden="true" className={className}>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        {pins.map((i) => {
          const p = 62 + i * 23;
          return (
            <g key={i}>
              <line x1={p} y1="28" x2={p} y2="50" />
              <line x1={p} y1="190" x2={p} y2="212" />
              <line x1="28" y1={p} x2="50" y2={p} />
              <line x1="190" y1={p} x2="212" y2={p} />
            </g>
          );
        })}
        <rect x="50" y="50" width="140" height="140" rx="10" />
        <rect x="78" y="78" width="84" height="84" rx="4" strokeDasharray="3 4" />
        <path d="M62 50 V66 H96 V78" />
        <path d="M131 190 V170 H150 V162" />
        <path d="M50 108 H66 V120 H78" />
        <path d="M190 154 H174 V140 H162" />
      </g>
      <g fill="currentColor">
        <circle cx="96" cy="78" r="2.5" />
        <circle cx="150" cy="162" r="2.5" />
        <circle cx="78" cy="120" r="2.5" />
        <circle cx="162" cy="140" r="2.5" />
        <rect x="104" y="104" width="32" height="32" rx="3" opacity="0.18" />
      </g>
    </svg>
  );
}
