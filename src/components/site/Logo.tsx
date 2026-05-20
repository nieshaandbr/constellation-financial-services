import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--gold)]/30 bg-gradient-to-b from-[color:var(--gold)]/15 to-transparent">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-[color:var(--gold)]" fill="none">
          <path d="M12 2 L13.6 8.4 L20 10 L13.6 11.6 L12 18 L10.4 11.6 L4 10 L10.4 8.4 Z" fill="currentColor" />
          <circle cx="19" cy="19" r="1.2" fill="currentColor" />
          <circle cx="5" cy="19" r="0.8" fill="currentColor" />
          <circle cx="20" cy="5" r="0.6" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base tracking-tight text-foreground">Constellation</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Financial Services</span>
      </span>
    </Link>
  );
}
