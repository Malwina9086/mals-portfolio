// src/components/TechIcon.tsx
type Props = { name: string; className?: string };

export default function TechIcon({ name, className = "h-3.5 w-3.5" }: Props) {
  const k = normalize(name);
  switch (k) {
    case "react":
      return (
        <svg viewBox="0 0 256 256" className={`${className}`} aria-hidden>
          <g fill="currentColor" stroke="currentColor" strokeWidth="14">
            <circle cx="128" cy="128" r="16" />
            <path d="M128 88c51 0 92 18 92 40s-41 40-92 40-92-18-92-40 41-40 92-40z" fill="none"/>
            <path d="M102 101c25-44 56-73 70-65s4 49-21 93-56 73-70 65-4-49 21-93z" fill="none"/>
            <path d="M102 155c25 44 56 73 70 65s4-49-21-93-56-73-70-65-4 49 21 93z" fill="none"/>
          </g>
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 256 256" className={className} aria-hidden>
          <rect width="256" height="256" rx="24" fill="currentColor" />
          <text x="50%" y="58%" textAnchor="middle" fontFamily="Inter, Arial, Helvetica, sans-serif" fontWeight="900" fontSize="120" fill="#111">JS</text>
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 256 256" className={className} aria-hidden>
          <rect width="256" height="256" rx="24" fill="currentColor" />
          <text x="50%" y="58%" textAnchor="middle" fontFamily="Inter, Arial, Helvetica, sans-serif" fontWeight="900" fontSize="100" fill="#fff">TS</text>
        </svg>
      );
    case "html":
      return (
        <svg viewBox="0 0 128 128" className={className} aria-hidden>
          <path fill="currentColor" d="M19 3l9 101 36 10 36-10 9-101H19zm73 26l-1 10H37l-1-10h56zM40 52h48l-4 46-20 6-20-6-2-25h10l1 14 11 3 12-3 1-16H38l-2-19z"/>
        </svg>
      );
    case "css":
      return (
        <svg viewBox="0 0 128 128" className={className} aria-hidden>
          <path fill="currentColor" d="M19 3l9 101 36 10 36-10 9-101H19zm64 24l-1 10H45l1 11h35l-3 33-17 5-17-5-1-14h9l1 7 8 2 8-2 2-18H36l-3-29h50z"/>
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 256 154" className={className} aria-hidden>
          <path fill="currentColor" d="M128 0c-34 0-55 17-62 51c8-8 17-11 28-9c6 1 11 4 16 8c9 8 19 12 31 12c24 0 40-12 48-37c-13 13-26 18-39 15c-6-1-11-4-16-8C146 5 138 0 128 0zM66 77c-34 0-55 17-62 51c8-8 17-11 28-9c6 1 11 4 16 8c9 8 19 12 31 12c24 0 40-12 48-37c-13 13-26 18-39 15c-6-1-11-4-16-8c-6-5-14-8-26-8z"/>
        </svg>
      );
    case "node.js":
      return (
        <svg viewBox="0 0 256 272" className={className} aria-hidden>
          <path fill="currentColor" d="M128 0l110 64v144l-110 64L18 208V64z"/>
          <text x="50%" y="60%" textAnchor="middle" fontFamily="Inter, Arial, Helvetica, sans-serif" fontWeight="900" fontSize="68" fill="#fff">Node</text>
        </svg>
      );
    case "express":
      return (
        <svg viewBox="0 0 256 120" className={className} aria-hidden>
          <text x="50%" y="62%" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="96" fill="currentColor">Ex</text>
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 128 256" className={className} aria-hidden>
          <path fill="currentColor" d="M64 0c6 40 35 53 35 96c0 50-20 78-35 96c-15-18-35-46-35-96C29 53 58 40 64 0z"/>
        </svg>
      );
    case "vite":
      return (
        <svg viewBox="0 0 256 256" className={className} aria-hidden>
          <path fill="currentColor" d="M128 12l116 44-92 170-24-50-24 50L12 56z"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="10" fill="currentColor" />
        </svg>
      );
  }
}

function normalize(s: string) {
  return s.trim().toLowerCase();
}
