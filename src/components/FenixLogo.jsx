// Logo SVG Fénix estilizado (ave fénix geométrica)
export default function FenixLogo({ className = 'w-10 h-10' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fenix Corp Logo"
    >
      {/* Fondo circular */}
      <circle cx="24" cy="24" r="23" fill="url(#bgGrad)" />

      {/* Cuerpo del fénix estilizado */}
      {/* Alas izquierda */}
      <path
        d="M10 30 L18 18 L22 26 L14 34 Z"
        fill="url(#wingGrad)"
        opacity="0.9"
      />
      {/* Alas derecha */}
      <path
        d="M38 30 L30 18 L26 26 L34 34 Z"
        fill="url(#wingGrad)"
        opacity="0.9"
      />
      {/* Cuerpo central */}
      <path
        d="M24 10 L28 20 L24 38 L20 20 Z"
        fill="url(#bodyGrad)"
      />
      {/* Cola */}
      <path
        d="M24 34 L20 42 L24 38 L28 42 Z"
        fill="url(#accentGrad)"
        opacity="0.8"
      />
      {/* Cabeza */}
      <circle cx="24" cy="13" r="3.5" fill="url(#headGrad)" />
      {/* Pico */}
      <path d="M24 11 L27 9 L24 13 Z" fill="#FCD34D" />

      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0B1120" />
        </linearGradient>
        <linearGradient id="wingGrad" x1="10" y1="18" x2="38" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="bodyGrad" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="headGrad" x1="20" y1="10" x2="28" y2="17" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="24" y1="34" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  )
}
