import localFont from "next/font/local";

export const oswald = localFont({
  variable: "--font-oswald",
  display: "swap",
  src: [
    { path: "./fonts/oswald-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/oswald-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/oswald-700.woff2", weight: "700", style: "normal" },
  ],
});

export const inter = localFont({
  variable: "--font-inter",
  display: "swap",
  src: [
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-700.woff2", weight: "700", style: "normal" },
  ],
});
