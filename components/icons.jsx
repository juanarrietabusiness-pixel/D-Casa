// Iconografía: línea gruesa uniforme, monocolor, esquinas redondeadas (ADN §3.5).
export function WhatsAppIcon({ className = "icon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.9 9.9 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.83 9.83 0 0 0 12.04 2Zm5.8 14.02c-.24.68-1.42 1.32-1.95 1.36-.5.05-.98.23-3.3-.69-2.78-1.1-4.55-3.95-4.69-4.13-.14-.18-1.12-1.49-1.12-2.85 0-1.35.71-2.02.96-2.3.25-.27.55-.34.73-.34l.53.01c.17.01.4-.06.62.48.24.57.8 1.98.87 2.12.07.14.12.31.02.49-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.28-.12.55.16.27.72 1.18 1.55 1.92 1.06.95 1.95 1.24 2.22 1.38.27.14.43.12.59-.07.16-.18.68-.79.86-1.06.18-.27.36-.22.61-.13.25.09 1.58.75 1.85.88.27.14.45.2.52.32.07.11.07.65-.17 1.32Z" />
    </svg>
  );
}
export function MenuIcon() {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="#1648C0" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
}
export function InstagramIcon() {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>);
}
const paths = {
  list: "M4 7h16M4 12h10M4 17h16",
  truck: "M3 13l2-6h11l3 4h2v4M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M3 13h14",
  chat: "M4 5h16v11H8l-4 4V5Z",
  home: "M3 20V9l9-6 9 6v11M9 20v-6h6v6",
  table: "M4 10h16M6 10V6h12v4M7 10v8M17 10v8",
  bed: "M3 12h18M5 12V8h14v4M4 12v6M20 12v6M7 8V6h10v2",
  sun: "M4 20V4M4 8h9l-2 3 2 3H4",
  window: "M3 4h18v14H3zM3 10h18",
  swap: "M12 3v18M3 12h18",
};
export function LineIcon({ name, className }) {
  const d = paths[name] || paths.home;
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>);
}
